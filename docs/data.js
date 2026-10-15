// Edite este arquivo para personalizar destinos, roteiro, custos e listas.
// Os valores de orçamento são estimativas de exemplo: atualize-os antes da viagem.
window.TRIPS = {
  donegal: {
    id: "donegal",
    language: "en-IE",
    navLabel: "Donegal",
    navLabels: { "en-IE": "Donegal", "pt-BR": "Donegal" },
    country: "Ireland",
    countryLabels: { "en-IE": "Ireland", "pt-BR": "Irlanda" },
    region: "IRELAND'S WILD ATLANTIC COAST",
    title: "Donegal",
    intro: "Dramatic sea cliffs, winding coastal roads and a weekend exploring Ireland's northwest.",
    duration: "3 days · 2 nights",
    season: "Early winter · 5–7 November 2026",
    currency: "€",
    currencyLabel: "EUR",
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/18/Slieve_League%2C_Irland%2C_Bild_4.jpg/1280px-Slieve_League%2C_Irland%2C_Bild_4.jpg",
    imagePosition: "center 52%",
    overview: [
      { icon: "⌖", label: "ROUTE", value: "Dublin · Donegal · Inishowen" },
      { icon: "↗", label: "GETTING AROUND", value: "Road trip by car" },
      { icon: "☼", label: "OVERNIGHT STAYS", value: "Ardara · Letterkenny" }
    ],
    itinerary: [
  {
    day: "01",
    date: "Thursday, 5 November 2026",
    title: "The Wild Southwest Coast",
    place: "Donegal Town → Slieve League → Glencolmcille → Ardara",
    stay: "Ardara",
    route: { label: "Google Maps route", linkText: "Open route", href: "https://www.google.com/maps/dir/Donegal+Town/Bunglas+Viewpoint,+Slieve+League/Silver+Strand,+Malin+Beg/Assaranca+Waterfall" },
    morning: [
      "Donegal Town - The Olde Castle bar (Donegal Castle)",
      "grab a chicken fillet roll in the spar in front of it",
      "Cliffs de Slieve League - The upper car park at Bunglas Viewpoint."
    ],
    afternoon: [
      "Silver Strand (Malin Beg).",
      "Assaranca Waterfall - pausa em Owenwee River Waterfalls",
    ],
    evening: [
      "Partiu casa. Mas vai pra um pub pelo amor de Deus",
      { label: "Accommodation", linkText: "Booking.com", href: "https://www.booking.com/Share-l6QQb5" }
    ]
  },
  {
    day: "02",
    date: "Friday, 6 November 2026",
    title: "Heart of Donegal: Valleys, Castles & Coast",
    place: "Glenveagh · Mount Errigal · Boat Beach",

    stay: "Letterkenny",
    route: { label: "Google Maps route", linkText: "Open route", href: "https://www.google.com/maps/dir/The+Ring+Fort+Lodge,+Kilrean+Upper,+Kilraine,+Co.+Donegal,+F94+HR26/Strand+road+beach+car+park,+6+Strand+Rd,+Magheraclogher,+Co.+Donegal/Sacred+Heart+Catholic+Church,+Dunlewey,+Money+Beg,+Co.+Donegal/Dunlewey+Church+abandoned,+Unnamed+Rd,,+Co.+Donegal/55.0340492,-7.9637964/Letterkenny,+Co.+Donegal/@54.8732235,-8.4649541,10z/data=!4m33!4m32!1m5!1m1!1s0x485f0da448ec20b1:0xe66d3d9890c99722!2m2!1d-8.3157152!2d54.7803984!1m5!1m1!1s0x485f79004fe0217b:0xce3137af465a2bf7!2m2!1d-8.3082641!2d55.0677382!1m5!1m1!1s0x485f9cb0b1325de7:0xc121d0dc869b3a1!2m2!1d-8.1482681!2d55.0318158!1m5!1m1!1s0x485f9b6724d9e4bb:0x9b76d1ea49ab0f8f!2m2!1d-8.1116609!2d55.0193067!1m0!1m5!1m1!1s0x485feb46f3cbdb11:0xa00c7a997320e60!2m2!1d-7.7287972!2d54.9533201!3e0?entry=ttu&g_ep=EgoyMDI2MTAxMS4wIKXMDSoASAFQAw%3D%3D" },
    morning: [
      "Bunbeg  - para ver o naufrágio Bád Eddie na praia - Strand Road Beach Car Park",
      "Sacred Heart Catholic Church, Dunlewey, Money Beg, Co. Donegal",
      "Dunlewey Church - Vista fotográfica do Mount Errigal e Dunlewey Church."
    ],
    afternoon: [
       "Glenveagh National Park Viewpoint (lagos e castelo vitoriano).",
    ],
    evening: [
      "Atravessar para Letterkenny para pernoite e jantar.",
      { label: "Accommodation", linkText: "Booking.com", href: "https://www.booking.com/Share-nuBAWY" }
    ]
  },
  {
    day: "03",
    date: "Saturday, 7 November 2026",
    title: "Inishowen Peninsula & Return to Dublin",
    place: "Inishowen Peninsula → Dublin",
    stay: "Dublin",
    morning: [
      "Fort Dunree e Mamore Gap (passe de montanha íngreme com vista para o oceano).",
      "Malin Head: o ponto mais ao norte da ilha da Irlanda."
    ],
    afternoon: [
      "Grianán of Aileach (forte circular de pedra do século VI).",
      "Início da viagem de retorno a Dublin."
    ],
    evening: [
      "Chegada em Dublin à noite."
    ]
  }
    ],
    bucket: [
      { title: "Slieve League", detail: "Colossal sea cliffs with breathtaking ocean views.", tag: "SEA CLIFFS" },
      { title: "Silver Strand (Malin Beg)", detail: "A hidden horseshoe-shaped beach framed by tall cliffs.", tag: "BEACH" },
      { title: "Owenwee River Waterfalls", detail: "A scenic winding road through a dramatic mountain valley.", tag: "SCENIC DRIVE" },
      { title: "Assaranca Waterfall", detail: "An easily accessible roadside waterfall.", tag: "NATURE" },
      { title: "Glenveagh National Park & Castle", detail: "Serene lakes, mountains and a Victorian castle.", tag: "NATIONAL PARK" },
      { title: "Malin Head", detail: "Ireland's northernmost point, with wild seascape views.", tag: "COAST" },
      { title: "Errigal Mount", detail: "It's the highest peak in County Donegal, standing at 751 meters", tag: "ROAD" },
      { title: "Local Pub", detail: "Visit a random local pub", tag: "PUB" },
    ],
    budget: [
      { item: "Accommodation", amount: 125, detail: "Two nights: Ardara and Letterkenny" },
      { item: "Car fuel", amount: 45, detail: "Illustrative estimate for the road trip" },
      { item: "Food & drinks", amount: 120, detail: "Meals, snacks and pub stops" },
    ],
    essentials: [
      { title: "Waterproof layers", detail: "A rain jacket and sturdy shoes." },
      { title: "Payment cards", detail: "Ireland is very good accepting card everywhere pretty much." },
      { title: "Tripods", detail: "long and short tripods." },
      { title: "Gopro", detail: "Charge and clean the memory card." },
      { title: "Drone", detail: "Charge the batteries and Remote Control." },
      { title: "Nothern Lights App", detail: "App to follow if will be there strong Nothern Lights." },
    ],
    tip: "November days are short, with sunset before 5 pm. Start early, check local opening times and weather. Nothern Lights if there is a big storm: dooey beach, Inishowen Peninsula, Tra na Rossan Beach "
         
  },
  japan: {
    id: "japan",
    navLabel: "Japão",
    navLabels: { "en-IE": "Japan", "pt-BR": "Japão" },
    country: "Japão",
    countryLabels: { "en-IE": "Japan", "pt-BR": "Japão" },
    region: "CIDADES, TEMPLOS E COMIDAS COM LUIZ",
    title: "Japão, Arigatou gozaimasu.",
    intro: "Chegada em 20 de fevereiro e saída em 7 de março: Tóquio, Kyoto e Osaka com tempo para curtir cada detalhe.",
    duration: "15 dias · 14 noites",
    season: "20 de fevereiro · 7 de março",
    currency: "¥",
    currencyLabel: "JPY",
    image: "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?auto=format&fit=crop&w=1800&q=85&v=japan-hero-restored-20261013",
    imagePosition: "center 56%",
    overview: [
      { icon: "⌖", label: "CIDADES", value: "Tóquio · Kyoto · Osaka" },
      { icon: "↗", label: "TRANSPORTE", value: "Shinkansen + metrô" },
      { icon: "⌂", label: "ESTADIA", value: "Tóquio · Kyoto · Osaka" },
      { icon: "☼", label: "RITMO", value: "15 dias · 14 noites" }
    ],
    itinerary: [
      { day: "01", date: "20 de fevereiro", title: "Chegada em Tóquio", place: "Tóquio", morning: [
        "Check-in e ajuste do ritmo da cidade",
        "Pausa leve em Asakusa para cair no clima"
      ], afternoon: [
        "Caminhada por Nakamise Shopping Street",
        "Templo Sensō-ji e arredores"
      ], evening: [
        "Jantar perto do hotel",
        "Volta tranquila para descansar depois da viagem"
      ] },
      { day: "02", date: "21 de fevereiro", title: "Asakusa & Akihabara", place: "Asakusa · Akihabara", morning: [
        "Sensō-ji pela manhã",
        "Mirante do Asakusa Culture Tourist Information Center"
      ], afternoon: [
        "Tokyo Tower e Shiba Park",
        "Akihabara para lojas e anime"
      ], evening: [
        "Vista da Tokyo Skytree ao cair da noite",
        "Pôr do sol em Asakusa"
      ] },
      { day: "03", date: "22 de fevereiro", title: "Harajuku & Shibuya", place: "Meiji Jingu · Harajuku · Shibuya", morning: [
        "Santuário Meiji Jingu",
        "Takeshita Street e Cat Street"
      ], afternoon: [
        "Shibuya Crossing",
        "Parada para fotos e cafés"
      ], evening: [
        "Shibuya Sky ao pôr do sol",
        "Jantar em Shibuya Center-Gai"
      ] },
      { day: "04", date: "23 de fevereiro", title: "Tóquio em ritmo livre", place: "Shinjuku · Shibuya", morning: [
        "Acordar devagar e café na região",
        "Explorar lojas e bairros mais tranquilos"
      ], afternoon: [
        "Shinjuku e seus bairros de rua",
        "Pausa para almoço em local favorito"
      ], evening: [
        "Noite livre para revisitar o lugar preferido",
        "Jantar casual e descanso"
      ] },
      { day: "05", date: "24 de fevereiro", title: "Tóquio cultural", place: "Ueno · Tokyo Tower", morning: [
        "Museus e parques de Ueno",
        "Passeio sem pressa pelo bairro"
      ], afternoon: [
        "Aula de culinária ou mercado local",
        "Tempo livre para compras"
      ], evening: [
        "Tokyo Tower à noite",
        "Volta ao hotel com a cidade iluminada"
      ] },
      { day: "06", date: "25 de fevereiro", title: "Trem para Kyoto", place: "Kyoto", morning: [
        "Shinkansen para Kyoto",
        "Check-in e acomodação"
      ], afternoon: [
        "Caminhada pelo bairro de Gion",
        "Pontocho para descanso e jantar"
      ], evening: [
        "Ruas tradicionais e iluminação da cidade",
        "Noite tranquila para ajustar ao novo ritmo"
      ] },
      { day: "07", date: "26 de fevereiro", title: "Higashiyama & Gion", place: "Higashiyama", morning: [
        "Kiyomizu-dera",
        "Sannenzaka e Ninenzaka"
      ], afternoon: [
        "Kodai-ji ou jardim local",
        "Pausa para café e fotos"
      ], evening: [
        "Passeio pelo rio Kamo",
        "Jantar em área mais calma"
      ] },
      { day: "08", date: "27 de fevereiro", title: "Fushimi Inari & Kyoto", place: "Fushimi Inari · Kyoto", morning: [
        "Fushimi Inari cedo",
        "Caminhada pelos torii vermelhos"
      ], afternoon: [
        "Almoço e tempo de descanso",
        "Mercado local ou lojas de rua"
      ], evening: [
        "Kyoto iluminada à noite",
        "Jantar tranquilo perto da hospedagem"
      ] },
      { day: "09", date: "28 de fevereiro", title: "Arashiyama & natureza", place: "Arashiyama", morning: [
        "Floresta de bambu",
        "Templo Tenryu-ji"
      ], afternoon: [
        "Rio Katsura e fácil caminhada",
        "Parada para sobremesa ou chá"
      ], evening: [
        "Regresso para Kyoto",
        "Noite livre para descansar"
      ] },
      { day: "10", date: "1 de março", title: "Kyoto para Osaka", place: "Osaka", morning: [
        "Últimos momentos em Kyoto",
        "Trens para Osaka"
      ], afternoon: [
        "Check-in e passeio por Namba",
        "Primeiro contato com Dotonbori"
      ], evening: [
        "Takoyaki e okonomiyaki",
        "Ruas iluminadas e noite em Osaka"
      ] },
      { day: "11", date: "2 de março", title: "Osaka em movimento", place: "Namba · Dotonbori", morning: [
        "Mercado e rua de comida",
        "Exploração de bairros mais vibrantes"
      ], afternoon: [
        "Café e compras em Namba",
        "Pausa para descanso"
      ], evening: [
        "Dotonbori à noite",
        "Jantar em izakaya"
      ] },
      { day: "12", date: "3 de março", title: "Castelo e Shinsekai", place: "Osaka", morning: [
        "Castelo de Osaka e parque ao redor",
        "Passeio sem pressa"
      ], afternoon: [
        "Shinsekai e bairros mais típicos",
        "Tempo livre para explorar"
      ], evening: [
        "Noite em Osaka",
        "Último jantar com calma"
      ] },
      { day: "13", date: "4 de março", title: "Dia livre em Osaka", place: "Osaka", morning: [
        "Escolha um bairro para andar sem agenda",
        "Café e compras de rua"
      ], afternoon: [
        "Parque ou shopping de destaque",
        "Descanso para aproveitar o ritmo da cidade"
      ], evening: [
        "Noite livre",
        "Revisitar lugar favorito"
      ] },
      { day: "14", date: "5 de março", title: "Últimos dias com calma", place: "Osaka · Tóquio", morning: [
        "Pausa para arrumar malas",
        "Últimos cafés e compra de lembranças"
      ], afternoon: [
        "Tempo livre para reforçar o que faltou",
        "Organizar deslocamentos finais"
      ], evening: [
        "Jantar leve e descanso",
        "Preparação para a saída"
      ] },
      { day: "15", date: "7 de março", title: "Despedida do Japão", place: "Aeroporto", morning: [
        "Última manhã sem pressa",
        "Check-out e deslocamento ao aeroporto"
      ], afternoon: [
        "Conferência do terminal e embarque",
        "Despedida do Japão"
      ], evening: [
        "—",
        "Viagem de volta"
      ] }
    ],
    highlights: [
      { title: "こんにちは", detail: "Konnichiwa — Olá! / Boa tarde.", tag: "CUMPRIMENTO" },
      { title: "ありがとうございます", detail: "Arigatō gozaimasu — Muito obrigado(a).", tag: "AGRADECIMENTO" },
      { title: "すみません", detail: "Sumimasen — Com licença / Desculpe. Também serve para chamar alguém.", tag: "COM LICENÇA" }
    ],
    bucket: [
      { title: "Mario Kart", detail: "Drive around Tokyo.", tag: "TÓQUIO" },
      { title: "Universal Studios Japan", detail: "Mario Park and Harry Potter World.", tag: "OSAKA" },
      { title: "Kimono", detail: "Dress as a Japanese with the Kimono", tag: "KYOTO" },
      { title: "Sensō-ji de dia e à noite", detail: "Explore o templo e a Nakamise Street; volte depois para vê-lo iluminado.", tag: "TÓQUIO" },
      { title: "Vista de Asakusa", detail: "Suba ao mirante do Asakusa Culture Tourist Information Center.", tag: "TÓQUIO" },
      { title: "Akihabara", detail: "Explore as ruas de jogos, anime e lojas temáticas.", tag: "TÓQUIO" },
      { title: "Tokyo Skytree ao pôr do sol", detail: "Opcional: confirme ingressos, horários e a antecedência de venda no site oficial.", tag: "TÓQUIO" },
      { title: "Shibuya Sky ao pôr do sol", detail: "Planeje a reserva com antecedência e confira a disponibilidade no canal oficial.", tag: "TÓQUIO" },
      { title: "Shibuya Crossing", detail: "Veja o cruzamento da rua e de um mirante; confirme acesso e horários.", tag: "TÓQUIO" },
      { title: "Fushimi Inari", detail: "Caminhe pelos torii vermelhos; não é preciso completar a trilha.", tag: "KYOTO" },
      { title: "Ruas de Higashiyama", detail: "Sannenzaka e Ninenzaka pedem um passeio sem pressa.", tag: "KYOTO" },
      { title: "Comer em Dotonbori", detail: "Takoyaki, okonomiyaki e letreiros refletidos no canal.", tag: "OSAKA" },
      { title: "Uma refeição de konbini", detail: "Experimente os clássicos de uma loja de conveniência local.", tag: "SABORES" }
    ],
    budget: [
      { item: "Passagens aéreas", amount: 110030, detail: "Ida e volta, por pessoa" },
      { item: "Hospedagem", amount: 120000, detail: "14 noites, quarto duplo" },
      { item: "Transporte", amount: 45000, detail: "Shinkansen, trens intermunicipais e metrô" },
      { item: "Alimentação", amount: 70000, detail: "Refeições e cafés" },
      { item: "Passeios & extras", amount: 35000, detail: "Entradas, atividades e margem extra" }
    ],
    essentials: [
      { title: "Passaporte e requisitos de entrada", detail: "Confira as regras oficiais para sua nacionalidade e as datas da viagem." },
      { title: "Internet no celular", detail: "Compare eSIM e Wi-Fi portátil; salve mapas offline antes de sair." },
      { title: "Transporte: Suica ou passe de metrô de 72 horas", detail: "Suica funciona em linhas JR como a Yamanote e em muitos metrôs/lojas. O passe de 72 h cobre Tokyo Metro e Toei Subway, mas não a linha JR Yamanote; compare as rotas antes de escolher." },
      { title: "Formulário de imigração e alfândega", detail: "Preencha os procedimentos no Visit Japan Web oficial antes da viagem e confira os requisitos atuais de entrada." },
      { title: "Aplicativo Flush", detail: "Baixe para encontrar banheiros durante os passeios." },
      { title: "Aplicativo Kuli Kuli", detail: "Baixe e teste o tradutor antes de viajar." },
      { title: "Dinheiro em ienes", detail: "Leve um meio de saque e uma reserva em espécie para lugares menores." },
      { title: "Calçados fáceis de tirar", detail: "Alguns templos e hospedagens tradicionais pedem que você tire os sapatos." },
      { title: "Adaptador e seguro viagem", detail: "O Japão usa tomadas tipo A/B; salve a apólice e contatos offline." }
    ],
    tip: "Com 15 dias, vale reservar certos mirantes e o shinkansen com antecedência. Leve um chip de dados, guarde mapas offline e deixe tempo para se perder nos bairros — é aí que o Japão fica mais especial."
  }
};
