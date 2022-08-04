class Header extends HTMLElement {
  constructor() {
    super();
    const links_de = `
     <li><a href="/index.html#Events">Veranstaltungen</a></li>
     <li><a href="/index.html#Projects">Projekte</a></li>
     <li><a href="/index.html#Donations">Spenden</a></li>
     <li><a href="/index.html#Contributing">Mitarbeiten</a></li>
     <li><a href="/index.html#news">News</a></li>
    `;

    const links_en = `
     <li><a href="/index-en.html#Events">Events</a></li>
     <li><a href="/index-en.html#Projects">Projects</a></li>
     <li><a href="/index-en.html#Donations">Donations</a></li>
     <li><a href="/index-en.html#Contributing">Contributing</a></li>
     <li><a href="/index-en.html#news">News</a></li>
    `;

    const links_ua = `
     <li><a href="/index-ua.html#Events">Events</a></li>
     <li><a href="/index-ua.html#Projects">Projects</a></li>
     <li><a href="/index-ua.html#Donations">Donations</a></li>
     <li><a href="/index-ua.html#Contributing">Contributing</a></li>
     <li><a href="/index-ua.html#news">News</a></li>
    `;

    const lang = this.getAttribute("lang");

    if (lang === "en") {
      this.links = links_en;
      this.root = "/index-en.html";
    }
    if (lang === "ua") {
      this.links = links_ua;
      this.root = "/index-ua.html";
    } else {
      this.links = links_de;
      this.root = "/";
    }
  }
  connectedCallback() {
    this.innerHTML = `
    <header>
      <div class="bluestripe"></div>
      <div class="yellowstripe"></div>

      <div class="header-container flex-container column space">
        <div class="header-top flex-container row min-column">
          <div class="flex-container row flex-1">
            <a href="${this.root}"
              ><img class="logo" src="/img/logo_master_horizontal.svg" alt="Perspektive Logo"      
            ></a>
            <div class="hamburger">
              <span class="line line-1"></span>
              <span class="line line-2"></span>
              <span class="line line-3"></span>
            </div>
          </div>
          <div class="header-bot flex-2">
            <div class="flex-container row min-column">
            <nav>
              <ul class="flex-container row min-column">
                ${this.links}
              </ul>
            </nav>
           <div class="languages flex-container row">
              <p><a href="index.html">de</a></p>
              <p>|</p>
              <p><a href="index-en.html">en</a></p>
              <p>|</p>
              <p><a href="index-ua.html">ua</a></p>
            </div>
          </div>
          </div>
       </div>
    </header>
    `;
  }
}

customElements.define("header-component", Header);
