
import { Link } from 'react-router-dom';
import { Star, ArrowRight, Sparkles, Heart, Award, Users, MapPin, Calendar, ShoppingBag, Camera, MessageSquare, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Home = () => {
  const featuredServices = [
    {
      title: "Facial Treatments",
      description: "Premium facial care for all Nigerian skin types",
      icon: <Sparkles className="w-8 h-8 text-yellow-600" />,
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400"
    },
    {
      title: "Hair Beauty",
      description: "Natural hair care and styling for African hair",
      icon: <Heart className="w-8 h-8 text-black" />,
      image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400"
    },
    {
      title: "Massage Therapy",
      description: "Relaxing massage therapy with traditional techniques",
      icon: <Award className="w-8 h-8 text-yellow-600" />,
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400"
    },
    {
      title: "Beauty Consulting",
      description: "Expert advice for your unique beauty journey",
      icon: <Users className="w-8 h-8 text-black" />,
      image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400"
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
      description: "Learn about our story and commitment to Nigerian beauty",
      icon: <Heart className="w-6 h-6" />,
      link: "/about",
      color: "bg-yellow-50 border-yellow-200 hover:bg-yellow-100"
    },
    {
      title: "Our Services",
      description: "Professional treatments tailored for you",
      icon: <Sparkles className="w-6 h-6" />,
      link: "/services",
      color: "bg-gray-50 border-gray-200 hover:bg-gray-100"
    },
    {
      title: "Shop Products",
      description: "Premium skincare products in Nigerian Naira",
      icon: <ShoppingBag className="w-6 h-6" />,
      link: "/shop",
      color: "bg-yellow-50 border-yellow-200 hover:bg-yellow-100"
    },
    {
      title: "Gallery",
      description: "See our amazing transformations",
      icon: <Camera className="w-6 h-6" />,
      link: "/gallery",
      color: "bg-gray-50 border-gray-200 hover:bg-gray-100"
    },
    {
      title: "Beauty Blog",
      description: "Tips and advice for Nigerian beauty",
      icon: <MessageSquare className="w-6 h-6" />,
      link: "/blog",
      color: "bg-yellow-50 border-yellow-200 hover:bg-yellow-100"
    },
    {
      title: "Contact Us",
      description: "Get in touch with our team",
      icon: <Phone className="w-6 h-6" />,
      link: "/contact",
      color: "bg-gray-50 border-gray-200 hover:bg-gray-100"
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
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">
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
              className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black px-8 py-6 text-lg rounded-full hover-scale font-semibold"
            >
              <Link to="/book">Book Consultation</Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-black px-8 py-6 text-lg rounded-full hover-scale"
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
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-yellow-600 mb-2">
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
              Explore Yemkiss
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover everything we offer to enhance your natural Nigerian beauty
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pagePreview.map((page, index) => (
              <Card key={index} className={`group hover-lift ${page.color} border-2 overflow-hidden transition-all duration-300`}>
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center text-yellow-600">
                    {page.icon}
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-gray-900 mb-3">
                    {page.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {page.description}
                  </p>
                  <Button 
                    asChild 
                    variant="outline" 
                    className="border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white rounded-full group-hover:border-yellow-700"
                  >
                    <Link to={page.link}>
                      Explore <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
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
              Our Expert Services
            </h2>
            <p className="text-xl text-gray-600">
              Professional beauty treatments designed for Nigerian skin and hair
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredServices.map((service, index) => (
              <Card key={index} className="group hover-lift bg-white border-2 border-yellow-100 hover:border-yellow-300 overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <Button 
                    asChild 
                    variant="outline" 
                    className="border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white rounded-full group-hover:border-yellow-700"
                  >
                    <Link to="/services">
                      Learn More <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-yellow-50 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              What Our Nigerian Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Real stories from beautiful women across Nigeria
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover-lift bg-white border-2 border-yellow-100 hover:border-yellow-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <div className="flex items-center">
                        <MapPin className="w-3 h-3 text-gray-500 mr-1" />
                        <span className="text-sm text-gray-500">{testimonial.location}</span>
                      </div>
                      <div className="flex mt-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-600 to-yellow-700 text-black">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Ready to Glow Like a True Nigerian Queen?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Book your consultation today and discover beauty treatments made for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-black text-yellow-400 hover:bg-gray-800 px-8 py-6 text-lg rounded-full hover-scale font-semibold"
            >
              <Link to="/book">
                <Calendar className="w-5 h-5 mr-2" />
                Book Now
              </Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="border-black text-black hover:bg-black hover:text-yellow-400 px-8 py-6 text-lg rounded-full hover-scale"
            >
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
