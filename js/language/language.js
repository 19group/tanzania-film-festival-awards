// js/language.js
window.setLanguage = function (lang) {
  const dict = getTranslations(lang);
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) {
      el.innerHTML = dict[key];
    }
  });

  const toggle = document.getElementById("languageToggle");
  if (toggle) {
    toggle.innerHTML = (lang === "sw" ? "Kiswahili" : "English") + ' <i class="zmdi zmdi-caret-down"></i>';
  }

  localStorage.setItem("siteLang", lang);
};

document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("siteLang") || "sw"; 
  setLanguage(savedLang);
});
