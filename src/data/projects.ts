export type Capture = {
  src: string;
  alt: string;
  caption: string;
};

export type Feature = {
  title: string;
  text: string;
};

export type Project = {
  kind: "client" | "open";
  slug: string;
  name: string;
  scene: string;
  sceneAlt: string;
  field: string;
  meta: string;
  status: string;
  description: string;
  result: string;
  link?: { label: string; href: string };
  detail: {
    intro: string;
    facts: { label: string; value: string }[];
    sections: { title: string; text: string }[];
    features?: { heading: string; items: Feature[] };
    statusCard?: { heading: string; items: Feature[] };
    tech: string[];
    techNote: string;
    captures?: { heading: string; note: string; items: Capture[] };
    results?: { heading: string; text: string };
    openLicense?: { heading: string; text: string };
    next?: { label: string; name: string; slug: string; scene: string; field: string };
  };
};

export const CV_URL = "/CV-Jose%20Javier%20Garcia%20(UNET).pdf";
export const EMAIL = "josejaviergarciap123@gmail.com";
export const SITE = "https://josejaviergarcia.vercel.app";

export const clientProjects: Project[] = [
  {
    kind: "client",
    slug: "bodegon-goyo",
    name: "Bodegón Goyo",
    scene: "/scenes/scene-bodegon.webp",
    sceneAlt:
      "Escena isométrica pixel art de un bodegón con carnicería: mostrador, balanza, caja y precios en dólares, pesos colombianos y bolívares.",
    field: "field-bodegon",
    meta: "Desde sep 2026 · En uso · Punto de venta y gestión",
    status: "En uso por el cliente",
    description:
      "Sistema de punto de venta y gestión para un bodegón y carnicería en la frontera Colombia-Venezuela. Dólares, pesos colombianos y bolívares conviven en cada venta.",
    result: "Cobro en tres monedas, carnicería, inventario, crédito, caja y finanzas.",
    detail: {
      intro:
        "Punto de venta y gestión para un bodegón y carnicería en la frontera Colombia-Venezuela.",
      facts: [
        { label: "Rol", value: "Desarrollador" },
        { label: "Periodo", value: "Desde sep 2026 (en curso)" },
        { label: "Tipo", value: "Punto de venta y gestión" },
        { label: "Estado", value: "Desplegado y en uso" },
      ],
      sections: [
        {
          title: "El problema",
          text: "Un bodegón con carnicería, en la frontera entre Colombia y Venezuela, vende en tres monedas a la vez y corta animales enteros en cortes.",
        },
        {
          title: "La solución",
          text: "Una sola aplicación donde dólares (la moneda base), pesos colombianos y bolívares conviven en cada venta. Reúne ventas, carnicería, inventario, crédito, caja y finanzas.",
        },
      ],
      features: {
        heading: "Módulos",
        items: [
          { title: "Ventas", text: "Cobro en USD, COP y Bs en la misma venta." },
          { title: "Carnicería", text: "Despiece de un animal entero en cortes, con rendimiento y merma." },
          { title: "Inventario", text: "Existencias de productos por unidad, por peso o por empaque." },
          { title: "Crédito", text: "Ventas a crédito y cuentas por cobrar." },
          { title: "Caja", text: "Control del efectivo y de los turnos." },
          { title: "Finanzas", text: "Ventas, utilidad y reportes del período." },
          { title: "Tres monedas", text: "USD como base, peso colombiano y bolívar con su tasa." },
          { title: "Hecho para el mostrador", text: "Teclado, lector de código de barras y tickets de 80 o 58 mm." },
        ],
      },
      tech: ["React", "TypeScript", "Vite", "Tailwind", "Cloudflare Workers", "D1"],
      techNote: "Se usa en el navegador. Ya está desplegado y en uso por el cliente.",
      captures: {
        heading: "Capturas de la aplicación",
        note: "Capturas reales de la aplicación con datos de prueba, sin nombres ni datos de personas.",
        items: [
          {
            src: "/captures/bodegon-punto-de-venta.webp",
            alt: "Pantalla de punto de venta: catálogo de productos con precios en tres monedas y ticket vacío a la derecha.",
            caption: "Punto de venta",
          },
          {
            src: "/captures/bodegon-productos.webp",
            alt: "Pantalla de productos: tabla con existencias, costo y margen de cada producto.",
            caption: "Productos: precios en tres monedas",
          },
          {
            src: "/captures/bodegon-finanzas.webp",
            alt: "Panel de finanzas y reportes con totales del período y gráficos de barras.",
            caption: "Finanzas y reportes",
          },
        ],
      },
      next: {
        label: "Siguiente caso",
        name: "Laboratorio Clínico Vitaly",
        slug: "/casos/laboratorio-clinico-vitaly",
        scene: "/scenes/scene-vitaly.webp",
        field: "field-vitaly",
      },
    },
  },
  {
    kind: "client",
    slug: "laboratorio-clinico-vitaly",
    name: "Laboratorio Clínico Vitaly",
    scene: "/scenes/scene-vitaly.webp",
    sceneAlt:
      "Escena isométrica pixel art de un laboratorio clínico con escritorio, monitor con gráficos, mesa de muestras y un globo que muestra el Wi-Fi apagado.",
    field: "field-vitaly",
    meta: "sep - dic 2025 · Escritorio + PWA · En uso",
    status: "En uso por el cliente",
    description:
      "Aplicación de escritorio con Tauri y PWA que funciona sin conexión. Carga controlada de análisis clínicos para reducir errores al cargar resultados.",
    result: "Menos errores al cargar resultados médicos.",
    detail: {
      intro:
        "Aplicación de escritorio y PWA para un laboratorio clínico que funciona sin conexión.",
      facts: [
        { label: "Rol", value: "Desarrollador" },
        { label: "Periodo", value: "sep - dic 2025" },
        { label: "Tipo", value: "Escritorio (Tauri) + PWA" },
        { label: "Estado", value: "Desplegado y en uso" },
      ],
      sections: [
        {
          title: "El problema",
          text: "Un laboratorio clínico carga resultados de análisis todos los días.",
        },
        {
          title: "La solución",
          text: "Aplicación de escritorio con Tauri y versión PWA con arquitectura offline-first: el sistema sigue operando cuando no hay red, con carga controlada de análisis para reducir errores al cargar resultados.",
        },
      ],
      tech: ["Tauri", "TypeScript", "PWA"],
      techNote: "Funciona sin conexión. Ya está desplegado y en uso por el cliente.",
      captures: {
        heading: "Capturas de la aplicación",
        note: "Capturas reales con datos de prueba.",
        items: [
          {
            src: "/captures/vitaly-resultados.webp",
            alt: "Pantalla de resultados de la aplicación del laboratorio: lista de estudios con estado completado, en proceso o pendiente y acciones para generar el reporte.",
            caption: "Resultados",
          },
          {
            src: "/captures/vitaly-panel.webp",
            alt: "Panel maestro: pacientes del día, estudios en curso de un paciente y lista de estudios que se pueden añadir.",
            caption: "Panel maestro",
          },
          {
            src: "/captures/vitaly-informe.webp",
            alt: "Vista previa de un informe de hematología con series roja y blanca, plaquetas y rangos de referencia.",
            caption: "Informe de laboratorio",
          },
        ],
      },
      results: {
        heading: "Resultados",
        text: "Menos errores al cargar resultados.",
      },
      next: {
        label: "Siguiente caso",
        name: "DecoartesJB",
        slug: "/casos/decoartesjb",
        scene: "/scenes/scene-decoartes.webp",
        field: "field-decoartes",
      },
    },
  },
  {
    kind: "client",
    slug: "decoartesjb",
    name: "DecoartesJB",
    scene: "/scenes/scene-decoartes.webp",
    sceneAlt:
      "Escena isométrica pixel art de un salón de eventos decorado: arco floral, mesas redondas, cuadros en la pared y luces colgadas arriba.",
    field: "field-decoartes",
    meta: "jul - sep 2025 · Sitio web · En uso",
    status: "En uso por el cliente",
    description:
      "Sitio de alto rendimiento para eventos corporativos, sociales y bodas, con galerías por categoría y carga optimizada de imágenes en alta resolución.",
    result: "Galerías de alta resolución que cargan de forma optimizada.",
    detail: {
      intro:
        "Sitio web de alto rendimiento para una decoradora de eventos, con galerías por categoría.",
      facts: [
        { label: "Rol", value: "Desarrollador" },
        { label: "Periodo", value: "jul - sep 2025" },
        { label: "Tipo", value: "Sitio web" },
        { label: "Estado", value: "Desplegado y en uso" },
      ],
      sections: [
        {
          title: "El problema",
          text: "Una decoradora de eventos necesita mostrar su trabajo en galerías de alta resolución que carguen rápido.",
        },
        {
          title: "La solución",
          text: "Sitio de alto rendimiento con galerías por categoría y carga optimizada de imágenes en alta resolución.",
        },
      ],
      tech: ["Astro", "Tailwind"],
      techNote: "Sitio público, ya en uso por la clienta.",
      captures: {
        heading: "Capturas del sitio",
        note: "Captura real del sitio público, sin datos de personas.",
        items: [
          {
            src: "/captures/decoartes-sitio.webp",
            alt: "Portada del sitio de DecoartesJB: fondo oscuro con texto Creamos Momentos Inolvidables y botones Agendar cita y Ver galería.",
            caption: "Portada del sitio público",
          },
        ],
      },
      results: {
        heading: "Resultados",
        text: "Galerías de alta resolución que cargan de forma optimizada.",
      },
      next: {
        label: "Siguiente proyecto",
        name: "Sprixel",
        slug: "/comunidad/sprixel",
        scene: "/scenes/scene-sprixel.webp",
        field: "field-sprixel",
      },
    },
  },
];

