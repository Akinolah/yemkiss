import { useState } from 'react';
import { ShoppingBag, Filter, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedSkinType, setSelectedSkinType] = useState('all');

  const products = [
    {
      id: 1,
      name: "Nigerian Shea Butter Serum",
      category: "serums",
      skinType: "dry",
      price: "₦8,500",
      originalPrice: "₦12,000",
      rating: 4.9,
      reviews: 124,
      description: "Premium shea butter serum perfect for Nigerian skin",
      image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400",
      bestseller: true,
      ingredients: ["Shea Butter", "Hyaluronic Acid", "Vitamin E"]
    },
    {
      id: 2,
      name: "Gentle Black Soap Cleanser",
      category: "cleansers",
      skinType: "sensitive",
      price: "₦4,200",
      originalPrice: "",
      rating: 4.8,
      reviews: 89,
      description: "Traditional black soap cleanser for all skin types",
      image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=400",
      bestseller: false,
      ingredients: ["Black Soap", "Aloe Vera", "Coconut Oil"]
    },
    {
      id: 3,
      name: "Vitamin C Brightening Cream",
      category: "moisturizers",
      skinType: "normal",
      price: "₦7,800",
      originalPrice: "",
      rating: 4.7,
      reviews: 156,
      description: "Brightening cream with natural Nigerian extracts",
      image: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=400",
      bestseller: true,
      ingredients: ["Vitamin C", "Turmeric", "Shea Butter"]
    },
    {
      id: 4,
      name: "Clay Mask (Lagos Clay)",
      category: "masks",
      skinType: "oily",
      price: "₦5,250",
      originalPrice: "",
      rating: 4.6,
      reviews: 203,
      description: "Deep cleansing mask with authentic Lagos clay",
      image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=400",
      bestseller: false,
      ingredients: ["Lagos Clay", "Tea Tree Oil", "Neem Extract"]
    },
    {
      id: 5,
      name: "Anti-Aging Night Oil",
      category: "serums",
      skinType: "mature",
      price: "₦10,200",
      originalPrice: "₦12,750",
      rating: 4.9,
      reviews: 87,
      description: "Powerful anti-aging oil with African botanicals",
      image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=400",
      bestseller: true,
      ingredients: ["Baobab Oil", "Argan Oil", "Marula Oil"]
    },
    {
      id: 6,
      name: "Exfoliating Sugar Scrub",
      category: "exfoliants",
      skinType: "all",
      price: "₦4,800",
      originalPrice: "",
      rating: 4.5,
      reviews: 112,
      description: "Natural sugar scrub with Nigerian honey",
      image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400",
      bestseller: false,
      ingredients: ["Brown Sugar", "Nigerian Honey", "Coconut Oil"]
    },
    {
      id: 7,
      name: "Soothing Eye Cream",
      category: "eye-care",
      skinType: "all",
      price: "₦6,300",
      originalPrice: "",
      rating: 4.8,
      reviews: 94,
      description: "Gentle eye cream with African potato extract",
      image: "https://images.unsplash.com/photo-1599735214876-cc4e3ab3a924?w=400",
      bestseller: false,
      ingredients: ["African Potato", "Cucumber", "Aloe Vera"]
    },
    {
      id: 8,
      name: "Hydrating Sheet Masks (5-pack)",
      category: "masks",
      skinType: "dry",
      price: "₦3,750",
      originalPrice: "",
      rating: 4.7,
      reviews: 178,
      description: "Pack of 5 hydrating masks with Nigerian ingredients",
      image: "https://images.unsplash.com/photo-1570554886111-e80fcca6a029?w=400",
      bestseller: true,
      ingredients: ["Shea Butter", "Plantain Extract", "Aloe Vera"]
    }
  ];

  const categories = [
    { value: 'all', label: 'All Products' },
    { value: 'cleansers', label: 'Cleansers' },
    { value: 'serums', label: 'Serums' },
    { value: 'moisturizers', label: 'Moisturizers' },
    { value: 'masks', label: 'Masks' },
    { value: 'exfoliants', label: 'Exfoliants' },
    { value: 'eye-care', label: 'Eye Care' }
  ];

  const skinTypes = [
    { value: 'all', label: 'All Skin Types' },
    { value: 'normal', label: 'Normal' },
    { value: 'dry', label: 'Dry' },
    { value: 'oily', label: 'Oily' },
    { value: 'sensitive', label: 'Sensitive' },
    { value: 'mature', label: 'Mature' }
  ];

  const filteredProducts = products.filter(product => {
    const categoryMatch = selectedCategory === 'all' || product.category === selectedCategory;
    const skinTypeMatch = selectedSkinType === 'all' || product.skinType === selectedSkinType || product.skinType === 'all';
    return categoryMatch && skinTypeMatch;
  });

  const handlePurchase = (product: any) => {
    const phoneNumber = "+2348123456789";
    const message = `Hello Yemkiss! I want to purchase the ${product.name} (${product.price}). Can you share the details and payment options?`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-yellow-50 to-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 mb-6 animate-fade-in">
            Premium Nigerian Skincare
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-yellow-700">
              Collection
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Discover our carefully curated selection of skincare products made with authentic Nigerian ingredients, priced in Naira for your convenience.
          </p>
          <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
            <ShoppingBag className="w-4 h-4" />
            <span>Free delivery in Lagos • Easy WhatsApp checkout • Pay in Naira</span>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b border-yellow-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-600" />
              <span className="font-medium text-gray-900">Filter Products:</span>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-48 border-yellow-200 focus:ring-yellow-300">
                  <SelectValue placeholder="Select Category" />
                </SelectTrigger>
                <SelectContent className="bg-white border-yellow-200">
                  {categories.map((category) => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedSkinType} onValueChange={setSelectedSkinType}>
                <SelectTrigger className="w-48 border-yellow-200 focus:ring-yellow-300">
                  <SelectValue placeholder="Select Skin Type" />
                </SelectTrigger>
                <SelectContent className="bg-white border-yellow-200">
                  {skinTypes.map((skinType) => (
                    <SelectItem key={skinType.value} value={skinType.value}>
                      {skinType.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="overflow-hidden hover-lift border-yellow-200 hover:border-yellow-400 group">
                <div className="aspect-square overflow-hidden relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {product.bestseller && (
                    <Badge className="absolute top-4 left-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black">
                      Bestseller
                    </Badge>
                  )}
                  {product.originalPrice && (
                    <Badge className="absolute top-4 right-4 bg-green-500 text-white">
                      Sale
                    </Badge>
                  )}
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-serif font-semibold text-gray-900 mb-2">
                    {product.name}
                  </h3>

                  <div className="flex items-center mb-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating) 
                              ? 'text-yellow-400 fill-current' 
                              : 'text-gray-300'
                          }`} 
                        />
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-gray-600">
                      {product.rating} ({product.reviews} reviews)
                    </span>
                  </div>

                  <p className="text-gray-600 text-sm mb-4">
                    {product.description}
                  </p>

                  <div className="mb-4">
                    <span className="text-xs text-gray-500 uppercase tracking-wide">Key Ingredients:</span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {product.ingredients.slice(0, 3).map((ingredient, i) => (
                        <Badge key={i} variant="outline" className="text-xs border-yellow-200 text-yellow-600">
                          {ingredient}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-yellow-600">{product.price}</span>
                      {product.originalPrice && (
                        <span className="text-lg text-gray-400 line-through">
                          {product.originalPrice}
                        </span>
                      )}
                    </div>
                  </div>

                  <Button 
                    onClick={() => handlePurchase(product)}
                    className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black rounded-full hover-scale font-semibold"
                  >
                    Buy on WhatsApp
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">
                No products found matching your filters. Try adjusting your selection.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-gradient-to-br from-yellow-50 to-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
            Why Choose Yemkiss Nigerian Products?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Nigerian Ingredients</h3>
              <p className="text-gray-600 text-sm">Made with authentic Nigerian botanicals and natural ingredients</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🧪</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Tested for African Skin</h3>
              <p className="text-gray-600 text-sm">All products tested specifically for Nigerian and African skin types</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">♻️</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Locally Sourced</h3>
              <p className="text-gray-600 text-sm">Supporting Nigerian farmers and sustainable local production</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;
