
import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, Sun, CloudRain, CloudSnow, Wind, Droplets } from 'lucide-react';

const WeatherWidget = ({ weather }) => {
  const getWeatherIcon = (condition) => {
    switch (condition) {
      case 'sunny':
        return Sun;
      case 'cloudy':
        return Cloud;
      case 'rainy':
        return CloudRain;
      case 'snowy':
        return CloudSnow;
      default:
        return Sun;
    }
  };

  const getWeatherColor = (condition) => {
    switch (condition) {
      case 'sunny':
        return 'text-yellow-400';
      case 'cloudy':
        return 'text-gray-400';
      case 'rainy':
        return 'text-blue-400';
      case 'snowy':
        return 'text-blue-200';
      default:
        return 'text-yellow-400';
    }
  };

  if (!weather) {
    return (
      <div className="glass-effect rounded-2xl p-6 h-96 flex items-center justify-center">
        <div className="text-white/70">Loading weather...</div>
      </div>
    );
  }

  const WeatherIcon = getWeatherIcon(weather.condition);
  const iconColor = getWeatherColor(weather.condition);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="glass-effect rounded-2xl p-6 h-96"
    >
      <h3 className="text-white font-semibold text-xl mb-6">Weather Report</h3>
      
      <div className="text-center mb-8">
        <motion.div
          animate={{ 
            rotate: weather.condition === 'sunny' ? [0, 5, -5, 0] : 0,
            y: weather.condition === 'cloudy' ? [0, -5, 0] : 0
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className={`weather-icon ${iconColor} mx-auto mb-4`}
        >
          <WeatherIcon size={80} />
        </motion.div>
        
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl font-bold text-white mb-2"
        >
          {weather.temperature}°C
        </motion.div>
        
        <div className="text-white/80 capitalize text-lg">
          {weather.condition}
        </div>
      </div>

      <div className="space-y-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex items-center justify-between text-white/90"
        >
          <div className="flex items-center">
            <Droplets className="mr-2" size={20} />
            <span>Humidity</span>
          </div>
          <span className="font-semibold">{weather.humidity}%</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex items-center justify-between text-white/90"
        >
          <div className="flex items-center">
            <Wind className="mr-2" size={20} />
            <span>Wind Speed</span>
          </div>
          <span className="font-semibold">{weather.windSpeed} km/h</span>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="mt-6 p-4 bg-white/10 rounded-lg border border-white/20"
      >
        <p className="text-white/80 text-sm text-center">
          Perfect weather for exploring Trichy! 
          {weather.condition === 'sunny' && ' Don\'t forget your sunscreen.'}
          {weather.condition === 'rainy' && ' Carry an umbrella.'}
          {weather.condition === 'cloudy' && ' Great for outdoor activities.'}
        </p>
      </motion.div>
    </motion.div>
  );
};

export default WeatherWidget;
