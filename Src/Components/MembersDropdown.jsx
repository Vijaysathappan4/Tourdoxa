
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Users } from 'lucide-react';

const MembersDropdown = ({ selectedMembers, onMembersChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const memberOptions = [
    'Single member',
    'Couples',
    'Gang',
    'Family',
    'Boys gang',
    'Girls gang',
    'Old agers gang',
    'School students',
    'College students'
  ];

  const handleSelect = (option) => {
    onMembersChange(option);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <motion.button
        whileTap={{ scale: 0.98 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-4 py-3 bg-white/20 text-white border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
      >
        <div className="flex items-center">
          <Users className="mr-2" size={18} />
          <span>{selectedMembers}</span>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-xl border border-gray-200 z-50 max-h-60 overflow-y-auto"
          >
            {memberOptions.map((option, index) => (
              <motion.button
                key={option}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, delay: index * 0.05 }}
                onClick={() => handleSelect(option)}
                className={`w-full text-left px-4 py-3 hover:bg-green-50 transition-colors duration-200 ${
                  selectedMembers === option ? 'bg-green-100 text-green-700' : 'text-gray-700'
                } ${index === 0 ? 'rounded-t-lg' : ''} ${
                  index === memberOptions.length - 1 ? 'rounded-b-lg' : ''
                }`}
              >
                {option}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MembersDropdown;
