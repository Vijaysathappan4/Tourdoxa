
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Mail, Phone, Instagram, MapPin, Users, Star, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const AboutPage = () => {
  const handleContact = (type, value) => {
    toast({
      title: `Opening ${type}`,
      description: "🚧 Direct contact integration isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  const stats = [
    { label: 'Happy Travelers', value: '10,000+', icon: Users },
    { label: 'Places Covered', value: '500+', icon: MapPin },
    { label: 'User Rating', value: '4.8/5', icon: Star },
    { label: 'Years of Service', value: '5+', icon: Award }
  ];

  const features = [
    {
      title: 'Real-time GPS Navigation',
      description: 'Get accurate directions and live location tracking for seamless travel experience.',
      icon: MapPin
    },
    {
      title: 'Weather Integration',
      description: 'Stay updated with real-time weather conditions and plan your trips accordingly.',
      icon: Star
    },
    {
      title: 'Smart Recommendations',
      description: 'Personalized suggestions based on your travel preferences and group size.',
      icon: Users
    },
    {
      title: 'Instant Booking',
      description: 'Book hotels, restaurants, and transportation with real-time availability.',
      icon: Award
    }
  ];

  return (
    <div className="min-h-screen light-gradient">
      <Helmet>
        <title>TourDoxa - About Us | Your Travel Companion</title>
        <meta name="description" content="Learn about TourDoxa, your ultimate travel companion for exploring Trichy with GPS navigation, weather updates, and smart recommendations." />
      </Helmet>

      <div className="pt-20 pb-8 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              About
              <span className="block text-green-600">TourDoxa</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your ultimate travel companion for exploring Trichy with smart technology, 
              real-time updates, and personalized recommendations.
            </p>
          </motion.div>

          {/* Mission Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200 mb-16"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  At TourDoxa, we believe that every journey should be extraordinary. We're dedicated to 
                  transforming how people explore Trichy by providing cutting-edge technology that makes 
                  travel planning effortless and experiences unforgettable.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Whether you're a solo adventurer, traveling with family, or exploring with friends, 
                  our platform adapts to your needs and helps you discover the hidden gems of this 
                  beautiful city.
                </p>
              </div>
              <div className="relative">
                <img  
                  alt="Team working on travel technology"
                  className="rounded-xl shadow-lg w-full h-80 object-cover"
                 src="https://images.unsplash.com/photo-1651009188116-bb5f80eaf6aa" />
                <div className="absolute inset-0 bg-gradient-to-t from-green-600/20 to-transparent rounded-xl"></div>
              </div>
            </div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-lg text-center border border-gray-200"
                >
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-green-600" size={32} />
                  </div>
                  <div className="text-2xl font-bold text-gray-800 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Features Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
              What Makes Us Special
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    className="bg-white rounded-xl p-6 shadow-lg border border-gray-200"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="text-green-600" size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 border border-green-200"
          >
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
              Get in Touch
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-xl p-6 shadow-lg text-center cursor-pointer"
                onClick={() => handleContact('Email', 'TOURDOXA@gmail.com')}
              >
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="text-blue-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Email Us</h3>
                <p className="text-blue-600 font-medium">TOURDOXA@gmail.com</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-xl p-6 shadow-lg text-center cursor-pointer"
                onClick={() => handleContact('Phone', '8973676878')}
              >
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="text-green-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Call Us</h3>
                <p className="text-green-600 font-medium">+91 8973676878</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-xl p-6 shadow-lg text-center cursor-pointer"
                onClick={() => handleContact('Instagram', '@tourdoxa')}
              >
                <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Instagram className="text-pink-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Follow Us</h3>
                <p className="text-pink-600 font-medium">@tourdoxa</p>
              </motion.div>
            </div>

            <div className="text-center mt-8">
              <p className="text-gray-600 mb-4">
                Have questions or suggestions? We'd love to hear from you!
              </p>
              <Button
                onClick={() => handleContact('General', 'contact')}
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3"
              >
                Contact Us Now
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
