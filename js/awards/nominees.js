const VOTE_URL = "https://taffafestival.or.tz/kura";

function normalizeForMatch(value) {
    return (value || "")
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/\([^)]*\)/g, " ")
        .replace(/[^a-z0-9]+/g, " ")
        .trim();
}

function isWinnerNominee(nomineeName, winnerName) {
    const nominee = normalizeForMatch(nomineeName);
    const winner = normalizeForMatch(winnerName);

    if (!nominee || !winner) return false;
    if (nominee === winner || nominee.includes(winner) || winner.includes(nominee)) return true;

    const nomineeTokens = nominee.split(" ").filter(Boolean);
    const winnerTokens = winner.split(" ").filter(Boolean);
    if (winnerTokens.length === 0 || nomineeTokens.length === 0) return false;

    const sharedTokens = winnerTokens.filter((winnerToken) =>
        nomineeTokens.some(
            (nomineeToken) =>
                nomineeToken === winnerToken ||
                nomineeToken.startsWith(winnerToken) ||
                winnerToken.startsWith(nomineeToken)
        )
    ).length;

    const requiredMatches = winnerTokens.length > 2 ? winnerTokens.length - 1 : winnerTokens.length;
    return sharedTokens >= requiredMatches;
}

fetch("../js/data/nominees.json")
            .then(res => res.json())
            .then(data => {
                renderCategories(data.categories, data.honoraryAwards);
                refreshTranslations();
            })
            .catch(() => {
                // Fallback to sample data if fetch fails
                console.log("Using sample data");
                renderCategories(sampleData.categories, sampleData.honoraryAwards);
                refreshTranslations();
            });

        function refreshTranslations() {
            if (typeof window.setLanguage !== "function") return;
            const savedLang = localStorage.getItem("siteLang");
            const lang = savedLang === "en" ? "en" : "sw";
            window.setLanguage(lang);
        }

        function renderCategories(categories, honoraryAwards = []) {
            const container = document.getElementById("nomineesContainer");
            container.innerHTML = ""; // Clear loading state

            renderHonoraryAwards(container, honoraryAwards);

            if ((!categories || categories.length === 0) && (!honoraryAwards || honoraryAwards.length === 0)) {
                container.innerHTML = `
                    <div class="empty-state">
                        <i class="fas fa-trophy"></i>
                        <h3>No nominees yet</h3>
                        <p>Check back soon for the official nominees!</p>
                    </div>
                `;
                return;
            }

            if (!categories || categories.length === 0) return;

            categories.forEach(category => {
                const winnerName = category.winner || "";
                const nomineeCards = category.nominees.map((nominee) => {
                    const winner = isWinnerNominee(nominee.name, winnerName);

                    return `
                        <div class="col-lg-3 col-md-4 col-sm-6">
                            <div class="nominee-card ${winner ? "nominee-card-winner" : ""}">
                                <div class="nominee-image-wrapper">
                                    ${winner ? `
                                        <div class="nominee-badge winner-badge">
                                            <i class="fas fa-trophy"></i>
                                            <span data-i18n="awards.winner.badge">Winner</span>
                                        </div>
                                    ` : ""}
                                    <img 
                                        src="${nominee.image || 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=400&fit=crop'}" 
                                        alt="${nominee.name}"
                                        class="nominee-image"
                                        loading="lazy"
                                    />
                                </div>
                                <div class="nominee-info">
                                    <h5 class="nominee-name">${nominee.name}</h5>
                                    <p class="nominee-work">${nominee.work || 'Nominee'}</p>
                                    <a href="${VOTE_URL}" class="vote-btn" data-vote-closed="true">
                                        <i class="fas fa-vote-yea"></i>
                                        <span data-i18n="awards.cta.vote"></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    `;
                }).join("");

                const section = document.createElement("div");
                section.className = "award-category";

                section.innerHTML = `
                    <button class="category-header" onclick="toggleCategory(this)">
                        <div class="d-flex align-items-center gap-3">
                            
                            <div class="text-start">
                                <div class="category-title">${category.title}</div>
                                <div class="category-subtitle">${category.subtitle}</div>
                                ${winnerName ? `
                                    <div class="category-winner">
                                        <i class="fas fa-trophy"></i>
                                        <span data-i18n="awards.winner.label">Winner:</span>
                                        <strong>${winnerName}</strong>
                                    </div>
                                ` : ""}
                            </div>
                        </div>
                        <div class="category-chevron">
                            <i class="fas fa-chevron-down"></i>
                        </div>
                    </button>

                    <div class="category-content">
                        <div class="row g-4">
                            ${nomineeCards}
                        </div>
                    </div>
                `;

                container.appendChild(section);
            });
        }

        function renderHonoraryAwards(container, honoraryAwards = []) {
            if (!honoraryAwards || honoraryAwards.length === 0) return;

            const section = document.createElement("section");
            section.className = "honorary-awards";

            section.innerHTML = `
                <div class="honorary-awards-header text-center">
                    <h2 class="honorary-awards-title" data-i18n="awards.honorary.title">Honorary Awards</h2>
                    <p class="honorary-awards-subtitle" data-i18n="awards.honorary.subtitle">Tuzo Ya Heshima</p>
                </div>
                <div class="row g-4">
                    ${honoraryAwards.map((winner) => `
                        <div class="col-md-6">
                            <div class="honorary-award-card">
                                <div class="honorary-award-icon">
                                    <i class="fas fa-award"></i>
                                </div>
                                <div class="honorary-award-content">
                                    <span class="honorary-award-badge" data-i18n="awards.honorary.badge">Honorary Winner</span>
                                    ${winner.titleKey || winner.title ? `<p class="honorary-award-role"${winner.titleKey ? ` data-i18n="${winner.titleKey}"` : ""}>${winner.title || ""}</p>` : ""}
                                    <h3 class="honorary-award-name">${winner.name}</h3>
                                </div>
                            </div>
                        </div>
                    `).join("")}
                </div>
            `;

            container.appendChild(section);
        }

        function toggleCategory(btn) {
            const category = btn.closest(".award-category");
            const content = category.querySelector(".category-content");
            const isActive = category.classList.contains("active");

            // Close all other categories
            document.querySelectorAll(".award-category").forEach(cat => {
                if (cat !== category) {
                    cat.classList.remove("active");
                    cat.querySelector(".category-content").style.display = "none";
                }
            });

            // Toggle current category
            category.classList.toggle("active");
            content.style.display = isActive ? "none" : "block";
        }

        // Open first category by default
        window.addEventListener('load', () => {
            setTimeout(() => {
                const firstCategory = document.querySelector(".award-category");
                if (firstCategory) {
                    firstCategory.querySelector(".category-header").click();
                }
            }, 500);
        });

        document.addEventListener("click", (event) => {
            const trigger = event.target.closest("[data-vote-closed]");
            if (!trigger) return;
            event.preventDefault();
            const modalEl = document.getElementById("votingClosedModal");
            if (!modalEl || !window.bootstrap || !window.bootstrap.Modal) return;
            const modal = window.bootstrap.Modal.getOrCreateInstance(modalEl);
            modal.show();
        });
