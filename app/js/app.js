// History CSS App - Country Wiki Style

let currentPage = "home";
let currentCountry = null;
let currentSection = null;
let flashcardIndex = 0;
let showAnswer = false;
let filteredCards = [];
let showPastLeaders = false;

const contentEl = document.getElementById("content");
const titleEl = document.getElementById("page-title");
const searchModal = document.getElementById("search-modal");
const searchInput = document.getElementById("search-input");
const searchResults = document.getElementById("search-results");

document.querySelectorAll(".nav-item").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".nav-item").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    currentPage = btn.dataset.page;
    currentCountry = null;
    currentSection = null;
    showPastLeaders = false;
    render();
  });
});

document.getElementById("search-btn").addEventListener("click", () => {
  searchModal.classList.remove("hidden");
  searchInput.value = "";
  searchResults.innerHTML = "";
  searchInput.focus();
});

document.getElementById("close-search").addEventListener("click", () => {
  searchModal.classList.add("hidden");
});

searchInput.addEventListener("input", (e) => {
  const q = e.target.value.toLowerCase().trim();
  if (q.length < 2) { searchResults.innerHTML = ""; return; }
  const results = [];
  Object.entries(APP_DATA.revision).forEach(([country, items]) => {
    items.forEach(item => {
      if (item.label.toLowerCase().includes(q) || item.value.toLowerCase().includes(q)) {
        results.push({ type: "revision", country, ...item });
      }
    });
  });
  APP_DATA.flashcards.forEach(card => {
    if (card.q.toLowerCase().includes(q) || card.a.toLowerCase().includes(q)) {
      results.push({ type: "card", ...card });
    }
  });
  searchResults.innerHTML = results.slice(0, 12).map(r => {
    if (r.type === "revision") {
      return `<div class="search-result-item"><strong>${r.label}</strong><br><span style="color:var(--text-muted)">${r.value}</span></div>`;
    }
    return `<div class="search-result-item"><strong>${r.q}</strong><br><span style="color:var(--accent)">${r.a}</span></div>`;
  }).join("") || "<p style='color:var(--text-muted)'>No results</p>";
});

function render() {
  if (currentCountry && currentSection) {
    renderSection(currentCountry, currentSection);
    return;
  }
  if (currentCountry) {
    renderCountryDetail(currentCountry);
    return;
  }
  switch (currentPage) {
    case "home": renderHome(); break;
    case "countries": renderCountries(); break;
    case "revision": renderRevision(); break;
    case "flashcards": renderFlashcards(); break;
    case "more": renderMore(); break;
  }
}

function renderHome() {
  titleEl.textContent = "History CSS";
  const totalFacts = Object.values(APP_DATA.revision).flat().length;
  contentEl.innerHTML = `
    <div class="stats">
      <div class="stat-box"><div class="num">${APP_DATA.countries.length}</div><div class="label">Countries</div></div>
      <div class="stat-box"><div class="num">${APP_DATA.flashcards.length}</div><div class="label">Flashcards</div></div>
      <div class="stat-box"><div class="num">${totalFacts}</div><div class="label">Facts</div></div>
    </div>
    <div class="section-title">Quick Start</div>
    <div class="card clickable" onclick="goTo('revision')">
      <h3>⚡ One-Line Revision</h3>
      <p>High-yield dates & facts for daily revision</p>
    </div>
    <div class="card clickable" onclick="goTo('flashcards')">
      <h3>🃏 Flashcards</h3>
      <p>Test yourself with spaced practice</p>
    </div>
    <div class="card clickable" onclick="goTo('countries')">
      <h3>🌍 Countries</h3>
      <p>Pakistan • India • Afghanistan • China • Iran</p>
    </div>
    <div class="section-title">Priority for CSS</div>
    <div class="card">
      <p>1. Pakistan (full depth)<br>2. India (bilateral focus)<br>3. Afghanistan → China → Iran</p>
    </div>
  `;
}

function renderCountries() {
  titleEl.textContent = "Countries";
  contentEl.innerHTML = `
    <div class="country-grid">
      ${APP_DATA.countries.map(c => `
        <div class="country-card" onclick="openCountry('${c.id}')">
          <div class="flag">${c.flag}</div>
          <div class="name">${c.name}</div>
          <div class="meta">${c.capital || ""}</div>
          <div class="meta-small">${c.eventsCount || 0} events</div>
        </div>
      `).join("")}
    </div>
  `;
}

function openCountry(id) {
  currentCountry = id;
  currentSection = null;
  showPastLeaders = false;
  render();
}

