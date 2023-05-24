class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <header class="header">
    <nav class="navbar">
      <div class="nav__logo">
        <h1 tabindex="0">Foody Apps</h1>
      </div>
      <button id="menu" class="header__menu" href="" aria-label="navigation-menu">☰</button>
      <div class="menubar" id="menubar">
        <ul class="nav__list">
          <li class="nav__item"><a href="#/home">Home</a></li>
          <li class="nav__item"><a href="#/favorite">Favorite</a></li>
          <li class="nav__item"><a href="https://www.linkedin.com/in/daffa-rizky-1a7722158/">About Us</a></li>
        </ul>
      </div>
    </nav>
  </header>
          `;
  }
}

customElements.define('app-bar', AppBar);
