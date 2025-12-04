
fetch("./data/navbar2.json")
    .then(res => res.json())
    .then(nav => {

        let html = `
            <a class="navbar-brand" href="index.html">
                <img src="${nav.brandLogo}" alt="Logo" class="img-fluid">
            </a>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" 
                data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" 
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
        `;

        nav.menu.forEach(item => {

            if (item.dropdown) {
                html += `
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button">
                        ${item.title}
                    </a>
                    <ul class="dropdown-menu">
                `;

                html += item.items
                    .map(sub => `<li><a class="dropdown-item nav-link-item" href="${sub.link}">${sub.title}</a></li>`)
                    .join("");

                html += `</ul></li>`;
            } else {
                html += `
                <li class="nav-item">
                    <a class="nav-link nav-link-item" href="${item.link}">${item.title}</a>
                </li>`;
            }
        });

        html += `
                </ul>
            </div>
        `;

        document.getElementById("navbar-container").innerHTML = html;


        document.querySelectorAll(".nav-link-item").forEach(link => {
            link.addEventListener("click", function () {
                // Remove active from all
                document.querySelectorAll(".nav-link-item").forEach(a => a.classList.remove("active"));

                // Add active to clicked element
                this.classList.add("active");
            });
        });

    })
    .catch(err => console.error("Navbar load error:", err));






class HeaderComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
     
   
<!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-light fixed-top">
        <div class="container" id="navbar-container"></div>
    </nav>

            `;
    }

}



customElements.define('header-component', HeaderComponent);