function renderCountryDetail(id) {
  const c = APP_DATA.countries.find(x => x.id === id);
  const data = APP_DATA[id];
  titleEl.textContent = c.name;

  if (!data) {
    contentEl.innerHTML = `
      <button class="back-btn" onclick="currentCountry=null;render()">← Back</button>
      <div class="card" style="text-align:center;padding:24px">
        <div style="font-size:3rem">${c.flag}</div>
        <h2>${c.name}</h2>
        <p style="color:var(--text-muted);margin-top:8px">Detailed wiki coming soon. Use Revision & Flashcards for now.</p>
      </div>
    `;
    return;
  }

  contentEl.innerHTML = `
    <button class="back-btn" onclick="currentCountry=null;render()">← Back</button>
    
    <div class="country-hero">
      <h2>${c.name}</h2>
      <div class="hero-tags">
        <span class="tag">📍 ${c.capital}</span>
        <span class="tag">🌐 ${c.region}</span>
        <span class="tag">💰 ${c.currency}</span>
      </div>
      <div class="hero-tags" style="margin-top:6px">
        ${c.languages.map(l => `<span class="tag-sm">${l}</span>`).join("")}
      </div>
    </div>

    <div class="section-title">Key Facts</div>
    <div class="card">
      <ul class="fact-list">
        ${data.keyFacts.map(f => `<li>${f}</li>`).join("")}
      </ul>
    </div>

    <div class="section-title">Government & Leadership</div>
    <div class="card">
      <div class="leader-label">Head of State</div>
      ${renderLeader(data.presidents.find(p => p.current) || data.presidents[0], true)}
      <div class="leader-label" style="margin-top:14px">Head of Government</div>
      ${renderLeader(data.primeMinisters.find(p => p.current) || data.primeMinisters[0], true)}
      
      <button class="link-btn" onclick="togglePastLeaders()">
        ${showPastLeaders ? "▲ Hide past leaders" : "▼ Show past heads of state & government"}
      </button>
      
      ${showPastLeaders ? `
        <div class="section-title" style="margin-top:16px">Past Presidents</div>
        ${data.presidents.filter(p => !p.current).map(p => renderLeader(p)).join("")}
        <div class="section-title" style="margin-top:16px">Past Prime Ministers</div>
        ${data.primeMinisters.filter(p => !p.current).slice(0, 12).map(p => renderLeader(p)).join("")}
      ` : ""}
    </div>

    <div class="section-title">Landmark Events</div>
    ${data.landmarkEvents.slice(0, 8).map(e => `
      <div class="event-card">
        <div class="event-year">${e.year}</div>
        <div class="event-body">
          <div class="event-title">${e.title}</div>
          <div class="event-desc">${e.desc}</div>
        </div>
      </div>
    `).join("")}
    <button class="btn btn-secondary" style="width:100%;margin:8px 0 16px" onclick="openSection('events')">
      View all ${data.landmarkEvents.length} events →
    </button>

    <div class="section-title">Wiki Sections</div>
    <div class="card">
      ${data.wikiSections.map(s => `
        <div class="wiki-item" onclick="openSection('${s.id}')">
          <span>${s.title}</span>
          <span class="chevron">›</span>
        </div>
      `).join("")}
    </div>
  `;
}

function renderLeader(leader, isCurrent = false) {
  if (!leader) return "";
  return `
    <div class="leader-card ${isCurrent ? 'current' : ''}">
      <div>
        <div class="leader-name">${leader.name}</div>
        <div class="leader-role">${leader.role}</div>
        <div class="leader-period">${leader.period}</div>
      </div>
      ${isCurrent ? '<span class="current-badge">Current</span>' : ''}
    </div>
  `;
}

function togglePastLeaders() {
  showPastLeaders = !showPastLeaders;
  render();
}

function openSection(sectionId) {
  currentSection = sectionId;
  render();
}

function renderSection(countryId, sectionId) {
  const c = APP_DATA.countries.find(x => x.id === countryId);
  const data = APP_DATA[countryId];
  titleEl.textContent = c.name;

  let body = "";
  if (sectionId === "events") {
    body = data.landmarkEvents.map(e => `
      <div class="event-card">
        <div class="event-year">${e.year}</div>
        <div class="event-body">
          <div class="event-title">${e.title}</div>
          <div class="event-desc">${e.desc}</div>
        </div>
      </div>
    `).join("");
  } else if (sectionId === "wars") {
    body = data.wars.map(w => `
      <div class="card">
        <div class="event-title">${w.name} (${w.year})</div>
        <p style="color:var(--text-muted);margin-top:4px">${w.result}</p>
      </div>
    `).join("") + `<div class="section-title">Key Treaties</div>` +
    data.treaties.map(t => `
      <div class="card">
        <div class="event-title">${t.name} (${t.year})</div>
        <p style="color:var(--text-muted);margin-top:4px">${t.note}</p>
      </div>
    `).join("");
  } else if (sectionId === "leaders") {
    body = `
      <div class="section-title">Presidents</div>
      ${data.presidents.map(p => renderLeader(p, p.current)).join("")}
      <div class="section-title">Prime Ministers</div>
      ${data.primeMinisters.map(p => renderLeader(p, p.current)).join("")}
    `;
  } else if (sectionId === "geography") {
    body = `<div class="card"><ul class="fact-list">${data.geography.map(f => `<li>${f}</li>`).join("")}</ul></div>`;
  } else if (sectionId === "economy") {
    body = `<div class="card"><ul class="fact-list">${data.economy.map(f => `<li>${f}</li>`).join("")}</ul></div>`;
  } else if (sectionId === "ir") {
    body = `<div class="card"><ul class="fact-list">${data.international.map(f => `<li>${f}</li>`).join("")}</ul></div>`;
  } else if (sectionId === "exam" || sectionId === "basic" || sectionId === "independence" || sectionId === "government") {
    body = `
      <div class="card">
        <ul class="fact-list">
          ${data.keyFacts.map(f => `<li>${f}</li>`).join("")}
        </ul>
      </div>
      <div class="section-title">Quick Revision Facts</div>
      ${(APP_DATA.revision.pakistan || []).map(r => `
        <div class="revision-item">
          <div class="label">${r.label}</div>
          <div class="value">${r.value}</div>
        </div>
      `).join("")}
    `;
  } else {
    body = `<div class="card"><p>Content coming soon.</p></div>`;
  }

  contentEl.innerHTML = `
    <button class="back-btn" onclick="currentSection=null;render()">← Back to ${c.name}</button>
    <div class="section-title">${data.wikiSections.find(s => s.id === sectionId)?.title || sectionId}</div>
    ${body}
  `;
}

