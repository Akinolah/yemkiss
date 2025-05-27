
import { useState } from 'react';
import { Clock, Star, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState('facial');

  const services = {
    facial: [
      {
        name: "Deep Cleansing Facial",
        duration: "60 mins",
        price: "₦15,000",
        description: "Deep pore cleansing and exfoliation for Nigerian skin types",
        benefits: ["Removes blackheads", "Unclogs pores", "Brightens complexion"],
        image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400",
        rating: 4.9,
        popular: true
      },
      {
        name: "Anti-Aging Facial Treatment",
        duration: "75 mins",
        price: "₦25,000",
        description: "Advanced anti-aging treatment for mature African skin",
        benefits: ["Reduces wrinkles", "Firms skin", "Improves elasticity"],
        image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=400",
        rating: 4.8,
        popular: false
      },
      {
        name: "Acne Treatment Facial",
        duration: "60 mins",
        price: "₦18,000",
        description: "Specialized treatment for acne-prone Nigerian skin",
        benefits: ["Clears breakouts", "Reduces inflammation", "Prevents scarring"],
        image: "https://images.unsplash.com/photo-1552693673-1bf958298935?w=400",
        rating: 4.7,
        popular: false
      },
      {
        name: "Brightening Glow Facial",
        duration: "60 mins",
        price: "₦20,000",
        description: "Illuminating treatment for even skin tone",
        benefits: ["Evens skin tone", "Reduces dark spots", "Natural glow"],
        image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400",
        rating: 4.9,
        popular: true
      }
    ],
    hair: [
      {
        name: "Natural Hair Treatment",
        duration: "90 mins",
        price: "₦12,000",
        description: "Deep conditioning for natural African hair",
        benefits: ["Moisturizes hair", "Reduces breakage", "Enhances curls"],
        image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400",
        rating: 4.8,
        popular: true
      },
      {
        name: "Hair Styling & Braiding",
        duration: "120 mins",
        price: "₦8,000",
        description: "Professional styling and traditional braiding",
        benefits: ["Protective styling", "Long-lasting", "Cultural authenticity"],
        image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400",
        rating: 4.7,
        popular: false
      },
      {
        name: "Scalp Treatment",
        duration: "45 mins",
        price: "₦10,000",
        description: "Therapeutic scalp massage and treatment",
        benefits: ["Improves circulation", "Reduces dandruff", "Promotes growth"],
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400",
        rating: 4.9,
        popular: true
      }
    ],
    massage: [
      {
        name: "Full Body Relaxing Massage",
        duration: "60 mins",
        price: "₦15,000",
        description: "Complete body massage with natural oils",
        benefits: ["Relieves tension", "Improves circulation", "Deep relaxation"],
        image: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=400",
        rating: 4.9,
        popular: true
      },
      {
        name: "Hot Stone Therapy",
        duration: "75 mins",
        price: "₦20,000",
        description: "Therapeutic hot stone massage",
        benefits: ["Muscle relaxation", "Stress relief", "Pain reduction"],
        image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400",
        rating: 4.8,
        popular: false
      },
      {
        name: "Prenatal Massage",
        duration: "60 mins",
        price: "₦18,000",
        description: "Safe and gentle massage for expecting mothers",
        benefits: ["Reduces swelling", "Relieves back pain", "Improves sleep"],
        image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=400",
        rating: 4.7,
        popular: true
      }
    ],
    consulting: [
      {
        name: "Skin Analysis Consultation",
        duration: "30 mins",
        price: "₦5,000",
        description: "Comprehensive skin assessment for Nigerian skin",
        benefits: ["Skin type analysis", "Product recommendations", "Custom routine"],
        image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400",
        rating: 4.9,
        popular: true
      },
      {
        name: "Beauty Makeover Consultation",
        duration: "45 mins",
        price: "₦8,000",
        description: "Complete beauty transformation consultation",
        benefits: ["Makeup techniques", "Color analysis", "Style advice"],
        image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400",
        rating: 4.8,
        popular: false
      },
      {
        name: "Bridal Beauty Package",
        duration: "120 mins",
        price: "₦40,000",
        description: "Complete bridal beauty preparation",
        benefits: ["Trial session", "Wedding day prep", "Touch-up kit"],
        image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400",
        rating: 5.0,
        popular: true
      }
    ]
  };

  const handleBookService = (serviceName: string, price: string) => {
    const phoneNumber = "+2348123456789";
    const message = `Hello Yemkiss! I would like to book the ${serviceName} service (${price}). Can you please check availability?`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-yellow-50 to-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 mb-6 animate-fade-in">
            Premium Beauty Services
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-yellow-700">
              for Nigerian Queens
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Expert treatments designed specifically for African beauty, using the finest techniques and natural ingredients.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-12 bg-yellow-50 p-1 rounded-xl">
              <TabsTrigger 
                value="facial" 
                className="rounded-lg data-[state=active]:bg-white data-[state=active]:text-yellow-600 data-[state=active]:shadow-sm"
              >
                Facial Treatments
              </TabsTrigger>
              <TabsTrigger 
                value="hair" 
                className="rounded-lg data-[state=active]:bg-white data-[state=active]:text-yellow-600 data-[state=active]:shadow-sm"
              >
                Hair Beauty
              </TabsTrigger>
              <TabsTrigger 
                value="massage" 
                className="rounded-lg data-[state=active]:bg-white data-[state=active]:text-yellow-600 data-[state=active]:shadow-sm"
              >
                Massage Therapy
              </TabsTrigger>
              <TabsTrigger 
                value="consulting" 
                className="rounded-lg data-[state=active]:bg-white data-[state=active]:text-yellow-600 data-[state=active]:shadow-sm"
              >
                Consulting
              </TabsTrigger>
            </TabsList>

            {Object.entries(services).map(([category, categoryServices]) => (
              <TabsContent key={category} value={category} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  {categoryServices.map((service, index) => (
                    <Card key={index} className="overflow-hidden hover-lift border-yellow-200 hover:border-yellow-400 group">
                      <div className="aspect-video overflow-hidden relative">
                        <img 
                          src={service.image} 
                          alt={service.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        {service.popular && (
                          <Badge className="absolute top-4 left-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black">
                            Most Popular
                          </Badge>
                        )}
                      </div>
                      
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-3">
                          <h3 className="text-2xl font-serif font-bold text-gray-900">
                            {service.name}
                          </h3>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-yellow-600">{service.price}</div>
                            <div className="flex items-center text-sm text-gray-500">
                              <Clock className="w-4 h-4 mr-1" />
                              {service.duration}
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center mb-4">
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i} 
                                className={`w-4 h-4 ${
                                  i < Math.floor(service.rating) 
                                    ? 'text-yellow-400 fill-current' 
                                    : 'text-gray-300'
                                }`} 
                              />
                            ))}
                          </div>
                          <span className="ml-2 text-sm text-gray-600">
                            {service.rating} ({Math.floor(Math.random() * 100) + 50} reviews)
                          </span>
                        </div>

                        <p className="text-gray-600 mb-4">
                          {service.description}
                        </p>

                        <div className="mb-6">
                          <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
                          <ul className="space-y-1">
                            {service.benefits.map((benefit, i) => (
                              <li key={i} className="flex items-center text-sm text-gray-600">
                                <ArrowRight className="w-3 h-3 text-yellow-600 mr-2" />
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <Button 
                          onClick={() => handleBookService(service.name, service.price)}
                          className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black rounded-full hover-scale font-semibold"
                        >
                          Book via WhatsApp
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-600 to-yellow-700 text-black">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Not Sure Which Service is Right for You?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Book a consultation with our Nigerian beauty experts to create a personalized treatment plan.
          </p>
          <Button 
            onClick={() => handleBookService("Skin Analysis Consultation", "₦5,000")}
            size="lg" 
            className="bg-black text-yellow-400 hover:bg-gray-800 px-8 py-6 text-lg rounded-full hover-scale font-semibold"
          >
            Book Free Consultation
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;
