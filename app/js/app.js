// History CSS App - Main Logic

let currentPage = "home";
let currentCountry = null;
let flashcardIndex = 0;
let showAnswer = false;
let filteredCards = [...APP_DATA.flashcards];

const contentEl = document.getElementById("content");
const titleEl = document.getElementById("page-title");
const searchModal = document.getElementById("search-modal");
const searchInput = document.getElementById("search-input");
const searchResults = document.getElementById("search-results");

// Navigation
document.querySelectorAll(".nav-item").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".nav-item").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    currentPage = btn.dataset.page;
    currentCountry = null;
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
  if (q.length < 2) {
    searchResults.innerHTML = "";
    return;
  }
  const results = [];
  // Search revision
  Object.entries(APP_DATA.revision).forEach(([country, items]) => {
    items.forEach(item => {
      if (item.label.toLowerCase().includes(q) || item.value.toLowerCase().includes(q)) {
        results.push({ type: "revision", country, ...item });
      }
    });
  });
  // Search flashcards
  APP_DATA.flashcards.forEach(card => {
    if (card.q.toLowerCase().includes(q) || card.a.toLowerCase().includes(q)) {
      results.push({ type: "card", ...card });
    }
  });

  searchResults.innerHTML = results.slice(0, 15).map(r => {
    if (r.type === "revision") {
      return `<div class="search-result-item"><strong>${r.label}</strong><br><span style="color:var(--text-muted)">${r.value} (${r.country})</span></div>`;
    }
    return `<div class="search-result-item"><strong>${r.q}</strong><br><span style="color:var(--accent)">${r.a}</span></div>`;
  }).join("") || "<p style='color:var(--text-muted)'>No results</p>";
});

function render() {
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
  contentEl.innerHTML = `
    <div class="stats">
      <div class="stat-box">
        <div class="num">5</div>
        <div class="label">Countries</div>
      </div>
      <div class="stat-box">
        <div class="num">${APP_DATA.flashcards.length}</div>
        <div class="label">Flashcards</div>
      </div>
      <div class="stat-box">
        <div class="num">${Object.values(APP_DATA.revision).flat().length}</div>
        <div class="label">Facts</div>
      </div>
    </div>

    <div class="section-title">Quick Start</div>
    <div class="card" onclick="goTo('revision')" style="cursor:pointer">
      <h3>⚡ One-Line Revision</h3>
      <p>High-yield dates & facts for daily revision</p>
    </div>
    <div class="card" onclick="goTo('flashcards')" style="cursor:pointer">
      <h3>🃏 Flashcards</h3>
      <p>Test yourself with spaced practice</p>
    </div>
    <div class="card" onclick="goTo('countries')" style="cursor:pointer">
      <h3>🌍 Countries</h3>
      <p>Pakistan • India • Afghanistan • China • Iran</p>
    </div>

    <div class="section-title">Priority for CSS</div>
    <div class="card">
      <p style="color:var(--text)">1. Pakistan (full depth)<br>
      2. India (bilateral focus)<br>
      3. Afghanistan → China → Iran</p>
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
        </div>
      `).join("")}
    </div>
  `;
}

function openCountry(id) {
  currentCountry = id;
  render();
}

function renderCountryDetail(id) {
  const data = APP_DATA.countryContent[id];
  const country = APP_DATA.countries.find(c => c.id === id);
  titleEl.textContent = country.name;
  contentEl.innerHTML = `
    <button class="back-btn" onclick="currentCountry=null; render()">← Back</button>
    <div class="card" style="text-align:center; padding:24px">
      <div style="font-size:3rem">${country.flag}</div>
      <h2 style="margin-top:8px">${data.title}</h2>
    </div>
    ${data.sections.map(sec => `
      <div class="section-title">${sec.title}</div>
      <div class="card">
        <ul>${sec.items.map(i => `<li>${i}</li>`).join("")}</ul>
      </div>
    `).join("")}
    <button class="btn btn-primary" style="width:100%; margin-top:12px" onclick="showCountryRevision('${id}')">
      View One-Line Revision
    </button>
  `;
}

function showCountryRevision(id) {
  currentPage = "revision";
  currentCountry = null;
  document.querySelectorAll(".nav-item").forEach(b => b.classList.remove("active"));
  document.querySelector('[data-page="revision"]').classList.add("active");
  // We will filter in renderRevision
  window._filterCountry = id;
  render();
}

function renderRevision() {
  titleEl.textContent = "One-Line Revision";
  const filter = window._filterCountry;
  window._filterCountry = null;

  let html = "";
  const countriesToShow = filter ? [filter] : ["pakistan", "india", "afghanistan", "china", "iran"];

  countriesToShow.forEach(cid => {
    const items = APP_DATA.revision[cid] || [];
    const c = APP_DATA.countries.find(x => x.id === cid);
    html += `<div class="section-title">${c.flag} ${c.name}</div>`;
    items.forEach(item => {
      html += `
        <div class="revision-item">
          <div class="label">${item.label}</div>
          <div class="value">${item.value}</div>
        </div>
      `;
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
    <div style="text-align:center; color:var(--text-muted); margin-bottom:8px">
      Card ${flashcardIndex + 1} of ${filteredCards.length}
    </div>
    <div class="flashcard-container">
      <div class="flashcard ${showAnswer ? 'show-answer' : ''}" onclick="toggleAnswer()">
        <div class="question">${card.q}</div>
        <div class="answer">${card.a}</div>
        <div style="position:absolute; bottom:12px; font-size:0.75rem; color:var(--text-muted)">
          ${showAnswer ? "Tap for question" : "Tap to reveal answer"}
        </div>
      </div>
    </div>
    <div class="flashcard-actions">
      <button class="btn btn-danger" onclick="nextCard(false)">Hard</button>
      <button class="btn btn-secondary" onclick="toggleAnswer()">Flip</button>
      <button class="btn btn-success" onclick="nextCard(true)">Easy</button>
    </div>
    <div style="margin-top:20px">
      <div class="section-title">Filter by Country</div>
      <div style="display:flex; flex-wrap:wrap; gap:8px">
        <button class="btn btn-secondary" style="flex:none; padding:8px 12px" onclick="filterCards(null)">All</button>
        ${APP_DATA.countries.map(c => `
          <button class="btn btn-secondary" style="flex:none; padding:8px 12px" onclick="filterCards('${c.id}')">${c.flag}</button>
        `).join("")}
      </div>
    </div>
  `;
}

