function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

function toggleMobileMenu() {
  const menu = document.getElementById("mobileMenu");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
  document.querySelectorAll(".language-options").forEach(lang => lang.style.display = "none");
}

function toggleLanguageDropdown() {
  document.querySelectorAll(".language-options").forEach(dropdown => {
    dropdown.style.display = (dropdown.style.display === "block") ? "none" : "block";
  });
}

window.setLanguage = function (lang) {
  const dict = getTranslations(lang);

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.innerHTML = dict[key];
  });

  const flagClass = (lang === "en") ? "fi fi-us" : "fi fi-tz";
  const langCode = (lang === "en") ? "EN" : "SW";

  document.querySelectorAll("#currentLangFlag, #currentLangFlagMobile").forEach(flag => flag.className = flagClass);
  document.querySelectorAll("#currentLangCode, #currentLangCodeMobile").forEach(code => code.textContent = langCode);

  localStorage.setItem("siteLang", lang);
  document.documentElement.lang = lang;

  document.querySelectorAll(".language-options").forEach(dropdown => dropdown.style.display = "none");
};

document.addEventListener("click", function (event) {
  if (!event.target.closest(".language-dropdown")) {
    document.querySelectorAll(".language-options").forEach(dropdown => dropdown.style.display = "none");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const queryLang = getQueryParam("lang");
  const validLangs = ["en", "sw"];
  let lang = "sw";
  if (queryLang && validLangs.includes(queryLang)) {
    lang = queryLang;
  } else {
    const savedLang = localStorage.getItem("siteLang");
    if (savedLang === "en") lang = "en";
  }
  setLanguage(lang);
});
