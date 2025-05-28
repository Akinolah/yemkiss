import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Heart, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                <Heart className="w-4 h-4 text-black" />
              </div>
              <span className="text-2xl font-serif font-bold text-yellow-400">
                Yemkiss
              </span>
            </Link>
            <p className="text-gray-300 mb-4">
              Nigeria's premier beauty and skincare destination. Natural solutions for radiant skin and timeless beauty.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-yellow-400 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-yellow-400 transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-yellow-400 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-yellow-400 transition-colors">Services</Link></li>
              <li><Link to="/shop" className="text-gray-300 hover:text-yellow-400 transition-colors">Shop</Link></li>
              <li><Link to="/gallery" className="text-gray-300 hover:text-yellow-400 transition-colors">Gallery</Link></li>
              {/* <li><Link to="/blog" className="text-gray-300 hover:text-yellow-400 transition-colors">Beauty Blog</Link></li> */}
              <li><Link to="/privacy" className="text-gray-300 hover:text-yellow-400 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/faq" className="text-gray-300 hover:text-yellow-400 transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-yellow-400 mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li><span className="text-gray-300">Facial Treatments</span></li>
              <li><span className="text-gray-300">Hair Beauty</span></li>
              <li><span className="text-gray-300">Massage Therapy</span></li>
              <li><span className="text-gray-300">Beauty Consulting</span></li>
              <li><Link to="/book" className="text-yellow-400 hover:text-yellow-300 transition-colors">Book Appointment</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-yellow-400 mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-yellow-400 mt-0.5" />
                <span className="text-gray-300">123 Victoria Island, Lagos, Nigeria</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-yellow-400" />
                <span className="text-gray-300">+234 812 345 6789</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-yellow-400" />
                <span className="text-gray-300">hello@yemkiss.ng</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Centered */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <p className="text-center text-gray-300 text-sm">
            © 2025 Yemkiss Nigeria. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
