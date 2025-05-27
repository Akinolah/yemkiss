
import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const galleryItems = [
    {
      id: 1,
      type: 'image',
      category: 'facial',
      title: 'Hydrating Facial Results',
      description: 'Before and after hydrating facial treatment',
      image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600',
      beforeAfter: true
    },
    {
      id: 2,
      type: 'image',
      category: 'body',
      title: 'Body Therapy Session',
      description: 'Relaxing body treatment in our spa',
      image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600',
      beforeAfter: false
    },
    {
      id: 3,
      type: 'video',
      category: 'transformation',
      title: 'Skincare Transformation',
      description: '30-day transformation with our products',
      image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=600',
      beforeAfter: true
    },
    {
      id: 4,
      type: 'image',
      category: 'facial',
      title: 'Anti-Aging Treatment',
      description: 'Professional anti-aging facial results',
      image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600',
      beforeAfter: true
    },
    {
      id: 5,
      type: 'image',
      category: 'products',
      title: 'Product Collection',
      description: 'Our premium skincare line',
      image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600',
      beforeAfter: false
    },
    {
      id: 6,
      type: 'image',
      category: 'studio',
      title: 'Treatment Room',
      description: 'Our state-of-the-art treatment facility',
      image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600',
      beforeAfter: false
    },
    {
      id: 7,
      type: 'image',
      category: 'facial',
      title: 'Acne Treatment Results',
      description: 'Clear skin transformation with our acne treatment',
      image: 'https://images.unsplash.com/photo-1552693673-1bf958298935?w=600',
      beforeAfter: true
    },
    {
      id: 8,
      type: 'video',
      category: 'treatment',
      title: 'Facial Treatment Process',
      description: 'Watch our signature facial treatment in action',
      image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600',
      beforeAfter: false
    },
    {
      id: 9,
      type: 'image',
      category: 'body',
      title: 'Body Scrub Treatment',
      description: 'Exfoliating body treatment for smooth skin',
      image: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=600',
      beforeAfter: false
    },
    {
      id: 10,
      type: 'image',
      category: 'transformation',
      title: 'Skin Brightening Results',
      description: 'Amazing brightening treatment transformation',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600',
      beforeAfter: true
    },
    {
      id: 11,
      type: 'image',
      category: 'studio',
      title: 'Reception Area',
      description: 'Welcome to our beautiful spa reception',
      image: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=600',
      beforeAfter: false
    },
    {
      id: 12,
      type: 'image',
      category: 'products',
      title: 'Natural Ingredients',
      description: 'Premium natural ingredients we use',
      image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600',
      beforeAfter: false
    }
  ];

  const categories = [
    { value: 'all', label: 'All' },
    { value: 'facial', label: 'Facial Treatments' },
    { value: 'body', label: 'Body Therapy' },
    { value: 'transformation', label: 'Transformations' },
    { value: 'products', label: 'Products' },
    { value: 'studio', label: 'Our Studio' },
    { value: 'treatment', label: 'Treatments' }
  ];

  const filteredItems = galleryItems.filter(item => 
    selectedCategory === 'all' || item.category === selectedCategory
  );

  const openModal = (item: any) => {
    setSelectedImage(item);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const currentIndex = filteredItems.findIndex(item => item.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setSelectedImage(filteredItems[nextIndex]);
  };

  const prevImage = () => {
    const currentIndex = filteredItems.findIndex(item => item.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setSelectedImage(filteredItems[prevIndex]);
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-rose-50 to-peach-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 mb-6 animate-fade-in">
            Our Beauty 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-peach-600">
              Gallery
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Explore our stunning collection of transformation stories, treatment processes, 
            and behind-the-scenes glimpses of the Yemkiss experience.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-rose-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category.value}
                variant={selectedCategory === category.value ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.value)}
                className={`rounded-full ${
                  selectedCategory === category.value
                    ? 'bg-gradient-to-r from-rose-500 to-peach-500 text-white'
                    : 'border-rose-300 text-rose-600 hover:bg-rose-50'
                }`}
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <Card 
                key={item.id} 
                className="overflow-hidden cursor-pointer hover-lift group border-rose-100"
                onClick={() => openModal(item)}
              >
                <div className="aspect-square overflow-hidden relative">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  
                  {/* Overlay badges */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    {item.type === 'video' && (
                      <Badge className="bg-black/80 text-white flex items-center gap-1">
                        <Play className="w-3 h-3" />
                        Video
                      </Badge>
                    )}
                    {item.beforeAfter && (
                      <Badge className="bg-gradient-to-r from-rose-500 to-peach-500 text-white">
                        Before & After
                      </Badge>
                    )}
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                      <p className="text-sm text-gray-200">{item.description}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">
                No items found in this category. Try selecting a different filter.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            {/* Close button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-white/20 hover:bg-white/30 text-white"
            >
              <X className="w-6 h-6" />
            </Button>

            {/* Navigation buttons */}
            <Button
              variant="ghost"
              size="icon"
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 text-white"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 text-white"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>

            {/* Image */}
            <img 
              src={selectedImage.image} 
              alt={selectedImage.title}
              className="max-w-full max-h-full object-contain"
            />

            {/* Image info */}
            <div className="absolute bottom-4 left-4 right-4 text-white bg-black/50 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                {selectedImage.type === 'video' && (
                  <Badge className="bg-white/20 text-white">Video</Badge>
                )}
                {selectedImage.beforeAfter && (
                  <Badge className="bg-gradient-to-r from-rose-500 to-peach-500 text-white">
                    Before & After
                  </Badge>
                )}
              </div>
              <h3 className="text-xl font-semibold mb-1">{selectedImage.title}</h3>
              <p className="text-gray-200">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-rose-600 to-peach-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Ready for Your Own Transformation?
          </h2>
          <p className="text-xl mb-8 text-rose-100">
            Join hundreds of satisfied clients who have experienced the Yemkiss difference. 
            Book your consultation today and start your beauty journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-rose-600 hover:bg-rose-50 px-8 py-6 text-lg rounded-full hover-scale"
            >
              Book Consultation
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-rose-600 px-8 py-6 text-lg rounded-full hover-scale"
            >
              View Services
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
