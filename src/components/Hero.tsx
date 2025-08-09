
import { Code, Cpu, Layers } from 'lucide-react'
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const Hero = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [videoLoaded, setVideoLoaded] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Detect mobile device
        const checkMobile = () => {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        };
        setIsMobile(checkMobile());

        const video = videoRef.current;
        if (video) {
            // Set video as loaded immediately to prioritize video
            setVideoLoaded(true);

            // Add event listeners
            const handleCanPlay = () => {
                // Aggressively try to play the video
                const playPromise = video.play();
                if (playPromise !== undefined) {
                    playPromise.then(() => {
                        console.log('Video playing successfully');
                    }).catch((error) => {
                        console.log('Video autoplay prevented:', error);
                        // Try again after a short delay
                        setTimeout(() => {
                            video.play().catch(() => {
                                console.log('Second attempt failed');
                            });
                        }, 100);
                    });
                }
            };

            const handleLoadedData = () => {
                handleCanPlay();
            };

            // Try to play immediately
            handleCanPlay();

            video.addEventListener('loadeddata', handleLoadedData);
            video.addEventListener('canplay', handleCanPlay);

            // Cleanup
            return () => {
                video.removeEventListener('loadeddata', handleLoadedData);
                video.removeEventListener('canplay', handleCanPlay);
            };
        }
    }, []);

    const containerVariant = {
        hidden: {
            opacity: 0,
            y: 20,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.3,
                duration: 0.3,
               
            },
        },
    };
    const itemVariant = {
        hidden: {
            opacity: 0,
            y: 20,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeInOut" as const,
            },
        },
    };



    return (
        <motion.div
            id="hero"
            className="relative w-full"
            initial="hidden"
            animate="visible"
            variants={containerVariant}
        >
            <div className="relative text-white h-[40vh] sm:h-[45vh] md:h-[500px] lg:h-[550px] xl:h-[600px] w-full overflow-hidden">
                {/* Background Video */}
                <video 
                    ref={videoRef}
                    className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                    autoPlay 
                    loop 
                    muted
                    playsInline
                    webkit-playsinline="true"
                    controls={false}
                    preload="auto"
                >
                    <source src="/asset/library.mp4" type="video/mp4" />
                </video>
                
                {/* Content Overlay */}
                <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
                    <div className="grid md:grid-cols-2 gap-12 items-center w-full">
                        <motion.div variants={itemVariant}>
                            <h1 className="text-4xl md:text-6xl font-bold mb-6">
                                蓝色科技，博识天下
                            </h1>
                            <p className="text-xl mb-6 opacity-90">
                                利用先进的AI技术，实现图书馆管理的智能化，为客户提供高效、精准的解决方案。
                            </p>
                          
                        </motion.div>
                        
                        <motion.div 
                            variants={itemVariant}
                            className="flex justify-center items-center space-x-4"
                        >
                            
                            
                        </motion.div>
                    </div>
                </div>
            </div>


            <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 mx-auto">
        <motion.div className="mt-6 md:mt-8 grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4" variants={containerVariant} initial="hidden" animate="visible" transition={{
        delay: 0.6
      }}>
          <motion.div className="bg-white p-4 md:p-5 rounded-xl shadow-sm border border-gray-100 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md" variants={itemVariant}>
            <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-100 flex items-center justify-center rounded-lg text-gray-500 mb-2 md:mb-3">
              <Cpu className="w-5 h-5 md:w-6 md:h-6" />
            </div>
            <h3 className="text-base md:text-lg font-semibold mb-1 md:mb-2 text-gray-800">校园一卡通</h3>
            <p className="text-gray-600 text-xs md:text-sm">与所有校园一卡通系统的无缝集成，实现智能校园管理。</p>
          </motion.div>
          
          <motion.div className="bg-white p-4 md:p-5 rounded-xl shadow-sm border border-gray-100 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md" variants={itemVariant}>
            <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-100 flex items-center justify-center rounded-lg text-gray-500 mb-2 md:mb-3">
              <Code className="w-5 h-5 md:w-6 md:h-6" />
            </div>
            <h3 className="text-base md:text-lg font-semibold mb-1 md:mb-2 text-gray-800">智能图书AI</h3>
            <p className="text-gray-600 text-xs md:text-sm">智能图书AI系统将图书要点与科目进行关联，实现智能学科辅导。</p>
          </motion.div>
          
          <motion.div className="bg-white p-4 md:p-5 rounded-xl shadow-sm border border-gray-100 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md" variants={itemVariant}>
            <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-100 flex items-center justify-center rounded-lg text-gray-500 mb-2 md:mb-3">
              <Layers className="w-5 h-5 md:w-6 md:h-6" />
            </div>
            <h3 className="text-base md:text-lg font-semibold mb-1 md:mb-2 text-gray-800">人脸识别</h3>
            <p className="text-gray-600 text-xs md:text-sm">人脸识别系统通过面部识别技术，提高借阅效率。</p>
          </motion.div>
        </motion.div>
      </div>
        </motion.div>
    )
};

export default Hero;
