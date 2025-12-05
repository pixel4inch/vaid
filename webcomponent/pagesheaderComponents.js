
fetch("../../data/navbar.json")
    .then(res => res.json())
    .then(nav => {

        let html = `
            <a class="navbar-brand" href="../../index.html">
                <img src="../../${nav.brandLogo}" alt="Logo" class="img-fluid">
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
                    .map(sub => `<li><a class="dropdown-item nav-link-item" href="../../${sub.link}">${sub.title}</a></li>`)
                    .join("");

                html += `</ul></li>`;
            } else {
                html += `
                <li class="nav-item">
                    <a class="nav-link nav-link-item" href="../../${item.link}">${item.title}</a>
                </li>`;
            }
        });

        html += `
                </ul>
                 <button class="btn btn-sm btn-danger " type="button" data-bs-toggle="modal" data-bs-target="#getquote">Get Quote</button>
                 <!---Get Quote Model--->
                <div class="modal fade" id="getquote" tabindex="-1" aria-labelledby="getquoteLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-lg" style="z-index:999">
                        <div class="modal-content">
                        <div class="modal-header pb-1">
                            <div class="d-flex justify-content-center flex-column w-100" >
                                <h1 class="modal-title fs-5 text-center" id="getquoteLabel" style="font-size:25px !important">Get a Quote</h1>
                                <p class="text-center">Shape Your Space with Confidence</p>
                             </div>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form id="quoteForm" method="POST" action="sendQuote.php">
                                <div class="row">
                                    <div class="mb-2 col-lg-6 col-md-12 ">
                                        <label class="form-label">Name</label>
                                        <input type="text" name="name" class="form-control" required>
                                    </div>

                                    <div class="mb-2 col-lg-6 col-md-12">
                                        <label class="form-label">Email</label>
                                        <input type="email" name="email" class="form-control" required>
                                    </div>

                                    <div class="mb-2 col-lg-6 col-md-12">
                                        <label class="form-label">Phone Number</label>
                                        <input type="text" name="phone" class="form-control" required>
                                    </div>

                                    <div class="mb-2 col-lg-6 col-md-12">
                                        <label for="service" class="form-label">Select Service</label>
                                        <select id="service" class="form-select">>
                                            <option value="">Interior Desing</option>
                                            <option>Residental Design</option>
                                            <option>Office Desing</option>
                                            <option>Commericial Desing</option>

                                        </select>
                                    </div>

                                    <div class="mb-2 col-lg-12 col-md-12">
                                        <label class="form-label">Your Requirement</label>
                                        <textarea name="message" class="form-control" rows="4" required></textarea>
                                    </div>

                                    <div class="mb-2 col-lg-12 col-md-12 text-center mt-3">
                                        <button class="btn btn-sm btn-primary mx-auto   font-weight-bold"
                                            type="submit">Submit Request</button>
                                    </div>

                                </div>
                            </form>
                        </div>
                        
                        </div>
                    </div>
                </div>
                <!---Get Quote ends--->
            
            
            
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


class PageHeaderComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
     
   
<!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-light fixed-top">
        <div class="container" id="navbar-container"></div>
    </nav>

            `;
    }

}



customElements.define('pageheader-component', PageHeaderComponent);







