import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Star, 
  MapPin, 
  Calendar, 
  Clock, 
  Camera, 
  Heart, 
  Share2, 
  MessageSquare, 
  Award, 
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Instagram,
  Facebook,
  Twitter,
  ExternalLink,
  Users,
  X,
  DollarSign,
  ArrowRight,
  Image,
  ThumbsUp
} from 'lucide-react';

import cover from '../../assets/images/cover.png';
import profile from '../../assets/images/user.jpg';
import portfolio1 from '../../assets/images/p1.jpg';
import portfolio2 from '../../assets/images/p1.jpg';
import portfolio3 from '../../assets/images/p1.jpg';
import portfolio4 from '../../assets/images/p1.jpg';
import portfolio5 from '../../assets/images/p1.jpg';
import portfolio6 from '../../assets/images/p1.jpg';
import portfolio7 from '../../assets/images/p1.jpg';
import portfolio8 from '../../assets/images/p1.jpg';

// Sample photographer data
const photographer = {
  id: 1,
  name: "Jessica Chen",
  tagline: "Capturing your precious moments with creativity and passion",
  location: "New York, NY",
  rating: 4.9,
  reviews: 124,
  verified: true,
  featured: true,
  price: 150,
  priceUnit: "hour",
  experience: "8 years",
  availability: ["Mon", "Tue", "Wed", "Thu", "Fri"],
  languages: ["English", "Mandarin", "Spanish"],
  equipments: ["Canon EOS R5", "Sony A7 III", "Professional Lighting Kit", "DJI Mavic 3 Drone"],
  specialties: ["Wedding", "Portrait", "Family", "Event"],
  achievements: ["Award-winning photographer", "Published in Vogue", "Featured in National Geographic"],
  bio: "A passionate photographer with over 8 years of experience, Jessica specializes in capturing authentic moments that tell a story. With a background in fine arts and a keen eye for detail, she brings creativity and technical expertise to every shoot. Jessica's work has been featured in several magazines and exhibitions across the East Coast.",
  profileImage: profile,
  coverImage: cover,
  portfolio: [
    { id: 1, image: portfolio1, category: "Wedding", title: "Smith-Johnson Wedding" },
    { id: 2, image: portfolio2, category: "Portrait", title: "Corporate Headshots" },
    { id: 3, image: portfolio3, category: "Family", title: "Thompson Family" },
    { id: 4, image: portfolio4, category: "Event", title: "Tech Conference 2023" },
    { id: 5, image: portfolio5, category: "Wedding", title: "Beach Ceremony" },
    { id: 6, image: portfolio6, category: "Portrait", title: "Studio Session" },
    { id: 7, image: portfolio7, category: "Family", title: "Park Photoshoot" },
    { id: 8, image: portfolio8, category: "Event", title: "Charity Gala" },
  ],
  packages: [
    {
      id: 1,
      name: "Essential",
      price: 250,
      duration: "1 hour",
      includes: ["10 edited digital photos", "Online gallery", "1 location", "1 outfit change"],
      popular: false
    },
    {
      id: 2,
      name: "Premium",
      price: 500,
      duration: "3 hours",
      includes: ["30 edited digital photos", "Online gallery", "2 locations", "3 outfit changes", "Express delivery (48h)"],
      popular: true
    },
    {
      id: 3,
      name: "Deluxe",
      price: 1200,
      duration: "Full day",
      includes: ["100+ edited digital photos", "Online gallery", "Multiple locations", "Unlimited outfit changes", "Photo album", "Assistant photographer", "Same-day preview (5 photos)"],
      popular: false
    }
  ],
  testimonials: [
    {
      id: 1,
      name: "Sarah & Mark",
      date: "June 15, 2023",
      occasion: "Wedding",
      image: "/api/placeholder/100/100",
      rating: 5,
      text: "Jessica was absolutely amazing at our wedding! She captured all the special moments without being intrusive, and the photos turned out beautifully. We're so grateful for her talent and professionalism."
    },
    {
      id: 2,
      name: "Jennifer Lopez",
      date: "March 22, 2023",
      occasion: "Family Portraits",
      image: "/api/placeholder/100/100",
      rating: 5,
      text: "Our family photos are stunning! Jessica was patient with our kids and knew exactly how to get them to smile naturally. The whole experience was enjoyable, and the results exceeded our expectations."
    },
    {
      id: 3,
      name: "Robert Chen",
      date: "October 10, 2023",
      occasion: "Corporate Event",
      image: "/api/placeholder/100/100",
      rating: 4,
      text: "Jessica did a fantastic job capturing our company event. She was professional, timely, and delivered high-quality photos that perfectly documented the occasion. Would definitely hire again."
    }
  ],
  faqs: [
    {
      question: "How far in advance should I book your services?",
      answer: "For weddings, I recommend booking 6-12 months in advance. For other events, 2-3 months is usually sufficient, but availability varies by season."
    },
    {
      question: "What happens if it rains on the day of our outdoor photoshoot?",
      answer: "I always monitor the weather closely and will be in touch with you 24-48 hours before the session. We can either reschedule or switch to an indoor location. I'm very flexible and want to ensure we get the best possible photos."
    },
    {
      question: "Do you provide raw, unedited files?",
      answer: "I provide professionally edited high-resolution images. Raw files are not included in any package as they're part of my creative process, but I'm happy to discuss specific editing preferences."
    }
  ],
  socials: {
    instagram: "@jessica.captures",
    facebook: "jessicachenphotography",
    twitter: "@jessicachenphoto",
    website: "www.jessicachenphotography.com"
  },
  availableDates: [
    "2025-04-15", "2025-04-16", "2025-04-20", 
    "2025-04-21", "2025-04-25", "2025-04-28", 
    "2025-05-01", "2025-05-02", "2025-05-05"
  ]
};

