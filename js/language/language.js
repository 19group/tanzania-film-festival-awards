// js/language.js

function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

window.setLanguage = function (lang) {
  const dict = getTranslations(lang);
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) {
      el.innerHTML = dict[key];
    }
  });

  // Update nav dropdown label
  const toggle = document.getElementById("languageToggle");
  if (toggle) {
    toggle.innerHTML = (lang === "sw" ? "Kiswahili" : "English") + ' <i class="zmdi zmdi-caret-down"></i>';
  }

  localStorage.setItem("siteLang", lang);
};

document.addEventListener("DOMContentLoaded", () => {
  // 1. Check query string ?lang=en
  const queryLang = getQueryParam("lang");
  const validLangs = ["en", "sw"];

  let lang = "sw"; // Default

  if (queryLang && validLangs.includes(queryLang)) {
    lang = queryLang;
  } else {
    // 2. Check saved language in localStorage
    const savedLang = localStorage.getItem("siteLang");
    if (savedLang && validLangs.includes(savedLang)) {
      lang = savedLang;
    } else {
      // 3. Auto-detect from browser
      const browserLang = navigator.language || navigator.userLanguage;
      if (browserLang.startsWith("en")) lang = "en";
      if (browserLang.startsWith("sw")) lang = "sw";
    }
  }

  setLanguage(lang);
});
