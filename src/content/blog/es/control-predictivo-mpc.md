---
title: "Control Predictivo basado en Modelo (MPC): la idea, el lazo y el horizonte recedente"
description: "Qué es el MPC, cómo usa un modelo para predecir, cómo resuelve una optimización con restricciones en cada instante y por qué solo aplica el primer movimiento de control."
pubDate: 2026-11-08
lang: es
---

<div class="callout"><strong>Idea central:</strong> en cada instante de muestreo, MPC usa un modelo del proceso para <em>predecir</em> el futuro, resuelve un problema de optimización que respeta restricciones y aplica <strong>solo</strong> la primera acción de control. Luego mide, actualiza y repite. A eso se le llama <strong>horizonte recedente</strong>.</div>

El **Control Predictivo basado en Modelo** (*Model Predictive Control*, MPC) es una familia de estrategias de control que calcula la acción de control resolviendo, en tiempo real, un problema de optimización sujeto a restricciones. A diferencia de un PID, que reacciona principalmente al error presente (y a su historia/derivada), MPC “mira hacia adelante”: usa un **modelo dinámico** para anticipar cómo responderá la planta y elige la secuencia de entradas que produce el mejor comportamiento futuro.

## 1. El lazo MPC

Un lazo MPC típico combina cuatro ingredientes: una **referencia** (setpoint o trayectoria), un **controlador** que optimiza, una **planta/proceso** real y una **realimentación** de la salida (o del estado estimado). Además, de forma explícita, considera **restricciones** (límites físicos, operacionales o de seguridad) y puede incorporar **perturbaciones** medibles o estimadas.

<figure>
  <img src="/blog/mpc/lazo-mpc.svg" alt="Diagrama del lazo de Control Predictivo basado en Modelo: referencia al controlador MPC (optimizador, modelo predictivo y restricciones), acción de control a la planta, salida medida realimentada y perturbación." />
  <figcaption><strong>Fig. 1</strong> — Lazo MPC: el controlador optimiza <code>u(k)</code> usando el modelo, la referencia y las mediciones, respetando restricciones sobre entradas, salidas y cambios.</figcaption>
</figure>

En la figura, el bloque MPC no es “una ganancia”, sino un **cálculo repetido**: en cada periodo de muestreo toma el estado actual (medido o estimado), proyecta trayectorias futuras con el modelo y busca la mejor secuencia de control.

## 2. Qué optimiza (intuición)

La forma más común es minimizar una **función de costo** sobre un horizonte futuro. En términos intuitivos, el controlador busca un compromiso entre:

- **Seguir la referencia**: reducir el error futuro entre la salida predicha $\hat{y}$ y la referencia $r$.
- **Esforzar poco el actuador**: penalizar movimientos grandes de control $u$ o cambios $\Delta u$.
- **Respetar restricciones**: no violar límites como $u_{\min} \le u \le u_{\max}$, $| \Delta u | \le \Delta u_{\max}$ o $y_{\min} \le y \le y_{\max}$.

Un esquema conceptual (muy simplificado) es:

```text
min_{Δu}  Σ || ŷ(k+i|k) - r(k+i) ||_Q^2  +  Σ || Δu(k+j|k) ||_R^2
s.a.     modelo del proceso
         restricciones en u, Δu, y
```

Lo importante no es memorizar la ecuación, sino la lógica: **predigo → evalúo un objetivo → elijo la mejor secuencia factible**.

## 3. Horizonte recedente: el truco que lo hace robusto en la práctica

MPC define dos horizontes (según la formulación): un **horizonte de predicción** $N_p$ (qué tan lejos miro) y un **horizonte de control** $N_c$ (cuántos movimientos libres optimizo). Pero aunque calcule una secuencia completa $u(k), u(k+1), \dots$, **no la aplica toda**: ejecuta solo $u(k)$, espera la siguiente medición y vuelve a optimizar.

<figure>
  <img src="/blog/mpc/horizonte-recedente.svg" alt="Horizonte recedente: en k se predice la salida sobre Np y se aplica solo u(k); en k+1 el horizonte se desplaza, se mide la salida real y se recalcula aplicando solo u(k+1)." />
  <figcaption><strong>Fig. 2</strong> — Horizonte recedente: optimiza una trayectoria futura, aplica <strong>un</strong> movimiento, desplaza la ventana y recalcula con la nueva medición.</figcaption>
</figure>

Ese “recalcular con datos nuevos” es clave: permite corregir **error de modelo**, perturbaciones no medidas y cambios en las condiciones. El modelo nunca es perfecto; el horizonte recedente convierte a MPC en un esquema de realimentación repetida, no en un plan abierto.

## 4. Por qué importan las restricciones

En procesos reales los límites no son opcionales: válvulas saturan, temperaturas tienen máximos, corrientes tienen topes, tasas de cambio dañan actuadores. Un controlador lineal clásico puede pedir acciones inviables; MPC, en cambio, incorpora las restricciones **dentro** del problema de optimización. Eso lo hace especialmente útil en operación multivariable cerca de límites (donde a menudo está el punto económico óptimo).

## 5. MPC en la industria: MIMO, DMC y puesta en marcha

MPC brilla cuando hay **múltiples entradas y múltiples salidas (MIMO)** con acoplamientos, retardos y restricciones. En la industria de procesos es común encontrar formulaciones como DMC (*Dynamic Matrix Control*) y plataformas comerciales (por ejemplo, Aspen DMC3) que integran identificación/historización, control y herramientas de mantenimiento del modelo. La puesta en marcha no es solo “sintonizar ganancias”: implica calidad de datos, manejo de sensores, estrategia ante saturaciones, y —cuando aplica— adaptación o recalibración del modelo.

## 6. Límites y cuidados

- **Depende del modelo**: si el modelo es pobre, la predicción es pobre (aunque la realimentación ayude).
- **Costo computacional**: hay que resolver la optimización dentro del periodo de muestreo.
- **Sintonía**: pesos ($Q, R$), horizontes ($N_p, N_c$) y manejo de restricciones cambian el comportamiento.
- **Estados no medidos**: a menudo se requiere un estimador/observador o reconciliación.

## Cierre

MPC es, en esencia, **control óptimo con restricciones ejecutado en lazo cerrado** mediante el horizonte recedente. Su potencia viene de unir tres cosas que en planta aparecen juntas: dinámica (modelo), objetivos (costo) y realidad operativa (límites). Por eso es una herramienta natural en automatización avanzada y control de procesos multivariable.