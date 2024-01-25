const template = document.createElement("template");
template.innerHTML = `
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
    <style>
    footer{
        border-top: solid 3px grey;

        width: 100%;

        bottom: 0;
    }
    #contact{
        display: flex;
        text-align: center;
        justify-content: space-around;
    }
    h3{
        text-align: center;
    }
    @media screen and (max-width:755px){
        #contact{
            flex-flow: column;
        }
    }
    </style>
    <footer>
    <h3>Contact</h3>
        <div id = "contact">  
            <div>
                <h4>Email</h4>
                <a id="email"></a>
            </div>  
            <div>
                <h4>Phone Number</h4>
                <a id="phone"></a>
            </div>
        </div>
        <hr>
        &copy; 2024 Dan Squire
    </footer>
`;

class AppFooter extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: "open"});

        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback(){
        this.render();
    }

    render(){
        // grab the attribut values, addign a default value if necessary
        const email = this.getAttribute('data-email') ? this.getAttribute('data-email') : "No Email";
        const phone = this.getAttribute('data-phone') ? this.getAttribute('data-phone') : "No Number";

        this.shadowRoot.querySelector("#email").innerHTML = email;
        this.shadowRoot.querySelector("#email").setAttribute("href",`mailto:${email}`);
        this.shadowRoot.querySelector("#phone").innerHTML = phone;
        this.shadowRoot.querySelector("#phone").setAttribute("href",`tel:${phone}`);

    }
}

customElements.define('app-footer', AppFooter);
