import type { Dict } from './es';

/**
 * English dictionary — same structure as es.ts (typed via Dict).
 * [TO BE COMPLETED] / [PENDING] placeholders intentionally mirror the Spanish ones.
 */
export const en: Dict = {
  locale: 'en',
  dir: 'ltr',

  meta: {
    title: 'Leví Gadiel Sojos González — Portfolio',
    description:
      'Electronic Civil Engineering student at Universidad de Concepción (DIE UdeC). Automation, predictive control, industrial robotics and power electronics.',
    langShort: 'EN',
  },

  langSwitcher: {
    label: 'Language',
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
    sectionsLabel: 'Sections',
    projects: '01. Projects',
    trayectoria: '02. Trajectory',
    habilidades: '03. Skills',
    contacto: 'Contact',
  },

  hero: {
    name: 'Leví Gadiel Sojos González',
    intro:
      'Electronic Civil Engineering student at Universidad de Concepción (DIE UdeC). Licenciado en Ciencias de la Ingeniería. Minor in Process Automation, Advanced Control and Industrial Robotics.',
    seeking:
      'Graduating in December 2026. Seeking a job or internship in process control and automation.',
    emailLabel: 'Email:',
    githubLabel: 'GitHub:',
    linkedinLabel: 'LinkedIn:',
    langLabel: 'Language:',
    langValue: 'English level B1',
  },

  projects: {
    heading: '01. Projects',

    p1: {
      number: '01',
      kicker: 'Electronics Project · 2026-2',
      title: 'Commissioning and start-up of the AspenTech DMC3 Calibrate module',
      params: [
        { label: 'Type', value: 'Multivariable Predictive Control (MPC)' },
        { label: 'Protocol', value: 'OPC UA Client/Server' },
        { label: 'Sampling', value: 'Δt = 1s / Closed-loop identification' },
        { label: 'Tools', value: 'AspenTech DMC3 (Calibrate), MATLAB/Simulink, OPC UA' },
      ],
      marginaliaLabel: 'Marginal note:',
      marginalia:
        'Closed-loop model identification with continuous data historization and intentional gain changes to verify model detection and correction by Calibrate.',
      problemLabel: 'Problem',
      problem:
        'A predictive controller loses performance when the plant drifts from the model it was identified with. Calibrate proposes re-identifying that model while the controller operates, but for that it needs to be connected to the plant with historical data being recorded. The question was whether it could recover a correct model after a plant change.',
      approachLabel: 'What I did',
      approachItems: [
        'I built a simulated blending plant in Simulink and connected it to DMC3 via OPC UA.',
        'I set up the real-time data historization and kept it running.',
        'I introduced an intentional gain change in the plant and tested whether Calibrate detected and corrected it.',
      ],
      toolsLabel: 'Tools used',
      tools: 'AspenTech DMC3 (Calibrate module), MATLAB/Simulink, OPC UA Server and Client.',
      resultLabel: 'Result:',
      result:
        'Calibrate re-identified the gain as 0.7221 versus a true value of 0.72 (0.29% error).',
      resultPending: '',
      linksLabel: 'Links and code:',
      links: '',
      linksFill: false,
      figureCaption:
        'OPC UA link architecture and Calibrate module (DMC3) in a Simulink blending plant.',
      figureAlt:
        'Technical engineering schematic and block diagram for AspenTech DMC3 Calibrate module connected via OPC UA to MATLAB Simulink blending plant.',
    },

    p2: {
      number: '02',
      kicker: 'Format: Team project · Industrial Control',
      title: 'Control of a pilot plant with 4 coupled tanks',
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
      problem:
        'In a four-coupled-tank plant, each pump affects more than one level, so controlling each level separately is difficult and a disturbance in one tank propagates to the others. Testing controllers directly on the real plant is slow and risky.',
      approachLabel: 'What I did',
      approachItems: [
        'I trained an ANFIS model of the plant to design and test the control in simulation first, before moving to the real plant.',
        'I worked on the fuzzy (Sugeno) controller with feedforward compensators in MISO structure, programmed on the Allen-Bradley PLC.',
        'I collaborated on the HMI under ISA-101; the main development was handled by a classmate.',
      ],
      toolsLabel: 'Tools used',
      tools:
        'Allen-Bradley ControlLogix PLC, Studio 5000, FactoryTalk View (ISA-101), EtherNet/IP, OPC UA, MATLAB/Simulink, ANFIS, Structured Text.',
      resultLabel: 'Result:',
      result:
        'The levels remained stable against a disturbance from the upper tank draining.',
      resultPending: '',
      linksLabel: 'Demo / link:',
      links: 'Video (YouTube)',
      linksHref: 'https://youtu.be/sVEbcEPLVCs?si=I0PMPbE0yA2IW1yS',
      linksFill: false,
      figureCaption:
        'HMI for the 4-coupled-tank plant (FactoryTalk View, ISA-101): overview screen with P&ID diagram and supervision of the four tank levels.',
      figureAlt: 'HMI of the 4-coupled-tank pilot plant showing the overview P&ID screen and tank levels.',
    },

    others: {
      heading: 'Other Projects Logged in the Notebook',
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
          bodyPlaceholder: '',
          tools: 'AspenTech DMC3, MATLAB/Simulink.',
          toolsPlaceholder: null as string | null,
          status: 'In progress',
          statusFill: false,
          more: '',
          moreHref: '',
        },
        {
          number: '04',
          kicker: 'Power Electronics · Team · completed Dec 2025',
          title: 'Isolated 10 W flyback converter with telemetry and HMI',
          body:
            'Isolated switched-mode power supply with remote monitoring: 60 kHz LTspice, ESP32 Wi-Fi telemetry, hand-wound transformer, PIC18F4550 PWM (C) and a Python (PySide6) HMI.',
          bodyPlaceholder: '',
          tools: 'LTspice, PIC18F4550 (C), Python / PySide6, ESP32, KiCad.',
          toolsPlaceholder: null as string | null,
          status: 'Completed · Dec 2025',
          statusFill: false,
          more: 'Read more',
          moreHref: '/en/proyectos/flyback/',
          image: { src: '/images/modelo3D_DiseñoFINAL.jpg', alt: '3D model of the flyback converter redesign' },
        },
        {
          number: '05',
          kicker: 'Industrial Robotics · Kinematics',
          title: '6-DOF Robotic Arm',
          body:
            'Forward/inverse kinematic modelling and control strategies for robotic manipulator joints.',
          bodyPlaceholder: '',
          tools: 'MATLAB/Simulink.',
          toolsPlaceholder: null as string | null,
          status: 'In development',
          statusFill: false,
          more: '',
          moreHref: '',
        },
      ],
    },
  },

  flyback: {
    back: '← 01. Projects',
    backHref: '/en/#proyectos',
    kicker: 'Power Electronics · Team project · Completed Dec 2025',
    title: 'Isolated 10 W flyback converter with telemetry and HMI',
    params: [
      { label: 'Type', value: 'Isolated flyback · 10 W' },
      { label: 'Simulation', value: 'LTspice @ 60 kHz · RCD snubber' },
      { label: 'MCU', value: 'PIC18F4550 · PWM in C' },
      { label: 'Telemetry', value: 'ESP32 + Wi-Fi · TCP/IP' },
      { label: 'HMI', value: 'Python / PySide6 · asynchronous' },
      { label: 'PCB', value: 'KiCad · SMD · separate ground planes' },
      { label: 'Transformer', value: 'Hand-wound ferrite core' },
    ],
    marginaliaLabel: 'Marginal note:',
    marginalia:
      'Flow: simulation → prototype → testing → KiCad redesign with SMD and separate ground planes (not manufactured).',
    problemLabel: 'Problem',
    problem:
      'Design an isolated switched-mode power supply with remote monitoring, combining power electronics, firmware and supervision.',
    teamLabel: 'What the team did',
    teamItems: [
      'LTspice simulation at 60 kHz with RCD snubber.',
      'ESP32 node measuring voltage and sending it via Wi-Fi (TCP/IP sockets).',
    ],
    myLabel: 'My part',
    myItems: [
      'Calculated and hand-wound the ferrite transformer.',
      'Programmed the PIC18F4550 in C to generate the PWM.',
      'Developed the asynchronous HMI in Python (PySide6).',
      'On the PCB, handled component selection and footprints.',
    ],
    toolsLabel: 'Tools used',
    tools: 'LTspice, PIC18F4550 (C), Python / PySide6, ESP32, KiCad, hand-wound ferrite transformer.',
    resultLabel: 'Result:',
    result:
      'The prototype measured 60 % efficiency. In the lab we identified losses from parasitic inductances and unexpected DCM operation. A redesign in KiCad with SMD and separate ground planes was designed (not manufactured).',
    resultPending: '',
    linksLabel: 'Links and code:',
    links: '[PENDING: report / repository]',
    linksFill: true,
    figures: [
      { num: 'Fig. 3.1', caption: 'Flyback converter prototype.', src: '/images/prototipo.jpg', alt: 'Prototipo del convertidor flyback' },
      { num: 'Fig. 3.2', caption: 'Hand-wound ferrite transformer.', src: '/images/trafo.jpg', alt: 'Transformador de ferrita bobinado a mano' },
      { num: 'Fig. 3.3', caption: 'Python HMI (PySide6) showing telemetry data.', src: '/images/resultadosexp_interfaz.png', alt: 'HMI en Python PySide6 con datos de telemetría' },
      { num: 'Fig. 3.4', caption: 'KiCad redesign (SMD, separate ground planes, not manufactured).', src: '/images/PCB_DiseñoFINAL.png', alt: 'Rediseño en KiCad con planos de masa separados' },
    ],
  },

  trajectory: {
    heading: '02. Trajectory',
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
    cvCta: 'Download full CV (PDF)',
    cvHref: '/LeviSojos_CV.pdf',
  },

  skills: {
    heading: '03. Skills',
    groups: [
      {
        label: 'Automation & PLC:',
        value:
          'Allen-Bradley ControlLogix, Studio 5000/RSLogix, Ladder and Structured Text (IEC 61131-3), SCADA / FactoryTalk View (ISA-101), EtherNet/IP & OPC UA.',
      },
      {
        label: 'Control & Modeling:',
        value:
          'AspenTech DMC3 (Calibrate), MATLAB / Simulink, Predictive & Fuzzy Control (Sugeno), ANFIS, Python.',
      },
      {
        label: 'Hardware, Instrumentation & Docs:',
        value: 'LTspice, PCB Design, Laboratory instrumentation, Power BI, LaTeX.',
      },
    ],
  },

  contact: {
    heading: 'Contact',
    intro:
      'For academic inquiries, technical collaboration, thesis work or engineering applications:',
    emailLabel: 'Primary Email',
    githubLabel: 'GitHub:',
    linkedinLabel: 'LinkedIn:',
    locationLabel: 'Location:',
    locationValue: 'Concepción, Chile',
    institutionLabel: 'Institution:',
    institutionValue: 'DIE UdeC',
  },

  footer: {
    copyright: '© 2026 Leví Gadiel Sojos González',
  },
};
