export default function fetchPage(url, title, file) {
  const main = document.querySelector("main");
  const currentPage = main.innerHTML.slice();

  async function loadContent() {
    const response = await fetch(url);
    const text = await response.text();

    main.innerHTML = text;
    history.replaceState({ success: "1" }, title, file);
  }

  function revertPage() {
    main.innerHTML = currentPage;
  }

  function addEventListeners() {
    window.addEventListener("popstate", revertPage);
    history.pushState({}, "", "index.html");
  }

  addEventListeners();
  loadContent();
}
