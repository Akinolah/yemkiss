
import { Heart, Award, Users, Sparkles } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const values = [
    {
      icon: <Heart className="w-8 h-8 text-rose-500" />,
      title: "Natural Beauty",
      description: "We believe in enhancing your natural beauty with gentle, effective treatments that respect your skin's unique needs."
    },
    {
      icon: <Award className="w-8 h-8 text-peach-500" />,
      title: "Expert Care",
      description: "Our team of certified professionals brings years of experience and passion to every treatment and consultation."
    },
    {
      icon: <Users className="w-8 h-8 text-rose-500" />,
      title: "Personal Approach",
      description: "Every client is unique. We create personalized skincare routines and treatments tailored to your specific goals."
    },
    {
      icon: <Sparkles className="w-8 h-8 text-peach-500" />,
      title: "Quality Products",
      description: "We use only the finest, scientifically-proven ingredients and products to ensure the best results for your skin."
    }
  ];

  const timeline = [
    {
      year: "2020",
      title: "Founded",
      description: "Yemkiss was born from a passion for natural beauty and skin wellness."
    },
    {
      year: "2021",
      title: "First Studio",
      description: "Opened our flagship location with state-of-the-art treatment facilities."
    },
    {
      year: "2022",
      title: "Product Line",
      description: "Launched our signature skincare collection with natural ingredients."
    },
    {
      year: "2023",
      title: "Expansion",
      description: "Expanded services to include body therapy and beauty consultations."
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-rose-50 to-peach-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 mb-6">
                Our Story of 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-peach-600">
                  Beautiful Transformation
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                At Yemkiss, we believe that true beauty comes from within and radiates outward. 
                Our mission is to help you discover and enhance your natural glow through expert 
                skincare treatments, premium products, and personalized beauty consultations.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Founded with a vision to make professional skincare accessible to everyone, 
                we combine traditional beauty wisdom with modern scientific innovations to 
                deliver exceptional results that make you feel confident and beautiful.
              </p>
            </div>
            <div className="animate-scale-in">
              <img 
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600" 
                alt="About Yemkiss"
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            <Card className="p-8 bg-gradient-to-br from-rose-50 to-transparent border-rose-100 hover-lift">
              <CardContent className="p-0">
                <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Our Mission</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To empower individuals to embrace their natural beauty through personalized 
                  skincare solutions, expert treatments, and education. We're committed to using 
                  only the finest natural ingredients and proven techniques to help our clients 
                  achieve healthy, radiant skin that reflects their inner confidence.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-peach-50 to-transparent border-peach-100 hover-lift">
              <CardContent className="p-0">
                <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Our Vision</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To become the leading destination for holistic beauty and skincare, where 
                  science meets nature to create transformative experiences. We envision a 
                  world where everyone has access to professional-grade skincare that's both 
                  effective and gentle, promoting long-term skin health and natural beauty.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gradient-to-br from-rose-50 to-peach-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core principles guide everything we do and ensure that every client 
              receives the exceptional care and results they deserve.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover-lift bg-white/80 backdrop-blur-sm border-rose-100">
                <CardContent className="p-6">
                  <div className="mb-4 flex justify-center">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600">
              From humble beginnings to becoming a trusted name in skincare and beauty
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-rose-300 to-peach-300 rounded-full"></div>
            
            {timeline.map((item, index) => (
              <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <Card className="hover-lift bg-gradient-to-br from-rose-50 to-peach-50 border-rose-100">
                    <CardContent className="p-6">
                      <div className="text-2xl font-bold text-rose-600 mb-2">{item.year}</div>
                      <h3 className="text-xl font-serif font-semibold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-br from-rose-400 to-peach-400 rounded-full border-4 border-white shadow-lg"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-rose-50 to-peach-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              Meet Our Expert Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our passionate team of certified beauticians and skincare specialists is 
              dedicated to helping you achieve your beauty goals.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Sarah Chen",
                role: "Lead Aesthetician",
                image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=300",
                description: "10+ years in dermatology and aesthetic treatments"
              },
              {
                name: "Maria Rodriguez",
                role: "Skincare Specialist",
                image: "https://images.unsplash.com/photo-1594824898796-b6c54e69195e?w=300",
                description: "Expert in natural and organic skincare solutions"
              },
              {
                name: "Emma Thompson",
                role: "Beauty Consultant",
                image: "https://images.unsplash.com/photo-1551836022-8b2858c9c69b?w=300",
                description: "Certified beauty therapist and wellness coach"
              }
            ].map((member, index) => (
              <Card key={index} className="text-center hover-lift bg-white/80 backdrop-blur-sm border-rose-100">
                <CardContent className="p-6">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
                  />
                  <h3 className="text-xl font-serif font-semibold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-rose-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
