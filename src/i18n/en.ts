import type { Dict } from './es';

/**
 * English dictionary — same structure as es.ts (typed via Dict).
 * [TO BE COMPLETED] placeholders intentionally mirror the Spanish ones.
 */
export const en: Dict = {
  locale: 'en',
  dir: 'ltr',

  meta: {
    title: 'Leví Gadiel Sojos González — Technical Dossier & Portfolio',
    description:
      'Electronic Civil Engineering student at Universidad de Concepción (DIE UdeC). Automation, predictive control, industrial robotics and power electronics.',
    langShort: 'EN',
  },

  langSwitcher: {
    label: 'Language',
    other: 'ES',
    otherHref: '/',
    otherFull: 'Español',
  },

  nav: {
    dossier: '[DOSSIER]',
    name: 'Leví Gadiel Sojos González',
    institution: 'DIE UdeC',
    projects: '[01. Projects]',
    trayectoria: '[02. Trajectory]',
    habilidades: '[03. Skills]',
    contacto: '[Contact]',
  },

  hero: {
    eyebrow: 'Universidad de Concepción · DIE UdeC // Engineering & Control Notebook',
    name: 'Leví Gadiel Sojos González',
    intro:
      'Electronic Civil Engineering student at Universidad de Concepción (DIE UdeC). Licenciado en Ciencias de la Ingeniería with expected graduation in December 2026. Minor in Process Automation, Advanced Control and Industrial Robotics.',
    emailLabel: 'Email:',
    emailPlaceholder: '[TO BE COMPLETED: email]',
    githubLabel: 'GitHub:',
    githubPlaceholder: '[TO BE COMPLETED: GitHub]',
    linkedinLabel: 'LinkedIn:',
    linkedinPlaceholder: '[TO BE COMPLETED: LinkedIn]',
    langLabel: 'Language:',
    langValue: 'English level B1',
  },

  projects: {
    heading: '01. Projects',
    sectionTag: '[Lab Notebook Pages & Technical Sheets]',

    p1: {
      number: '01',
      kicker: 'Electronics Project · 2026-2',
      title: 'Commissioning and start-up of the AspenTech DMC3 Calibrate module',
      sheetTag: '[Technical log sheet]',
      paramsTitle: '[Test Parameters]',
      params: [
        { label: 'Type', value: 'Multivariable Predictive Control (MPC)' },
        { label: 'Protocol', value: 'OPC UA Client/Server' },
        { label: 'Sampling', value: 'Δt = 1s / Closed-loop identification' },
        { label: 'Tools', value: 'AspenTech DMC3 (Calibrate), MATLAB/Simulink, OPC UA' },
      ],
      marginaliaLabel: 'Marginal note:',
      marginalia:
        'Closed-loop identification subject to controlled disturbances for matrix condition number κ(A) monitoring.',
      problemLabel: 'Problem',
      problemPlaceholder:
        '[TO BE COMPLETED: statement of the operational problem, model degradation or plant mismatch]',
      approachLabel: 'Methodological approach',
      approach:
        'Implementation of a simulated blending plant in MATLAB/Simulink connected via an OPC UA bridge to the AspenTech DMC3 module. Execution of subspace model identification protocols (N4SID) and exhaustive testing of the Calibrate module under decoupling scenarios and intentional gain matrix mismatch.',
      toolsLabel: 'Tools used',
      tools:
        'AspenTech DMC3 (Calibrate module), MATLAB/Simulink, OPC UA Server and Client, Singular Value Decomposition (SVD) algorithms.',
      resultLabel: 'Result:',
      resultPlaceholder: '[TO BE COMPLETED: what you achieved]',
      linksLabel: 'Links and code:',
      linksPlaceholder: '[TO BE COMPLETED: repository / thesis / report]',
      figureCaption:
        'OPC UA link architecture and Calibrate module (DMC3) in a Simulink blending plant.',
      figureAlt:
        'Technical engineering schematic and block diagram for AspenTech DMC3 Calibrate module connected via OPC UA to MATLAB Simulink blending plant.',
    },

    p2: {
      number: '02',
      kicker: 'Format: Team project · Industrial Control',
      title: 'Control of a pilot plant with 4 coupled tanks',
      sheetTag: '[Technical log sheet]',
      paramsTitle: '[Architecture & Hardware]',
      params: [
        { label: 'Controller', value: 'PLC Allen-Bradley ControlLogix' },
        { label: 'Environment', value: 'Studio 5000 / Structured Text' },
        { label: 'Networks', value: 'EtherNet/IP & OPC UA' },
        { label: 'Supervision', value: 'FactoryTalk View (ISA-101 Standard)' },
        { label: 'Strategy', value: 'PID + Feedforward / Fuzzy Sugeno' },
      ],
      marginaliaLabel: 'Marginal note:',
      marginalia:
        'Multivariable nonlinear system with cross-coupled flows and proportionally calibrated valves.',
      problemLabel: 'Problem',
      problemPlaceholder:
        '[TO BE COMPLETED: description of the coupled level dynamics and nonlinear disturbances]',
      approachLabel: 'Methodological approach',
      approach:
        'Initial implementation of PID control with feedforward decoupling programmed on an Allen-Bradley ControlLogix PLC. Design and deployment of an HMI interface under the ISA-101 standard in FactoryTalk View. Industrial EtherNet/IP bus integration and an OPC UA bridge with MATLAB/Simulink for real-time monitoring, concluding with the development and injection of a fuzzy (Sugeno) controller coded in Structured Text (IEC 61131-3).',
      toolsLabel: 'Tools used',
      tools:
        'Allen-Bradley ControlLogix PLC, Studio 5000, FactoryTalk View (ISA-101), EtherNet/IP, OPC UA, MATLAB/Simulink, Structured Text.',
      resultLabel: 'Result:',
      resultPlaceholder: '[TO BE COMPLETED: results]',
      linksLabel: 'Links and code:',
      linksPlaceholder: '[TO BE COMPLETED: links]',
      figureCaption:
        'P&ID diagram and multivariable control loop with ControlLogix PLC and a fuzzy controller in structured text.',
      figureAlt: 'Technical P&ID and control architecture diagram for a quadruple-tank process.',
    },

    others: {
      heading: 'Other Projects Logged in the Notebook',
      sectionTag: '[Project Index Table]',
      toolsLabel: 'Tools',
      statusLabel: 'Status',
      items: [
        {
          number: '03',
          kicker: 'Undergraduate Thesis · In progress',
          title:
            'Study and evaluation of the degree of self-tuning and controller performance in Aspen DMC3 Calibrate',
          body:
            'Systematic study and evaluation of the degree of self-tuning and the controller’s dynamic performance under parametric variations and degradation.',
          bodyPlaceholder: '[TO BE COMPLETED]',
          tools: 'AspenTech DMC3, MATLAB/Simulink, ',
          toolsPlaceholder: '[TO BE COMPLETED]',
          status: 'In progress',
          statusFill: false,
        },
        {
          number: '04',
          kicker: 'Power Electronics · Hardware',
          title: 'Flyback Converter',
          body:
            'LTspice simulation, PCB design, load testing and efficiency performance.',
          bodyPlaceholder: '[TO BE COMPLETED]',
          tools: 'LTspice, PCB design software, laboratory instrumentation.',
          toolsPlaceholder: null as string | null,
          status: '[TO BE COMPLETED]',
          statusFill: true,
        },
        {
          number: '05',
          kicker: 'Industrial Robotics · Kinematics',
          title: '6-DOF Robotic Arm',
          body:
            'Forward/inverse kinematic modelling and control strategies for robotic manipulator joints.',
          bodyPlaceholder: '[TO BE COMPLETED]',
          tools: '',
          toolsPlaceholder: '[TO BE COMPLETED]',
          status: 'In development',
          statusFill: false,
        },
      ],
    },
  },

  trajectory: {
    heading: '02. Trajectory',
    sectionTag: '[Internships & Technical Assistance]',
    entries: [
      {
        date: 'Jan – Mar 2026',
        title: 'Professional internship — CGE, San Bernardo',
        body: 'Power BI dashboards, project portfolio management, electrical regulation compliance.',
      },
      {
        date: 'Dec 2024 – Feb 2025',
        title: 'Technical assistant — Medical equipment, Concepción',
        body: 'Installation, instrument and sensor calibration, preventive maintenance.',
      },
    ],
    cvCta: '[Download full CV (PDF)]',
  },

  skills: {
    heading: '03. Skills',
    sectionTag: '[Technical Expertise]',
    groups: [
      {
        label: 'Automation & PLC:',
        value:
          'Allen-Bradley ControlLogix, Studio 5000/RSLogix, Ladder and Structured Text (IEC 61131-3), SCADA / FactoryTalk View (ISA-101), EtherNet/IP & OPC UA.',
      },
      {
        label: 'Control & Modeling:',
        value:
          'AspenTech DMC3 (Calibrate), MATLAB / Simulink, Predictive & Fuzzy Control (Sugeno), Subspace Identification, Python.',
      },
      {
        label: 'Hardware, Instrumentation & Docs:',
        value: 'LTspice, PCB Design, Laboratory instrumentation, Power BI, LaTeX.',
      },
    ],
  },

  contact: {
    heading: 'Contact',
    sectionTag: '[Direct channels]',
    intro:
      'For academic inquiries, technical collaboration, thesis work or engineering applications:',
    emailLabel: 'Primary Email',
    emailPlaceholder: '[TO BE COMPLETED: email]',
    githubLabel: 'GitHub:',
    githubPlaceholder: '[TO BE COMPLETED: GitHub]',
    linkedinLabel: 'LinkedIn:',
    linkedinPlaceholder: '[TO BE COMPLETED: LinkedIn]',
    locationLabel: 'Location:',
    locationValue: 'Concepción, Chile',
    institutionLabel: 'Institution:',
    institutionValue: 'DIE UdeC',
  },

  footer: {
    line1: 'Leví Gadiel Sojos González — Department of Electrical Engineering (DIE UdeC)',
    line2: 'Electronic Civil Engineering · Expected graduation: December 2026',
  },
};
