
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { 
  Hotel, 
  Utensils, 
  Bed, 
  Plane, 
  Train, 
  Bus,
  Calendar,
  Clock,
  Users,
  MapPin
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const BookingPage = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 'hotels',
      name: 'Hotels',
      icon: Hotel,
      color: 'bg-blue-500',
      description: 'Book comfortable stays',
      availability: '15 available nearby'
    },
    {
      id: 'restaurants',
      name: 'Restaurants',
      icon: Utensils,
      color: 'bg-orange-500',
      description: 'Reserve dining tables',
      availability: '23 restaurants open'
    },
    {
      id: 'rooms',
      name: 'Rooms',
      icon: Bed,
      color: 'bg-green-500',
      description: 'Private room bookings',
      availability: '8 rooms available'
    },
    {
      id: 'airports',
      name: 'Airports',
      icon: Plane,
      color: 'bg-sky-500',
      description: 'Flight seat availability',
      availability: '12 flights today'
    },
    {
      id: 'railway',
      name: 'Railway Stations',
      icon: Train,
      color: 'bg-purple-500',
      description: 'Train seat bookings',
      availability: '6 trains available'
    },
    {
      id: 'buses',
      name: 'Route Buses',
      icon: Bus,
      color: 'bg-red-500',
      description: 'Bus seat reservations',
      availability: '18 buses running'
    }
  ];

  const handleServiceClick = (service) => {
    setSelectedService(service);
  };

  const handleBookNow = () => {
    toast({
      title: "🚧 Booking system isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  return (
    <div className="min-h-screen light-gradient">
      <Helmet>
        <title>TourDoxa - Booking | Reserve Your Experience</title>
        <meta name="description" content="Book hotels, restaurants, transportation and more in Trichy with real-time availability." />
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
              Book Your Perfect
              <span className="block text-green-600">Experience</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Check real-time availability and book seats for hotels, restaurants, transportation and more
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          >
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => handleServiceClick(service)}
                  className={`category-card bg-white rounded-2xl p-6 shadow-lg cursor-pointer border-2 transition-all duration-300 ${
                    selectedService?.id === service.id 
                      ? 'border-green-500 ring-4 ring-green-200' 
                      : 'border-transparent hover:border-green-300'
                  }`}
                >
                  <div className={`${service.color} w-16 h-16 rounded-full flex items-center justify-center mb-4`}>
                    <Icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 mb-3">{service.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-green-600 font-medium text-sm">
                      {service.availability}
                    </span>
                    <div className="w-3 h-3 bg-green-400 rounded-full pulse-animation"></div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Selected Service Details */}
          {selectedService && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl p-8 shadow-xl border border-green-200 mb-12"
            >
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center mb-6">
                    <div className={`${selectedService.color} w-16 h-16 rounded-full flex items-center justify-center mr-4`}>
                      <selectedService.icon className="text-white" size={32} />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-800">
                        {selectedService.name} Booking
                      </h2>
                      <p className="text-green-600 font-medium">
                        {selectedService.availability}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center text-gray-600">
                      <MapPin className="mr-3" size={20} />
                      <span>Near your current location</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="mr-3" size={20} />
                      <span>Real-time availability updates</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Users className="mr-3" size={20} />
                      <span>Group bookings available</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Calendar className="mr-3" size={20} />
                      <span>Instant confirmation</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Quick Booking
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Select Date
                      </label>
                      <input
                        type="date"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Number of People
                      </label>
                      <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
                        <option>1 Person</option>
                        <option>2 People</option>
                        <option>3-5 People</option>
                        <option>6+ People</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Time
                      </label>
                      <input
                        type="time"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      />
                    </div>
                    <Button
                      onClick={handleBookNow}
                      className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-lg font-semibold"
                    >
                      Book Now
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid md:grid-cols-3 gap-8"
          >
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Real-time Updates</h3>
              <p className="text-gray-600">Get live availability and instant confirmations</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Location Based</h3>
              <p className="text-gray-600">Find and book services near your location</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-purple-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Group Friendly</h3>
              <p className="text-gray-600">Perfect for solo travelers to large groups</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
