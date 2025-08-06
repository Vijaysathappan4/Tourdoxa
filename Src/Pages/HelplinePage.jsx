
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Shield, 
  Heart, 
  Zap, 
  Car, 
  Building2,
  Users,
  AlertTriangle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const HelplinePage = () => {
  const emergencyNumbers = [
    {
      category: 'Police Emergency',
      number: '100',
      icon: Shield,
      color: 'bg-red-500',
      description: 'For immediate police assistance'
    },
    {
      category: 'Fire Emergency',
      number: '101',
      icon: Zap,
      color: 'bg-orange-500',
      description: 'Fire department emergency'
    },
    {
      category: 'Medical Emergency',
      number: '108',
      icon: Heart,
      color: 'bg-green-500',
      description: 'Ambulance and medical help'
    },
    {
      category: 'Tourist Helpline',
      number: '1363',
      icon: Users,
      color: 'bg-blue-500',
      description: 'Tourism related assistance'
    },
    {
      category: 'Traffic Police',
      number: '103',
      icon: Car,
      color: 'bg-purple-500',
      description: 'Traffic related emergencies'
    },
    {
      category: 'Women Helpline',
      number: '1091',
      icon: AlertTriangle,
      color: 'bg-pink-500',
      description: 'Women safety and assistance'
    }
  ];

  const localContacts = [
    {
      name: 'Trichy Police Station',
      number: '+91-431-2414100',
      address: 'Fort Station Road, Trichy'
    },
    {
      name: 'Trichy Railway Station',
      number: '+91-431-2700234',
      address: 'Railway Station Road, Trichy'
    },
    {
      name: 'Trichy Airport',
      number: '+91-431-2571433',
      address: 'Airport Road, Trichy'
    },
    {
      name: 'Government Hospital',
      number: '+91-431-2414080',
      address: 'Collector Office Road, Trichy'
    }
  ];

  const handleCall = (number) => {
    toast({
      title: `Calling ${number}`,
      description: "🚧 Direct calling isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  return (
    <div className="min-h-screen light-gradient">
      <Helmet>
        <title>TourDoxa - Helpline | Emergency Contacts</title>
        <meta name="description" content="Important emergency numbers and helpline contacts for travelers in Trichy." />
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
              Emergency
              <span className="block text-red-600">Helpline Numbers</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Important contact numbers for your safety and assistance while traveling in Trichy
            </p>
          </motion.div>

          {/* Emergency Numbers Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          >
            {emergencyNumbers.map((emergency, index) => {
              const Icon = emergency.icon;
              return (
                <motion.div
                  key={emergency.category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
                >
                  <div className={`${emergency.color} w-16 h-16 rounded-full flex items-center justify-center mb-4`}>
                    <Icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {emergency.category}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    {emergency.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-gray-800">
                      {emergency.number}
                    </span>
                    <Button
                      onClick={() => handleCall(emergency.number)}
                      className={`${emergency.color} hover:opacity-90 text-white`}
                      size="sm"
                    >
                      <Phone size={16} className="mr-1" />
                      Call
                    </Button>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Local Contacts */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200 mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Local Important Contacts
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {localContacts.map((contact, index) => (
                <motion.div
                  key={contact.name}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="bg-gray-50 rounded-xl p-6 border border-gray-200"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-1">
                        {contact.name}
                      </h3>
                      <p className="text-gray-600 text-sm">{contact.address}</p>
                    </div>
                    <Building2 className="text-gray-400" size={24} />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-blue-600 font-medium">
                      {contact.number}
                    </span>
                    <Button
                      onClick={() => handleCall(contact.number)}
                      variant="outline"
                      size="sm"
                      className="border-blue-200 text-blue-600 hover:bg-blue-50"
                    >
                      <Phone size={16} className="mr-1" />
                      Call
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Safety Tips */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8 border border-blue-200"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Safety Tips for Travelers
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="text-blue-600" size={32} />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Save Numbers</h3>
                <p className="text-gray-600 text-sm">Keep emergency numbers saved in your phone</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="text-green-600" size={32} />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Stay Connected</h3>
                <p className="text-gray-600 text-sm">Inform someone about your travel plans</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="text-purple-600" size={32} />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Stay Alert</h3>
                <p className="text-gray-600 text-sm">Be aware of your surroundings at all times</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <AlertTriangle className="text-orange-600" size={32} />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Trust Instincts</h3>
                <p className="text-gray-600 text-sm">If something feels wrong, seek help immediately</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HelplinePage;
