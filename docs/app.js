(() => {
  const trips = window.TRIPS;
  const languages = {
    "en-IE": {
      sections: ["Overview", "Itinerary", "Bucket list", "Budget", "Practical tips"],
      sidebarNav: "YOUR TRIPS", chooseTrip: "Choose a trip", mainNavigation: "Main navigation", quote: "The best itineraries leave room to get a little lost.", credit: "A LITTLE TRAVEL REMINDER", sidebarFooter: "MADE TO GO A LITTLE FURTHER",
      breadcrumb: "YOUR TRIPS", privateBadge: "YOUR PRIVATE TRAVEL GUIDE", stampLabel: "UP NEXT", stampTitle: "a grand<br>adventure", sectionNav: "Trip sections", mobileNav: "Trip sections",
      pageFooter: "MADE WITH CURIOSITY AND A VERY GOOD CUP OF COFFEE",
      overviewEyebrow: "A LITTLE PREVIEW", overviewTitle: "The plan, at a glance.", overviewAside: "A flexible itinerary. Lovely places. Time to enjoy them.",
      pace: "AT YOUR OWN PACE", discoveries: "{count} days<br>of discovery.", explore: "Mornings to explore, afternoons for surprises and evenings to unwind.", viewItinerary: "View the itinerary",
      easyPlanning: "EASY PLANNING", costIdea: "A clearer idea<br>of the costs.", costIntro: "Illustrative estimates you can update to suit your plans.", viewBudget: "Explore the budget",
      dreamTripTip: "A NOTE FOR THE TRIP WE'RE ALREADY DREAMING ABOUT", itineraryEyebrow: "DAY BY DAY", itineraryTitle: "The journey is part of it.", daysIdeas: "{count} days · ideas to make your own",
      day: "DAY", morning: "MORNING", afternoon: "AFTERNOON", evening: "EVENING", overnight: "Overnight",
      itineraryDisclaimer: "This itinerary is a starting point. Check opening times, access, weather and local conditions before setting off.",
      bucketEyebrow: "THINGS TO EXPERIENCE", bucketTitle: "A list to tick off along the way.", bucketCount: "{done} of {total} ticked off", bucketComplete: "Mark {title} as complete", checklistSaved: "Your checklist is saved in this browser on this device.",
      budgetEyebrow: "ESTIMATED COSTS", budgetTitle: "Good planning is part of the adventure.", estimateBadge: "ILLUSTRATIVE ESTIMATES", totalEstimated: "ESTIMATED TOTAL", perPerson: "per person · review prices and dates",
      budgetDisclaimer: "Illustrative estimates in {currency}; airfares and accommodation vary by season and how far ahead you book. Edit the amounts in docs/data.js.",
      essentialsEyebrow: "BEFORE YOU PACK", essentialsTitle: "Small details make a better trip.", essentialsCount: "{done} of {total} checked", markChecked: "Mark {title} as checked",
      localReminder: "A LOCAL REMINDER", essentialsDisclaimer: "Check official entry requirements, weather and opening times close to your travel dates."
    },
    "pt-BR": {
      sections: ["Visão geral", "Roteiro", "Lista de desejos", "Orçamento", "Dicas práticas"],
      sidebarNav: "SUAS VIAGENS", chooseTrip: "Escolha uma viagem", mainNavigation: "Navegação principal", quote: "O melhor roteiro é aquele que também deixa espaço para se perder.", credit: "UM LEMBRETE DE VIAGEM", sidebarFooter: "FEITO PARA IR MAIS LONGE",
      breadcrumb: "SUAS VIAGENS", privateBadge: "SEU GUIA PARTICULAR", stampLabel: "PRÓXIMA", stampTitle: "grande<br>aventura", sectionNav: "Seções da viagem", mobileNav: "Seções da viagem no celular",
      pageFooter: "FEITO COM CURIOSIDADE E UMA BOA DOSE DE CAFÉ",
      overviewEyebrow: "UM GOSTINHO DO QUE VEM AÍ", overviewTitle: "O plano, em poucas palavras.", overviewAside: "Um roteiro flexível. Bons lugares. Tempo para aproveitar.",
      pace: "NO SEU RITMO", discoveries: "{count} dias<br>de descobertas.", explore: "Manhãs para explorar, tardes para se surpreender e noites para brindar.", viewItinerary: "Ver o roteiro",
      easyPlanning: "PLANEJAMENTO LEVE", costIdea: "Uma ideia clara<br>dos custos.", costIntro: "Estimativas fáceis de ajustar para fazer a viagem caber nos seus planos.", viewBudget: "Explorar orçamento",
      dreamTripTip: "DICA DE QUEM JÁ ESTÁ SONHANDO COM A VIAGEM", itineraryEyebrow: "DIA A DIA", itineraryTitle: "O caminho também faz parte.", daysIdeas: "{count} dias · ideias para adaptar no caminho",
      day: "DIA", morning: "MANHÃ", afternoon: "TARDE", evening: "NOITE", overnight: "Pernoite",
      itineraryDisclaimer: "Este roteiro é um ponto de partida: confira horários, reservas e condições locais antes de cada passeio.",
      bucketEyebrow: "COISAS PARA VIVER", bucketTitle: "Uma lista para ir riscando.", bucketCount: "{done} de {total} marcados", bucketComplete: "Marcar {title} como concluído", checklistSaved: "Sua lista fica salva neste navegador neste aparelho.",
      budgetEyebrow: "ESTIMATIVA DE CUSTOS", budgetTitle: "Planejar também é viajar.", estimateBadge: "VALORES DE EXEMPLO", totalEstimated: "TOTAL ESTIMADO", perPerson: "por pessoa · revise valores e datas",
      budgetDisclaimer: "Estimativas ilustrativas em {currency}; passagens e hospedagem variam bastante conforme época e antecedência. Edite os valores no arquivo docs/data.js.",
      essentialsEyebrow: "ANTES DE FAZER AS MALAS", essentialsTitle: "Pequenos detalhes, viagem melhor.", essentialsCount: "{done} de {total} conferidos", markChecked: "Marcar {title} como conferido",
      localReminder: "UM LEMBRETE LOCAL", essentialsDisclaimer: "Confirme requisitos de entrada, clima e regras oficiais perto da data da viagem."
    }
  };
  const sectionIds = ["overview", "itinerary", "bucket", "budget", "essentials"];
  const icons = { donegal: "✳", japan: "◈" };
  let activeTrip = "donegal";
  let activeSection = "overview";

  const destinationNav = document.querySelector("#destination-nav");
  const sectionNav = document.querySelector("#section-nav");
  const mobileNav = document.querySelector("#mobile-nav");
  const content = document.querySelector("#page-content");

  function t(key) {
    const language = languages[trips[activeTrip].language] || languages["pt-BR"];
    return language[key];
  }

  function interpolate(template, values) {
    return template.replace(/\{(\w+)\}/g, (_, key) => values[key] ?? "");
  }

  function renderMomentContent(text) {
    if (Array.isArray(text)) {
      return `<ul class="moment-list">${text.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`;
    }
    return `<p>${escapeHtml(text)}</p>`;
  }

  function tripLabel(trip, label) {
    const language = trips[activeTrip].language || "pt-BR";
    const translations = label === "navLabel" ? trip.navLabels : trip[`${label}Labels`];
    return translations?.[language] || trip[label];
  }

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, (char) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    })[char]);
  }

  function renderDestinations() {
    destinationNav.innerHTML = Object.values(trips).map((trip) => {
      const name = tripLabel(trip, "navLabel");
      const country = tripLabel(trip, "country");
      return `
      <button class="destination-link ${trip.id === activeTrip ? "is-active" : ""}" data-trip="${trip.id}" aria-label="${escapeHtml(t("chooseTrip"))}: ${escapeHtml(name)}" aria-current="${trip.id === activeTrip ? "page" : "false"}">
        <span class="destination-icon">${icons[trip.id]}</span>
        <span class="destination-name">${escapeHtml(name)}${country !== name ? `<small>${escapeHtml(country)}</small>` : ""}</span>
        <span class="destination-arrow" aria-hidden="true">↗</span>
      </button>`;
    }).join("");
  }

  function renderSectionNav() {
    const markup = sectionIds.map((id, index) => `
      <button class="section-link ${id === activeSection ? "is-active" : ""}" data-section="${id}" aria-current="${id === activeSection ? "page" : "false"}">
        <span class="section-icon" aria-hidden="true">${["◫", "⌁", "☆", "◉", "✓"][index]}</span><span>${t("sections")[index]}</span>
      </button>`).join("");
    sectionNav.innerHTML = markup;
    mobileNav.innerHTML = markup;
    sectionNav.setAttribute("aria-label", t("sectionNav"));
    mobileNav.setAttribute("aria-label", t("mobileNav"));
  }

  function renderStaticLabels(trip) {
    document.documentElement.lang = trip.language || "pt-BR";
    document.querySelector("#sidebar").setAttribute("aria-label", t("mainNavigation"));
    document.querySelector("#brand-link").setAttribute("aria-label", "Rota & Mar");
    document.querySelector("#sidebar-nav-label").textContent = t("sidebarNav");
    document.querySelector("#destination-nav").setAttribute("aria-label", t("chooseTrip"));
    document.querySelector("#sidebar-quote").textContent = t("quote");
    document.querySelector("#sidebar-credit").textContent = t("credit");
    document.querySelector("#sidebar-footer-text").textContent = t("sidebarFooter");
    document.querySelector("#breadcrumb-label").textContent = t("breadcrumb");
    document.querySelector("#private-badge-label").textContent = t("privateBadge");
    document.querySelector("#stamp-label").textContent = t("stampLabel");
    document.querySelector("#stamp-title").innerHTML = t("stampTitle");
    document.querySelector("#page-footer-text").textContent = t("pageFooter");
  }

  function renderHero(trip) {
    document.querySelector("#breadcrumb-destination").textContent = tripLabel(trip, "navLabel");
    document.querySelector("#trip-region").textContent = trip.region;
    document.querySelector("#trip-title").textContent = trip.title;
    document.querySelector("#trip-intro").textContent = trip.intro;
    document.querySelector("#trip-duration").textContent = trip.duration;
    document.querySelector("#trip-season").textContent = trip.season;
    const hero = document.querySelector("#trip-hero");
    hero.style.setProperty("--hero-image", `url("${trip.image}")`);
    hero.style.setProperty("--hero-position", trip.imagePosition);
    hero.dataset.trip = trip.id;
  }

  function overviewTemplate(trip) {
    return `
      <div class="section-heading">
        <div><span class="eyebrow">${t("overviewEyebrow")}</span><h2>${t("overviewTitle")}</h2></div>
        <p class="heading-aside">${t("overviewAside")}</p>
      </div>
      <div class="overview-grid overview-grid--${trip.overview.length}">
        ${trip.overview.map((item) => `<article class="overview-card"><span class="overview-icon" aria-hidden="true">${item.icon}</span><span class="card-label">${escapeHtml(item.label)}</span><strong>${escapeHtml(item.value)}</strong></article>`).join("")}
      </div>
      <div class="feature-grid">
        <article class="feature-card feature-itinerary"><div class="feature-topline"><span>${t("pace")}</span><span aria-hidden="true">↗</span></div><h3>${interpolate(t("discoveries"), { count: trip.itinerary.length })}</h3><p>${t("explore")}</p><button class="text-link" data-section="itinerary">${t("viewItinerary")} <span aria-hidden="true">→</span></button></article>
        <article class="feature-card feature-budget"><div class="feature-topline"><span>${t("easyPlanning")}</span><span aria-hidden="true">◉</span></div><h3>${t("costIdea")}</h3><p>${t("costIntro")}</p><button class="text-link" data-section="budget">${t("viewBudget")} <span aria-hidden="true">→</span></button></article>
      </div>
      <div class="tip-banner"><span class="tip-spark" aria-hidden="true">✳</span><div><span class="card-label">${t("dreamTripTip")}</span><p>${escapeHtml(trip.tip)}</p></div></div>`;
  }

  function itineraryTemplate(trip) {
    return `
      <div class="section-heading"><div><span class="eyebrow">${t("itineraryEyebrow")}</span><h2>${t("itineraryTitle")}</h2></div><p class="heading-aside">${interpolate(t("daysIdeas"), { count: trip.itinerary.length })}</p></div>
      <div class="timeline">${trip.itinerary.map((day) => `
        <article class="timeline-day">
          <div class="day-marker"><span>${t("day")}</span><strong>${escapeHtml(day.day)}</strong></div>
          <div class="day-content"><div class="day-heading"><div><h3>${escapeHtml(day.title)}</h3>${day.date ? `<span class="day-date">${escapeHtml(day.date)}</span>` : ""}<span class="day-place">⌖ ${escapeHtml(day.place)}</span></div><span class="day-chevron" aria-hidden="true">✳</span></div>
            <div class="day-moments">
              ${[[t("morning"), day.morning], [t("afternoon"), day.afternoon], [t("evening"), day.evening]].map(([label, text]) => `<div class="moment"><span class="moment-dot" aria-hidden="true"></span><div><span class="moment-label">${label}</span>${renderMomentContent(text)}</div></div>`).join("")}
            </div>
            ${day.stay ? `<span class="day-stay">${t("overnight")}: ${escapeHtml(day.stay)}</span>` : ""}
          </div>
        </article>`).join("")}</div>
      <p class="disclaimer">${t("itineraryDisclaimer")}</p>`;
  }

  function bucketTemplate(trip) {
    const checked = readChecks(trip.id);
    return `
      <div class="section-heading"><div><span class="eyebrow">${t("bucketEyebrow")}</span><h2>${t("bucketTitle")}</h2></div><p class="heading-aside">${interpolate(t("bucketCount"), { done: checked.length, total: trip.bucket.length })}</p></div>
      <div class="bucket-grid">${trip.bucket.map((item, index) => `
        <label class="bucket-card ${checked.includes(index) ? "is-checked" : ""}">
          <input class="bucket-check" type="checkbox" data-check="${index}" ${checked.includes(index) ? "checked" : ""} aria-label="${escapeHtml(interpolate(t("bucketComplete"), { title: item.title }))}">
          <span class="check-visual" aria-hidden="true">✓</span><span class="bucket-tag">${escapeHtml(item.tag)}</span>
          <strong>${escapeHtml(item.title)}</strong><span class="bucket-detail">${escapeHtml(item.detail)}</span>
        </label>`).join("")}</div>
      <p class="disclaimer">${t("checklistSaved")}</p>`;
  }

  function formatMoney(amount, trip) {
    return new Intl.NumberFormat(trip.language || "pt-BR", { style: "currency", currency: trip.currencyLabel, maximumFractionDigits: 0 }).format(amount);
  }

  function budgetTemplate(trip) {
    const total = trip.budget.reduce((sum, item) => sum + item.amount, 0);
    return `
      <div class="section-heading"><div><span class="eyebrow">${t("budgetEyebrow")}</span><h2>${t("budgetTitle")}</h2></div><span class="estimate-badge">${t("estimateBadge")}</span></div>
      <div class="budget-total"><div><span class="card-label">${t("totalEstimated")}</span><strong>${formatMoney(total, trip)}</strong><span class="total-note">${t("perPerson")}</span></div><div class="budget-coin" aria-hidden="true">${trip.currency}</div></div>
      <div class="budget-list">${trip.budget.map((item) => {
        const percent = Math.round(item.amount / total * 100);
        return `<article class="budget-row"><div class="budget-row-heading"><div><strong>${escapeHtml(item.item)}</strong><span>${escapeHtml(item.detail)}</span></div><strong>${formatMoney(item.amount, trip)}</strong></div><div class="budget-track" role="img" aria-label="${escapeHtml(item.item)}: ${percent}% do orçamento"><span style="width:${percent}%"></span></div></article>`;
      }).join("")}</div>
      <p class="disclaimer">${interpolate(t("budgetDisclaimer"), { currency: trip.currencyLabel })}</p>`;
  }

  function essentialsTemplate(trip) {
    const checked = readChecks(`${trip.id}-essentials`);
    return `
      <div class="section-heading"><div><span class="eyebrow">${t("essentialsEyebrow")}</span><h2>${t("essentialsTitle")}</h2></div><p class="heading-aside">${interpolate(t("essentialsCount"), { done: checked.length, total: trip.essentials.length })}</p></div>
      <div class="essentials-layout"><div class="essentials-list">${trip.essentials.map((item, index) => `
        <label class="essential-item ${checked.includes(index) ? "is-checked" : ""}">
          <input type="checkbox" data-essential="${index}" ${checked.includes(index) ? "checked" : ""} aria-label="${escapeHtml(interpolate(t("markChecked"), { title: item.title }))}">
          <span class="check-visual" aria-hidden="true">✓</span><span><strong>${escapeHtml(item.title)}</strong><small>${escapeHtml(item.detail)}</small></span>
        </label>`).join("")}</div>
        <aside class="culture-card"><span class="culture-icon" aria-hidden="true">✳</span><span class="card-label">${t("localReminder")}</span><p>${escapeHtml(trip.tip)}</p></aside></div>
      <p class="disclaimer">${t("essentialsDisclaimer")}</p>`;
  }

  function readChecks(key) {
    try {
      const value = JSON.parse(localStorage.getItem(`rota-mar:${key}`) || "[]");
      return Array.isArray(value) ? value.filter(Number.isInteger) : [];
    } catch (error) {
      console.warn("Não foi possível ler o checklist salvo neste navegador.", error);
      return [];
    }
  }

  function saveCheck(key, index, isChecked) {
    const checked = readChecks(key).filter((value) => value !== index);
    if (isChecked) checked.push(index);
    try {
      localStorage.setItem(`rota-mar:${key}`, JSON.stringify(checked));
    } catch (error) {
      console.warn("Não foi possível salvar o checklist neste navegador.", error);
    }
  }

  function renderContent(trip) {
    const templates = {
      overview: overviewTemplate,
      itinerary: itineraryTemplate,
      bucket: bucketTemplate,
      budget: budgetTemplate,
      essentials: essentialsTemplate
    };
    content.innerHTML = templates[activeSection](trip);
  }

  function render() {
    const trip = trips[activeTrip];
    renderStaticLabels(trip);
    renderDestinations();
    renderSectionNav();
    renderHero(trip);
    renderContent(trip);
  }

  document.addEventListener("click", (event) => {
    const tripButton = event.target.closest("[data-trip]");
    const sectionButton = event.target.closest("[data-section]");
    if (tripButton) {
      activeTrip = tripButton.dataset.trip;
      activeSection = "overview";
      render();
    } else if (sectionButton) {
      activeSection = sectionButton.dataset.section;
      render();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  });

  document.addEventListener("change", (event) => {
    const check = event.target;
    if (check.matches("[data-check]")) saveCheck(`${activeTrip}`, Number(check.dataset.check), check.checked);
    if (check.matches("[data-essential]")) saveCheck(`${activeTrip}-essentials`, Number(check.dataset.essential), check.checked);
    if (check.matches("[data-check], [data-essential]")) renderContent(trips[activeTrip]);
  });

  render();
})();