const PhotographerDetailsUI = () => {
  const [activeTab, setActiveTab] = useState('gallery');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [liked, setLiked] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [showGalleryModal, setShowGalleryModal] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const [expandedBio, setExpandedBio] = useState(false);
  
  // Get unique categories from portfolio
  const categories = ['All', ...new Set(photographer.portfolio.map(item => item.category))];
  
  // Filter portfolio by category
  const filteredPortfolio = selectedCategory === 'All' 
    ? photographer.portfolio 
    : photographer.portfolio.filter(item => item.category === selectedCategory);

  const toggleLike = () => {
    setLiked(!liked);
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === filteredPortfolio.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? filteredPortfolio.length - 1 : prevIndex - 1
    );
  };

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemFadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      {/* Full Screen Gallery Modal */}
      {showGalleryModal && (
        <motion.div 
          className="fixed inset-0 z-50 bg-black bg-opacity-95 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button 
            className="absolute top-4 right-4 text-white bg-black bg-opacity-40 rounded-full p-2 hover:bg-opacity-60 transition-colors"
            onClick={() => setShowGalleryModal(false)}
          >
            <X size={24} />
          </button>
          <button 
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full bg-black bg-opacity-40 hover:bg-opacity-60 transition-colors"
            onClick={handlePrevImage}
          >
            <ChevronLeft size={32} />
          </button>
          <div className="relative max-w-5xl w-full mx-4">
            <img 
              src={filteredPortfolio[currentImageIndex].image} 
              alt={filteredPortfolio[currentImageIndex].title}
              className="max-h-[85vh] w-full object-contain"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-4">
              <h3 className="text-lg font-medium">{filteredPortfolio[currentImageIndex].title}</h3>
              <p className="text-gray-300">{filteredPortfolio[currentImageIndex].category}</p>
            </div>
          </div>
          <button 
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full bg-black bg-opacity-40 hover:bg-opacity-60 transition-colors"
            onClick={handleNextImage}
          >
            <ChevronRight size={32} />
          </button>
          <div className="absolute bottom-4 text-white text-sm">
            {currentImageIndex + 1} / {filteredPortfolio.length}
          </div>
        </motion.div>
      )}
      
      {/* Hero Section with Cover Image */}
      <div className="relative h-80 md:h-96 lg:h-[500px] w-full overflow-hidden">
        <img 
          src={photographer.coverImage}
          alt="Cover" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
        
        <motion.button 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg hover:bg-white transition-colors z-10"
          onClick={() => window.history.back()}
        >
          <ChevronLeft size={24} className="text-gray-800" />
        </motion.button>
        
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center mb-2">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mr-3">{photographer.name}</h1>
              {photographer.verified && (
                <span className="bg-blue-500/90 backdrop-blur-sm text-white text-xs font-medium px-2.5 py-1 rounded-full flex items-center">
                  <CheckCircle size={12} className="mr-1" /> Verified
                </span>
              )}
              {photographer.featured && (
                <span className="ml-2 bg-yellow-500/90 backdrop-blur-sm text-white text-xs font-medium px-2.5 py-1 rounded-full flex items-center">
                  <Award size={12} className="mr-1" /> Featured
                </span>
              )}
            </div>
            <p className="text-lg md:text-xl text-gray-200 max-w-3xl">{photographer.tagline}</p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        {/* Quick Info Section */}
        <motion.div 
          className="bg-white rounded-xl shadow-lg p-6 -mt-20 relative z-10 mx-4 md:mx-8 mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center">
              <div className="relative mr-4">
                <img 
                  src={photographer.profileImage} 
                  alt={photographer.name} 
                  className="w-24 h-24 md:w-28 md:h-28 rounded-full border-4 border-white object-cover shadow-md"
                />
                {photographer.verified && (
                  <div className="absolute bottom-1 right-1 bg-blue-500 rounded-full p-1 border-2 border-white">
                    <CheckCircle size={16} className="text-white" />
                  </div>
                )}
              </div>
              
              <div>
                <div className="flex items-center mb-1">
                  <div className="flex mr-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        className={
                          i < Math.floor(photographer.rating)
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-gray-300"
                        }
                      />
                    ))}
                  </div>
                  <span className="text-gray-700 font-medium">
                    {photographer.rating}
                  </span>
                  <span className="mx-1 text-gray-500">•</span>
                  <span className="text-gray-600">
                    {photographer.reviews} reviews
                  </span>
                </div>
                
                <div className="flex items-center text-gray-600">
                  <MapPin size={16} className="mr-1" />
                  <span>{photographer.location}</span>
                  <span className="mx-2 text-gray-400">|</span>
                  <Clock size={16} className="mr-1" />
                  <span>{photographer.experience} experience</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col items-start md:items-end">
              <div className="text-2xl font-bold text-blue-600 mb-1">${photographer.price}</div>
              <div className="text-gray-500 text-sm mb-3">per {photographer.priceUnit}</div>
              
              <div className="flex gap-3">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center"
                >
                  Book Now
                  <ArrowRight size={16} className="ml-1" />
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className={`flex items-center px-3 py-2 rounded-lg border ${
                    liked ? 'bg-red-50 border-red-300 text-red-600' : 'border-gray-300 text-gray-700 hover:border-gray-400'
                  }`}
                  onClick={toggleLike}
                >
                  <Heart size={18} className={`mr-1.5 ${liked ? 'fill-red-500 text-red-500' : ''}`} />
                  {liked ? 'Saved' : 'Save'}
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center px-3 py-2 rounded-lg border border-gray-300 text-gray-700 hover:border-gray-400"
                >
                  <MessageSquare size={18} className="mr-1.5" />
                  Message
                </motion.button>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 pt-6 border-t border-gray-100">
            <div className="flex items-center">
              <Camera className="text-blue-600 mr-2" size={20} />
              <div>
                <div className="text-sm text-gray-500">Specialties</div>
                <div className="font-medium">{photographer.specialties.length} Categories</div>
              </div>
            </div>
            <div className="flex items-center">
              <Image className="text-blue-600 mr-2" size={20} />
              <div>
                <div className="text-sm text-gray-500">Portfolio</div>
                <div className="font-medium">{photographer.portfolio.length} Projects</div>
              </div>
            </div>
            <div className="flex items-center">
              <DollarSign className="text-blue-600 mr-2" size={20} />
              <div>
                <div className="text-sm text-gray-500">Packages</div>
                <div className="font-medium">{photographer.packages.length} Options</div>
              </div>
            </div>
            <div className="flex items-center">
              <ThumbsUp className="text-blue-600 mr-2" size={20} />
              <div>
                <div className="text-sm text-gray-500">Response Rate</div>
                <div className="font-medium">98% (2hrs)</div>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Navigation Tabs */}
        <div className="sticky top-0 bg-white shadow-sm z-20 rounded-t-lg overflow-hidden mb-8">
          <nav className="flex overflow-x-auto hide-scrollbar">
            {['gallery', 'about', 'packages', 'reviews', 'faq'].map((tab) => (
              <button
                key={tab}
                className={`px-5 py-4 text-sm font-medium uppercase tracking-wide whitespace-nowrap transition-colors ${
                  activeTab === tab
                    ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50/50'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab === 'faq' ? 'FAQ' : tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </nav>
        </div>

        {/* Content Section */}
        <div className="mb-8">
          {/* Gallery Tab */}
          {activeTab === 'gallery' && (
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={itemFadeIn} className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">Portfolio Gallery</h2>
                  <p className="text-gray-600">Browse {photographer.name}'s professional work</p>
                </div>
                
                <div className="flex overflow-x-auto hide-scrollbar space-x-2 pb-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      className={`px-4 py-2 text-sm rounded-full whitespace-nowrap transition-colors ${
                        selectedCategory === category
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                      }`}
                      onClick={() => setSelectedCategory(category)}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </motion.div>

              <motion.div 
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                {filteredPortfolio.map((item, index) => (
                  <motion.div
                    key={item.id}
                    variants={itemFadeIn}
                    className="relative group rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow bg-white"
                  >
                    <div 
                      className="aspect-[3/4] cursor-pointer overflow-hidden"
                      onClick={() => {
                        setCurrentImageIndex(index);
                        setShowGalleryModal(true);
                      }}
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                        <span className="text-white opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-300 font-medium bg-black/50 backdrop-blur-sm rounded-full py-2 px-4">
                          View Photo
                        </span>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium text-gray-800 truncate">{item.title}</h3>
                      <p className="text-sm text-gray-500">{item.category}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {filteredPortfolio.length === 0 && (
                <motion.div 
                  className="bg-gray-50 rounded-lg p-8 text-center"
                  variants={itemFadeIn}
                >
                  <p className="text-gray-600">No photos found in this category.</p>
                </motion.div>
              )}
            </motion.div>
          )}

          {/* About Tab */}
          {activeTab === 'about' && (
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              <motion.h2 
                className="text-2xl font-bold text-gray-800 mb-6"
                variants={itemFadeIn}
              >
                About {photographer.name}
              </motion.h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <motion.div 
                  className="lg:col-span-2 space-y-6"
                  variants={itemFadeIn}
                >
                  <div className="bg-white rounded-xl shadow-sm p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Biography</h3>
                    <div className="relative">
                      <p className={`text-gray-700 leading-relaxed ${!expandedBio && 'line-clamp-4'}`}>
                        {photographer.bio}
                      </p>
                      {!expandedBio && (
                        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent"></div>
                      )}
                      <button 
                        className="text-blue-600 font-medium mt-2 hover:text-blue-700"
                        onClick={() => setExpandedBio(!expandedBio)}
                      >
                        {expandedBio ? 'Show less' : 'Read more'}
                      </button>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-xl shadow-sm p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Achievements</h3>
                    <ul className="space-y-3">
                      {photographer.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start">
                          <Award className="text-blue-600 mr-2 mt-0.5 flex-shrink-0" size={18} />
                          <span className="text-gray-700">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-xl shadow-sm p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Equipment</h3>
                    <ul className="space-y-3">
                      {photographer.equipments.map((equipment, index) => (
                        <li key={index} className="flex items-start">
                          <Camera className="text-blue-600 mr-2 mt-0.5 flex-shrink-0" size={18} />
                          <span className="text-gray-700">{equipment}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="space-y-6"
                  variants={itemFadeIn}
                >
                  <div className="bg-white rounded-xl shadow-sm p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Details</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <Clock className="text-blue-600 mr-3 mt-0.5 flex-shrink-0" size={18} />
                        <div>
                          <span className="text-gray-700 font-medium block">Experience</span>
                          <p className="text-gray-600">{photographer.experience}</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <MapPin className="text-blue-600 mr-3 mt-0.5 flex-shrink-0" size={18} />
                        <div>
                          <span className="text-gray-700 font-medium block">Location</span>
                          <p className="text-gray-600">{photographer.location}</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <Calendar className="text-blue-600 mr-3 mt-0.5 flex-shrink-0" size={18} />
                        <div>
                          <span className="text-gray-700 font-medium block">Available days</span>
                          <p className="text-gray-600">{photographer.availability.join(', ')}</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <Users className="text-blue-600 mr-3 mt-0.5 flex-shrink-0" size={18} />
                        <div>
                          <span className="text-gray-700 font-medium block">Languages</span>
                          <p className="text-gray-600">{photographer.languages.join(', ')}</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-xl shadow-sm p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Connect</h3>
                    <ul className="space-y-3">
                      <li>
                        <a 
                          href={`https://instagram.com/${photographer.socials.instagram.replace('@', '')}`} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center text-gray-700 hover:text-pink-600 transition-colors"
                        >
                          <Instagram size={18} className="mr-3 text-pink-600" />
                          <span>{photographer.socials.instagram}</span>
                        </a>
                      </li>
                      <li>
                        <a 
                          href={`https://facebook.com/${photographer.socials.facebook}`} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
                        >
                          <Facebook size={18} className="mr-3 text-blue-600" />
                          <span>{photographer.socials.facebook}</span>
                        </a>
                      </li>
                      <li>
                        <a 
                          href={`https://twitter.com/${photographer.socials.twitter.replace('@', '')}`} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center text-gray-700 hover:text-blue-400 transition-colors"
                        >
                          <Twitter size={18} className="mr-3 text-blue-400" />
                          <span>{photographer.socials.twitter}</span>
                        </a>
                      </li>
                      <li>
                        <a 
                          href={`https://${photographer.socials.website}`} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center text-gray-700 hover:text-blue-500 transition-colors"
                        >
                          <ExternalLink size={18} className="mr-3 text-blue-500" />
                          <span>{photographer.socials.website}</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}

          {/* Packages Tab */}
          {activeTab === 'packages' && (
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              <motion.div
                variants={itemFadeIn}
                className="mb-8"
              >
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Photography Packages</h2>
                <p className="text-gray-600">Choose the perfect package that suits your needs</p>
              </motion.div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {photographer.packages.map((pkg) => (
                  <motion.div 
                    key={pkg.id}
                    variants={itemFadeIn}
                    className={`bg-white rounded-xl overflow-hidden border-2 transition-all ${
                      selectedPackage?.id === pkg.id 
                        ? 'border-blue-500 shadow-xl scale-[1.02]' 
                        : 'border-gray-100 shadow-md hover:shadow-lg hover:border-gray-200'
                    }`}
                  >
                    {pkg.popular && (
                      <div className="bg-blue-600 text-white text-center py-2 text-sm font-medium">
                        Most Popular
                      </div>
                    )}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{pkg.name}</h3>
                      <div className="flex items-end gap-1 mb-4">
                        <span className="text-3xl font-bold text-blue-600">${pkg.price}</span>
                        <span className="text-gray-500 text-sm pb-1">/ {pkg.duration}</span>
                      </div>
                      
                      <ul className="space-y-3 mb-6 min-h-[180px]">
                        {pkg.includes.map((item, index) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={18} />
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className={`w-full py-3 rounded-lg font-medium transition-colors ${
                          selectedPackage?.id === pkg.id
                            ? 'bg-blue-600 text-white hover:bg-blue-700'
                            : pkg.popular
                              ? 'bg-blue-600 text-white hover:bg-blue-700'
                              : 'bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50'
                        }`}
                        onClick={() => setSelectedPackage(pkg)}
                      >
                        {selectedPackage?.id === pkg.id ? 'Selected' : 'Select Package'}
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </div>

              {selectedPackage && (
                <motion.div 
                  className="bg-blue-50 border border-blue-100 rounded-xl p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/2">
                      <h3 className="text-xl font-bold text-gray-800 mb-4">
                        Book {selectedPackage.name} Package
                      </h3>
                      <p className="text-gray-600 mb-6">
                        Complete your booking by selecting a date and time that works for you.
                      </p>
                      
                      <div className="mb-6">
                        <h4 className="font-medium text-gray-800 mb-3">Available Dates:</h4>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-2">
                          {photographer.availableDates.map((date, index) => (
                            <button
                              key={index}
                              className="px-3 py-2 rounded-lg text-sm font-medium bg-white border border-gray-200 text-gray-700 hover:border-blue-400 hover:text-blue-600 transition-colors"
                            >
                              {new Date(date).toLocaleDateString('en-US', { 
                                month: 'short', 
                                day: 'numeric',
                                weekday: 'short'
                              })}
                            </button>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-gray-800 mb-3">Contact Information:</h4>
                        <div className="space-y-3">
                          <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          />
                          <input
                            type="email"
                            placeholder="Email Address"
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          />
                          <input
                            type="tel"
                            placeholder="Phone Number"
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div className="md:w-1/2 bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                      <h4 className="text-lg font-bold text-gray-800 mb-4">Booking Summary</h4>
                      
                      <div className="space-y-4 mb-6">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Package</span>
                          <span className="font-medium">{selectedPackage.name}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Duration</span>
                          <span className="font-medium">{selectedPackage.duration}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Photographer</span>
                          <span className="font-medium">{photographer.name}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Location</span>
                          <span className="font-medium">To be determined</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Date & Time</span>
                          <span className="font-medium">Select a date →</span>
                        </div>
                      </div>
                      
                      <div className="border-t border-gray-100 pt-4 mb-6">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-gray-600">Package Price</span>
                          <span className="font-medium">${selectedPackage.price}</span>
                        </div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-gray-600">Booking Fee</span>
                          <span className="font-medium">$25</span>
                        </div>
                        <div className="flex justify-between items-center pt-3 border-t border-gray-100 mt-3">
                          <span className="text-gray-800 font-medium">Total</span>
                          <span className="text-xl font-bold text-blue-600">${selectedPackage.price + 25}</span>
                        </div>
                      </div>
                      
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                      >
                        Proceed to Payment
                      </motion.button>
                      
                      <p className="text-xs text-gray-500 text-center mt-4">
                        A 25% deposit is required to secure your booking. 
                        Cancellations made at least 48 hours in advance will receive a full refund.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          )}

          {/* Reviews Tab */}
          {activeTab === 'reviews' && (
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              <motion.div 
                className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4"
                variants={itemFadeIn}
              >
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">Client Reviews</h2>
                  <p className="text-gray-600">See what others are saying about {photographer.name}</p>
                </div>
                
                <div className="bg-white rounded-xl shadow-sm p-4 flex items-center gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">{photographer.rating}</div>
                    <div className="text-sm text-gray-500">out of 5</div>
                  </div>
                  
                  <div className="pl-4 border-l border-gray-200">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={20}
                          className={
                            i < Math.floor(photographer.rating)
                              ? "text-yellow-400 fill-yellow-400"
                              : "text-gray-300"
                          }
                        />
                      ))}
                    </div>
                    <div className="text-sm text-gray-600 mt-1">
                      Based on {photographer.reviews} reviews
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <div className="space-y-6">
                {photographer.testimonials.map((review) => (
                  <motion.div 
                    key={review.id}
                    variants={itemFadeIn}
                    className="bg-white rounded-xl shadow-sm p-6"
                  >
                    <div className="flex items-start">
                      <img 
                        src={review.image} 
                        alt={review.name} 
                        className="w-12 h-12 rounded-full object-cover mr-4"
                      />
                      
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3">
                          <div>
                            <h3 className="font-medium text-gray-800">{review.name}</h3>
                            <div className="text-sm text-gray-500">
                              {review.occasion} • {review.date}
                            </div>
                          </div>
                          
                          <div className="flex mt-2 sm:mt-0">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                size={16}
                                className={
                                  i < review.rating
                                    ? "text-yellow-400 fill-yellow-400"
                                    : "text-gray-300"
                                }
                              />
                            ))}
                          </div>
                        </div>
                        
                        <p className="text-gray-700">{review.text}</p>
                        
                        <div className="mt-4 flex items-center text-sm text-gray-500">
                          <button className="flex items-center text-gray-600 hover:text-blue-600 mr-4">
                            <ThumbsUp size={14} className="mr-1" />
                            Helpful
                          </button>
                          <span>•</span>
                          <button className="ml-4 text-gray-600 hover:text-blue-600">
                            Reply
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <motion.div 
                className="text-center mt-8"
                variants={itemFadeIn}
              >
                <button className="bg-white text-blue-600 font-medium py-2 px-6 rounded-lg border border-blue-200 hover:bg-blue-50 transition-colors">
                  Load more reviews
                </button>
              </motion.div>
            </motion.div>
          )}

          {/* FAQ Tab */}
          {activeTab === 'faq' && (
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              <motion.div 
                className="mb-8"
                variants={itemFadeIn}
              >
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Frequently Asked Questions</h2>
                <p className="text-gray-600">Everything you need to know about working with {photographer.name}</p>
              </motion.div>
              
              <div className="space-y-4">
                {photographer.faqs.map((faq, index) => (
                  <motion.div 
                    key={index}
                    variants={itemFadeIn}
                    className={`bg-white rounded-xl shadow-sm overflow-hidden transition-all ${
                      openFaqIndex === index ? 'shadow-md' : ''
                    }`}
                  >
                    <button
                      className={`w-full text-left p-6 flex justify-between items-center focus:outline-none ${
                        openFaqIndex === index ? 'border-b border-gray-100' : ''
                      }`}
                      onClick={() => toggleFaq(index)}
                    >
                      <h3 className="font-medium text-gray-800">{faq.question}</h3>
                      <ChevronRight 
                        size={20} 
                        className={`text-gray-500 transform transition-transform ${
                          openFaqIndex === index ? 'rotate-90' : ''
                        }`} 
                      />
                    </button>
                    
                    <div 
                      className={`overflow-hidden transition-all max-h-0 ${
                        openFaqIndex === index ? 'max-h-96' : ''
                      }`}
                    >
                      <div className="p-6 pt-0 text-gray-700">
                        {faq.answer}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <motion.div 
                className="bg-blue-50 rounded-xl p-6 mt-8 flex flex-col md:flex-row md:items-center justify-between gap-6"
                variants={itemFadeIn}
              >
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Still have questions?</h3>
                  <p className="text-gray-600">
                    Contact {photographer.name} directly to discuss your specific needs.
                  </p>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center justify-center bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  <MessageSquare size={18} className="mr-2" />
                  Send a Message
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PhotographerDetailsUI;