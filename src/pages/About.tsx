'use client';

import { Heart, Award, Users, Sparkles } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

import Aboutimg from '/src/assets/images/about.jpg';
import Testimonyimg from '/src/assets/images/photo.jpg';

import React from 'react';

interface ValueItem {
  icon: JSX.Element;
  title: string;
  description: string;
}

interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

interface TeamMember {
  name: string;
  role: string;
  image: string;
  description: string;
}

const About: React.FC = () => {
  const values: ValueItem[] = [
    {
      icon: <Heart className="w-8 h-8 text-rose-500" />,
      title: "Natural Beauty",
      description: "We believe in enhancing your natural beauty with gentle, effective treatments that respect your skin's unique needs.",
    },
    {
      icon: <Award className="w-8 h-8 text-peach-500" />,
      title: "Expert Care",
      description: "Our team of certified professionals brings years of experience and passion to every treatment and consultation.",
    },
    {
      icon: <Users className="w-8 h-8 text-rose-500" />,
      title: "Personal Approach",
      description: "Every client is unique. We create personalized skincare routines and treatments tailored to your specific goals.",
    },
    {
      icon: <Sparkles className="w-8 h-8 text-peach-500" />,
      title: "Quality Products",
      description: "We use only the finest, scientifically-proven ingredients and products to ensure the best results for your skin.",
    },
  ];

  const timeline: TimelineItem[] = [
    {
      year: "2020",
      title: "Founded",
      description: "Yemkiss was born from a passion for natural beauty and skin wellness.",
    },
    {
      year: "2021",
      title: "First Studio",
      description: "Opened our flagship location with state-of-the-art treatment facilities.",
    },
    {
      year: "2022",
      title: "Product Line",
      description: "Launched our signature skincare collection with natural ingredients.",
    },
    {
      year: "2023",
      title: "Expansion",
      description: "Expanded services to include body therapy and beauty consultations.",
    },
  ];

  const team: TeamMember[] = [
    {
      name: "Adeola",
      role: "Lead Aesthetician",
      image: Testimonyimg,
      description: "10+ years in dermatology and aesthetic treatments",
    },
    {
      name: "Tolani",
      role: "Skincare Specialist",
      image: Testimonyimg,
      description: "Expert in natural and organic skincare solutions",
    },
    {
      name: "Aishat",
      role: "Beauty Consultant",
      image: Testimonyimg,
      description: "Certified beauty therapist and wellness coach",
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-rose-50 to-peach-50">
        <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 mb-6">
              Our Story of{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-peach-600">
                Beautiful Transformation
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              At Yemkiss, we believe that true beauty comes from within and radiates outward.
              Our mission is to help you discover and enhance your natural glow through expert skincare
              treatments, premium products, and personalized beauty consultations.
            </p>
            <p className="text-lg text-gray-600">
              Founded with a vision to make professional skincare accessible to everyone, we combine
              traditional beauty wisdom with modern scientific innovations to deliver exceptional results.
            </p>
          </div>
          <div>
            <img
              src={Aboutimg}
              alt="About Yemkiss"
              className="w-full h-96 object-cover rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-16">
          <Card className="p-8 bg-gradient-to-br from-rose-50 to-transparent border-rose-100 hover-lift">
            <CardContent className="p-0">
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                To empower individuals to embrace their natural beauty through personalized skincare
                solutions, expert treatments, and education.
              </p>
            </CardContent>
          </Card>
          <Card className="p-8 bg-gradient-to-br from-peach-50 to-transparent border-peach-100 hover-lift">
            <CardContent className="p-0">
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                To become the leading destination for holistic beauty and skincare, where science meets
                nature to create transformative experiences.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gradient-to-br from-rose-50 to-peach-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">Our Values</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-16">
            These core principles guide everything we do and ensure every client receives exceptional care.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover-lift bg-white/80 backdrop-blur-sm border-rose-100">
                <CardContent className="p-6">
                  <div className="mb-4 flex justify-center">{value.icon}</div>
                  <h3 className="text-xl font-serif font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">Our Journey</h2>
          <p className="text-xl text-gray-600 mb-16">
            From humble beginnings to becoming a trusted name in skincare and beauty
          </p>
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
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">Meet Our Expert Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-16">
            Our passionate team of certified beauticians and skincare specialists is dedicated to helping you.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover-lift bg-white/80 backdrop-blur-sm border-rose-100">
                <CardContent className="p-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
                  />
                  <h3 className="text-xl font-serif font-semibold text-gray-900 mb-2">{member.name}</h3>
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
