/**
 * Diccionario ES — idioma base. La estructura debe ser idéntica en en.ts.
 * Los placeholders [COMPLETAR: ...] se mantienen a propósito:
 * son datos reales pendientes de rellenar por el autor.
 */
export const es = {
  locale: 'es',
  dir: 'ltr',

  meta: {
    title: 'Leví Gadiel Sojos González — Dossier Técnico & Portafolio',
    description:
      'Estudiante de Ingeniería Civil Electrónica en la Universidad de Concepción (DIE UdeC). Automatización, control predictivo, robótica industrial y electrónica de potencia.',
    langShort: 'ES',
  },

  langSwitcher: {
    label: 'Idioma',
  },

  nav: {
    dossier: '[DOSSIER]',
    brandShort: 'LGSG',
    sectionsLabel: 'Secciones',
    projects: '01. Proyectos',
    trayectoria: '02. Trayectoria',
    habilidades: '03. Habilidades',
    contacto: 'Contacto',
  },

  hero: {
    name: 'Leví Gadiel Sojos González',
    intro:
      'Estudiante de Ingeniería Civil Electrónica en la Universidad de Concepción (DIE UdeC). Licenciado en Ciencias de la Ingeniería con egreso estimado en diciembre de 2026. Minor en Automatización de Procesos, Control Avanzado y Robótica Industrial.',
    emailLabel: 'Email:',
    emailPlaceholder: '[COMPLETAR: correo]',
    githubLabel: 'GitHub:',
    githubPlaceholder: '[COMPLETAR: GitHub]',
    linkedinLabel: 'LinkedIn:',
    linkedinPlaceholder: '[COMPLETAR: LinkedIn]',
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
        'Identificación en lazo cerrado sujeta a perturbaciones controladas para monitoreo de número de condición matricial κ(A).',
      problemLabel: 'Problema',
      problemPlaceholder:
        '[COMPLETAR: planteamiento del problema operacional, degradación o desfase del modelo en la planta]',
      approachLabel: 'Enfoque metodológico',
      approach:
        'Implementación de una planta de blending simulada en MATLAB/Simulink conectada mediante puente OPC UA hacia el módulo AspenTech DMC3. Ejecución de protocolos de identificación de modelos por subespacios (N4SID) y pruebas exhaustivas del módulo Calibrate sometido a escenarios de desacople y mismatch intencional de matriz de ganancia.',
      toolsLabel: 'Herramientas utilizadas',
      tools:
        'AspenTech DMC3 (Módulo Calibrate), MATLAB/Simulink, Servidor y Cliente OPC UA, Algoritmos de descomposición en valores singulares (SVD).',
      resultLabel: 'Resultado:',
      resultPlaceholder: '[COMPLETAR: qué lograste al final]',
      linksLabel: 'Enlaces y código:',
      linksPlaceholder: '[COMPLETAR: repositorio / memoria / informe]',
      figureCaption:
        'Arquitectura de enlace OPC UA y módulo Calibrate (DMC3) en planta de blending Simulink.',
      figureAlt:
        'Technical engineering schematic and block diagram for AspenTech DMC3 Calibrate module connected via OPC UA to MATLAB Simulink blending plant.',
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
        'Sistema no lineal multivariable con acoplamiento cruzado de flujos y válvulas proporcionalmente calibradas.',
      problemLabel: 'Problema',
      problemPlaceholder:
        '[COMPLETAR: descripción de la dinámica acoplada de nivel y perturbaciones no lineales]',
      approachLabel: 'Enfoque metodológico',
      approach:
        'Implementación inicial de control PID con desacoplamiento por acción feedforward programado en PLC Allen-Bradley ControlLogix. Diseño y despliegue de interfaz HMI bajo estándar ISA-101 en FactoryTalk View. Integración de bus industrial EtherNet/IP y puente OPC UA con MATLAB/Simulink para monitoreo en tiempo real, finalizando con el desarrollo e inyección de un controlador difuso (Sugeno) codificado en Texto Estructurado (IEC 61131-3).',
      toolsLabel: 'Herramientas utilizadas',
      tools:
        'PLC Allen-Bradley ControlLogix, Studio 5000, FactoryTalk View (ISA-101), EtherNet/IP, OPC UA, MATLAB/Simulink, Texto Estructurado.',
      resultLabel: 'Resultado:',
      resultPlaceholder: '[COMPLETAR: resultados]',
      linksLabel: 'Enlaces y código:',
      linksPlaceholder: '[COMPLETAR: enlaces]',
      figureCaption:
        'Diagrama P&ID y lazo de control multivariable con PLC ControlLogix y controlador difuso en texto estructurado.',
      figureAlt: 'Technical P&ID and control architecture diagram for a quadruple-tank process.',
    },

    others: {
      heading: 'Otros Proyectos Registrados en Cuaderno',
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
          bodyPlaceholder: '[COMPLETAR]',
          tools: 'AspenTech DMC3, MATLAB/Simulink, ',
          toolsPlaceholder: '[COMPLETAR]',
          status: 'En curso',
          statusFill: false,
        },
        {
          number: '04',
          kicker: 'Electrónica de Potencia · Hardware',
          title: 'Convertidor Flyback',
          body:
            'Simulación en LTspice, diseño de PCB, pruebas de carga y rendimiento de eficiencia.',
          bodyPlaceholder: '[COMPLETAR]',
          tools: 'LTspice, software de diseño PCB, instrumental de laboratorio.',
          toolsPlaceholder: null as string | null,
          status: '[COMPLETAR]',
          statusFill: true,
        },
        {
          number: '05',
          kicker: 'Robótica Industrial · Cinemática',
          title: 'Brazo robótico de 6 GDL',
          body:
            'Modelado cinemático directo/inverso y estrategias de control para articulaciones de manipulador robótico.',
          bodyPlaceholder: '[COMPLETAR]',
          tools: '',
          toolsPlaceholder: '[COMPLETAR]',
          status: 'En desarrollo',
          statusFill: false,
        },
      ],
    },
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
    cvCta: '[Descargar CV completo en PDF]',
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
          'AspenTech DMC3 (Calibrate), MATLAB / Simulink, Control Predictivo & Difuso (Sugeno), Identificación Subspace, Python.',
      },
      {
        label: 'Hardware, Instrumentación & Docs:',
        value: 'LTspice, Diseño de PCB, Instrumental de laboratorio, Power BI, LaTeX.',
      },
    ],
  },

  contact: {
    heading: 'Contacto',
    intro:
      'Para consultas académicas, colaboración técnica, tesis o postulaciones de ingeniería:',
    emailLabel: 'Correo Electrónico Principal',
    emailPlaceholder: '[COMPLETAR: correo]',
    githubLabel: 'GitHub:',
    githubPlaceholder: '[COMPLETAR: GitHub]',
    linkedinLabel: 'LinkedIn:',
    linkedinPlaceholder: '[COMPLETAR: LinkedIn]',
    locationLabel: 'Ubicación:',
    locationValue: 'Concepción, Chile',
    institutionLabel: 'Institución:',
    institutionValue: 'DIE UdeC',
  },

  footer: {
    line1: 'Leví Gadiel Sojos González — Departamento de Ingeniería Eléctrica (DIE UdeC)',
    line2: 'Ingeniería Civil Electrónica · Egreso: diciembre 2026',
  },
};

export type Dict = typeof es;
