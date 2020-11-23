export default async function fetchPage(url) {
  const response = await fetch(url);
  const text = await response.text();

  const main = document.querySelector("main");

  main.innerHTML = text;
}
