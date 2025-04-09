import { useState } from 'react';
import { MapPin, Calendar, Camera, Award, DollarSign, Star, ChevronDown, ChevronRight, X, Filter } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const photographers = [
    { 
      id: 1, 
      name: 'Jessica Chen', 
      location: 'New York, NY', 
      rating: 4.9, 
      reviews: 124, 
      price: 150, 
      priceUnit: 'hour', 
      specialties: ['Wedding', 'Portrait'],
      image: '/api/placeholder/500/500', 
      portfolio: ['/api/placeholder/400/300', '/api/placeholder/400/300', '/api/placeholder/400/300'] 
    },
    { 
      id: 2, 
      name: 'Michael Rodriguez', 
      location: 'Los Angeles, CA', 
      rating: 4.8, 
      reviews: 98, 
      price: 180, 
      priceUnit: 'hour', 
      specialties: ['Corporate', 'Event'],
      image: '/api/placeholder/500/500', 
      portfolio: ['/api/placeholder/400/300', '/api/placeholder/400/300', '/api/placeholder/400/300'] 
    },
    { 
      id: 3, 
      name: 'Sarah Johnson', 
      location: 'Chicago, IL', 
      rating: 5.0, 
      reviews: 87, 
      price: 200, 
      priceUnit: 'hour', 
      specialties: ['Maternity', 'Family'],
      image: '/api/placeholder/500/500', 
      portfolio: ['/api/placeholder/400/300', '/api/placeholder/400/300', '/api/placeholder/400/300'] 
    },
    { 
      id: 4, 
      name: 'David Williams', 
      location: 'Seattle, WA', 
      rating: 4.7, 
      reviews: 65, 
      price: 120, 
      priceUnit: 'hour', 
      specialties: ['Portrait', 'Graduation'],
      image: '/api/placeholder/500/500', 
      portfolio: ['/api/placeholder/400/300', '/api/placeholder/400/300', '/api/placeholder/400/300'] 
    }
  ];
  
  const occasions = [
    { name: 'Wedding', icon: '💍' },
    { name: 'Birthday', icon: '🎂' },
    { name: 'Corporate', icon: '👔' },
    { name: 'Maternity', icon: '🤰' },
    { name: 'Graduation', icon: '🎓' },
    { name: 'Family', icon: '👪' }
  ];
  

