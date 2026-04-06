import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { HiPlus, HiX, HiSearch, HiChevronLeft, HiChevronRight, HiExternalLink } from 'react-icons/hi';
import Lenis from 'lenis';

const categories = [
  'All',
  'Kitchen',
  'Living Room',
  // 'Bedroom & Office',
  'Pooja Room',
  'Furniture & Storage',
];

// Generating project items with working image URLs
const projectItems = [
  // Kitchen
  { id: 1, category: 'Kitchen', title: 'Modern Green Kitchen', img: '/assets/kitchen/kitchen2.jpeg', color: 'green' },
  { id: 2, category: 'Kitchen', title: 'Modular Kitchen Cabinets', img: '/assets/kitchen/kitchen3.jpeg', color: 'white' },
  { id: 3, category: 'Kitchen', title: 'Kitchen Storage Solution', img: '/assets/kitchen/kitchen4.jpeg', color: 'wood' },
  { id: 4, category: 'Kitchen', title: 'Pull-out Baskets', img: '/assets/kitchen/kitchen5.jpeg', color: 'white' },
  { id: 5, category: 'Kitchen', title: 'Green Loft Cabinets', img: '/assets/kitchen/kitchen6.jpeg', color: 'green' },
  // Living Room
  { id: 12, category: 'Living Room', title: 'Traditional TV Unit', img: '/assets/living-room/livingroom1.jpeg', color: 'wood' },
  { id: 13, category: 'Living Room', title: 'Wooden Partition Wall', img: '/assets/living-room/livingroom2.jpeg', color: 'wood' },
  { id: 14, category: 'Living Room', title: 'Modern TV Console', img: '/assets/living-room/livingroom3.jpeg', color: 'white' },
  {id: 37, category: 'Living Room', title: 'Full Wall TV Unit', img: '/assets/living-room/livingroom4.jpeg', color: 'wood' },
  {id: 36, category: 'Living Room', title: 'Wooden Storage Unit', img: '/assets/living-room/livingroom5.jpeg', color: 'wood' },
  // // Bedroom & Office
  // { id: 15, category: 'Bedroom & Office', title: 'Master Bedroom Wardrobe', img: '/assets/bedroom-office/bedroom1.jpeg', color: 'white' },
  // { id: 16, category: 'Bedroom & Office', title: 'Dark Wood Wardrobe', img: '/assets/bedroom-office/bedroom2.jpeg', color: 'wood' },
  // { id: 17, category: 'Bedroom & Office', title: 'Wardrobe with Mirror', img: '/assets/bedroom-office/bedroom3.jpg', color: 'white' },
  // { id: 18, category: 'Bedroom & Office', title: 'Bedroom Loft Storage', img: '/assets/bedroom-office/bedroom4.jpg', color: 'white' },
  // { id: 19, category: 'Bedroom & Office', title: 'Full Wall Wardrobe', img: '/assets/bedroom-office/bedroom5.jpg', color: 'wood' },
  // { id: 20, category: 'Bedroom & Office', title: 'Light Wood Wardrobe', img: '/assets/bedroom-office/bedroom6.jpg', color: 'wood' },
  // Pooja Room
  { id: 27, category: 'Pooja Room', title: 'Lotus Pattern Pooja Unit', img: '/assets/pooja-room/poojARoom1.jpeg', color: 'wood' },
  { id: 28, category: 'Pooja Room', title: 'Ganesha Pattern Cabinet', img: '/assets/pooja-room/poojARoom2.jpeg', color: 'wood' },
  { id: 29, category: 'Pooja Room', title: 'Traditional Prayer Unit', img: '/assets/pooja-room/poojARoom3.jpeg', color: 'wood' },

  // Furniture & Storage
  { id: 30, category: 'Furniture & Storage', title: 'Dark Wood Cabinet', img: '/assets/furniture-storage/furniture1.jpeg', color: 'wood' },
  { id: 31, category: 'Furniture & Storage', title: 'Multi-purpose Storage', img: '/assets/furniture-storage/furniture2.jpeg', color: 'white' },
  { id: 32, category: 'Furniture & Storage', title: 'Custom Wall Unit', img: '/assets/furniture-storage/furniture3.jpeg', color: 'wood' },
  { id: 33, category: 'Furniture & Storage', title: 'Storage Loft', img: '/assets/furniture-storage/furniture4.jpeg', color: 'white' },
  { id: 34, category: 'Furniture & Storage', title: 'Upper Loft Cabinets', img: '/assets/furniture-storage/furniture5.jpeg', color: 'white' },,
];

const colorFilters = [
  { name: 'All', value: 'all', class: 'bg-gradient-to-tr from-gray-200 to-gray-400' },
  { name: 'Wood', value: 'wood', class: 'bg-[#8B4513]' },
  { name: 'White', value: 'white', class: 'bg-white border border-gray-200' },
  { name: 'Grey', value: 'grey', class: 'bg-gray-500' },
  { name: 'Green', value: 'green', class: 'bg-green-600' },
  { name: 'Orange', value: 'orange', class: 'bg-orange-500' },
  { name: 'Red', value: 'red', class: 'bg-red-600' },
  { name: 'Yellow', value: 'yellow', class: 'bg-yellow-400' },
  { name: 'Pink', value: 'pink', class: 'bg-pink-400' },
];