function toggleAnswer() {
  showAnswer = !showAnswer;
  renderFlashcards();
}

function nextCard(easy) {
  showAnswer = false;
  flashcardIndex = (flashcardIndex + 1) % filteredCards.length;
  renderFlashcards();
}

function filterCards(countryId) {
  if (!countryId) {
    filteredCards = [...APP_DATA.flashcards];
  } else {
    filteredCards = APP_DATA.flashcards.filter(c => c.country === countryId);
  }
  flashcardIndex = 0;
  showAnswer = false;
  renderFlashcards();
}

function renderMore() {
  titleEl.textContent = "More";
  contentEl.innerHTML = `
    <div class="card">
      <h3>About this App</h3>
      <p>Personal History Knowledge base for CSS/PMS focused on Pakistan, India, Afghanistan, China & Iran.</p>
    </div>
    <div class="card">
      <h3>How to Install on Android</h3>
      <p>1. Open this page in Chrome<br>
      2. Tap menu (⋮) → "Add to Home screen" or "Install app"<br>
      3. App icon will appear on your home screen</p>
    </div>
    <div class="card">
      <h3>Content Source</h3>
      <p>Built from structured notes covering timelines, wars, treaties, constitutions, leaders and bilateral relations.</p>
    </div>
    <div class="card">
      <h3>Study Tip</h3>
      <p>Use One-Line Revision daily (5–10 min). Practice Flashcards with spaced repetition. Cross-link Pakistan Wars/Treaties with India Bilateral.</p>
    </div>
  `;
}

function goTo(page) {
  currentPage = page;
  currentCountry = null;
  document.querySelectorAll(".nav-item").forEach(b => {
    b.classList.toggle("active", b.dataset.page === page);
  });
  render();
}

// Make functions global for onclick
window.openCountry = openCountry;
window.showCountryRevision = showCountryRevision;
window.toggleAnswer = toggleAnswer;
window.nextCard = nextCard;
window.filterCards = filterCards;
window.goTo = goTo;
window.currentCountry = null;
window.render = render;

// Initial render
render();

// Register service worker for PWA / offline
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js").catch(() => {});
}
