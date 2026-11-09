/**
 * Diccionario ES — idioma base. La estructura debe ser idéntica en en.ts.
 * Los placeholders [COMPLETAR: ...] / [PENDIENTE: ...] se mantienen a propósito:
 * son datos reales pendientes de rellenar por el autor.
 */
export const es = {
  locale: 'es',
  dir: 'ltr',

  meta: {
    title: 'Leví Gadiel Sojos González — Portafolio',
    description:
      'Estudiante de Ingeniería Civil Electrónica en la Universidad de Concepción (DIE UdeC). Automatización, control predictivo, robótica industrial y electrónica de potencia.',
    langShort: 'ES',
  },

  langSwitcher: {
    label: 'Idioma',
  },


  links: {
    email: 'levsojos2021@udec.cl',
    emailHref: 'mailto:levsojos2021@udec.cl',
    githubUrl: 'https://github.com/gadivalr',
    githubText: 'github.com/gadivalr',
    linkedinUrl: 'https://www.linkedin.com/in/levsojos',
    linkedinText: 'linkedin.com/in/levsojos',
  },

  nav: {
    sectionsLabel: 'Secciones',
    projects: '01. Proyectos',
    trayectoria: '02. Trayectoria',
    habilidades: '03. Habilidades',
    contacto: 'Contacto',
    menu: 'Menú',
    menuOpen: 'Abrir menú',
    menuClose: 'Cerrar menú',
  },

  hero: {
    name: 'Leví Gadiel Sojos González',
    intro:
      'Último año de Ingeniería Civil Electrónica en la Universidad de Concepción (DIE UdeC). Licenciado en Ciencias de la Ingeniería. Minor en Automatización de Procesos, Control Avanzado y Robótica Industrial.',
    seeking:
      'Práctica profesional de verano 2026-27. Título de Ingeniero Civil Electrónica previsto para marzo de 2027 tras memoria de título. Busco práctica o puesto junior en control y automatización de procesos.',
    emailLabel: 'Email:',
    githubLabel: 'GitHub:',
    linkedinLabel: 'LinkedIn:',
    langLabel: 'Idioma:',
    langValue: 'Inglés nivel B1',
  },

  projects: {
    heading: '01. Proyectos',

    p1: {
      number: '01',
      kicker: 'Proyecto Electrónico · 2026-2',
      title: 'Habilitación y puesta en marcha del módulo Calibrate de AspenTech DMC3',
      params: [
        { label: 'Tipo', value: 'Control Predictivo Multivariable (MPC)' },
        { label: 'Protocolo', value: 'OPC UA Client/Server' },
        { label: 'Muestreo', value: 'Δt = 1s / Closed-loop identification' },
        { label: 'Herramientas', value: 'AspenTech DMC3 (Calibrate), MATLAB/Simulink, OPC UA' },
      ],
      marginaliaLabel: 'Nota marginal:',
      marginalia:
        'Identificación en lazo cerrado con historización continua de datos y cambios intencionales de ganancia para verificar la detección y corrección del modelo por Calibrate.',
      problemLabel: 'Problema',
      problem:
        'Un controlador predictivo pierde desempeño cuando la planta cambia respecto del modelo con que fue identificado. Calibrate propone re-identificar ese modelo mientras el controlador opera, pero para eso necesita estar conectado a la planta y tener los datos historizados. La pregunta era si podía recuperar un modelo correcto tras un cambio en la planta.',
      approachLabel: 'Qué hice',
      approachItems: [
        'Armé una planta de mezcla (blending) simulada en Simulink y la conecté a DMC3 por OPC UA.',
        'Dejé funcionando la historización de datos en tiempo real.',
        'Introduje un cambio intencional en una ganancia de la planta y probé si Calibrate lo detectaba y lo corregía.',
      ],
      toolsLabel: 'Herramientas utilizadas',
      tools:
        'AspenTech DMC3 (Módulo Calibrate), MATLAB/Simulink, Servidor y Cliente OPC UA.',
      resultLabel: 'Resultado:',
      result:
        'Calibrate re-identificó la ganancia en 0.7221 frente a un valor real de 0.72 (error de 0.29 %).',
      resultPending: '',
      linksLabel: 'Enlaces y código:',
      links: '',
      linksFill: false,
      figureCaption:
        'Gráfico de re-identificación de ganancia con Calibrate (DMC3) tras un cambio intencional en la planta: ganancia estimada 0,7221 frente a 0,72 real (error 0,29 %).',
      figureAlt:
        'Gráfico de re-identificación de ganancia del módulo Calibrate (DMC3) tras un cambio intencional en la planta.',
      figure2Caption: 'Planta de mezcla (blending) simulada en Simulink, conectada a DMC3 por OPC UA.',
      figure2Alt: 'Modelo de la planta de mezcla (blending) simulada en Simulink.',
    },

    p2: {
      number: '02',
      kicker: 'Modalidad: Trabajo en equipo · Control Industrial',
      title: 'Control de planta piloto de 4 estanques acoplados',
      params: [
        { label: 'Controlador', value: 'PLC Allen-Bradley ControlLogix' },
        { label: 'Entorno', value: 'Studio 5000 / Texto Estructurado' },
        { label: 'Redes', value: 'EtherNet/IP & OPC UA' },
        { label: 'Supervisión', value: 'FactoryTalk View (Norma ISA-101)' },
        { label: 'Estrategia', value: 'PID + Feedforward / Fuzzy Sugeno' },
      ],
      marginaliaLabel: 'Nota marginal:',
      marginalia:
        'Sistema no lineal multivariable con acoplamiento cruzado de flujos.',
      problemLabel: 'Problema',
      problem:
        'En una planta de cuatro estanques acoplados, cada bomba afecta a más de un nivel, así que controlar cada nivel por separado es difícil y una perturbación en un estanque se propaga a los demás. Probar controladores directamente en la planta real es lento y arriesgado.',
      approachLabel: 'Qué hice',
      approachItems: [
        'Entrené un modelo ANFIS de la planta para diseñar y probar el control primero en simulación, antes de pasar a la planta real.',
        'Trabajé en el controlador difuso (Sugeno) con compensadores feedforward en estructura MISO, programado en el PLC Allen-Bradley.',
        'Colaboré en el HMI bajo ISA-101; el desarrollo principal estuvo a cargo de un compañero.',
      ],
      toolsLabel: 'Herramientas utilizadas',
      tools:
        'PLC Allen-Bradley ControlLogix, Studio 5000, FactoryTalk View (ISA-101), EtherNet/IP, OPC UA, MATLAB/Simulink, ANFIS, Texto Estructurado.',
      resultLabel: 'Resultado:',
      result:
        'Los niveles se mantuvieron estables frente a una perturbación por la caída del estanque superior.',
      resultPending: '',
      linksLabel: 'Demo / enlace:',
      links: 'Video (YouTube)',
      linksHref: 'https://youtu.be/sVEbcEPLVCs?si=I0PMPbE0yA2IW1yS',
      linksFill: false,
      figureCaption:
        'HMI de la planta de 4 estanques con el controlador difuso en operación; perturbación por caída del estanque superior.',
      figureAlt: 'HMI de la planta de 4 estanques con controlador difuso en operación durante una perturbación por caída del estanque superior.',
      figure2Caption: 'HMI de 4 estanques en operación.',
      figure2Alt: 'Video del HMI de la planta de 4 estanques acoplados en operación.',
    },

    others: {
      heading: 'Otros proyectos',
      toolsLabel: 'Herramientas',
      statusLabel: 'Estado',
      items: [
        {
          number: '03',
          kicker: 'Memoria de Título · En curso',
          title:
            'Estudio y evaluación del grado de autosintonía y del desempeño del controlador en Calibrate de Aspen DMC3',
          body:
            'Estudio y evaluación sistemática del grado de autosintonía y del desempeño dinámico del controlador frente a variaciones paramétricas y degradación.',
          bodyPlaceholder: '',
          tools: 'AspenTech DMC3, MATLAB/Simulink.',
          toolsPlaceholder: null as string | null,
          status: 'En curso',
          statusFill: false,
          more: '',
          moreHref: '',
        },
        {
          number: '06',
          kicker: 'Robótica Industrial · Cinemática',
          title: 'Brazo robótico de 6 GDL',
          body:
            'Modelado cinemático directo/inverso y estrategias de control para articulaciones de manipulador robótico.',
          bodyPlaceholder: '',
          tools: 'MATLAB/Simulink.',
          toolsPlaceholder: null as string | null,
          status: 'En desarrollo',
          statusFill: false,
          more: '',
          moreHref: '',
        },
      ],
    },
  },

  flyback: {
    number: '04',
    back: '← 01. Proyectos',
    backHref: '/#proyectos',
    kicker: 'Electrónica de Potencia · Trabajo en equipo · Completado dic 2025',
    title: 'Convertidor flyback aislado de 10 W con telemetría e HMI',
    params: [
      { label: 'Tipo', value: 'Flyback aislado · 10 W' },
      { label: 'Simulación', value: 'LTspice @ 60 kHz · Snubber RCD' },
      { label: 'MCU', value: 'PIC18F4550 · PWM en C' },
      { label: 'Telemetría', value: 'ESP32 + Wi-Fi · TCP/IP' },
      { label: 'HMI', value: 'Python / PySide6 · asíncrona' },
      { label: 'PCB', value: 'KiCad · SMD · planos de masa separados' },
      { label: 'Transformador', value: 'Ferrita bobinado a mano' },
    ],
    marginaliaLabel: 'Nota marginal:',
    marginalia:
      'Flujo: simulación → prototipo → pruebas → rediseño en KiCad con SMD y planos de masa separados (no se fabricó).',
    problemLabel: 'Problema',
    problem:
      'Diseñar una fuente conmutada aislada con monitoreo remoto, combinando electrónica de potencia, firmware y supervisión.',
    teamLabel: 'Qué hizo el equipo',
    teamItems: [
      'Simulación en LTspice a 60 kHz con snubber RCD.',
      'Nodo ESP32 que mide voltaje y lo envía por Wi-Fi (sockets TCP/IP).',
    ],
    myLabel: 'Mi parte',
    myItems: [
      'Calculé y bobiné el transformador de ferrita.',
      'Programé en C el PIC18F4550 que genera el PWM.',
      'Desarrollé en Python (PySide6) la HMI asíncrona.',
      'En la PCB hice la selección de componentes y los footprints.',
    ],
    toolsLabel: 'Herramientas utilizadas',
    tools: 'LTspice, PIC18F4550 (C), Python / PySide6, ESP32, KiCad, transformador de ferrita bobinado a mano.',
    resultLabel: 'Resultado:',
    result:
      'El prototipo midió 60 % de eficiencia. En laboratorio se identificaron pérdidas por inductancias parásitas y operación en DCM no prevista. Se diseñó un rediseño en KiCad con SMD y planos de masa separados (no se fabricó).',
    resultPending: '',
    linksLabel: 'Enlaces y código:',
    links: 'Informe (PDF)',
    linksHref: '/Proyecto_flyback.pdf',
    linksFill: false,
    figures: [
      { num: 'Fig. 3.1', caption: 'Prototipo — convertidor flyback armado y en pruebas.', src: '/images/prototipo.jpg', alt: 'Prototipo del convertidor flyback' },
      { num: 'Fig. 3.2', caption: 'Prototipo — transformador de ferrita bobinado a mano.', src: '/images/trafo.jpg', alt: 'Transformador de ferrita bobinado a mano (prototipo)' },
      { num: 'Fig. 3.3', caption: 'Prototipo — HMI en Python (PySide6) con telemetría del ensayo.', src: '/images/resultadosexp_interfaz.png', alt: 'HMI en Python PySide6 con datos de telemetría (prototipo)' },
      { num: 'Fig. 3.4', caption: 'Rediseño — PCB en KiCad (SMD, planos de masa separados, no fabricada).', src: '/images/PCB_DiseñoFINAL.png', alt: 'Rediseño de la PCB en KiCad (no fabricada)' },
    ],
  },

  batch: {
    number: '05',
    back: '← 01. Proyectos',
    backHref: '/#proyectos',
    kicker: 'Trabajo en equipo · 2025-1',
    title: 'Control batch de planta térmica con lazos de nivel, flujo y temperatura en PLC',
    params: [
      { label: 'Tipo', value: 'Control batch (secuencial) · Planta térmica' },
      { label: 'PLC', value: 'Allen-Bradley' },
      { label: 'Lenguajes', value: 'Ladder, SFC (Sequential Function Chart) y Texto Estructurado' },
      { label: 'Lazos', value: 'Nivel, flujo y temperatura (PID)' },
      { label: 'Estrategia', value: 'Secuencia batch + Gain Scheduler (flujo no lineal)' },
      { label: 'Equipo', value: 'Estanque con chaqueta e intercambiador de calor' },
    ],
    marginaliaLabel: 'Nota marginal:',
    marginalia:
      'Control batch por etapas implementado en PLC (Ladder/SFC), coordinando nivel, flujo y temperatura.',
    problemLabel: 'Problema',
    problem:
      'Implementar en PLC una estrategia de control batch para una planta con estanque, chaqueta e intercambiador de calor, coordinando las variables de nivel, flujo y temperatura según una secuencia de etapas y transiciones.',
    teamLabel: 'Qué hizo el equipo',
    teamItems: [
      'Modelado y configuración del setup (estanque con chaqueta e intercambiador de calor) y de los lazos de nivel, flujo y temperatura.',
      'Programación de los lazos PID y puesta en marcha de la secuencia batch en el PLC.',
    ],
    myLabel: 'Mi parte',
    myItems: [
      'Implementé el diagrama SFC de la secuencia batch en un PLC Allen-Bradley.',
      'Programé el PID del lazo de flujo en Texto Estructurado.',
      'Sintonizé y apliqué el gain scheduler al lazo de flujo para manejar su comportamiento no lineal.',
    ],
    toolsLabel: 'Herramientas utilizadas',
    tools: 'PLC Allen-Bradley, Ladder, SFC (Sequential Function Chart), Texto Estructurado, control PID, Gain Scheduler.',
    resultLabel: 'Resultado:',
    result:
      'Con el gain scheduler, el lazo de flujo siguió mejor la referencia que con parámetros fijos, principalmente en los cambios de escalón de 90 % a 60 %.',
    resultPending: '',
    linksLabel: 'Enlaces y código:',
    links: '',
    linksFill: false,
    figures: [
      { num: 'Fig. 5.1', caption: 'Receta batch: perfil programado de nivel, flujo y temperatura (no son datos medidos).', src: '/images/batch/batch-pagina.png', alt: 'Receta batch: perfil programado de nivel, flujo y temperatura' },
      { num: 'Fig. 5.2', caption: 'Prueba de flujo con parámetros PID fijos. Rojo: setpoint, azul: variable de proceso, verde: señal de control.', src: '/images/lab2y3/fig43_flujo_pid_fijos.png', alt: 'Prueba de flujo con parámetros PID fijos (setpoint en rojo, variable de proceso en azul, señal de control en verde)' },
      { num: 'Fig. 5.3', caption: 'Prueba de flujo con gain scheduler, mismo perfil de setpoint. Rojo: setpoint, verde: variable de proceso, azul: señal de control.', src: '/images/lab2y3/fig44_gain_scheduler.png', alt: 'Prueba de flujo con gain scheduler (setpoint en rojo, variable de proceso en verde, señal de control en azul)' },
      { num: 'Fig. 5.4', caption: 'Secuencia batch en ejecución en el PLC (tendencia en RSLogix 5000).', src: '/images/batch/batch.mp4', alt: 'Secuencia batch en ejecución en el PLC (tendencia en RSLogix 5000)', type: 'video' },
    ],
  },

  trajectory: {
    heading: '02. Trayectoria',
    entries: [
      {
        date: 'ene – mar 2026',
        title: 'Práctica profesional — CGE, San Bernardo',
        body: 'Dashboards en Power BI, gestión de cartera de proyectos, cumplimiento de normativa eléctrica.',
      },
      {
        date: 'dic 2024 – feb 2025',
        title: 'Asistente técnico — Equipos médicos, Concepción',
        body: 'Instalación, calibración de instrumentos y sensores, mantenimiento preventivo.',
      },
    ],
    cvCta: 'Descargar CV completo (PDF)',
    cvHref: '/LeviSojos_CV.pdf',
  },

  skills: {
    heading: '03. Habilidades',
    groups: [
      {
        label: 'Automatización & PLC:',
        value:
          'Allen-Bradley ControlLogix, Studio 5000/RSLogix, Ladder y Texto Estructurado (IEC 61131-3), SCADA / FactoryTalk View (ISA-101), EtherNet/IP & OPC UA.',
      },
      {
        label: 'Control & Modelado:',
        value:
          'AspenTech DMC3 (Calibrate), MATLAB / Simulink, Control Predictivo & Difuso (Sugeno), ANFIS, Python.',
      },
      {
        label: 'Hardware, Instrumentación & Docs:',
        value: 'KiCad, LTspice, Diseño de PCB, PIC (C), ESP32, Python / PySide6, Instrumental de laboratorio, Power BI, LaTeX.',
      },
    ],
  },

  contact: {
    heading: 'Contacto',
    intro:
      'Para consultas académicas, colaboración técnica, tesis o postulaciones de ingeniería:',
    emailLabel: 'Correo Electrónico Principal',
    githubLabel: 'GitHub:',
    linkedinLabel: 'LinkedIn:',
    locationLabel: 'Ubicación:',
    locationValue: 'Concepción, Chile',
    institutionLabel: 'Institución:',
    institutionValue: 'DIE UdeC',
  },

  footer: {
    copyright: '© 2026 Leví Gadiel Sojos González',
  },
};

export type Dict = typeof es;
