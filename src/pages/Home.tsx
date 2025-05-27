
import { Link } from 'react-router-dom';
import { Star, ArrowRight, Sparkles, Heart, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Home = () => {
  const featuredServices = [
    {
      title: "Facial Treatments",
      description: "Rejuvenating facial therapies for glowing skin",
      icon: <Sparkles className="w-8 h-8 text-rose-500" />,
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400"
    },
    {
      title: "Body Therapy",
      description: "Complete body wellness and skincare solutions",
      icon: <Heart className="w-8 h-8 text-peach-500" />,
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400"
    },
    {
      title: "Beauty Consultation",
      description: "Personalized beauty advice from experts",
      icon: <Award className="w-8 h-8 text-rose-500" />,
      image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      rating: 5,
      text: "Yemkiss transformed my skin! The facial treatment was amazing and the staff is incredibly professional.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100"
    },
    {
      name: "Maria Rodriguez",
      rating: 5,
      text: "I love their natural approach to skincare. The products are amazing and the results speak for themselves!",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100"
    },
    {
      name: "Emma Wilson",
      rating: 5,
      text: "The body therapy session was so relaxing and effective. I feel rejuvenated and my skin looks incredible!",
      image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=100"
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
          <div className="absolute inset-0 bg-gradient-to-r from-rose-900/70 to-peach-900/70" />
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
            Radiant Beauty
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-rose-300 to-peach-300">
              Starts Here
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-rose-100 max-w-2xl mx-auto">
            Discover the art of natural beauty with Yemkiss. Premium skincare, expert treatments, and personalized care for your glowing transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-gradient-to-r from-rose-500 to-peach-500 hover:from-rose-600 hover:to-peach-600 text-white px-8 py-6 text-lg rounded-full hover-scale"
            >
              <Link to="/book">Book Consultation</Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-rose-600 px-8 py-6 text-lg rounded-full hover-scale"
            >
              <Link to="/shop">Shop Products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-gradient-to-br from-rose-50 to-peach-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              Welcome to Yemkiss
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Where beauty meets science. We're passionate about helping you achieve your most radiant self through 
              natural skincare solutions, expert treatments, and personalized beauty consultations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <Card key={index} className="group hover-lift bg-white/80 backdrop-blur-sm border-rose-100 overflow-hidden">
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
                    className="border-rose-300 text-rose-600 hover:bg-rose-50 rounded-full group-hover:border-rose-400"
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
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Real stories from real people who've experienced the Yemkiss difference
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover-lift bg-gradient-to-br from-rose-50 to-peach-50 border-rose-100">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <div className="flex">
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
      <section className="py-20 bg-gradient-to-r from-rose-600 to-peach-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Ready to Start Your Beauty Journey?
          </h2>
          <p className="text-xl mb-8 text-rose-100">
            Book a consultation today and discover the perfect skincare routine for your unique needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-white text-rose-600 hover:bg-rose-50 px-8 py-6 text-lg rounded-full hover-scale"
            >
              <Link to="/book">Book Now</Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-rose-600 px-8 py-6 text-lg rounded-full hover-scale"
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
