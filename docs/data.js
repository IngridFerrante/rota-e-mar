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
    title: "Donegal, at your own pace.",
    intro: "Dramatic sea cliffs, winding coastal roads and a weekend exploring Ireland's northwest.",
    duration: "3 days · 2 nights",
    season: "Early winter · 5–7 November 2026",
    currency: "€",
    currencyLabel: "EUR",
    image: "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&w=1800&q=85",
    imagePosition: "center 54%",
    overview: [
      { icon: "⌖", label: "ROUTE", value: "Dublin · Donegal · Inishowen" },
      { icon: "↗", label: "GETTING AROUND", value: "Road trip by car" },
      { icon: "☼", label: "OVERNIGHT STAYS", value: "Ardara · Buncrana" }
    ],
    itinerary: [
      { day: "01", date: "Thursday, 5 November 2026", title: "Dublin to Donegal", place: "Dublin → County Donegal", stay: "Ardara", morning: "Leave Dublin early and drive north-west towards Donegal. Allow plenty of time for the journey and breaks.", afternoon: "Visit the Slieve League cliffs. Check local access and weather conditions before setting off.", evening: "Stop at Silver Strand, then continue to Ardara for your overnight stay." },
      { day: "02", date: "Friday, 6 November 2026", title: "Donegal's north-west coast", place: "Glenveagh · Fanad · Ballymastocker", stay: "Buncrana", morning: "Explore Glenveagh National Park. Check opening times and allow time for the drive to the coast.", afternoon: "Continue to Murder Hole Beach and Fanad Head Lighthouse. Check access, tides and daylight before visiting the beach.", evening: "See Ballymastocker Bay, then drive to Buncrana for your overnight stay." },
      { day: "03", date: "Saturday, 7 November 2026", title: "Inishowen & back to Dublin", place: "Inishowen Peninsula → Dublin", stay: "Return to Dublin", morning: "Visit Grianán of Aileach and Fort Dunree, then continue via Mamore Gap.", afternoon: "Head to Malin Head, Ireland's northernmost point. Allow enough daylight for the visit and drive back.", evening: "Drive back to Dublin. This is a long final day; check the route, weather and road conditions before departing." }
    ],
    bucket: [
      { title: "Slieve League", detail: "Take in the dramatic sea cliffs; check weather and access before you go.", tag: "CLIFFS" },
      { title: "Silver Strand", detail: "A sheltered curve of sand near Malin Beg. Check local access and conditions.", tag: "BEACH" },
      { title: "Glenveagh National Park", detail: "A peaceful mix of mountains, lakeside walks and castle gardens.", tag: "NATIONAL PARK" },
      { title: "Murder Hole Beach", detail: "A remote coastal spot: check tides, access and safety advice before visiting.", tag: "BEACH" },
      { title: "Fanad Head Lighthouse", detail: "A landmark lighthouse on a beautiful stretch of the Donegal coast.", tag: "LIGHTHOUSE" },
      { title: "Ballymastocker Bay", detail: "A sweeping Atlantic beach, especially lovely when the light breaks through.", tag: "COAST" },
      { title: "Grianán of Aileach", detail: "An ancient stone fort with wide views over the surrounding landscape.", tag: "HISTORY" },
      { title: "Fort Dunree", detail: "A coastal fort and museum overlooking Lough Swilly; check opening hours.", tag: "HISTORY" },
      { title: "Mamore Gap", detail: "A scenic mountain pass on the Inishowen Peninsula. Drive with care.", tag: "SCENIC DRIVE" },
      { title: "Malin Head", detail: "Ireland's northernmost point, with rugged Atlantic views.", tag: "COAST" }
    ],
    budget: [
      { item: "Flights", amount: 420, detail: "Illustrative return fare per person, if applicable" },
      { item: "Accommodation", amount: 200, detail: "Two nights: Ardara and Buncrana" },
      { item: "Car hire & fuel", amount: 230, detail: "Illustrative estimate for the road trip" },
      { item: "Food & drinks", amount: 150, detail: "Meals, snacks and pub stops" },
      { item: "Activities & extras", amount: 60, detail: "Entry fees and a small contingency" }
    ],
    essentials: [
      { title: "Passport & entry requirements", detail: "Check your passport validity and the entry rules for your nationality." },
      { title: "Waterproof layers", detail: "November weather can change quickly; bring a rain jacket and sturdy shoes." },
      { title: "Driving licence & rental details", detail: "Confirm rental requirements and remember: traffic drives on the left." },
      { title: "Payment cards & some cash", detail: "Keep a backup payment method for small businesses and unexpected stops." },
      { title: "Power adapter", detail: "Ireland uses Type G plugs." },
      { title: "Travel insurance", detail: "Save your policy and emergency contact details for offline access." }
    ],
    tip: "November days are short, with sunset before 5 pm. This is an ambitious driving itinerary, especially on Thursday and Saturday: start early, check local opening times and weather, and leave a generous buffer for the drive back to Dublin. In Ireland, drive on the left and use passing places on narrow rural roads."
  },
  japan: {
    id: "japan",
    navLabel: "Japão",
    navLabels: { "en-IE": "Japan", "pt-BR": "Japão" },
    country: "Japão",
    countryLabels: { "en-IE": "Japan", "pt-BR": "Japão" },
    region: "CIDADES, TEMPLOS E NOVOS SABORES",
    title: "Japão, Arigatou gozaimasu.",
    intro: "Luzes de Tóquio, caminhos tranquilos em Kyoto e o apetite sempre pronto de Osaka.",
    duration: "10 dias",
    season: "Outono / primavera",
    currency: "¥",
    currencyLabel: "JPY",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1800&q=85",
    imagePosition: "center 56%",
    overview: [
      { icon: "⌖", label: "CIDADES", value: "Tóquio · Kyoto · Osaka" },
      { icon: "↗", label: "TRANSPORTE EM TÓQUIO", value: "Suica ou passe de metrô 72h" },
      { icon: "⌂", label: "HOSPEDAGEM EM TÓQUIO", value: "Shinjuku · perto da Yamanote Line" },
      { icon: "☼", label: "RITMO", value: "Cultura & comida" }
    ],
    itinerary: [
      { day: "01", title: "Asakusa, Akihabara & Tokyo Tower", place: "Asakusa · Akihabara · Shiba · Skytree", morning: [
        "Templo Sensō-ji ⛩️",
        "Nakamise Shopping Street 🛍️ — lojas e lanches",
        "Suba ao mirante gratuito do Asakusa Culture Tourist Information Center para ver Asakusa de cima 📷",
        "Akihabara 🎮 — ruas de jogos e anime"
      ], afternoon: [
        "Tokyo Tower; procure a escadaria perto do estacionamento para tirar fotos 📷",
        "Templo Zōjō-ji ⛩️",
        "Caminhe pelo Shiba Park"
      ], evening: [
        "Tenku no Tori: parada para fotografar a Tokyo Skytree por baixo; confira a localização exata no Maps 📷",
        "Escada rolante para fotos: salve e confirme o ponto exato no Maps antes de ir 📷",
        "Mori JP Tower, 33.º andar: confirme previamente se o mirante está aberto a visitantes e se precisa de ingresso/reserva",
        "Tokyo Skytree ao pôr do sol (opcional): confirme a abertura dos ingressos no site oficial; a antecedência de duas semanas pode variar",
        "Volte ao Sensō-ji para vê-lo iluminado à noite ⛩️"
      ] },
      { day: "02", title: "Harajuku & Shibuya", place: "Meiji Jingu · Harajuku · Shibuya", morning: [
        "Santuário Meiji Jingu ⛩️",
        "Takeshita Street — lojas e lanches",
        "Cat Street",
        "Tokyu Plaza Harajuku, conhecido como Harakado 🛍️📷",
        "Shibuya Crossing: vista do terraço Mag's Park; confirme ingresso, horário e acesso",
        "No 5.º andar do mesmo edifício, procure a Dream Capsule e a janela com vista para o cruzamento; confirme se a loja continua no local",
        "Estátua de Hachikō 🐶",
        "Shibuya PARCO 🎮 — lojas da Nintendo e Pokémon; confira horários e andares",
        "Terraço do Shibuya PARCO: verifique se está aberto ao público no dia"
      ], afternoon: "Pausa flexível para almoço, deslocamento e descanso. A manhã tem muitas paradas: escolha suas prioridades para chegar com tempo ao pôr do sol.", evening: [
        "Shibuya Sky ao pôr do sol: compre ingresso com antecedência pelo canal oficial; os horários podem esgotar",
        "Passeie por Shibuya Center-Gai",
        "Volte ao Shibuya Crossing à noite"
      ] },
      { day: "03", title: "Tóquio contemporânea", place: "Shibuya", morning: "Meiji Jingu e uma caminhada sob as árvores de Yoyogi.", afternoon: "Harajuku e Omotesando; reserve tempo para cafés e lojas independentes.", evening: "Shibuya Crossing e jantar na região. Mirantes costumam exigir reserva." },
      { day: "04", title: "Um dia do seu jeito", place: "Tóquio", morning: "Escolha entre Tsukiji, uma aula de culinária ou uma visita a teamLab (ingresso antecipado).", afternoon: "Explore um bairro com calma: Shimokitazawa, Daikanyama ou Nakameguro.", evening: "Noite livre para revisitar o lugar favorito da cidade." },
      { day: "05", title: "Trem para Kyoto", place: "Kyoto", morning: "Shinkansen para Kyoto. Reserve assentos e confira as regras para bagagem grande.", afternoon: "Check-in e caminhada pelo centro histórico de Gion.", evening: "Jantar na região de Pontocho; reserve em restaurantes concorridos." },
      { day: "06", title: "Templos & caminhos", place: "Higashiyama", morning: "Kiyomizu-dera e as ruas tradicionais de Sannenzaka e Ninenzaka.", afternoon: "Kodai-ji ou pausa em um jardim. Evite tentar encaixar templos demais.", evening: "Passeio tranquilo pelas margens do rio Kamo." },
      { day: "07", title: "Fushimi Inari & Arashiyama", place: "Kyoto", morning: "Fushimi Inari cedo; a trilha completa é opcional e leva algumas horas.", afternoon: "Arashiyama e a floresta de bambu. Respeite as áreas residenciais.", evening: "Volta ao centro e jantar perto da hospedagem." },
      { day: "08", title: "Kyoto para Osaka", place: "Osaka", morning: "Mercado Nishiki para um café da manhã exploratório.", afternoon: "Trem para Osaka, check-in e passeio por Namba.", evening: "Dotonbori: prove takoyaki ou okonomiyaki sem pressa." },
      { day: "09", title: "Osaka à sua maneira", place: "Osaka", morning: "Castelo de Osaka e parque ao redor; confirme o que deseja visitar no interior.", afternoon: "Explore Shinsekai ou faça um bate-volta previamente escolhido.", evening: "Última noite: izakaya em Namba e sobremesa de rua." },
      { day: "10", title: "Despedida", place: "Osaka", morning: "Arrume as malas e aproveite um último café perto da hospedagem.", afternoon: "Deslocamento para o aeroporto com folga e conferência do terminal.", evening: "—" }
    ],
    bucket: [
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
      { item: "Passagens aéreas", amount: 110000, detail: "Ida e volta, por pessoa" },
      { item: "Hospedagem", amount: 120000, detail: "9 noites, quarto duplo" },
      { item: "Transporte", amount: 45000, detail: "Trens intermunicipais e metrô" },
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
    tip: "Em trens lotados, deixe a mochila à frente do corpo e mantenha o celular no silencioso. Em templos, observe as placas locais e peça autorização antes de fotografar pessoas. Os dias 1 e 2 em Tóquio têm muitas paradas: confirme os tempos de deslocamento e escolha prioridades, especialmente para os mirantes, lojas e visitas ao pôr do sol."
  }
};
