
import { Link } from 'react-router-dom';
import { Star, ArrowRight, Sparkles, Heart, Award, Users, MapPin, Calendar, ShoppingBag, Camera, MessageSquare, Phone, BookOpen, Send, MessageCircle, Clock, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const Home = () => {
  const featuredServices = [
    {
      title: "Facial Treatments",
      description: "Premium facial care with natural Nigerian ingredients like shea butter and black soap for all skin types",
      icon: <Sparkles className="w-8 h-8 text-yellow-500" />,
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400",
      price: "From ₦15,000"
    },
    {
      title: "Hair Beauty",
      description: "Natural hair care and styling specializing in African hair textures and protective styles",
      icon: <Heart className="w-8 h-8 text-black" />,
      image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400",
      price: "From ₦8,000"
    },
    {
      title: "Massage Therapy",
      description: "Relaxing full-body massage using traditional Nigerian techniques and aromatic oils",
      icon: <Award className="w-8 h-8 text-yellow-500" />,
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400",
      price: "From ₦12,000"
    },
    {
      title: "Beauty Consulting",
      description: "Personalized beauty advice and skincare routines tailored for Nigerian women",
      icon: <Users className="w-8 h-8 text-black" />,
      image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400",
      price: "From ₦5,000"
    }
  ];

  const shopProducts = [
    {
      id: 1,
      name: "Nigerian Shea Butter Serum",
      price: "₦8,500",
      originalPrice: "₦12,000",
      image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=300",
      bestseller: true
    },
    {
      id: 2,
      name: "Gentle Black Soap Cleanser",
      price: "₦4,200",
      image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=300",
      bestseller: false
    },
    {
      id: 3,
      name: "Vitamin C Brightening Cream",
      price: "₦7,800",
      image: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=300",
      bestseller: true
    },
    {
      id: 4,
      name: "Clay Mask (Lagos Clay)",
      price: "₦5,250",
      image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=300",
      bestseller: false
    }
  ];

  const galleryImages = [
    {
      id: 1,
      title: "Hydrating Facial Results",
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400",
      category: "Facial Treatment"
    },
    {
      id: 2,
      title: "Body Therapy Session",
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400",
      category: "Massage Therapy"
    },
    {
      id: 3,
      title: "Skincare Transformation",
      image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=400",
      category: "Before & After"
    },
    {
      id: 4,
      title: "Anti-Aging Treatment",
      image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=400",
      category: "Facial Treatment"
    },
    {
      id: 5,
      title: "Hair Treatment Session",
      image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400",
      category: "Hair Beauty"
    },
    {
      id: 6,
      title: "Skin Brightening Results",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400",
      category: "Transformation"
    }
  ];

  const testimonials = [
    {
      name: "Adunni Okafor",
      location: "Lagos",
      rating: 5,
      text: "Yemkiss transformed my skin! Their natural approach works perfectly for Nigerian skin. I'm glowing!",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100"
    },
    {
      name: "Kemi Adebayo",
      location: "Abuja",
      rating: 5,
      text: "Finally found a beauty center that understands African hair and skin. The products are amazing!",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100"
    },
    {
      name: "Chioma Nnamdi",
      location: "Port Harcourt",
      rating: 5,
      text: "The massage therapy here is incredible. I feel so relaxed and my skin looks radiant after every visit!",
      image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=100"
    }
  ];

  const stats = [
    { number: "5000+", label: "Happy Clients" },
    { number: "10+", label: "Years Experience" },
    { number: "50+", label: "Beauty Products" },
    { number: "15+", label: "Expert Staff" }
  ];

  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const { toast } = useToast();

  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.email || !contactForm.message) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours."
    });

    setContactForm({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setContactForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleWhatsApp = () => {
    const phoneNumber = "+2348123456789";
    const message = "Hello Yemkiss! I'd like to get in touch with you.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=1200")',
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
            Beautiful Nigeria
            <span className="block text-yellow-400 animate-pulse">
              Starts with Yemkiss
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-yellow-100 max-w-2xl mx-auto">
            Nigeria's premier beauty destination. Expert skincare, hair beauty, and wellness treatments designed specifically for African beauty.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-6 text-lg rounded-full hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/30 font-semibold transition-all duration-300"
            >
              <Link to="/services">Explore Services</Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-black px-8 py-6 text-lg rounded-full hover:scale-105 hover:shadow-lg transition-all duration-300"
            >
              <Link to="/shop">Shop Products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center hover:scale-105 transition-transform duration-300">
                <div className="text-4xl md:text-5xl font-bold text-yellow-500 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 bg-yellow-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              Who We Are
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover our journey as Nigeria's trusted beauty destination
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative group">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600" 
                  alt="Yemkiss Beauty Team"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-yellow-900/20 rounded-2xl group-hover:bg-yellow-900/30 transition-all duration-300" />
            </div>
            
            <div className="space-y-6">
              <h3 className="text-3xl font-serif font-semibold text-gray-900 mb-4">
                Nigeria's Premier Beauty Destination
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                For over 10 years, Yemkiss has been at the forefront of Nigerian beauty, celebrating and enhancing the natural radiance of African women. We understand the unique needs of Nigerian skin and hair.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our expert team combines traditional Nigerian beauty secrets with modern techniques, using authentic ingredients like shea butter, black soap, and natural oils to deliver exceptional results.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Sparkles className="w-5 h-5 text-yellow-500 mr-3" />
                  <span className="text-gray-700">Authentic Nigerian beauty ingredients</span>
                </div>
                <div className="flex items-center">
                  <Heart className="w-5 h-5 text-yellow-500 mr-3" />
                  <span className="text-gray-700">Expert treatments for African skin</span>
                </div>
                <div className="flex items-center">
                  <Award className="w-5 h-5 text-yellow-500 mr-3" />
                  <span className="text-gray-700">10+ years of trusted service</span>
                </div>
              </div>
              <Button 
                asChild 
                className="bg-yellow-500 hover:bg-yellow-600 text-black rounded-full hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/30 font-semibold transition-all duration-300"
              >
                <Link to="/about">
                  Learn More About Us <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              Our Expert Nigerian Beauty Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Professional beauty treatments designed specifically for Nigerian skin and hair using traditional ingredients and modern techniques
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredServices.map((service, index) => (
              <Card key={index} className="group hover:scale-105 hover:shadow-xl hover:shadow-yellow-400/20 bg-white border-2 border-yellow-100 hover:border-yellow-300 overflow-hidden transition-all duration-300">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-gray-900 mb-3 group-hover:text-yellow-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-3 leading-relaxed text-sm">
                    {service.description}
                  </p>
                  <div className="text-lg font-semibold text-yellow-600 mb-4">
                    {service.price}
                  </div>
                  <Button 
                    asChild 
                    variant="outline" 
                    className="w-full border-yellow-500 text-yellow-600 hover:bg-yellow-500 hover:text-white rounded-full group-hover:border-yellow-600 hover:scale-105 transition-all duration-300"
                  >
                    <Link to="/services">
                      Book Now <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              asChild 
              size="lg" 
              className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-6 text-lg rounded-full hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/30 font-semibold transition-all duration-300"
            >
              <Link to="/services">
                View All Services <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Shop Preview - E-commerce Style */}
      <section className="py-20 bg-yellow-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              Premium Nigerian Beauty Products
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover our carefully curated collection of skincare and beauty products made with authentic Nigerian ingredients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {shopProducts.slice(0, 2).map((product) => (
              <Card key={product.id} className="group hover:scale-105 hover:shadow-xl hover:shadow-yellow-400/20 bg-white border-2 border-yellow-100 hover:border-yellow-300 overflow-hidden transition-all duration-300">
                <div className="grid md:grid-cols-2">
                  <div className="aspect-square overflow-hidden relative">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    {product.bestseller && (
                      <div className="absolute top-3 left-3 bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                        Bestseller
                      </div>
                    )}
                  </div>
                  <CardContent className="p-6 flex flex-col justify-center">
                    <h3 className="text-xl font-serif font-semibold text-gray-900 mb-3 group-hover:text-yellow-600 transition-colors duration-300">
                      {product.name}
                    </h3>
                    <div className="flex items-center space-x-3 mb-4">
                      <span className="text-2xl font-bold text-yellow-600">{product.price}</span>
                      {product.originalPrice && (
                        <span className="text-lg text-gray-400 line-through">
                          {product.originalPrice}
                        </span>
                      )}
                    </div>
                    <Button 
                      asChild
                      className="bg-yellow-500 hover:bg-yellow-600 text-black rounded-full hover:scale-105 font-semibold transition-all duration-300"
                    >
                      <Link to="/shop">
                        <ShoppingBag className="w-4 h-4 mr-2" />
                        Buy Now
                      </Link>
                    </Button>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-6 text-lg rounded-full hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/30 font-semibold transition-all duration-300"
            >
              <Link to="/shop">
                <ShoppingBag className="w-5 h-5 mr-2" />
                Shop All Products
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              Beauty Transformations Gallery
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              See real results from our Nigerian clients. Witness the amazing transformations achieved through our expert treatments
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.slice(0, 6).map((image) => (
              <Card key={image.id} className="group hover:scale-105 hover:shadow-xl hover:shadow-yellow-400/20 bg-white border-2 border-yellow-100 hover:border-yellow-300 overflow-hidden transition-all duration-300">
                <div className="aspect-square overflow-hidden relative">
                  <img 
                    src={image.image} 
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 text-white">
                      <h3 className="font-semibold text-sm mb-1">{image.title}</h3>
                      <p className="text-xs text-gray-200">{image.category}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              asChild 
              size="lg" 
              className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-6 text-lg rounded-full hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/30 font-semibold transition-all duration-300"
            >
              <Link to="/gallery">
                <Camera className="w-5 h-5 mr-2" />
                View Full Gallery
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-yellow-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              What Our Nigerian Queens Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Real stories from beautiful women across Nigeria who have experienced the Yemkiss difference
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:scale-105 hover:shadow-xl hover:shadow-yellow-400/20 bg-white border-2 border-yellow-100 hover:border-yellow-300 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4 hover:scale-110 transition-transform duration-300"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <div className="flex items-center">
                        <MapPin className="w-3 h-3 text-gray-500 mr-1" />
                        <span className="text-sm text-gray-500">{testimonial.location}</span>
                      </div>
                      <div className="flex mt-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current hover:rotate-12 transition-transform duration-300" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 italic leading-relaxed">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ready to begin your beauty journey? Contact us today for personalized treatments and expert advice
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="hover:scale-105 hover:shadow-xl hover:shadow-yellow-400/20 border-2 border-yellow-100 hover:border-yellow-300 bg-white transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-serif font-semibold text-gray-900 mb-6">
                  Send Us a Message
                </h3>
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-gray-700 font-medium">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={contactForm.name}
                        onChange={handleContactChange}
                        className="border-yellow-200 focus:ring-yellow-300 mt-1 hover:border-yellow-300 transition-colors duration-300"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-gray-700 font-medium">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={contactForm.email}
                        onChange={handleContactChange}
                        className="border-yellow-200 focus:ring-yellow-300 mt-1 hover:border-yellow-300 transition-colors duration-300"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-gray-700 font-medium">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={contactForm.phone}
                      onChange={handleContactChange}
                      className="border-yellow-200 focus:ring-yellow-300 mt-1 hover:border-yellow-300 transition-colors duration-300"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-gray-700 font-medium">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={contactForm.message}
                      onChange={handleContactChange}
                      rows={4}
                      className="border-yellow-200 focus:ring-yellow-300 mt-1 resize-none hover:border-yellow-300 transition-colors duration-300"
                      placeholder="Tell us how we can help you..."
                      required
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      type="submit"
                      className="bg-yellow-500 hover:bg-yellow-600 text-black rounded-full hover:scale-105 flex-1 transition-all duration-300"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                    <Button 
                      type="button"
                      onClick={handleWhatsApp}
                      className="bg-green-500 hover:bg-green-600 text-white rounded-full hover:scale-105 flex-1 transition-all duration-300"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      WhatsApp Us
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info & Address */}
            <div className="space-y-8">
              {/* Contact Information */}
              <Card className="hover:scale-105 hover:shadow-xl hover:shadow-yellow-400/20 border-2 border-yellow-100 hover:border-yellow-300 bg-yellow-50 transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-serif font-semibold text-gray-900 mb-6">
                    Contact Information
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Phone className="w-5 h-5 text-yellow-500 mr-3" />
                      <div>
                        <p className="font-medium text-gray-900">+234 812 345 6789</p>
                        <p className="text-sm text-gray-600">Call us anytime</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Mail className="w-5 h-5 text-yellow-500 mr-3" />
                      <div>
                        <p className="font-medium text-gray-900">hello@yemkiss.com</p>
                        <p className="text-sm text-gray-600">Email us for inquiries</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 text-yellow-500 mr-3" />
                      <div>
                        <p className="font-medium text-gray-900">Mon - Sat: 9AM - 7PM</p>
                        <p className="text-sm text-gray-600">Sunday: 10AM - 5PM</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Address */}
              <Card className="hover:scale-105 hover:shadow-xl hover:shadow-yellow-400/20 border-2 border-yellow-100 hover:border-yellow-300 bg-white transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-serif font-semibold text-gray-900 mb-6">
                    Visit Our Studio
                  </h3>
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-yellow-500 mr-3 mt-1" />
                    <div>
                      <p className="font-medium text-gray-900 mb-2">Yemkiss Beauty Center</p>
                      <p className="text-gray-600">123 Beauty Street</p>
                      <p className="text-gray-600">Victoria Island, Lagos</p>
                      <p className="text-gray-600">Nigeria 100001</p>
                    </div>
                  </div>
                  <Button 
                    asChild
                    variant="outline"
                    className="w-full mt-4 border-yellow-500 text-yellow-600 hover:bg-yellow-500 hover:text-white rounded-full hover:scale-105 transition-all duration-300"
                  >
                    <Link to="/contact">
                      Get Directions <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Quick Links */}
              <Card className="hover:scale-105 hover:shadow-xl hover:shadow-yellow-400/20 border-2 border-yellow-100 hover:border-yellow-300 bg-yellow-50 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-serif font-semibold text-gray-900 mb-4">
                    Quick Links
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    <Button 
                      asChild
                      variant="outline"
                      size="sm"
                      className="border-yellow-300 text-yellow-600 hover:bg-yellow-500 hover:text-white rounded-full hover:scale-105 transition-all duration-300"
                    >
                      <Link to="/services">Services</Link>
                    </Button>
                    <Button 
                      asChild
                      variant="outline"
                      size="sm"
                      className="border-yellow-300 text-yellow-600 hover:bg-yellow-500 hover:text-white rounded-full hover:scale-105 transition-all duration-300"
                    >
                      <Link to="/shop">Shop</Link>
                    </Button>
                    <Button 
                      asChild
                      variant="outline"
                      size="sm"
                      className="border-yellow-300 text-yellow-600 hover:bg-yellow-500 hover:text-white rounded-full hover:scale-105 transition-all duration-300"
                    >
                      <Link to="/gallery">Gallery</Link>
                    </Button>
                    <Button 
                      asChild
                      variant="outline"
                      size="sm"
                      className="border-yellow-300 text-yellow-600 hover:bg-yellow-500 hover:text-white rounded-full hover:scale-105 transition-all duration-300"
                    >
                      <Link to="/about">About</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
