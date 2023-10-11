function loadPreferredTheme() {
    const e = localStorage.getItem("pref-theme")
      , t = document.body.classList.contains("dark");
    e === "light" && t ? document.body.classList.remove("dark") : e === "dark" && !t && document.body.classList.add("dark")
}
loadPreferredTheme()