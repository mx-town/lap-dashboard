// Mechatronik Lexikon - App Logic

// State
let currentCategory = null;
let currentSubcategory = null;

// DOM Elements
const categoryList = document.getElementById('category-list');
const categoryCards = document.getElementById('category-cards');
const contentDisplay = document.getElementById('content-display');
const breadcrumb = document.getElementById('breadcrumb');
const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    renderCategoryList();
    renderCategoryCards();
    setupSearch();
});

// Render sidebar category list
function renderCategoryList() {
    categoryList.innerHTML = lexikonData.categories.map((cat, index) => `
        <li>
            <a href="#" onclick="showCategory('${cat.id}'); return false;">
                <span class="category-icon">${cat.icon}</span>
                <span class="category-name">${cat.name}</span>
                <span class="category-number">${cat.subcategories.length}</span>
            </a>
        </li>
    `).join('');
}

// Render home page category cards
function renderCategoryCards() {
    categoryCards.innerHTML = lexikonData.categories.map(cat => `
        <div class="category-card" onclick="showCategory('${cat.id}')">
            <div class="card-icon">${cat.icon}</div>
            <div class="card-title">${cat.name}</div>
            <div class="card-count">${cat.subcategories.length} Themen</div>
        </div>
    `).join('');
}

// Show home screen
function showHome() {
    currentCategory = null;
    currentSubcategory = null;

    // Update sidebar
    document.querySelectorAll('.category-list a').forEach(a => a.classList.remove('active'));

    // Update breadcrumb
    breadcrumb.innerHTML = '<a href="#" onclick="showHome(); return false;">🏠 Start</a>';

    // Show welcome screen
    contentDisplay.innerHTML = `
        <div class="welcome-screen fade-in">
            <h2>Willkommen zum Mechatronik Lexikon!</h2>
            <p>Dieses Lexikon hilft dir bei der Vorbereitung auf das LAP Fachgespräch.</p>
            <p>Wähle eine Hauptkategorie aus der linken Sidebar oder nutze die Suche oben.</p>

            <div class="category-cards" id="category-cards">
                ${lexikonData.categories.map(cat => `
                    <div class="category-card" onclick="showCategory('${cat.id}')">
                        <div class="card-icon">${cat.icon}</div>
                        <div class="card-title">${cat.name}</div>
                        <div class="card-count">${cat.subcategories.length} Themen</div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

// Show category with subcategories
function showCategory(categoryId) {
    const category = findCategory(categoryId);
    if (!category) return;

    currentCategory = category;
    currentSubcategory = null;

    // Update sidebar active state
    document.querySelectorAll('.category-list a').forEach(a => a.classList.remove('active'));
    document.querySelector(`.category-list a[onclick*="${categoryId}"]`)?.classList.add('active');

    // Update breadcrumb
    breadcrumb.innerHTML = `
        <a href="#" onclick="showHome(); return false;">🏠 Start</a>
        <span>›</span>
        <a href="#" onclick="showCategory('${category.id}'); return false;">${category.icon} ${category.name}</a>
    `;

    // Render category content
    contentDisplay.innerHTML = `
        <div class="fade-in">
            <div class="category-header">
                <span class="header-icon">${category.icon}</span>
                <div>
                    <h2>${category.name}</h2>
                    <p class="author">Bearbeitet von: ${category.author}</p>
                </div>
            </div>

            <p style="margin-bottom: 1.5rem; color: var(--text-secondary);">${category.description}</p>

            <div class="subcategory-grid">
                ${category.subcategories.map(sub => `
                    <div class="subcategory-card" onclick="showSubcategory('${category.id}', '${sub.id}')">
                        <h3><span>${sub.icon}</span> ${sub.name}</h3>
                        <p>${sub.description}</p>
                    </div>
                `).join('')}
            </div>

            ${category.subcategories.length === 0 ? `
                <div class="info-box">
                    <p>Noch keine Inhalte vorhanden. Inhalte werden bald hinzugefügt!</p>
                </div>
            ` : ''}
        </div>
    `;
}

// Show subcategory detail
function showSubcategory(categoryId, subcategoryId) {
    const category = findCategory(categoryId);
    const subcategory = findSubcategory(categoryId, subcategoryId);
    if (!category || !subcategory) return;

    currentCategory = category;
    currentSubcategory = subcategory;

    // Update breadcrumb
    breadcrumb.innerHTML = `
        <a href="#" onclick="showHome(); return false;">🏠 Start</a>
        <span>›</span>
        <a href="#" onclick="showCategory('${category.id}'); return false;">${category.icon} ${category.name}</a>
        <span>›</span>
        <a href="#" onclick="showSubcategory('${category.id}', '${subcategory.id}'); return false;">${subcategory.icon} ${subcategory.name}</a>
    `;

    // Render subcategory content
    contentDisplay.innerHTML = `
        <div class="fade-in">
            <button class="back-button" onclick="showCategory('${category.id}')">
                ← Zurück zu ${category.name}
            </button>

            <div class="detail-content">
                ${subcategory.content}
            </div>
        </div>
    `;
}

// Setup search functionality
function setupSearch() {
    let debounceTimeout;

    searchInput.addEventListener('input', (e) => {
        clearTimeout(debounceTimeout);
        const query = e.target.value.trim();

        if (query.length < 2) {
            searchResults.classList.remove('active');
            searchResults.innerHTML = '';
            return;
        }

        debounceTimeout = setTimeout(() => {
            const results = searchLexikon(query);
            renderSearchResults(results);
        }, 200);
    });

    // Close search results when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-container')) {
            searchResults.classList.remove('active');
        }
    });

    // Handle keyboard navigation
    searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            searchResults.classList.remove('active');
            searchInput.blur();
        }
    });
}

// Render search results
function renderSearchResults(results) {
    if (results.length === 0) {
        searchResults.innerHTML = `
            <div class="search-result-item">
                <span class="result-title">Keine Ergebnisse gefunden</span>
            </div>
        `;
        searchResults.classList.add('active');
        return;
    }

    searchResults.innerHTML = results.slice(0, 10).map(result => {
        if (result.type === 'category') {
            return `
                <div class="search-result-item" onclick="handleSearchClick('category', '${result.categoryId}')">
                    <span class="result-title">${result.icon} ${result.title}</span>
                    <span class="category-tag">Kategorie</span>
                    <div class="result-preview">${result.preview}</div>
                </div>
            `;
        } else {
            return `
                <div class="search-result-item" onclick="handleSearchClick('subcategory', '${result.categoryId}', '${result.subcategoryId}')">
                    <span class="result-title">${result.icon} ${result.title}</span>
                    <span class="category-tag">${result.categoryName}</span>
                    <div class="result-preview">${result.preview}</div>
                </div>
            `;
        }
    }).join('');

    searchResults.classList.add('active');
}

// Handle search result click
function handleSearchClick(type, categoryId, subcategoryId = null) {
    searchResults.classList.remove('active');
    searchInput.value = '';

    if (type === 'category') {
        showCategory(categoryId);
    } else {
        showSubcategory(categoryId, subcategoryId);
    }
}

// Keyboard shortcut for search (Ctrl+K or Cmd+K)
document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        searchInput.focus();
    }
});