export const openProjects: Project[] = [
  {
    kind: "open",
    slug: "sprixel",
    name: "Sprixel",
    scene: "/scenes/scene-sprixel.webp",
    sceneAlt:
      "Escena isométrica pixel art de un estudio de pixel art: lienzo grande con un sprite, paleta en la pared, un robot asistente y una persona.",
    field: "field-sprixel",
    meta: "Código abierto · Licencia MIT · Tauri 2 + Go",
    status: "En desarrollo: construyendo la versión 1",
    description:
      "Editor de escritorio de pixel art para sprites de videojuegos, pensado para que un agente de IA también pueda usarlo. Incluye el comando sprixel y guarda los proyectos como texto plano.",
    result: "En desarrollo: construyendo la versión 1.",
    link: { label: "Ver en GitHub", href: "https://github.com/Javier-GarciaP/sprixel" },
    detail: {
      intro:
        "Editor de escritorio de pixel art para sprites de videojuegos, pensado para que un agente de IA también pueda usarlo.",
      facts: [
        { label: "Estado", value: "En desarrollo (versión 1)" },
        { label: "Licencia", value: "MIT, código abierto" },
        { label: "Tecnología", value: "Tauri 2 + Go" },
        { label: "Código", value: "github.com/Javier-GarciaP/sprixel" },
      ],
      sections: [
        {
          title: "Qué es",
          text: "Un editor de escritorio para dibujar sprites de videojuegos. Además de la ventana, trae un comando sprixel, para que un agente de IA pueda trabajar con tus proyectos.",
        },
        {
          title: "Para quién es",
          text: "Para quien hace sprites para juegos y quiere que un asistente de IA pueda ayudar. Los proyectos son carpetas de texto plano, fáciles de revisar y de guardar en Git.",
        },
      ],
      features: {
        heading: "Características",
        items: [
          { title: "Editor de escritorio", text: "Aplicación hecha con Tauri 2." },
          { title: "Comando sprixel", text: "Una herramienta de terminal hecha en Go." },
          { title: "Proyectos en texto plano", text: "Cada proyecto es una carpeta con archivos de texto." },
          { title: "Para agentes de IA", text: "Un agente puede leer y modificar el trabajo." },
        ],
      },
      statusCard: {
        heading: "Estado del proyecto",
        items: [
          { title: "Ahora", text: "Construyendo la versión 1. Todavía no hay versión estable." },
          { title: "Licencia", text: "MIT. Código abierto y público en GitHub." },
          { title: "Participar", text: "Puedes mirar el código y abrir una conversación en GitHub." },
        ],
      },
      tech: ["Tauri 2", "Go"],
      techNote: "Proyecto público en GitHub.",
      captures: {
        heading: "Capturas de la aplicación",
        note: "Capturas reales de la versión actual (0.1.0).",
        items: [
          {
            src: "/captures/sprixel-editor.webp",
            alt: "Editor de Sprixel con un sprite de vaca de 32 por 32 píxeles en el lienzo, paleta de colores, vista previa animada y lista de frames.",
            caption: "Editor",
          },
          {
            src: "/captures/sprixel-proyecto.webp",
            alt: "Vista de proyecto de Sprixel: carpetas a la izquierda y tarjetas con los sprites del proyecto, entre ellos la vaca.",
            caption: "Proyecto",
          },
        ],
      },
      openLicense: {
        heading: "Código abierto, licencia MIT",
        text: "El repositorio es público. Puedes mirar el código y abrir una conversación en GitHub.",
      },
      next: {
        label: "Siguiente proyecto",
        name: "Fósforo",
        slug: "/comunidad/fosforo",
        scene: "/scenes/scene-fosforo.webp",
        field: "field-fosforo",
      },
    },
  },
  {
    kind: "open",
    slug: "fosforo",
    name: "Fósforo",
    scene: "/scenes/scene-fosforo.webp",
    sceneAlt:
      "Escena isométrica pixel art de un escritorio nocturno: terminal con código a color, un fósforo encendido usado como lámpara y una ventana con la luna.",
    field: "field-fosforo",
    meta: "Código abierto · Licencia MIT · Go",
    status: "Beta 0.9.0",
    description:
      "Código que enciende ideas. Editor de código para la terminal, hecho en Go: se maneja con el teclado (modal, como Neovim), con explorador de archivos, código a color y vista previa de Markdown.",
    result: "Beta 0.9.0.",
    link: { label: "Ver en GitHub", href: "https://github.com/Javier-GarciaP/fosforo" },
    detail: {
      intro:
        "Editor de código para la terminal, hecho en Go, con navegación modal por teclado.",
      facts: [
        { label: "Estado", value: "Beta 0.9.0" },
        { label: "Licencia", value: "MIT, código abierto" },
        { label: "Tecnología", value: "Go" },
        { label: "Código", value: "github.com/Javier-GarciaP/fosforo" },
      ],
      sections: [
        {
          title: "Qué es",
          text: "Código que enciende ideas. Editor de código para la terminal, hecho en Go: se maneja con el teclado (modal, como Neovim), con explorador de archivos, código a color y vista previa de Markdown.",
        },
        {
          title: "Para quién es",
          text: "Para quien edita en la terminal y quiere un editor rápido, modal y sin dependencias raras.",
        },
      ],
      features: {
        heading: "Características",
        items: [
          { title: "Edición modal", text: "Se maneja con el teclado, como Neovim." },
          { title: "Explorador de archivos", text: "Abre y navega el proyecto desde la terminal." },
          { title: "Código a color", text: "Resaltado de sintaxis en el editor." },
          { title: "Vista previa de Markdown", text: "Mira el Markdown renderizado sin salir." },
        ],
      },
      statusCard: {
        heading: "Estado del proyecto",
        items: [
          { title: "Ahora", text: "En beta (0.9.0)." },
          { title: "Licencia", text: "MIT. Código abierto y público en GitHub." },
          { title: "Participar", text: "Puedes mirar el código y abrir una conversación en GitHub." },
        ],
      },
      tech: ["Go"],
      techNote: "Proyecto público en GitHub.",
      captures: {
        heading: "Capturas de la aplicación",
        note: "Capturas reales de la versión beta.",
        items: [
          {
            src: "/captures/fosforo-editor.webp",
            alt: "Pantalla de bienvenida de Fósforo en la terminal: explorador de archivos a la izquierda, logo y lista de atajos de teclado.",
            caption: "Bienvenida",
          },
          {
            src: "/captures/fosforo-readme.webp",
            alt: "Vista previa de un README en Markdown dentro de Fósforo, con títulos, listas y una tabla.",
            caption: "Vista previa de Markdown",
          },
        ],
      },
      openLicense: {
        heading: "Código abierto, licencia MIT",
        text: "El repositorio es público. Puedes mirar el código y abrir una conversación en GitHub.",
      },
    },
  },
];

export const allProjects = [...clientProjects, ...openProjects];
