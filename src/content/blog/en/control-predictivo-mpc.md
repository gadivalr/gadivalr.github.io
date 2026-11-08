---
title: "Model Predictive Control (MPC): the idea, the loop, and the receding horizon"
description: "What MPC is, how it uses a model to predict, how it solves a constrained optimization at every sample, and why it applies only the first control move."
pubDate: 2026-11-08
lang: en
---

<div class="callout"><strong>Core idea:</strong> at every sampling instant, MPC uses a process model to <em>predict</em> the future, solves an optimization problem that respects constraints, and applies <strong>only</strong> the first control action. Then it measures, updates, and repeats. That is the <strong>receding horizon</strong>.</div>

**Model Predictive Control (MPC)** is a family of control strategies that computes the control action by solving, in real time, a constrained optimization problem. Unlike a PID controller, which mainly reacts to the present error (and its history/derivative), MPC “looks ahead”: it uses a **dynamic model** to anticipate how the plant will respond and chooses the input sequence that yields the best future behavior.

## 1. The MPC loop

A typical MPC loop combines four ingredients: a **reference** (setpoint or trajectory), a **controller** that optimizes, a real **plant/process**, and **feedback** of the measured output (or an estimated state). Explicitly, it also accounts for **constraints** (physical, operational, or safety limits) and can incorporate measured or estimated **disturbances**.

<figure>
  <img src="/blog/mpc/lazo-mpc.svg" alt="Model Predictive Control loop diagram: reference into the MPC controller (optimizer, predictive model and constraints), control action to the plant, measured output fed back, and a disturbance acting on the plant." />
  <figcaption><strong>Fig. 1</strong> — MPC loop: the controller optimizes <code>u(k)</code> using the model, the reference and measurements, while respecting constraints on inputs, outputs and moves.</figcaption>
</figure>

In the figure, the MPC block is not “a gain” but a **repeated computation**: at each sampling period it takes the current state (measured or estimated), projects future trajectories with the model, and searches for the best feasible control sequence.

## 2. What it optimizes (intuition)

A common formulation minimizes a **cost function** over a future horizon. Intuitively, the controller trades off:

- **Tracking the reference**: reducing future error between the predicted output $\hat{y}$ and the reference $r$.
- **Limiting control effort**: penalizing large control moves $u$ or changes $\Delta u$.
- **Respecting constraints**: never violating limits such as $u_{\min} \le u \le u_{\max}$, $| \Delta u | \le \Delta u_{\max}$, or $y_{\min} \le y \le y_{\max}$.

A conceptual (highly simplified) form is:

$$
\min_{\Delta u}\; \sum_{i=1}^{N_p} \left\lVert \hat{y}(k+i\mid k) - r(k+i) \right\rVert_Q^2 \;+\; \sum_{j=0}^{N_c-1} \left\lVert \Delta u(k+j\mid k) \right\rVert_R^2
$$

$$
\text{subject to:}\quad \text{process model},\qquad u,\Delta u,y \in \text{constraints}
$$

The key is not the equation itself, but the logic: **predict → evaluate an objective → choose the best feasible sequence**.

## 3. Receding horizon: the practical robustness trick

MPC uses (depending on the formulation) a **prediction horizon** $N_p$ (how far ahead it looks) and a **control horizon** $N_c$ (how many free moves it optimizes). Yet even if it computes a full sequence $u(k), u(k+1), \dots$, it **does not apply all of it**: it implements only $u(k)$, waits for the next measurement, and optimizes again.

<figure>
  <img src="/blog/mpc/horizonte-recedente.svg" alt="Receding horizon: at k the output is predicted over Np and only u(k) is applied; at k+1 the horizon shifts, the real output is measured and optimization is repeated applying only u(k+1)." />
  <figcaption><strong>Fig. 2</strong> — Receding horizon: optimize a future trajectory, apply <strong>one</strong> move, shift the window, and recompute with the new measurement.</figcaption>
</figure>

That “recompute with fresh data” step is crucial: it corrects **model mismatch**, unmeasured disturbances, and changing conditions. The model is never perfect; the receding horizon turns MPC into repeated closed-loop feedback, not an open-loop plan.

## 4. Why constraints matter

In real processes, limits are non-negotiable: valves saturate, temperatures have maxima, currents have caps, and fast moves can damage actuators. A classical linear controller may request infeasible actions; MPC, instead, embeds constraints **inside** the optimization. This makes it especially valuable for multivariable operation near limits (often where the economic optimum lies).

## 5. MPC in industry: MIMO, DMC and commissioning

MPC excels with **multiple-input multiple-output (MIMO)** systems that have coupling, delays and constraints. In process industries you often find formulations such as DMC (*Dynamic Matrix Control*) and commercial platforms (e.g., Aspen DMC3) that integrate identification/historization, control, and model-maintenance tools. Commissioning is not just “tuning gains”: it involves data quality, sensor handling, saturation strategies, and — when applicable — model adaptation or recalibration.

## 6. Limits and caveats

- **Model dependence**: a poor model yields poor predictions (even if feedback helps).
- **Computational cost**: the optimization must finish within the sampling period.
- **Tuning**: weights ($Q, R$), horizons ($N_p, N_c$) and constraint handling shape behavior.
- **Unmeasured states**: an estimator/observer or reconciliation is often required.

## Closing

MPC is, in essence, **constrained optimal control executed in closed loop** through the receding horizon. Its strength comes from combining three things that coexist in real plants: dynamics (the model), objectives (the cost), and operational reality (limits). That makes it a natural tool for advanced automation and multivariable process control.