const template = document.createElement("template");
template.innerHTML = `
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
<header>
		<h1 class="is-size-1 has-text-centered">Dan Squire's Portfolio</h1>
</header>
<nav class="navbar has-shadow is-white">
        <!-- logo / brand -->
        <div class="navbar-brand">
          <a class="navbar-item" href="home.html">
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
          
            <a class="navbar-item is-hoverable" href="web.html" id="web">
              Web Dev
            </a>
          
            <a class="navbar-item is-hoverable" href="csharp.html" id="csharp">
              C#
            </a>

            <a class="navbar-item is-hoverable" href="cpp.html" id="cpp">
              C++
            </a>
          
            <a class="navbar-item is-hoverable" href="design.html" id="design">
              Design
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
      this.web = this.shadowRoot.querySelector("#web");
      this.csharp = this.shadowRoot.querySelector("#csharp");
      this.cpp = this.shadowRoot.querySelector("#cpp");
      this.design = this.shadowRoot.querySelector("#design");

      if (page == "home") {
        this.home.classList.add("has-text-light");
        this.home.classList.add("has-background-primary");
      }
      else if (page == "web") {
        this.web.classList.add("has-text-light");
        this.web.classList.add("has-background-primary");
      }
      else if (page == "csharp") {
        this.csharp.classList.add("has-text-light");
        this.csharp.classList.add("has-background-primary");
      }
      else if (page == "cpp") {
        this.cpp.classList.add("has-text-light");
        this.cpp.classList.add("has-background-primary");
      }
      else if (page == "design") {
        this.design.classList.add("has-text-light");
        this.design.classList.add("has-background-primary");
      }
      
    }
}

customElements.define('app-nav', AppNav);