function renderRevision() {
  titleEl.textContent = "One-Line Revision";
  let html = "";
  ["pakistan", "india", "afghanistan", "china", "iran"].forEach(cid => {
    const items = APP_DATA.revision[cid] || [];
    const c = APP_DATA.countries.find(x => x.id === cid);
    html += `<div class="section-title">${c.flag} ${c.name}</div>`;
    items.forEach(item => {
      html += `<div class="revision-item"><div class="label">${item.label}</div><div class="value">${item.value}</div></div>`;
    });
  });
  contentEl.innerHTML = html;
}

function renderFlashcards() {
  titleEl.textContent = "Flashcards";
  if (filteredCards.length === 0) filteredCards = [...APP_DATA.flashcards];
  if (flashcardIndex >= filteredCards.length) flashcardIndex = 0;
  const card = filteredCards[flashcardIndex];
  contentEl.innerHTML = `
    <div style="text-align:center;color:var(--text-muted);margin-bottom:8px">
      Card ${flashcardIndex + 1} of ${filteredCards.length}
    </div>
    <div class="flashcard-container">
      <div class="flashcard ${showAnswer ? 'show-answer' : ''}" onclick="toggleAnswer()">
        <div class="question">${card.q}</div>
        <div class="answer">${card.a}</div>
        <div style="position:absolute;bottom:12px;font-size:0.75rem;color:var(--text-muted)">
          ${showAnswer ? "Tap for question" : "Tap to reveal answer"}
        </div>
      </div>
    </div>
    <div class="flashcard-actions">
      <button class="btn btn-danger" onclick="nextCard()">Hard</button>
      <button class="btn btn-secondary" onclick="toggleAnswer()">Flip</button>
      <button class="btn btn-success" onclick="nextCard()">Easy</button>
    </div>
    <div style="margin-top:20px">
      <div class="section-title">Filter</div>
      <div style="display:flex;flex-wrap:wrap;gap:8px">
        <button class="btn btn-secondary" style="flex:none;padding:8px 12px" onclick="filterCards(null)">All</button>
        ${APP_DATA.countries.map(c => `
          <button class="btn btn-secondary" style="flex:none;padding:8px 12px" onclick="filterCards('${c.id}')">${c.flag}</button>
        `).join("")}
      </div>
    </div>
  `;
}

function toggleAnswer() { showAnswer = !showAnswer; renderFlashcards(); }
function nextCard() { showAnswer = false; flashcardIndex = (flashcardIndex + 1) % filteredCards.length; renderFlashcards(); }
function filterCards(id) {
  filteredCards = id ? APP_DATA.flashcards.filter(c => c.country === id) : [...APP_DATA.flashcards];
  flashcardIndex = 0; showAnswer = false; renderFlashcards();
}

function renderMore() {
  titleEl.textContent = "More";
  contentEl.innerHTML = `
    <div class="card">
      <h3>About</h3>
      <p>Personal History Knowledge base for CSS focused on Pakistan, India, Afghanistan, China & Iran.</p>
    </div>
    <div class="card">
      <h3>How to Install on Android</h3>
      <p>Open in Chrome → Menu (⋮) → Add to Home screen / Install app</p>
    </div>
    <div class="card">
      <h3>Study Tip</h3>
      <p>Use One-Line Revision daily. Practice Flashcards. Open Pakistan for full wiki-style notes.</p>
    </div>
  `;
}

function goTo(page) {
  currentPage = page;
  currentCountry = null;
  currentSection = null;
  document.querySelectorAll(".nav-item").forEach(b => b.classList.toggle("active", b.dataset.page === page));
  render();
}

window.openCountry = openCountry;
window.openSection = openSection;
window.togglePastLeaders = togglePastLeaders;
window.toggleAnswer = toggleAnswer;
window.nextCard = nextCard;
window.filterCards = filterCards;
window.goTo = goTo;
window.render = render;

render();

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js").catch(() => {});
}
