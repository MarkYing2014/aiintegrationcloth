import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

import { motion, AnimatePresence } from 'framer-motion';
import { 
  NavigationMenu, 
  NavigationMenuContent, 
  NavigationMenuItem, 
  NavigationMenuLink, 
  NavigationMenuList, 
  NavigationMenuTrigger
} from '@/components/ui/navigation-menu';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);


  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => { 
    const handleScroll = () => {
      const currentScrollY = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      
      if (currentScrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Test if scroll events are working at all
    const testScroll = () => {
      console.log('Testing scroll detection...');
      handleScroll();
    };

    // Multiple approaches to catch scroll events
    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('scroll', handleScroll, { passive: true });
    document.body.addEventListener('scroll', handleScroll, { passive: true });
    
    // Also try with throttling
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', throttledScroll, { passive: true });
    
    // Call once to set initial state
    testScroll();
    
    // Test scroll detection every 2 seconds
    const interval = setInterval(testScroll, 2000);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('scroll', handleScroll);
      document.body.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', throttledScroll);
      clearInterval(interval);
    };
  }, []);



  return (
    <motion.nav 
      className={cn(
        "fixed top-0 left-0 right-0 w-full border-b z-50 transition-all duration-500",
        isScrolled 
          ? "bg-white shadow-xl border-gray-300 backdrop-blur-md" 
          : "bg-transparent border-transparent"
      )}
      style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        right: 0, 
        zIndex: 50,
        backgroundColor: isScrolled ? 'rgb(219, 234, 254)' : 'rgb(250, 250, 250)'
      }}
    > 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <Link
              to="/"
              className="flex items-center space-x-3 text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors whitespace-nowrap"
            >
              <img src="/asset/NewLBlogo.png" alt="Logo" className={cn("w-12 h-12 object-contain", isScrolled ? "w-10 h-10" : "w-12 h-12")} />
              <span className="whitespace-nowrap">蓝博科技</span>
            </Link>
          </div>

          {/* Desktop Navigation Menu */}
          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList className="flex space-x-2">
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      to="/"
                      className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
                    >
                      首页
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors">
                    关于我们
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-2 p-6 w-[400px]">
                      <div className="grid gap-1"></div>
                      <div className="grid gap-2">
                        <NavigationMenuLink asChild>
                          <Link
                            to="/about"
                            className="block p-2 rounded text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors"
                          >
                            <div className="font-medium">关于我们</div>
                            <p className="text-sm text-gray-600">
                              公司历史和价值观
                            </p>
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/team"
                            className="block p-2 rounded text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors"
                          >
                            <div className="font-medium">团队</div>
                            <p className="text-sm text-gray-600">我们的团队</p>
                          </Link>
                        </NavigationMenuLink>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      to="/products"
                      className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
                    >
                      产品中心
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      to="/news"
                      className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
                    >
                      蓝博资讯
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      to="/solutions"
                      className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
                    >
                      蓝博方案
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      to="/contact"
                      className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
                    >
                      联系我们
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Mobile hamburger button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white border-t"
          >
            <NavigationMenu className="w-full">
              <NavigationMenuList className="flex flex-col space-y-1 p-4">
                <NavigationMenuItem className="w-full">
                  <NavigationMenuLink asChild>
                    <Link
                      to="/"
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        window.scrollTo(0, 0);
                      }}
                      className="block w-full px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
                    >
                      首页
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem className="w-full">
                  <NavigationMenuLink asChild>
                    <Link
                      to="/about"
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        window.scrollTo(0, 0);
                      }}

                      className="block w-full px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
                    >
                      关于我们
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem className="w-full">
                  <NavigationMenuLink asChild>
                    <Link
                      to="/products"
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        window.scrollTo(0, 0);
                      }}
                      className="block w-full px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
                    >
                      产品中心
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem className="w-full">
                  <NavigationMenuLink asChild>
                    <Link
                      to="/news"
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        window.scrollTo(0, 0);
                      }}
                      className="block w-full px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
                    >
                      蓝博资讯
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem className="w-full">
                  <NavigationMenuLink asChild>
                    <Link
                      to="/solutions"
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        window.scrollTo(0, 0);
                      }}
                      className="block w-full px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
                    >
                      蓝博方案
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem className="w-full">
                  <NavigationMenuLink asChild>
                    <Link
                      to="/contact"
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        window.scrollTo(0, 0);
                      }}
                      className="block w-full px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
                    >
                      联系我们
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
