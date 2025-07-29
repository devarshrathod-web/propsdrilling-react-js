function Footer() {
  return (
     <footer className="bg-dark text-white pt-4">
      <div className="container">
        <div className="row">
          {/* Column 1 - About */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="text-uppercase mb-3">About Us</h5>
            <p className="small">
              We build scalable, modern web applications with the latest tech
              stacks, offering full-stack solutions for businesses worldwide.
            </p>
          </div>

          {/* Column 2 - Quick Links */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="text-uppercase mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white text-decoration-none">Home</a></li>
              <li><a href="#" className="text-white text-decoration-none">About</a></li>
              <li><a href="#" className="text-white text-decoration-none">Services</a></li>
              <li><a href="#" className="text-white text-decoration-none">Blog</a></li>
              <li><a href="#" className="text-white text-decoration-none">Contact</a></li>
            </ul>
          </div>

          {/* Column 3 - Services */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="text-uppercase mb-3">Our Services</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white text-decoration-none">Web Development</a></li>
              <li><a href="#" className="text-white text-decoration-none">UI/UX Design</a></li>
              <li><a href="#" className="text-white text-decoration-none">Mobile Apps</a></li>
              <li><a href="#" className="text-white text-decoration-none">E-commerce</a></li>
              <li><a href="#" className="text-white text-decoration-none">SEO Solutions</a></li>
            </ul>
          </div>

          {/* Column 4 - Contact & Social */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="text-uppercase mb-3">Contact Us</h5>
            <p className="small mb-1">Email: info@mywebsite.com</p>
            <p className="small mb-3">Phone: +91 98765 43210</p>
            <div>
              <a href="#" className="text-white me-3"><i className="bi bi-facebook"></i></a>
              <a href="#" className="text-white me-3"><i className="bi bi-twitter"></i></a>
              <a href="#" className="text-white me-3"><i className="bi bi-instagram"></i></a>
              <a href="#" className="text-white me-3"><i className="bi bi-linkedin"></i></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
