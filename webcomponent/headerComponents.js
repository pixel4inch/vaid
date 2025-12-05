
fetch("./data/navbar.json")
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
                                        <button class="btn btn btn-primary mx-auto  font-weight-bold"
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
       // Run this AFTER `document.getElementById("navbar-container").innerHTML = html;`

(function setActiveNavByUrl() {
    // Remove active from all first
    document.querySelectorAll("#navbar-container .nav-link-item")
        .forEach(i => i.classList.remove("active"));

    const links = Array.from(document.querySelectorAll("#navbar-container .nav-link-item"));

    // Normalize current URL (strip query/hash, trailing slash)
    const currentFull = window.location.href.split(/[?#]/)[0].replace(/\/+$/, "");
    const currentPath = window.location.pathname.replace(/\/+$/, "") || "/";

    // Try to find the best match
    let matched = false;

    for (const link of links) {
        const href = link.getAttribute("href");

        // ignore anchors and javascript pseudo-links
        if (!href || href.startsWith("#") || href.startsWith("javascript:")) continue;

        // Resolve href relative to current page
        let resolved;
        try {
            resolved = new URL(href, window.location.href);
        } catch (e) {
            // fallback — skip invalid URLs
            continue;
        }

        const resolvedFull = resolved.href.split(/[?#]/)[0].replace(/\/+$/, "");
        const resolvedPath = resolved.pathname.replace(/\/+$/, "") || "/";

        // Exact page match (preferred)
        if (resolvedFull === currentFull || resolvedPath === currentPath) {
            link.classList.add("active");
            matched = true;
            break; // stop at first exact match
        }
    }

    // If no exact match, try looser matching (e.g., parent path)
    if (!matched) {
        for (const link of links) {
            const href = link.getAttribute("href");
            if (!href || href.startsWith("#") || href.startsWith("javascript:")) continue;

            let resolved;
            try {
                resolved = new URL(href, window.location.href);
            } catch (e) { continue; }

            const resolvedPath = resolved.pathname.replace(/\/+$/, "") || "/";

            // If current path includes the link path (useful for nested pages)
            if (resolvedPath !== "/" && currentPath.endsWith(resolvedPath)) {
                link.classList.add("active");
                matched = true;
                break;
            }
        }
    }

    // Optional: if still no match, mark first nav item as active
    if (!matched && links.length) {
        links[0].classList.add("active");
    }
})();



    })
    .catch(err => console.error("Navbar load error:", err));






class HeaderComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
     
   
<!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-light fixed-top" >
        <div class="container" id="navbar-container"></div>
    </nav>

            `;
    }

}



customElements.define('header-component', HeaderComponent);