interface GalleryItemProps {
  item: typeof projectItems[0];
  onClick: (item: typeof projectItems[0]) => void;
  key?: number;
}

interface GalleryProps {
  lenis?: Lenis | null;
}

function GalleryItem({ item, onClick }: GalleryItemProps) {
  const ref = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const isInView = useInView(ref, { once: true, margin: "200px" });

  return (
    <motion.div
      ref={ref}
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="h-full"
    >
      <Tilt
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
        scale={1.02}
        transitionSpeed={2500}
        className="h-full"
      >
        <div 
          className="group relative aspect-square rounded-[32px] overflow-hidden cursor-pointer shadow-lg h-full bg-gray-100"
          onClick={() => onClick(item)}
        >
          {isInView && (
            <motion.img
              layoutId={`img-${item.id}`}
              src={item.img}
              alt={item.title}
              onLoad={() => setIsLoaded(true)}
              initial={{ opacity: 0 }}
              animate={{ opacity: isLoaded ? 1 : 0 }}
              transition={{ duration: 0.6 }}
              decoding="async"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-115 scale-110"
            />
          )}
          {!isLoaded && (
            <div className="absolute inset-0 bg-dark/10 animate-pulse flex items-center justify-center">
              <div className="w-8 h-8 border-2 border-primary/20 border-t-primary rounded-full animate-spin" />
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
            <p className="text-primary text-xs font-bold uppercase tracking-widest mb-1">{item.category}</p>
            <h4 className="text-white text-xl font-bold">{item.title}</h4>
            <div className="absolute top-6 right-6 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white transform translate-y-4 group-hover:translate-y-0 transition-transform">
              <HiPlus />
            </div>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
}

export default function Gallery({ lenis }: GalleryProps) {
  const [activeTab, setActiveTab] = useState('All');
  const [activeColor, setActiveColor] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState<typeof projectItems[0] | null>(null);

  // Stop background scroll when modal is open
  useEffect(() => {
    if (selectedProject && lenis) {
      lenis.stop();
      return () => {
        lenis.start();
      };
    }
  }, [selectedProject, lenis]);

  const handleEnquireClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    e.stopPropagation(); // Prevent global smooth scroll handler
    setSelectedProject(null);
    // Scroll to contact after modal closes
    setTimeout(() => {
      if (lenis) {
        lenis.scrollTo('#contact', {
          offset: -80,
          duration: 1.2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });
        if (history.pushState) {
          history.pushState(null, '', '#contact');
        } else {
          window.location.hash = '#contact';
        }
      }
    }, 400); // Wait for modal exit animation
  };

  const filteredProjects = projectItems.filter(p => {
    const matchesTab = activeTab === 'All' || p.category === activeTab;
    const matchesColor = activeColor === 'all' || p.color === activeColor;
    const query = searchQuery.toLowerCase();
    const matchesSearch = 
      p.title.toLowerCase().includes(query) || 
      p.category.toLowerCase().includes(query);
    return matchesTab && matchesColor && matchesSearch;
  });

  const navigateProject = useCallback((direction: 'next' | 'prev') => {
    if (!selectedProject) return;
    const currentIndex = filteredProjects.findIndex(p => p.id === selectedProject.id);
    if (currentIndex === -1) return;
    
    let nextIndex = direction === 'next' ? currentIndex + 1 : currentIndex - 1;
    if (nextIndex < 0) nextIndex = filteredProjects.length - 1;
    if (nextIndex >= filteredProjects.length) nextIndex = 0;
    
    setSelectedProject(filteredProjects[nextIndex]);
  }, [selectedProject, filteredProjects]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedProject) return;
      if (e.key === 'Escape') setSelectedProject(null);
      if (e.key === 'ArrowRight') navigateProject('next');
      if (e.key === 'ArrowLeft') navigateProject('prev');
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject, navigateProject]);

  return (
    <section id="projects" className="py-24 bg-white overflow-x-hidden relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block"
          >
            Our Portfolio
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-8"
          >
            Work Showcase
          </motion.h2>
          
          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="max-w-md mx-auto mb-8 relative"
          >
            <div className="relative group">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors text-xl">
                <HiSearch />
              </div>
              <input
                id="project-search"
                type="text"
                placeholder="Search projects by title..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-12 py-4 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-sm hover:shadow-md"
              />
              {searchQuery && (
                <button
                  id="clear-search"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary transition-colors text-xl p-1"
                >
                  <HiX />
                </button>
              )}
            </div>
          </motion.div>
          
          {/* Tabs */}
          <div className="space-y-8 mb-12">
            {/* Color Filter */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.18 }}
              className="flex flex-wrap justify-center items-center gap-4"
            >
              <span className="text-gray-400 text-xs font-bold uppercase tracking-widest mr-2">Filter by Color:</span>
              <div className="flex flex-wrap justify-center gap-3">
                {colorFilters.map(color => (
                  <motion.button
                    key={color.value}
                    id={`color-filter-${color.value}`}
                    onClick={() => setActiveColor(color.value)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={`group relative w-8 h-8 rounded-full transition-all ${color.class} ${
                      activeColor === color.value 
                        ? 'ring-2 ring-primary ring-offset-2 scale-110 shadow-lg' 
                        : 'hover:scale-110'
                    }`}
                    title={color.name}
                  >
                    {activeColor === color.value && (
                      <motion.div 
                        layoutId="color-active"
                        className="absolute inset-0 rounded-full ring-2 ring-primary ring-offset-2"
                      />
                    )}
                    <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-bold text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      {color.name}
                    </span>
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Category Tabs */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap justify-center gap-4"
            >
              {categories.map(cat => (
                <motion.button
                  key={cat}
                  id={`gallery-tab-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                  onClick={() => setActiveTab(cat)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-2 rounded-full text-sm font-bold transition-all border ${
                    activeTab === cat 
                      ? 'bg-primary text-white border-primary shadow-lg shadow-primary/20' 
                      : 'bg-white text-gray-500 border-gray-200 hover:border-primary hover:text-primary'
                  }`}
                >
                  {cat}
                </motion.button>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 min-h-[400px]"
        >
          <AnimatePresence mode='popLayout'>
            {filteredProjects.length > 0 ? (
              filteredProjects.map((item) => (
                <GalleryItem key={item.id} item={item} onClick={() => setSelectedProject(item)} />
              ))
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-full flex flex-col items-center justify-center py-20 text-gray-400"
              >
                <div className="text-6xl mb-4 opacity-20">
                  <HiSearch />
                </div>
                <p className="text-xl font-medium">No projects found matching your criteria</p>
                <button 
                  onClick={() => { setActiveTab('All'); setActiveColor('all'); setSearchQuery(''); }}
                  className="mt-4 text-primary font-bold hover:underline"
                >
                  Clear all filters
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox / Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              id="gallery-modal-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="fixed inset-0 z-[100] bg-dark/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-8 lg:p-12"
              onClick={() => setSelectedProject(null)}
            >
              {/* Close Button */}
              <motion.button 
                id="gallery-modal-close"
                initial={{ opacity: 0, scale: 0.5, rotate: -90 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.5, rotate: 90 }}
                transition={{ delay: 0.2 }}
                className="absolute top-6 right-6 md:top-10 md:right-10 text-white text-4xl hover:text-primary z-[110] bg-white/10 p-3 rounded-full backdrop-blur-xl border border-white/10 transition-all shadow-2xl hover:bg-white hover:text-dark"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedProject(null);
                }}
              >
                <HiX />
              </motion.button>

              {/* Navigation Buttons */}
              {filteredProjects.length > 1 && (
                <>
                  <motion.button
                    id="gallery-modal-prev"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 text-white text-4xl md:text-6xl hover:text-primary z-[110] transition-colors p-2"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigateProject('prev');
                    }}
                  >
                    <HiChevronLeft />
                  </motion.button>
                  <motion.button
                    id="gallery-modal-next"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 text-white text-4xl md:text-6xl hover:text-primary z-[110] transition-colors p-2"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigateProject('next');
                    }}
                  >
                    <HiChevronRight />
                  </motion.button>
                </>
              )}
              
              <motion.div
                id="gallery-modal-content"
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 30 }}
                transition={{ 
                  type: "spring",
                  damping: 25,
                  stiffness: 200,
                  opacity: { duration: 0.3 }
                }}
                className="relative max-w-6xl w-full h-full flex flex-col items-center justify-center gap-6 md:gap-10"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center">
                  <AnimatePresence mode='wait'>
                    <motion.img
                      key={selectedProject.id}
                      id="gallery-modal-image"
                      layoutId={`img-${selectedProject.id}`}
                      src={selectedProject.img}
                      alt={selectedProject.title}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.05 }}
                      transition={{ 
                        type: "spring",
                        damping: 30,
                        stiffness: 300
                      }}
                      referrerPolicy="no-referrer"
                      className="max-w-full max-h-full rounded-[40px] shadow-[0_50px_100px_rgba(0,0,0,0.9)] border border-white/20 object-contain"
                    />
                  </AnimatePresence>
                </div>

                <motion.div 
                  id="gallery-modal-info"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-center px-4"
                >
                  <p id="gallery-modal-category" className="text-primary font-bold uppercase tracking-[0.4em] text-xs md:text-sm mb-3">
                    {selectedProject.category}
                  </p>
                  <h3 id="gallery-modal-title" className="text-white text-3xl md:text-6xl font-bold tracking-tight mb-8">
                    {selectedProject.title}
                  </h3>
                  
                 <motion.a
                   href="#contact"
                   id="gallery-modal-cta"
                   whileHover={{ scale: 1.05 }}
                   whileTap={{ scale: 0.95 }}
                   onClick={handleEnquireClick}
                   className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white hover:text-dark transition-all shadow-xl shadow-primary/20"
                 >
                   Enquire Now <span className="text-xl"><HiExternalLink /></span>
                 </motion.a>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

