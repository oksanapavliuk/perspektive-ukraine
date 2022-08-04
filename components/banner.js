class Banner extends HTMLElement {
  constructor() {
    super();

    const lang = this.getAttribute("lang");

    if (lang === "en") {
      this.projectText = "Project & Interim Management";
    } else {
      this.projectText = "Projekt & Interim Management";
    }
  }
  connectedCallback() {
    this.innerHTML = `
    <div class="banner flex-container row min-column">
        <div class="img-container">
            <img src="./img/kornfeld.webp" alt="" />
            <p class="img-text"></p>
        </div>
    </div>
      `;
  }
}

customElements.define("banner-component", Banner);