const SearchResultsPage = ({ searchParams, onBackToHome }) => {
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
    const [priceRange, setPriceRange] = useState([50, 300]);
    const [rating, setRating] = useState(0);
    const [selectedOccasions, setSelectedOccasions] = useState([]);
    const navigate = useNavigate();
    const toggleOccasion = (occasion) => {
      if (selectedOccasions.includes(occasion)) {
        setSelectedOccasions(selectedOccasions.filter(occ => occ !== occasion));
      } else {
        setSelectedOccasions([...selectedOccasions, occasion]);
      }
    };
  
    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.1
        }
      }
    };
  
    const itemVariants = {
      hidden: { y: 20, opacity: 0 },
      visible: { 
        y: 0, 
        opacity: 1,
        transition: {
          duration: 0.4
        }
      }
    };
  
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white shadow-sm py-4 px-4 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <motion.button 
                onClick={onBackToHome}
                className="text-gray-600 hover:text-gray-900"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
              </motion.button>
              <h1 className="text-xl font-semibold">Browse Photographers</h1>
            </div>
            <button
              className="md:hidden bg-blue-50 text-blue-600 p-2 rounded-md"
              onClick={() => setMobileFiltersOpen(true)}
            >
              <Filter size={20} />
            </button>
            <div className="hidden md:flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm">
                <MapPin size={16} className="text-gray-500" />
                <span>{searchParams.location || 'Any location'}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Calendar size={16} className="text-gray-500" />
                <span>{searchParams.date || 'Any date'}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Camera size={16} className="text-gray-500" />
                <span>{searchParams.occasion || 'All occasions'}</span>
              </div>
            </div>
          </div>
        </header>
  
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Mobile Filters Sidebar */}
            {mobileFiltersOpen && (
              <motion.div 
                className="fixed inset-0 z-50 bg-gray-800 bg-opacity-75 md:hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <motion.div 
                  className="fixed inset-y-0 right-0 max-w-full flex"
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <div className="relative w-screen max-w-md">
                    <div className="h-full flex flex-col bg-white shadow-xl overflow-y-auto">
                      <div className="flex items-center justify-between px-4 py-3 border-b">
                        <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                        <button
                          className="text-gray-500 hover:text-gray-700"
                          onClick={() => setMobileFiltersOpen(false)}
                        >
                          <X size={24} />
                        </button>
                      </div>
                      <div className="flex-1 px-4 py-6 space-y-6">
                        {/* Filter content - same as desktop */}
                        <div>
                          <h3 className="text-lg font-medium">Occasion</h3>
                          <div className="mt-4 space-y-2">
                            {occasions.map((occ) => (
                              <div key={occ.name} className="flex items-center">
                                <input
                                  id={`mobile-${occ.name}`}
                                  type="checkbox"
                                  className="h-4 w-4 rounded text-blue-600 focus:ring-blue-500"
                                  checked={selectedOccasions.includes(occ.name)}
                                  onChange={() => toggleOccasion(occ.name)}
                                />
                                <label htmlFor={`mobile-${occ.name}`} className="ml-3 text-gray-700">
                                  {occ.name}
                                </label>
                              </div>
                            ))}
                          </div>
                        </div>
  
                        <div>
                          <h3 className="text-lg font-medium">Price Range</h3>
                          <div className="mt-4">
                            <input
                              type="range"
                              min="50"
                              max="500"
                              value={priceRange[1]}
                              onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                              className="w-full"
                            />
                            <div className="flex justify-between mt-2">
                              <span>${priceRange[0]}</span>
                              <span>${priceRange[1]}</span>
                            </div>
                          </div>
                        </div>
  
                        <div>
                          <h3 className="text-lg font-medium">Rating</h3>
                          <div className="mt-4">
                            <div className="flex space-x-1">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <button
                                  key={star}
                                  onClick={() => setRating(star)}
                                  className="focus:outline-none"
                                >
                                  <Star
                                    size={24}
                                    className={
                                      star <= rating
                                        ? "text-yellow-400 fill-yellow-400"
                                        : "text-gray-300"
                                    }
                                  />
                                </button>
                              ))}
                            </div>
                            {rating > 0 && (
                              <button
                                onClick={() => setRating(0)}
                                className="text-sm text-blue-600 mt-2"
                              >
                                Clear
                              </button>
                            )}
                          </div>
                        </div>
  
                        <div>
                          <h3 className="text-lg font-medium">Availability</h3>
                          <div className="mt-4">
                            <input
                              type="date"
                              className="w-full p-2 border border-gray-300 rounded"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="px-4 py-4 border-t">
                        <button
                          className="w-full bg-blue-600 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-700 transition-colors"
                          onClick={() => setMobileFiltersOpen(false)}
                        >
                          Apply Filters
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
  
            {/* Desktop Sidebar Filters */}
            <div className="hidden md:block w-64 flex-shrink-0">
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-20">
                <h2 className="font-semibold text-lg mb-6">Filters</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium mb-3">Occasion</h3>
                    <div className="space-y-2">
                      {occasions.map((occ) => (
                        <div key={occ.name} className="flex items-center">
                          <input
                            id={occ.name}
                            type="checkbox"
                            className="h-4 w-4 rounded text-blue-600 focus:ring-blue-500"
                            checked={selectedOccasions.includes(occ.name)}
                            onChange={() => toggleOccasion(occ.name)}
                          />
                          <label htmlFor={occ.name} className="ml-3 text-gray-700">
                            {occ.name}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
  
                  <div>
                    <h3 className="font-medium mb-3">Price Range</h3>
                    <div>
                      <input
                        type="range"
                        min="50"
                        max="500"
                        value={priceRange[1]}
                        onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                        className="w-full"
                      />
                      <div className="flex justify-between mt-2 text-sm text-gray-600">
                        <span>${priceRange[0]}</span>
                        <span>${priceRange[1]}</span>
                      </div>
                    </div>
                  </div>
  
                  <div>
                    <h3 className="font-medium mb-3">Rating</h3>
                    <div>
                      <div className="flex space-x-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            onClick={() => setRating(star)}
                            className="focus:outline-none"
                          >
                            <Star
                              size={20}
                              className={
                                star <= rating
                                  ? "text-yellow-400 fill-yellow-400"
                                  : "text-gray-300"
                              }
                            />
                          </button>
                        ))}
                      </div>
                      {rating > 0 && (
                        <button
                          onClick={() => setRating(0)}
                          className="text-sm text-blue-600 mt-2"
                        >
                          Clear
                        </button>
                      )}
                    </div>
                  </div>
  
                  <div>
                    <h3 className="font-medium mb-3">Availability</h3>
                    <div>
                      <input
                        type="date"
                        className="w-full p-2 border border-gray-300 rounded text-sm"
                      />
                    </div>
                  </div>
                  
                  <button
                    className="w-full bg-blue-600 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-700 transition-colors"
                  >
                    Apply Filters
                  </button>
                </div>
              </div>
            </div>
  
            {/* Main Results Section */}
            <motion.div 
              className="flex-1"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">
                  {photographers.length} photographers found
                </h2>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600">Sort by:</span>
                  <select className="p-2 border border-gray-300 rounded text-sm">
                    <option>Recommended</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Rating</option>
                  </select>
                </div>
              </div>
  
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {photographers.map((photographer) => (
                  <motion.div 
                    key={photographer.id}
                    className="bg-white rounded-lg shadow-md overflow-hidden"
                    variants={itemVariants}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  >
                    <div className="md:flex">
                      <div className="md:w-1/3 p-4">
                        <img
                          src={photographer.image}
                          alt={photographer.name}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>
                      <div className="md:w-2/3 p-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-semibold text-lg">{photographer.name}</h3>
                            <div className="flex items-center space-x-1 mt-1">
                              <MapPin size={14} className="text-gray-500" />
                              <span className="text-sm text-gray-600">{photographer.location}</span>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-xl font-bold text-blue-600">${photographer.price}</div>
                            <div className="text-sm text-gray-500">per {photographer.priceUnit}</div>
                          </div>
                        </div>
  
                        <div className="flex items-center mt-3">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                size={16}
                                className={
                                  i < Math.floor(photographer.rating)
                                    ? "text-yellow-400 fill-yellow-400"
                                    : "text-gray-300"
                                }
                              />
                            ))}
                          </div>
                          <span className="ml-2 text-sm text-gray-600">
                            {photographer.rating} ({photographer.reviews} reviews)
                          </span>
                        </div>
  
                        <div className="mt-3">
                          <div className="text-sm text-gray-600 mb-2">Specialties:</div>
                          <div className="flex flex-wrap gap-2">
                            {photographer.specialties.map((specialty) => (
                              <span
                                key={specialty}
                                className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded-full"
                              >
                                {specialty}
                              </span>
                            ))}
                          </div>
                        </div>
  
                        <div className="mt-4">
                          <div className="text-sm text-gray-600 mb-2">Portfolio preview:</div>
                          <div className="flex space-x-2">
                            {photographer.portfolio.map((img, index) => (
                              <motion.div 
                                key={index}
                                className="w-16 h-16 rounded-md overflow-hidden"
                                whileHover={{ scale: 1.1 }}
                              >
                                <img src={img} alt="Portfolio" className="w-full h-full object-cover" />
                              </motion.div>
                            ))}
                            <div className="w-16 h-16 rounded-md bg-gray-100 flex items-center justify-center">
                              <ChevronRight size={20} className="text-gray-400" />
                            </div>
                          </div>
                        </div>
  
                        <div className="mt-4 flex space-x-3">
                          <motion.button
                            className="bg-white border border-blue-600 text-blue-600 px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-50 transition-colors"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => navigate(`/photographers/${photographer.id}`)}
                          >
                            View Profile
                          </motion.button>
                          <motion.button
                            className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            Book Now
                          </motion.button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
  
              <div className="mt-8 flex justify-center">
                <div className="flex space-x-2">
                  <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-50 transition-colors">
                    Previous
                  </button>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors">
                    1
                  </button>
                  <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-50 transition-colors">
                    2
                  </button>
                  <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-50 transition-colors">
                    3
                  </button>
                  <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-50 transition-colors">
                    Next
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    );
  };

export default SearchResultsPage;