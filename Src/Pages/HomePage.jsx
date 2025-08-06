
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { MapPin, Search, Users, Cloud, Sun, CloudRain, CloudSnow, Wind } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import MembersDropdown from '@/components/MembersDropdown';
import WeatherWidget from '@/components/WeatherWidget';
import MapComponent from '@/components/MapComponent';

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMembers, setSelectedMembers] = useState('Single member');
  const [userLocation, setUserLocation] = useState(null);
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    // Get user's current location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
        },
        (error) => {
          console.error('Error getting location:', error);
          // Default to Trichy coordinates
          setUserLocation({
            lat: 10.7905,
            lng: 78.7047
          });
        }
      );
    } else {
      // Default to Trichy coordinates
      setUserLocation({
        lat: 10.7905,
        lng: 78.7047
      });
    }

    // Simulate weather data
    setWeather({
      temperature: 28,
      condition: 'sunny',
      humidity: 65,
      windSpeed: 12
    });
  }, []);

  const handleSearch = () => {
    if (!searchQuery.trim()) {
      toast({
        title: "Please enter a search term",
        description: "Enter a city or location in Trichy to search",
      });
      return;
    }
    
    toast({
      title: "🚧 Search feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  const handleLocationClick = () => {
    toast({
      title: "🚧 GPS navigation isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  return (
    <div className="min-h-screen home-gradient">
      <Helmet>
        <title>TourDoxa - Home | Explore Trichy</title>
        <meta name="description" content="Start your Trichy adventure with real-time GPS, weather updates, and personalized recommendations." />
      </Helmet>

      <div className="pt-20 pb-8 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 floating-animation">
              Explore Trichy
              <span className="block text-yellow-300">Like Never Before</span>
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Discover amazing places, get real-time weather updates, and navigate with GPS precision
            </p>
          </motion.div>

          {/* Search and Members Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-effect rounded-2xl p-6 mb-8 max-w-4xl mx-auto"
          >
            <div className="grid md:grid-cols-2 gap-6">
              {/* Search Bar */}
              <div className="space-y-4">
                <h3 className="text-white font-semibold flex items-center">
                  <Search className="mr-2" size={20} />
                  Search Cities in Trichy
                </h3>
                <div className="flex space-x-2">
                  <input
                    type="text"
                    placeholder="Enter city or location..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="flex-1 px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                  />
                  <Button
                    onClick={handleSearch}
                    className="bg-yellow-500 hover:bg-yellow-600 text-white px-6"
                  >
                    <Search size={18} />
                  </Button>
                </div>
              </div>

              {/* Members Selection */}
              <div className="space-y-4">
                <h3 className="text-white font-semibold flex items-center">
                  <Users className="mr-2" size={20} />
                  Travel Group
                </h3>
                <MembersDropdown
                  selectedMembers={selectedMembers}
                  onMembersChange={setSelectedMembers}
                />
              </div>
            </div>
          </motion.div>

          {/* Weather and Map Section */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Weather Widget */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="lg:col-span-1"
            >
              <WeatherWidget weather={weather} />
            </motion.div>

            {/* Map Component */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="glass-effect rounded-2xl p-6 h-96">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-white font-semibold text-xl">Your Location</h3>
                  <Button
                    onClick={handleLocationClick}
                    variant="outline"
                    className="bg-white/20 border-white/30 text-white hover:bg-white/30"
                  >
                    <MapPin className="mr-2" size={18} />
                    Get Directions
                  </Button>
                </div>
                <MapComponent userLocation={userLocation} />
              </div>
            </motion.div>
          </div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 text-center"
          >
            <h2 className="text-2xl font-bold text-white mb-8">Quick Actions</h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="glass-effect rounded-xl p-6 cursor-pointer"
                onClick={() => toast({ title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀" })}
              >
                <MapPin className="mx-auto mb-4 text-yellow-400" size={48} />
                <h3 className="text-white font-semibold mb-2">Find Nearby</h3>
                <p className="text-white/80 text-sm">Discover places around you</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="glass-effect rounded-xl p-6 cursor-pointer"
                onClick={() => toast({ title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀" })}
              >
                <Users className="mx-auto mb-4 text-yellow-400" size={48} />
                <h3 className="text-white font-semibold mb-2">Group Plans</h3>
                <p className="text-white/80 text-sm">Plan trips with friends</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="glass-effect rounded-xl p-6 cursor-pointer"
                onClick={() => toast({ title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀" })}
              >
                <Cloud className="mx-auto mb-4 text-yellow-400" size={48} />
                <h3 className="text-white font-semibold mb-2">Weather Alerts</h3>
                <p className="text-white/80 text-sm">Stay updated on weather</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
