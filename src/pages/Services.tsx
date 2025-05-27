
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
        name: "Hydrating Facial",
        duration: "60 mins",
        price: "$120",
        description: "Deep hydration treatment for dry and dehydrated skin",
        benefits: ["Restores moisture", "Improves skin texture", "Reduces fine lines"],
        image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400",
        rating: 4.9,
        popular: true
      },
      {
        name: "Anti-Aging Facial",
        duration: "75 mins",
        price: "$180",
        description: "Advanced treatment targeting signs of aging and skin renewal",
        benefits: ["Reduces wrinkles", "Firms skin", "Improves elasticity"],
        image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=400",
        rating: 4.8,
        popular: false
      },
      {
        name: "Acne Treatment Facial",
        duration: "60 mins",
        price: "$140",
        description: "Specialized treatment for acne-prone and problematic skin",
        benefits: ["Clears breakouts", "Reduces inflammation", "Prevents future acne"],
        image: "https://images.unsplash.com/photo-1552693673-1bf958298935?w=400",
        rating: 4.7,
        popular: false
      },
      {
        name: "Brightening Facial",
        duration: "60 mins",
        price: "$160",
        description: "Illuminating treatment for dull and uneven skin tone",
        benefits: ["Evens skin tone", "Reduces dark spots", "Adds radiance"],
        image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400",
        rating: 4.9,
        popular: true
      }
    ],
    body: [
      {
        name: "Full Body Exfoliation",
        duration: "45 mins",
        price: "$100",
        description: "Complete body scrub and moisturizing treatment",
        benefits: ["Removes dead skin", "Improves circulation", "Soft smooth skin"],
        image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400",
        rating: 4.8,
        popular: true
      },
      {
        name: "Body Wrap Treatment",
        duration: "90 mins",
        price: "$200",
        description: "Detoxifying and firming body wrap with natural ingredients",
        benefits: ["Detoxifies skin", "Improves firmness", "Reduces cellulite"],
        image: "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?w=400",
        rating: 4.7,
        popular: false
      },
      {
        name: "Relaxing Body Massage",
        duration: "60 mins",
        price: "$130",
        description: "Therapeutic massage with aromatherapy oils",
        benefits: ["Relieves tension", "Improves circulation", "Deep relaxation"],
        image: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=400",
        rating: 4.9,
        popular: true
      }
    ],
    consultation: [
      {
        name: "Skin Analysis Consultation",
        duration: "30 mins",
        price: "$60",
        description: "Comprehensive skin assessment and personalized routine recommendation",
        benefits: ["Skin type analysis", "Product recommendations", "Custom routine"],
        image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400",
        rating: 4.9,
        popular: true
      },
      {
        name: "Beauty Makeover Consultation",
        duration: "45 mins",
        price: "$80",
        description: "Complete beauty assessment with makeup and styling tips",
        benefits: ["Makeup techniques", "Color analysis", "Style recommendations"],
        image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400",
        rating: 4.8,
        popular: false
      },
      {
        name: "Bridal Beauty Package",
        duration: "120 mins",
        price: "$300",
        description: "Complete bridal preparation with trial makeup and skincare",
        benefits: ["Trial session", "Wedding day prep", "Touch-up kit"],
        image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400",
        rating: 5.0,
        popular: true
      }
    ]
  };

  const handleBookService = (serviceName: string, price: string) => {
    const phoneNumber = "+1234567890"; // Replace with actual phone number
    const message = `Hello Yemkiss! I would like to book the ${serviceName} service (${price}). Can you please check availability?`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-rose-50 to-peach-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 mb-6 animate-fade-in">
            Our Premium 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-peach-600">
              Beauty Services
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Discover our comprehensive range of skincare treatments, body therapies, and beauty consultations 
            designed to enhance your natural glow and boost your confidence.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-12 bg-rose-50 p-1 rounded-xl">
              <TabsTrigger 
                value="facial" 
                className="rounded-lg data-[state=active]:bg-white data-[state=active]:text-rose-600 data-[state=active]:shadow-sm"
              >
                Facial Treatments
              </TabsTrigger>
              <TabsTrigger 
                value="body" 
                className="rounded-lg data-[state=active]:bg-white data-[state=active]:text-rose-600 data-[state=active]:shadow-sm"
              >
                Body Therapy
              </TabsTrigger>
              <TabsTrigger 
                value="consultation" 
                className="rounded-lg data-[state=active]:bg-white data-[state=active]:text-rose-600 data-[state=active]:shadow-sm"
              >
                Consultations
              </TabsTrigger>
            </TabsList>

            {Object.entries(services).map(([category, categoryServices]) => (
              <TabsContent key={category} value={category} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  {categoryServices.map((service, index) => (
                    <Card key={index} className="overflow-hidden hover-lift border-rose-100 group">
                      <div className="aspect-video overflow-hidden relative">
                        <img 
                          src={service.image} 
                          alt={service.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        {service.popular && (
                          <Badge className="absolute top-4 left-4 bg-gradient-to-r from-rose-500 to-peach-500 text-white">
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
                            <div className="text-2xl font-bold text-rose-600">{service.price}</div>
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
                                <ArrowRight className="w-3 h-3 text-rose-500 mr-2" />
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <Button 
                          onClick={() => handleBookService(service.name, service.price)}
                          className="w-full bg-gradient-to-r from-rose-500 to-peach-500 hover:from-rose-600 hover:to-peach-600 text-white rounded-full hover-scale"
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
      <section className="py-20 bg-gradient-to-r from-rose-600 to-peach-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Not Sure Which Service is Right for You?
          </h2>
          <p className="text-xl mb-8 text-rose-100">
            Book a consultation with our experts to create a personalized treatment plan 
            that's perfect for your skin type and beauty goals.
          </p>
          <Button 
            onClick={() => handleBookService("Skin Analysis Consultation", "$60")}
            size="lg" 
            className="bg-white text-rose-600 hover:bg-rose-50 px-8 py-6 text-lg rounded-full hover-scale"
          >
            Book Free Consultation
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;
