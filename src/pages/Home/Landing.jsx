import { useState } from 'react';
import { MapPin, Calendar, Camera, Award, DollarSign, Star, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import Hero from '../../assets/images/hero.jpg';

const testimonials = [
    {
      id: 1,
      name: 'Emma Thompson',
      occasion: 'Wedding',
      text: 'Found the perfect photographer for our wedding in minutes! The whole process was so easy.',
      rating: 5
    },
    {
      id: 2,
      name: 'John Davis',
      occasion: 'Corporate Event',
      text: 'The quality of photographers on this platform is exceptional. Our company event photos were outstanding!',
      rating: 5
    },
    {
      id: 3,
      name: 'Lisa Martinez',
      occasion: 'Maternity',
      text: 'Amazing experience booking my maternity photoshoot. The photographer was professional and the photos are beautiful.',
      rating: 4
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
  

const LandingPage = ({ onSearch }) => {
    const [location, setLocation] = useState('');
    const [date, setDate] = useState('');
    const [occasion, setOccasion] = useState('');
    
    const handleSearch = () => {
      onSearch({ location, date, occasion });
    };
  
    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.2
        }
      }
    };
  
    const itemVariants = {
      hidden: { y: 20, opacity: 0 },
      visible: { 
        y: 0, 
        opacity: 1,
        transition: {
          duration: 0.5
        }
      }
    };
  
    const cardHover = {
      rest: { scale: 1 },
      hover: { 
        scale: 1.05,
        transition: {
          duration: 0.3
        }
      }
    };
  
    return (
      <div className="flex flex-col min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-r from-blue-500 to-purple-600">
          <div className="absolute inset-0 z-0">
            <img 
              src={Hero} 
              alt="Photography background" 
              className="w-full h-full object-cover opacity-30"
            />
          </div>
          <motion.div 
            className="z-10 text-center px-4 max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-4xl md:text-6xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Book the Best Photographers Near You
            </motion.h1>
            <motion.p 
              className="text-xl text-white/80 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Find and book professional photographers for any occasion in minutes
            </motion.p>
            
            <motion.div 
              className="bg-white p-4 rounded-lg shadow-xl max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <MapPin className="absolute left-3 top-3 text-gray-400" size={18} />
                  <input 
                    type="text"
                    placeholder="Location"
                    className="w-full pl-10 pr-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </div>
                <div className="flex-1 relative">
                  <Calendar className="absolute left-3 top-3 text-gray-400" size={18} />
                  <input 
                    type="date"
                    className="w-full pl-10 pr-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </div>
                <div className="flex-1 relative">
                  <Camera className="absolute left-3 top-3 text-gray-400" size={18} />
                  <select 
                    className="w-full pl-10 pr-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
                    value={occasion}
                    onChange={(e) => setOccasion(e.target.value)}
                  >
                    <option value="">Select Occasion</option>
                    {occasions.map((occ) => (
                      <option key={occ.name} value={occ.name}>{occ.name}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-3 text-gray-400" size={18} />
                </div>
                <motion.button 
                  className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors duration-300"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleSearch}
                >
                  Find Photographers
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </div>
  
        {/* Why Us Section */}
        <motion.section 
          className="py-20 px-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="max-w-6xl mx-auto">
            <motion.h2 
              className="text-3xl font-bold text-center mb-12 text-gray-800"
              variants={itemVariants}
            >
              Why Choose Our Platform
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div 
                className="bg-white p-6 rounded-xl shadow-md text-center"
                variants={itemVariants}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="text-blue-600" size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Verified Professionals</h3>
                <p className="text-gray-600">All photographers on our platform are carefully vetted for quality and experience.</p>
              </motion.div>
  
              <motion.div 
                className="bg-white p-6 rounded-xl shadow-md text-center"
                variants={itemVariants}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="text-green-600" size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Affordable Rates</h3>
                <p className="text-gray-600">Compare prices and find the perfect photographer for your budget.</p>
              </motion.div>
  
              <motion.div 
                className="bg-white p-6 rounded-xl shadow-md text-center"
                variants={itemVariants}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="text-purple-600" size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Easy Booking</h3>
                <p className="text-gray-600">Book your photographer in minutes with our simple, hassle-free process.</p>
              </motion.div>
            </div>
          </div>
        </motion.section>
  
        {/* Popular Occasions */}
        <motion.section 
          className="py-16 px-4 bg-gray-100"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="max-w-6xl mx-auto">
            <motion.h2 
              className="text-3xl font-bold text-center mb-12 text-gray-800"
              variants={itemVariants}
            >
              Popular Occasions
            </motion.h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
              {occasions.map((occasion, index) => (
                <motion.div 
                  key={occasion.name}
                  className="bg-white rounded-xl p-6 text-center cursor-pointer shadow-sm hover:shadow-md transition-shadow"
                  variants={itemVariants}
                  whileHover={cardHover.hover}
                  initial="rest"
                  onClick={() => {
                    setOccasion(occasion.name);
                    handleSearch();
                  }}
                >
                  <div className="text-4xl mb-3">{occasion.icon}</div>
                  <h3 className="font-medium text-gray-800">{occasion.name}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
  
        {/* Testimonials Section */}
        <motion.section 
          className="py-20 px-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="max-w-6xl mx-auto">
            <motion.h2 
              className="text-3xl font-bold text-center mb-12 text-gray-800"
              variants={itemVariants}
            >
              What Our Users Say
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <motion.div 
                  key={testimonial.id}
                  className="bg-white p-6 rounded-xl shadow-md"
                  variants={itemVariants}
                  whileHover={{ y: -5, transition: { duration: 0.3 } }}
                >
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={20} 
                        className={i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"} 
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                  <div className="mt-auto">
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.occasion}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
  
        {/* Footer */}
        <footer className="bg-gray-800 text-gray-300 py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">About Us</h3>
                <ul className="space-y-2">
                  <li className="hover:text-white transition-colors"><a href="#">Our Story</a></li>
                  <li className="hover:text-white transition-colors"><a href="#">How It Works</a></li>
                  <li className="hover:text-white transition-colors"><a href="#">Careers</a></li>
                  <li className="hover:text-white transition-colors"><a href="#">Press</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">For Photographers</h3>
                <ul className="space-y-2">
                  <li className="hover:text-white transition-colors"><a href="#">Join Our Network</a></li>
                  <li className="hover:text-white transition-colors"><a href="#">Photographer Resources</a></li>
                  <li className="hover:text-white transition-colors"><a href="#">Success Stories</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Support</h3>
                <ul className="space-y-2">
                  <li className="hover:text-white transition-colors"><a href="#">Contact Us</a></li>
                  <li className="hover:text-white transition-colors"><a href="#">FAQ</a></li>
                  <li className="hover:text-white transition-colors"><a href="#">Help Center</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Legal</h3>
                <ul className="space-y-2">
                  <li className="hover:text-white transition-colors"><a href="#">Terms of Service</a></li>
                  <li className="hover:text-white transition-colors"><a href="#">Privacy Policy</a></li>
                  <li className="hover:text-white transition-colors"><a href="#">Cookie Policy</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p>© 2025 PhotoBooker. All rights reserved.</p>
              <div className="flex space-x-4 mt-4 md:mt-0">
                <a href="#" className="hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                  </svg>
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                  </svg>
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  };

export default LandingPage;