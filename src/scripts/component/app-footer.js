class AppFooter extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <footer>
    <p>Copyright&#169; April 2023 - Foody Apps</p>
    </footer>
            `;
  }
}

customElements.define('app-footer', AppFooter);
