
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation } from 'lucide-react';

const MapComponent = ({ userLocation }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (userLocation && mapRef.current) {
      // Initialize OpenStreetMap
      const initMap = () => {
        // This is a placeholder for actual map implementation
        // In a real implementation, you would use libraries like Leaflet with OpenStreetMap
        console.log('Initializing map with location:', userLocation);
      };

      initMap();
    }
  }, [userLocation]);

  return (
    <div className="relative h-full w-full bg-gradient-to-br from-green-100 to-blue-100 rounded-xl overflow-hidden">
      {/* Map placeholder */}
      <div 
        ref={mapRef}
        className="w-full h-full flex items-center justify-center relative"
      >
        {/* Animated location indicator */}
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.7, 1, 0.7]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        >
          <div className="bg-red-500 w-6 h-6 rounded-full border-4 border-white shadow-lg"></div>
        </motion.div>

        {/* Map grid pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="grid grid-cols-8 grid-rows-6 h-full w-full">
            {Array.from({ length: 48 }).map((_, i) => (
              <div key={i} className="border border-gray-300"></div>
            ))}
          </div>
        </div>

        {/* Location info overlay */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <MapPin className="text-red-500 mr-2" size={20} />
              <div>
                <div className="font-semibold text-gray-800">Your Location</div>
                <div className="text-sm text-gray-600">
                  {userLocation ? 
                    `${userLocation.lat.toFixed(4)}, ${userLocation.lng.toFixed(4)}` : 
                    'Getting location...'
                  }
                </div>
              </div>
            </div>
            <Navigation className="text-blue-500" size={20} />
          </div>
        </motion.div>

        {/* Nearby places indicators */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="absolute top-1/4 right-1/4 w-3 h-3 bg-blue-500 rounded-full border-2 border-white shadow-lg"
        ></motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="absolute top-3/4 left-1/4 w-3 h-3 bg-green-500 rounded-full border-2 border-white shadow-lg"
        ></motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.0 }}
          className="absolute top-1/3 left-3/4 w-3 h-3 bg-purple-500 rounded-full border-2 border-white shadow-lg"
        ></motion.div>
      </div>

      {/* Map controls */}
      <div className="absolute top-4 right-4 space-y-2">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-white/90 backdrop-blur-sm p-2 rounded-lg shadow-lg text-gray-700 hover:bg-white"
        >
          +
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-white/90 backdrop-blur-sm p-2 rounded-lg shadow-lg text-gray-700 hover:bg-white"
        >
          -
        </motion.button>
      </div>
    </div>
  );
};

export default MapComponent;
