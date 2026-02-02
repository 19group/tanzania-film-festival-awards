const VOTE_URL = "https://taffafestival.or.tz/kura";

fetch("../js/data/nominees.json")
            .then(res => res.json())
            .then(data => renderCategories(data.categories))
            .catch(() => {
                // Fallback to sample data if fetch fails
                console.log("Using sample data");
                renderCategories(sampleData.categories);
            });

        function renderCategories(categories) {
            const container = document.getElementById("nomineesContainer");
            container.innerHTML = ""; // Clear loading state

            if (!categories || categories.length === 0) {
                container.innerHTML = `
                    <div class="empty-state">
                        <i class="fas fa-trophy"></i>
                        <h3>No nominees yet</h3>
                        <p>Check back soon for the official nominees!</p>
                    </div>
                `;
                return;
            }

            categories.forEach(category => {
                const section = document.createElement("div");
                section.className = "award-category";

                section.innerHTML = `
                    <button class="category-header" onclick="toggleCategory(this)">
                        <div class="d-flex align-items-center gap-3">
                            
                            <div class="text-start">
                                <div class="category-title">${category.title}</div>
                                <div class="category-subtitle">${category.subtitle}</div>
                            </div>
                        </div>
                        <div class="category-chevron">
                            <i class="fas fa-chevron-down"></i>
                        </div>
                    </button>

                    <div class="category-content">
                        <div class="row g-4">
                            ${category.nominees.map((nominee, index) => `
                                <div class="col-lg-3 col-md-4 col-sm-6">
                                    <div class="nominee-card">
                                        <div class="nominee-image-wrapper">
                                            <img 
                                                src="${nominee.image || 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=400&fit=crop'}" 
                                                alt="${nominee.name}"
                                                class="nominee-image"
                                                loading="lazy"
                                            />
                                            ${index === 0 ? '<span class="nominee-badge">Featured</span>' : ''}
                                        </div>
                                        <div class="nominee-info">
                                            <h5 class="nominee-name">${nominee.name}</h5>
                                            <p class="nominee-work">${nominee.work || 'Nominee'}</p>
                                            <a href="${VOTE_URL}" target="_blank" class="vote-btn">
                                                <i class="fas fa-vote-yea"></i>
                                                Vote Now
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            `).join("")}
                        </div>
                    </div>
                `;

                container.appendChild(section);
            });
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