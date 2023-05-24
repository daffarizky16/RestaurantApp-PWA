class AppHome extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <style>
        /* Search */
    form {
      display: flex;
      align-items: center;
      justify-content: center;
      outline: 0;
      border-radius: 4px;
      margin-top: 16px;
    }
    
    form > .textbox {
      outline: 0;
      height: 44px;
      width: auto;
      line-height: 44px;
      padding: 0 16px;
      background-color: rgba(255, 255, 255, 0.8);
      color: #212121;
      border: 0;
      border-radius: 4px 0 0 4px;
    }
    
    form > .textbox:focus {
      outline: 0;
      background-color: #FFF;
    }
    
    form > .button {
      outline: 0;
      background: none;
      background-color: rgba(38, 50, 56, 0.8);
      height: 44px;
      width: 44px;
      text-align: center;
      line-height: 42px;
      border: 0;
      color: #FFF;
      font-size: 16px;
      text-rendering: auto;
      text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
      transition: background-color .4s ease;
      border-radius: 0 4px 4px 0;
    }
    
    form > .button:hover {
      background-color: #FFA559;
    }
    
    .hero__head{
      color:white;
    }
        </style>
        <div class="jumbotron" id="jumbotron">
      <div class="overlay">
        <div class="hero__inner" tabindex="0">
          <h2 class="hero__title">Fresh Indonesian Food From Your City</h2>
          <p class="hero__desc">Find The Best Food from various regions of Indonesia</p>
          <form method="post" class="search">
          <input type="text" class="textbox" placeholder="Search Restaurant" id="name" alt="Search Restaurant">
          <button class="button">🔎︎</button>
        </form>
          </div>
      </div>
    </div>
    
        <main id="favorite">
        <section class="content">
          <h2 class="title" tabindex="0">Explore The Foody</h2>
          <section class="list__place">
            <div class="card__grid" id="card__grid"></div>
          </section>
        </section>
      </main>
              `;
  }
}

customElements.define('app-home', AppHome);
