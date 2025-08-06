
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Hotel, Church, Trees, Building, Coffee, Plane, Bus, Mountain, Camera, Waves, FerrisWheel as Ferris, Calendar } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const PlacesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [
    { id: 'hotels', name: 'Hotels', icon: Hotel, color: 'bg-blue-500' },
    { id: 'temples', name: 'Temples', icon: Building, color: 'bg-orange-500' },
    { id: 'parks', name: 'Parks', icon: Trees, color: 'bg-green-500' },
    { id: 'church', name: 'Church', icon: Church, color: 'bg-purple-500' },
    { id: 'theaters', name: 'Theaters', icon: Camera, color: 'bg-red-500' },
    { id: 'cafes', name: 'Cafés', icon: Coffee, color: 'bg-amber-500' },
    { id: 'airports', name: 'Airports', icon: Plane, color: 'bg-sky-500' },
    { id: 'bus-stands', name: 'Bus Stands', icon: Bus, color: 'bg-gray-500' },
    { id: 'sceneries', name: 'Sceneries', icon: Mountain, color: 'bg-emerald-500' },
    { id: 'theme-park', name: 'Theme Park', icon: Ferris, color: 'bg-pink-500' },
    { id: 'exhibitions', name: 'Exhibitions', icon: Calendar, color: 'bg-indigo-500' },
    { id: 'water-bodies', name: 'Water Bodies', icon: Waves, color: 'bg-cyan-500' },
  ];

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    toast({
      title: `${category.name} Selected`,
      description: "🚧 Map integration isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  return (
    <div className="min-h-screen light-gradient">
      <Helmet>
        <title>TourDoxa - Places | Discover Trichy</title>
        <meta name="description" content="Explore various categories of places in Trichy including hotels, temples, parks, and more." />
      </Helmet>

      <div className="pt-20 pb-8 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Discover Amazing
              <span className="block text-green-600">Places in Trichy</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose from various categories to find the perfect places for your adventure
            </p>
          </motion.div>

          {/* Categories Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12"
          >
            {categories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleCategoryClick(category)}
                  className={`category-card bg-white rounded-2xl p-6 shadow-lg cursor-pointer border-2 transition-all duration-300 ${
                    selectedCategory?.id === category.id 
                      ? 'border-green-500 ring-4 ring-green-200' 
                      : 'border-transparent hover:border-green-300'
                  }`}
                >
                  <div className={`${category.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <Icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-gray-800 font-semibold text-center text-lg">
                    {category.name}
                  </h3>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Selected Category Info */}
          {selectedCategory && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl p-8 shadow-xl border border-green-200"
            >
              <div className="text-center">
                <div className={`${selectedCategory.color} w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <selectedCategory.icon className="text-white" size={40} />
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  {selectedCategory.name} in Trichy
                </h2>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  Explore the best {selectedCategory.name.toLowerCase()} in Trichy. 
                  Our map integration will show you nearby locations with detailed information.
                </p>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 max-w-md mx-auto">
                  <p className="text-yellow-800 text-sm">
                    🚧 Map integration and location details are coming soon! 
                    Request this feature in your next prompt to get it implemented.
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {/* Features Preview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 grid md:grid-cols-3 gap-8"
          >
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mountain className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Real-time Locations</h3>
              <p className="text-gray-600">Get live updates on place availability and timings</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Camera className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Photo Gallery</h3>
              <p className="text-gray-600">View stunning photos and virtual tours</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Waves className="text-purple-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Reviews & Ratings</h3>
              <p className="text-gray-600">Read authentic reviews from fellow travelers</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PlacesPage;
