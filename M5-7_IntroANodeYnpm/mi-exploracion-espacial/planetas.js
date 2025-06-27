const planetas = [
  {
    // Esta primera entrada es la "plantilla" para los demás
    nombre: "Titán",
    descripcion: "La luna más grande de Saturno, con lagos de metano.",
    descubiertoEn: "1655",
    descubiertoPor: "Christiaan Huygens",
    tipo: "Satélite natural", // Aqui puede ir satelite natural, planeta, exoplaneta, asteroide, cometa, etc.
    imagen:
      "https://media.es.wired.com/photos/659cd14678563535f72b33e8/1:1/w_2000,h_2000,c_limit/titan%20islas.jpg",
    coordenadas: {
      sistema: "Saturno",
      distancia: 1.4e9, //1.4 mil millones de km desde el Sol, o desde la Tierra, según contexto en internet
      unidad: "km", // se pueden usar también "UA" (Unidades Astronómicas), "años luz", etc.
    },
    caracteristicas: [
      "Atmósfera densa y rica en nitrógeno",
      "Lagos y ríos de metano y etano",
      "Posible actividad geológica",
    ],
  },
  {
    nombre: "Próxima Centauri b",
    descripcion: "Un exoplaneta rocoso en la zona habitable de su estrella.",
    descubiertoEn: "2016",
    descubiertoPor: "Observatorio Europeo Austral (ESO)",
    tipo: "Exoplaneta",
    imagen:
      "https://images.ecestaticos.com/66PTZpt_zDeAjWVQ3pkQ6Z7SyFI=/0x0:1920x1082/1440x810/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F169%2Ffd5%2F3fb%2F169fd53fb054fa6df8bea82c4b8f8c47.jpg",
    coordenadas: {
      sistema: "Próxima Centauri",
      distancia: 4.24,
      unidad: "años luz",
    },
    caracteristicas: [
      "Tamaño similar a la Tierra",
      "En zona habitable",
      "Podría tener agua líquida",
    ],
  },
  {
    nombre: "Saturno",
    descripcion: "Planeta gaseoso conocido por sus espectaculares anillos.",
    descubiertoEn: "1610",
    descubiertoPor: "Galileo Galilei",
    tipo: "Planeta",
    imagen: "https://i.bstr.es/drivingeco/2025/03/saturn-1220x871.jpg",
    coordenadas: {
      sistema: "Solar",
      distancia: 9.58,
      unidad: "UA",
    },
    caracteristicas: [
      "Anillos compuestos principalmente de hielo y roca",
      "Segundo planeta más grande del Sistema Solar",
      "Tiene 274 lunas reconocidas por la Unión Astronómica Internacional (IAU)s",
    ],
  },
  {
    nombre: "Kepler-186f",
    descripcion:
      "El primer exoplaneta del tamaño de la Tierra descubierto en la zona habitable de su estrella.",
    descubiertoEn: "2014",
    descubiertoPor: "NASA (Kepler Space Telescope)",
    tipo: "Exoplaneta",
    imagen: "https://i.ytimg.com/vi/qh9NF0yShiE/maxresdefault.jpg",
    coordenadas: {
      sistema: "Kepler-186",
      distancia: 490,
      unidad: "años luz",
    },
    caracteristicas: [
      "Radio aproximadamente 1.17 veces el de la Tierra",
      "Orbita en la zona habitable de una estrella enana roja",
      "Podría tener agua líquida en su superficie",
      "Año de aproximadamente 130 días terrestres",
      "Ubicado en la constelación de Cygnus",
    ],
  },
  {
    nombre: "Rigel",
    descripcion:
      "Supergigante azul y estrella más brillante de la constelación de Orión, parte de un sistema estelar múltiple.",
    descubiertoEn: "Desconocido",
    descubiertoPor: "Desconocido, observada desde la antigüedad",
    tipo: "Estrella (Supergigante azul)",
    imagen:
      "https://earthsky.org/upl/2020/01/rigel-astropixels-Fred-Espenak-800.png",
    coordenadas: {
      sistema: "Orión",
      distancia: 860,
      unidad: "años luz",
    },
    caracteristicas: [
      "Séptima estrella más brillante del cielo nocturno",
      "Supergigante azul, tipo espectral B8Ia",
      "Masa entre 18 y 24 veces la del Sol",
      "Radio más de 70 veces el del Sol",
      "Brillo entre 61,500 y 363,000 veces el del Sol",
      "Temperatura superficial de 12,100 K",
      "Se espera que termine su vida como supernova tipo II",
      "Ubicada en el pie izquierdo del cazador Orión",
    ],
  },
  {
    nombre: "TOI-1452b",
    descripcion:
      "Un exoplaneta tipo 'supertierra' con posible superficie oceánica profunda.",
    descubiertoEn: "2022",
    descubiertoPor: "Telescopio Espacial James Webb",
    tipo: "Exoplaneta",
    imagen:
      "https://scx2.b-cdn.net/gfx/news/hires/2022/an-extrasolar-world-co.jpg",
    coordenadas: {
      sistema: "TOI-1452",
      distancia: 100,
      unidad: "años luz",
    },
    caracteristicas: [
      "70% más grande que la Tierra",
      "Orbita su estrella cada 11 días",
      "Hasta 30% de su masa podría ser agua",
      "Posible mundo oceánico",
    ],
  },
  {
    nombre: "Neptuno",
    descripcion:
      "El planeta más lejano del Sistema Solar, conocido por sus vientos extremos y color azul intenso.",
    descubiertoEn: "1846",
    descubiertoPor: "Johann Galle y Urbain Le Verrier",
    tipo: "Planeta",
    imagen:
      "https://upload.wikimedia.org/wikipedia/commons/5/56/Neptune_Full.jpg",
    coordenadas: {
      sistema: "Solar",
      distancia: 30.07,
      unidad: "UA",
    },
    caracteristicas: [
      "Planeta gigante de hielo",
      "Vientos más rápidos del Sistema Solar",
      "Tiene 14 lunas conocidas",
    ],
  },
  {
    nombre: "GJ3998D",
    descripcion:
      "Supertierra descubierta en la zona habitable de la estrella enana roja GJ3998.",
    descubiertoEn: "2025",
    descubiertoPor: "Instituto de Astrofísica de Canarias",
    tipo: "Exoplaneta",
    imagen:
      "https://assets.science.nasa.gov/dynamicimage/assets/science/astro/exo-explore/assets/content/planets/neptunelike-8.jpg",
    coordenadas: {
      sistema: "GJ3998",
      distancia: 59,
      unidad: "años luz",
    },
    caracteristicas: [
      "Masa aproximada de 6 veces la de la Tierra",
      "Ubicado en la zona habitable de su estrella",
      "Podría tener agua líquida en su superficie",
      "Período orbital de 41,8 días terrestres",
      "Aún no se ha determinado si es rocoso o gaseoso",
    ],
  },
  {
    nombre: "WASP-121b",
    descripcion:
      "Exoplaneta ultra caliente y peculiar, famoso por su 'lluvia de metal' y apariencia de joya cósmica.",
    descubiertoEn: "2015",
    descubiertoPor: "Consorcio WASP (Wide Angle Search for Planets)",
    tipo: "Exoplaneta (Júpiter caliente)",
    imagen:
      "https://static1.srcdn.com/wordpress/wp-content/uploads/2022/02/WASP-121B-EXOPLANET.jpg?q=70&fit=contain&w=1200&h=628&dpr=1",
    coordenadas: {
      sistema: "WASP-121",
      distancia: 858,
      unidad: "años luz",
    },
    caracteristicas: [
      "Temperatura diurna de hasta 2.500°C, suficiente para vaporizar metales",
      "Presenta lluvias de metal líquido en su atmósfera",
      "Una de sus caras siempre mira a su estrella, la otra permanece en oscuridad perpetua",
      "Vientos atmosféricos de más de 17.000 km/h",
      "Masa 1,2 veces la de Júpiter",
      "Orbita extremadamente cercana a su estrella: un año dura solo 1,3 días terrestres",
      "Atmósfera rica en metales vaporizados, que le dan un aspecto brillante y peculiar",
    ],
  },
  {
    nombre: "LTT 9779 b",
    descripcion:
      "Exoplaneta del tamaño de Neptuno, famoso por su brillo y su atmósfera reflectante, conocido como el 'planeta espejo'.",
    descubiertoEn: "2020",
    descubiertoPor:
      "James Jenkins (Universidad de Chile) y equipo internacional",
    tipo: "Exoplaneta (Neptuno incandescente)",
    imagen:
      "https://media.es.wired.com/photos/64acf04b2ffab1a554bf94f3/16:9/w_2560%2Cc_limit/PLANETA%2520ESPEJO%2520ESTRELLA%2520BRILLANTE.jpg",
    coordenadas: {
      sistema: "LTT 9779",
      distancia: 264,
      unidad: "años luz",
    },
    caracteristicas: [
      "Refleja el 80% de la luz de su estrella, siendo uno de los exoplanetas más brillantes conocidos",
      'Su atmósfera contiene nubes de metales y silicatos, que actúan como un espejo cósmico, por ellos también se le conoce como "planeta espejo"',
      "Temperatura diurna de hasta 2.000°C (3.600°F)",
      "Orbita su estrella en solo 19 horas (0.8 días terrestres)",
      "Es parte de la constelación de Sculptor",
    ],
  },
  {
    nombre: "Sirio",
    descripcion:
      "La estrella más brillante del cielo nocturno, parte de un sistema binario situado en la constelación de Canis Maior (Can Mayor).",
    descubiertoEn: "Antigüedad",
    descubiertoPor: "Desconocido (observada desde la antigüedad)",
    tipo: "Estrella (Sistema binario)",
    imagen: "https://i.redd.it/sfo9zz3okmka1.jpg",
    coordenadas: {
      sistema: "Canis Maior",
      distancia: 8.6,
      unidad: "años luz",
    },
    caracteristicas: [
      "Estrella más brillante del cielo nocturno",
      "Sistema binario compuesto por Sirio A (estrella blanca) y Sirio B (enana blanca)",
      "Sirio A es aproximadamente 2 veces más masiva que el Sol y 25 veces más luminosa",
      "Sirio B es una enana blanca, remanente de una estrella que ya agotó su combustible nuclear",
      "Temperatura superficial de Sirio A: alrededor de 10.000 K",
      "Importancia histórica: marcaba el inicio de las inundaciones del Nilo en el Antiguo Egipto",
      "La luz de Sirio parpadea intensamente y a veces muestra colores debido a la turbulencia atmosférica",
      "Es la quinta estrella más cercana al Sol",
      "Conocida coloquialmente como la 'Estrella Perro'",
    ],
  },
  {
    nombre: "GJ 367 b",
    descripcion:
      "Exoplaneta ultradenso y pequeño, compuesto casi completamente de metal, con una densidad excepcionalmente alta.",
    descubiertoEn: "2021",
    descubiertoPor:
      "Equipo internacional liderado por Kristine Lam (DLR, Alemania)",
    tipo: "Exoplaneta (Supermercurio)",
    imagen:
      "https://lopezdoriga.com/wp-content/uploads/2021/12/gj-367-b-exoplaneta-universo-espacio.jpg",
    coordenadas: {
      sistema: "GJ 367",
      distancia: 31,
      unidad: "años luz",
    },
    caracteristicas: [
      "Radio aproximado de 0,7 veces el de la Tierra",
      "Masa de 0,55 veces la de la Tierra, pero densidad extremadamente alta",
      "Composición mayoritariamente metálica (hierro y níquel)",
      "Orbita su estrella en solo 8 horas",
      "Temperatura superficial de más de 1.500 °C",
      "Considerado el exoplaneta más denso conocido",
      "Es un mundo infernal, posiblemente con una superficie fundida o parcialmente fundida",
      "Se cree que podría ser el núcleo expuesto de un planeta más grande, tras perder su manto y corteza",
    ],
  },
  {
    nombre: "HD 149026 b (Smertrios)",
    descripcion:
      "Exoplaneta gaseoso con un núcleo extremadamente denso y metálico, considerado uno de los más calientes conocidos y famoso por su composición interna única.",
    descubiertoEn: "2005",
    descubiertoPor:
      "B. Sato, D. Fischer, G. Henry et al. en telescopio Keck y telescopio Subaru",
    tipo: "Exoplaneta (Júpiter caliente)",
    imagen:
      "https://www.exoplanetkyoto.org/wp-content/uploads/2016/08/HD149026b.jpg",
    coordenadas: {
      sistema: "HD 149026",
      distancia: 250,
      unidad: "años luz",
    },
    caracteristicas: [
      "Núcleo metálico estimado en más de 70 masas terrestres, inusualmente grande para un planeta de su tipo",
      "Atmósfera de hidrógeno y helio con una temperatura diurna de más de 2.000 °C",
      "Albedo muy bajo, lo que significa que absorbe casi toda la luz que recibe de su estrella",
      "Orbita su estrella en solo 2,87 días terrestres",
      "Su composición interna sugiere una abundancia extrema de elementos pesados y metales",
      "Considerado un 'planeta diamante' potencial debido a la presión extrema y temperatura en su núcleo, aunque no hay evidencia directa de esto",
      "Ubicado en la constelación de Hércules",
    ],
  },
];

module.exports = planetas; // Recordatorio: Sirve para exportar el valor de la variable planetas desde un archivo en Node.js, en otro archivo se puede importar con require('./planetas.js') y usar la variable planetas.
