
import { Link } from 'react-router-dom';
import { Star, ArrowRight, Sparkles, Heart, Award, Users, MapPin, Calendar, ShoppingBag, Camera, MessageSquare, Phone, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

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
    },
    {
      id: 5,
      name: "Anti-Aging Night Oil",
      price: "₦10,200",
      originalPrice: "₦12,750",
      image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=300",
      bestseller: true
    },
    {
      id: 6,
      name: "Exfoliating Sugar Scrub",
      price: "₦4,800",
      image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=300",
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

  const pagePreview = [
    {
      title: "About Yemkiss",
      description: "Discover our journey as Nigeria's trusted beauty destination. Learn about our commitment to enhancing natural African beauty using traditional ingredients.",
      icon: <Heart className="w-6 h-6" />,
      link: "/about",
      image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=500",
      color: "bg-yellow-50 border-yellow-200 hover:bg-yellow-100 hover:border-yellow-300"
    },
    {
      title: "Book Appointment",
      description: "Schedule your beauty consultation with our expert team. Easy online booking for all services including facials, hair treatments, and massage therapy.",
      icon: <Calendar className="w-6 h-6" />,
      link: "/book",
      image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=500",
      color: "bg-gray-50 border-gray-200 hover:bg-gray-100 hover:border-gray-300"
    },
    {
      title: "Beauty Blog",
      description: "Expert tips and advice for Nigerian beauty, skincare routines for tropical climate, and product recommendations for African skin.",
      icon: <BookOpen className="w-6 h-6" />,
      link: "/blog",
      image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=500",
      color: "bg-yellow-50 border-yellow-200 hover:bg-yellow-100 hover:border-yellow-300"
    },
    {
      title: "Contact Us",
      description: "Get in touch with our team for appointments, inquiries, or beauty consultations. We're here to help you on your beauty journey.",
      icon: <Phone className="w-6 h-6" />,
      link: "/contact",
      image: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=500",
      color: "bg-gray-50 border-gray-200 hover:bg-gray-100 hover:border-gray-300"
    }
  ];

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
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-900/70 to-black/70" />
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
            Beautiful Nigeria
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500 animate-pulse-glow">
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
              className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black px-8 py-6 text-lg rounded-full hover-scale hover-glow font-semibold transition-all duration-300"
            >
              <Link to="/book">Book Consultation</Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-black px-8 py-6 text-lg rounded-full hover-scale hover-glow transition-all duration-300"
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
              <div key={index} className="text-center hover-lift">
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

      {/* Page Previews Section */}
      <section className="py-20 bg-gradient-to-br from-yellow-50 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              Explore Yemkiss Beauty Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover everything we offer to enhance your natural Nigerian beauty - from expert treatments to premium products
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {pagePreview.map((page, index) => (
              <Card key={index} className={`group hover-lift hover-glow ${page.color} border-2 overflow-hidden transition-all duration-300`}>
                <div className="grid md:grid-cols-2 h-full">
                  <div className="aspect-square md:aspect-auto overflow-hidden">
                    <img 
                      src={page.image} 
                      alt={page.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6 flex flex-col justify-center">
                    <div className="mb-4 flex justify-center md:justify-start text-yellow-500 group-hover:scale-110 transition-transform duration-300">
                      {page.icon}
                    </div>
                    <h3 className="text-xl font-serif font-semibold text-gray-900 mb-3 group-hover:text-yellow-600 transition-colors duration-300">
                      {page.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                      {page.description}
                    </p>
                    <Button 
                      asChild 
                      variant="outline" 
                      className="border-yellow-500 text-yellow-600 hover:bg-yellow-500 hover:text-white rounded-full group-hover:border-yellow-600 hover-scale transition-all duration-300 self-start"
                    >
                      <Link to={page.link}>
                        Explore More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </Link>
                    </Button>
                  </CardContent>
                </div>
              </Card>
            ))}
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
              <Card key={index} className="group hover-lift hover-glow bg-white border-2 border-yellow-100 hover:border-yellow-300 overflow-hidden transition-all duration-300">
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
                    className="w-full border-yellow-500 text-yellow-600 hover:bg-yellow-500 hover:text-white rounded-full group-hover:border-yellow-600 hover-scale transition-all duration-300"
                  >
                    <Link to="/services">
                      Book Now <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Shop Preview */}
      <section className="py-20 bg-gradient-to-br from-yellow-50 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              Premium Nigerian Beauty Products
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover our carefully curated collection of skincare and beauty products made with authentic Nigerian ingredients
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {shopProducts.map((product) => (
              <Card key={product.id} className="group hover-lift hover-glow bg-white border-2 border-yellow-100 hover:border-yellow-300 overflow-hidden transition-all duration-300">
                <div className="aspect-square overflow-hidden relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {product.bestseller && (
                    <div className="absolute top-2 left-2 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-2 py-1 rounded-full text-xs font-semibold">
                      Bestseller
                    </div>
                  )}
                </div>
                <CardContent className="p-3">
                  <h3 className="font-semibold text-gray-900 mb-2 text-sm group-hover:text-yellow-600 transition-colors duration-300">
                    {product.name}
                  </h3>
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-lg font-bold text-yellow-600">{product.price}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-400 line-through">
                        {product.originalPrice}
                      </span>
                    )}
                  </div>
                  <Button 
                    size="sm"
                    className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black rounded-full hover-scale font-semibold text-xs"
                  >
                    Buy Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              asChild 
              size="lg" 
              className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black px-8 py-6 text-lg rounded-full hover-scale hover-glow font-semibold transition-all duration-300"
            >
              <Link to="/shop">
                <ShoppingBag className="w-5 h-5 mr-2" />
                View All Products
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
              See real results from our Nigerian clients. Witness the amazing transformations achieved through our expert treatments and premium products
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((image) => (
              <Card key={image.id} className="group hover-lift hover-glow bg-white border-2 border-yellow-100 hover:border-yellow-300 overflow-hidden transition-all duration-300">
                <div className="aspect-square overflow-hidden relative">
                  <img 
                    src={image.image} 
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 text-white">
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
              className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black px-8 py-6 text-lg rounded-full hover-scale hover-glow font-semibold transition-all duration-300"
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
      <section className="py-20 bg-gradient-to-br from-yellow-50 to-white">
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
              <Card key={index} className="hover-lift hover-glow bg-white border-2 border-yellow-100 hover:border-yellow-300 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4 hover-scale"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <div className="flex items-center">
                        <MapPin className="w-3 h-3 text-gray-500 mr-1" />
                        <span className="text-sm text-gray-500">{testimonial.location}</span>
                      </div>
                      <div className="flex mt-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current hover-rotate" />
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Ready to Glow Like a True Nigerian Queen?
          </h2>
          <p className="text-xl mb-8 opacity-90 leading-relaxed">
            Book your consultation today and discover beauty treatments made specifically for Nigerian women. Experience the perfect blend of tradition and modern beauty science.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-black text-yellow-400 hover:bg-gray-800 hover:text-yellow-300 px-8 py-6 text-lg rounded-full hover-scale hover-glow font-semibold transition-all duration-300"
            >
              <Link to="/book">
                <Calendar className="w-5 h-5 mr-2" />
                Book Appointment
              </Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="border-black text-black hover:bg-black hover:text-yellow-400 px-8 py-6 text-lg rounded-full hover-scale hover-glow transition-all duration-300"
            >
              <Link to="/contact">
                <MessageSquare className="w-5 h-5 mr-2" />
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
