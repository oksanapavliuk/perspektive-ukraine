class Footer extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
      <footer>
      <div class="container flex-container row min-column">
        <div class="left">
          <img src="/img/logo_kurz.svg" alt="Perspektive Logo" />
        </div>
        <div class="middle">
			<address>
            <p>Perspektive Ukraine e.V.</p>
            <p>Taubenstraße 7</p>
            <p>60313 Frankfurt am Main</p>
            <a href="mailto:info@perspektive-ukraine.de">info@perspektive-ukraine.de</a>
    	<address>    
	</div>
        <div class="right">
          <ul>
            <a href="/impressum.html">Impressum</a></br>
            <a href="/datenschutz.html">Datenschutz</a>
          </ul>
          <p>@2022 Perspektive Ukraine e.V.</p>
        </div>
      </div>
    </footer>`;
  }
}

customElements.define("footer-component", Footer);
