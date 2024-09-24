const template = document.createElement("template");
template.innerHTML = `
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
<header>
		<h1 class="is-size-1 has-text-centered">Dan Squire's Portfolio</h1>
</header>
<nav class="navbar has-shadow is-white">
        <!-- logo / brand -->
        <div class="navbar-brand">
          <a class="navbar-item" href="index.html">
          <figure class="image">
            <img class="is-rounded" src="">
          </figure>
          </a>
          <a class="navbar-burger" id="burger">
            <span></span>
            <span></span>
            <span></span>
          </a>
        </div>
      
        <div class="navbar-menu" id ="nav-links">
          <div class="navbar-start">
            <a class="navbar-item is-hoverable" href="index.html" id="home">
              Home
            </a>
          
            <a class="navbar-item is-hoverable" href="development.html" id="development">
            Development
            </a>
          
            <a class="navbar-item is-hoverable" href="design.html" id="design">
              Design
            </a>

            <a class="navbar-item is-hoverable" href="https://github.com/DSquire9" target="_blank">
              <img src="images/github-mark.png" alt="GitHub">
            </a>

            <a class="navbar-item is-hoverable" href="https://www.linkedin.com/in/dan-squire/" target="_blank">
              <img src="images/linkedin.png" alt="LinkedIn">
            </a>

            <a class="navbar-item is-hoverable" href="https://www.hackerrank.com/profile/dsquire91301" target="_blank">
              <img src="images/HackerRank_Icon.png" alt="HackerRank">
            </a>

            <a class="navbar-item is-hoverable" href="https://leetcode.com/u/DSquireDev/" target="_blank">
              <img src="images/leetcode.png" alt="LeetCode">
            </a>
          </div> <!-- end navbar-start -->
        </div>
      </nav>
`;

class AppNav extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: "open"});

        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback(){
      this.burgerIcon = this.shadowRoot.querySelector("#burger");
      this.navbarMenu = this.shadowRoot.querySelector("#nav-links");

      this.burgerIcon.addEventListener('click', () =>{
          this.navbarMenu.classList.toggle('is-active');
      });
      this.render();
    }

    attributeChangedCallback(attributeName, oldVal, newVal){
      console.log(attributeName, oldVal, newVal);
      this.render();
    }

    static get observedAttributes(){
      return ["data-page"];
    }

    render(){
      const page = this.getAttribute('data-page');

      this.home = this.shadowRoot.querySelector("#home");
      this.development = this.shadowRoot.querySelector("#development");
      this.design = this.shadowRoot.querySelector("#design");

      if (page == "home") {
        this.home.classList.add("has-text-light");
        this.home.classList.add("has-background-primary");
      }
      else if (page == "development") {
        this.development.classList.add("has-text-light");
        this.development.classList.add("has-background-primary");
      }
      else if (page == "design") {
        this.design.classList.add("has-text-light");
        this.design.classList.add("has-background-primary");
      }
      
    }
}

customElements.define('app-nav', AppNav);
