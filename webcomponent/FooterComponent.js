class FooterComponent extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
      
      
	  <!-- Footer -->
    <footer class="footer py-5">
        <div class="container">
            <div class="row g-4">
                <div class="col-lg-3 col-md-6">
                    <img src="images/logo.svg" alt="VAID Logo" class="mb-4" height="40">
                    <p>VAID is a multidisciplinary architecture and interior design firm specializing in sustainable and
                        green buildings with 15+ years of experience.</p>
                </div>
                <div class="col-lg-3 col-md-6">
                    <h5>Quick Links</h5>
                    <ul class="list-unstyled footer-links">
                        <li><a href="index.html">Home</a></li>
                        <li><a href="architecture.html">Projects</a></li>
                        <li><a href="about.html">About Us</a></li>
                        <li><a href="media.html">Media</a></li>
                        <li><a href="contact.html">Contact</a></li>
                    </ul>
                </div>
                <div class="col-lg-3 col-md-6">
                    <h5>Contact Us</h5>
                    <ul class="list-unstyled footer-contact">
                        <li><i class="fas fa-map-marker-alt me-2"></i> 555A, Road No. 28, Jubilee Hills, Hyderabad</li>
                        <li><i class="fas fa-phone me-2"></i> 8977366999</li>
                        <li><i class="fas fa-envelope me-2"></i> info@vaidarchitects.com</li>
                    </ul>
                </div>
                <div class="col-lg-3 col-md-6">
                    <h5>Follow Us</h5>
                    <div class="social-icons">
                        <a href="https://www.instagram.com/vaidarchitect/" class="me-2" target="_blank"><i
                                class="fab fa-instagram"></i></a>

                        <a href="https://www.facebook.com/vaid.architects" target="_blank"><i
                                class="fab fa-facebook"></i></a>
                        <a href="https://www.youtube.com/@vaidarchitects184" target="_blank"><i
                                class="fab fa-youtube"></i></a>
                        <a href="https://www.linkedin.com/company/14507970/admin/dashboard/" class="me-2"
                            target="_blank"><i class="fab fa-linkedin"></i></a>
                        <a href="https://x.com/architects_vaid" target="_blank"><i class="fab fa-twitter"></i></a>
                    </div>
                </div>
            </div>
            <hr class="my-4 footer-divider">
            <div class="row">
                <div class="col-md-6">
                    <p class="mb-md-0">© 2025 VAID Architects. All Rights Reserved.</p>
                </div>
                <div class="col-md-6 text-md-end">
                    <p class="mb-0">Designed with <i class="fas fa-heart text-gold"></i> by VAID</p>
                </div>
            </div>
        </div>
    </footer>

      
      
      
      
      `;
	}
}

customElements.define('footer-component', FooterComponent);