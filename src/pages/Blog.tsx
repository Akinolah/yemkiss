
import { useState } from 'react';
import { Calendar, User, Tag, ArrowRight, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const blogPosts = [
    {
      id: 1,
      title: "10 Essential Steps for Your Daily Skincare Routine",
      excerpt: "Discover the fundamental steps every skincare routine should include for healthy, glowing skin that lasts all day.",
      category: "skincare-tips",
      author: "Dr. Sarah Chen",
      date: "2024-01-15",
      readTime: "5 min",
      image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=600",
      tags: ["skincare", "routine", "tips"]
    },
    {
      id: 2,
      title: "The Science Behind Vitamin C in Skincare",
      excerpt: "Learn why vitamin C is considered the gold standard in anti-aging skincare and how to incorporate it effectively.",
      category: "ingredients",
      author: "Maria Rodriguez",
      date: "2024-01-12",
      readTime: "7 min",
      image: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=600",
      tags: ["vitamin-c", "anti-aging", "science"]
    },
    {
      id: 3,
      title: "Seasonal Skincare: Transitioning from Winter to Spring",
      excerpt: "Adjust your skincare routine as the seasons change to maintain healthy skin year-round.",
      category: "seasonal-care",
      author: "Emma Thompson",
      date: "2024-01-10",
      readTime: "6 min",
      image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=600",
      tags: ["seasonal", "spring", "winter"]
    },
    {
      id: 4,
      title: "Natural DIY Face Masks for Every Skin Type",
      excerpt: "Create effective face masks at home using natural ingredients from your kitchen.",
      category: "diy-recipes",
      author: "Dr. Sarah Chen",
      date: "2024-01-08",
      readTime: "8 min",
      image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=600",
      tags: ["diy", "face-masks", "natural"]
    },
    {
      id: 5,
      title: "Understanding Your Skin Type: A Complete Guide",
      excerpt: "Learn how to identify your skin type and choose the right products for your unique needs.",
      category: "skincare-basics",
      author: "Maria Rodriguez",
      date: "2024-01-05",
      readTime: "9 min",
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600",
      tags: ["skin-type", "basics", "guide"]
    },
    {
      id: 6,
      title: "The Benefits of Professional Facial Treatments",
      excerpt: "Discover why professional treatments can take your skincare routine to the next level.",
      category: "treatments",
      author: "Emma Thompson",
      date: "2024-01-03",
      readTime: "6 min",
      image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600",
      tags: ["facial", "professional", "treatments"]
    },
    {
      id: 7,
      title: "Common Skincare Mistakes to Avoid",
      excerpt: "Learn about the most common skincare mistakes and how to avoid them for better results.",
      category: "skincare-tips",
      author: "Dr. Sarah Chen",
      date: "2024-01-01",
      readTime: "5 min",
      image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600",
      tags: ["mistakes", "tips", "skincare"]
    },
    {
      id: 8,
      title: "Building Confidence Through Self-Care",
      excerpt: "Explore how a consistent beauty routine can boost your confidence and overall well-being.",
      category: "wellness",
      author: "Emma Thompson",
      date: "2023-12-28",
      readTime: "7 min",
      image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600",
      tags: ["confidence", "self-care", "wellness"]
    }
  ];

  const categories = [
    { value: 'all', label: 'All Posts' },
    { value: 'skincare-tips', label: 'Skincare Tips' },
    { value: 'ingredients', label: 'Ingredients' },
    { value: 'seasonal-care', label: 'Seasonal Care' },
    { value: 'diy-recipes', label: 'DIY Recipes' },
    { value: 'skincare-basics', label: 'Skincare Basics' },
    { value: 'treatments', label: 'Treatments' },
    { value: 'wellness', label: 'Wellness' }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const categoryMatch = selectedCategory === 'all' || post.category === selectedCategory;
    const searchMatch = searchTerm === '' || 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return categoryMatch && searchMatch;
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-rose-50 to-peach-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 mb-6 animate-fade-in">
            Beauty & Skincare 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-peach-600">
              Blog
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Discover expert tips, latest trends, and insider secrets from our beauty professionals. 
            Your journey to radiant skin starts with knowledge.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto">
            <Input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border-rose-200 focus:ring-rose-300 rounded-full px-6 py-3"
            />
          </div>
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

      {/* Featured Post */}
      {filteredPosts.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="mb-8">
              <Badge className="bg-gradient-to-r from-rose-500 to-peach-500 text-white mb-4">
                Featured Article
              </Badge>
            </div>
            
            <Card className="overflow-hidden hover-lift border-rose-100 group">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="aspect-video lg:aspect-auto overflow-hidden">
                  <img 
                    src={filteredPosts[0].image} 
                    alt={filteredPosts[0].title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {filteredPosts[0].tags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="border-rose-200 text-rose-600">
                        #{tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4 group-hover:text-rose-600 transition-colors">
                    {filteredPosts[0].title}
                  </h2>
                  
                  <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                    {filteredPosts[0].excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {filteredPosts[0].author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {formatDate(filteredPosts[0].date)}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {filteredPosts[0].readTime}
                      </div>
                    </div>
                  </div>
                  
                  <Button className="bg-gradient-to-r from-rose-500 to-peach-500 hover:from-rose-600 hover:to-peach-600 text-white rounded-full w-fit">
                    Read Full Article <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-20 bg-gradient-to-br from-rose-50 to-peach-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.slice(1).map((post) => (
              <Card key={post.id} className="overflow-hidden hover-lift border-rose-100 group bg-white/80 backdrop-blur-sm">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                
                <CardContent className="p-6">
                  <div className="flex flex-wrap gap-1 mb-3">
                    {post.tags.slice(0, 2).map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs border-rose-200 text-rose-600">
                        #{tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <h3 className="text-xl font-serif font-semibold text-gray-900 mb-3 group-hover:text-rose-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <div className="flex items-center">
                      <User className="w-3 h-3 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">
                      {formatDate(post.date)}
                    </span>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="text-rose-600 hover:text-rose-700 hover:bg-rose-50 p-0"
                    >
                      Read More <ArrowRight className="w-3 h-3 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">
                No articles found matching your search. Try different keywords or categories.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-rose-600 to-peach-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Stay Updated with Beauty Tips
          </h2>
          <p className="text-xl mb-8 text-rose-100">
            Subscribe to our newsletter and get the latest skincare tips, product updates, 
            and exclusive offers delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-white/20 border-white/30 text-white placeholder:text-white/70 rounded-full px-6"
            />
            <Button 
              className="bg-white text-rose-600 hover:bg-rose-50 px-8 rounded-full hover-scale"
            >
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
