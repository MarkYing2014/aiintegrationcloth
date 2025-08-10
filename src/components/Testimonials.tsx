import { motion } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import type { TouchEvent } from 'react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isInteracting, setIsInteracting] = useState(false);
  const interactTimeout = useRef<number | null>(null);
  const autoplayRef = useRef<number | null>(null);
  const minSwipeDistance = 50;

  // Cleanup interaction timeout on unmount
  useEffect(() => {
    return () => {
      window.clearTimeout(interactTimeout.current || undefined);
    };
  }, []);

  const testimonials = [
    {
      id: 1,
      name: "张教授",
      title: "浙江工业大学法学院图书资料室主任",
      institution: "浙江工业大学",
      content: "蓝博图书馆管理系统极大地提升了我们的管理效率。多校区统一管理功能让我们能够轻松协调各个分馆的资源，学生反馈非常积极。",
      rating: 5,
      avatar: "/asset/malelib.jpeg"
    },
    {
      id: 2,
      name: "严老师",
      title: "桐乡高级中学图书馆馆长",
      institution: "桐乡高级中学",
      content: "系统的智能化程度很高，老师和学生借阅体验得到显著改善。数据分析功能帮助我们更好地了解读者需求，优化馆藏结构。",
      rating: 5,
      avatar: "/asset/femalelib.jpeg"
    },
    {
      id: 3,
      name: "顾老师",
      title: "杭州西湖职业中学图书馆馆长",
      institution: "杭州西湖职业中学",
      content: "作为中学图书馆，我们特别需要简单易用的系统。蓝博的解决方案完美满足了我们的需求，学生们很快就学会了使用。",
      rating: 5,
      avatar: "/asset/malelib1.jpeg"
    },
    {
      id: 4,
      name: "张经理",
      title: "台州市椒江区电力局信息中心主任",
      institution: "台州市椒江区电力局",
      content: "企业内部知识管理一直是我们的重点。蓝博提供的企业图书馆解决方案帮助我们建立了完善的知识库，员工学习效率大幅提升。",
      rating: 5,
      avatar: "/asset/malelib2.jpeg"
    },
    {
      id: 5,
      name: "张主任",
      title: "上海发电设备成套设计研究院有限公司资料室主任",
      institution: "上海发电设备成套设计研究院有限公司",
      content: "25年的专业经验确实不是盖的！从系统设计到技术支持，蓝博团队都表现出了极高的专业水准。我们的数字化转型非常成功。",
      rating: 5,
      avatar: "/asset/femaleLib1.jpeg"
    },
    {
      id: 6,
      name: "赵老师",
      title: "湖南省汉寿县第一中学图书馆馆长",
      institution: "湖南省汉寿县第一中学",
      content: "系统稳定性很好，几乎没有出现过故障。技术支持响应及时，解决问题效率很高。学生和教师都对新系统很满意。",
      rating: 5,
      avatar: "/asset/femaleLib2.jpeg"
    }
  ];

  // isMobile detection
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)');
    const handler = () => setIsMobile(mq.matches);
    handler();
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);


  // Single-interval autoplay: advance only when allowed
  useEffect(() => {
    const start = () => {
      if (autoplayRef.current != null) return;
      autoplayRef.current = window.setInterval(() => {
        if (!isInteracting && !document.hidden) {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        }
      }, 4000);
    };
    const stop = () => {
      if (autoplayRef.current != null) {
        window.clearInterval(autoplayRef.current);
        autoplayRef.current = null;
      }
    };

    start();

    const handleVisibility = () => {
      if (document.hidden) return; // interval keeps running but won't advance while hidden
    };
    document.addEventListener('visibilitychange', handleVisibility);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibility);
      stop();
    };
  }, [isInteracting, testimonials.length]);

  // Kickstart: advance once shortly after mount in case nothing triggers yet
  useEffect(() => {
    const t = window.setTimeout(() => {
      if (!isInteracting && !document.hidden) {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }
    }, 3000);
    return () => window.clearTimeout(t);
  }, []);

  // Touch handlers
  const onTouchStart = (e: TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
    setIsInteracting(true);
  };

  const onTouchMove = (e: TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (touchStart === null || touchEnd === null) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    } else if (isRightSwipe) {
      setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    }
    // Resume autoplay shortly after touch ends
    window.clearTimeout(interactTimeout.current || undefined);
    interactTimeout.current = window.setTimeout(() => setIsInteracting(false), 2000);
  };

  const getCardAnimationClass = (index: number) => {
    if (index === currentIndex) return 'scale-100 opacity-100 z-20';
    if (index === (currentIndex + 1) % testimonials.length) return 'translate-x-[40%] scale-95 opacity-60 z-10';
    if (index === (currentIndex - 1 + testimonials.length) % testimonials.length) return 'translate-x-[-40%] scale-95 opacity-60 z-10';
    return 'scale-90 opacity-0';
  };



  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            客户见证
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            来自全国各地图书馆的真实反馈，见证蓝博25年的专业服务品质
          </p>
        </motion.div>

        {/* Carousel Container (stacked cards) */}
        <div
          className="relative h-[420px] overflow-hidden"
          // Don't pause on mere mouseenter; pause only while moving
          onMouseLeave={() => { setIsInteracting(false); }}
          onMouseMove={() => {
            // Consider interaction only while the mouse is moving; auto-resume after inactivity
            setIsInteracting(true);
            window.clearTimeout(interactTimeout.current || undefined);
            interactTimeout.current = window.setTimeout(() => setIsInteracting(false), 800);
          }}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          ref={carouselRef}
        >
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`absolute top-0 w-full max-w-sm transform transition-all duration-500 ${getCardAnimationClass(index)}`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <div className="overflow-hidden h-[360px] border border-gray-100 shadow-sm hover:shadow-md flex flex-col bg-white rounded-2xl">
                  <div className="p-5 flex flex-col justify-between h-full relative">
                    {/* Quote Icon */}
                    <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                      <Quote className="w-4 h-4 text-white" />
                    </div>

                    {/* Rating */}
                    <div className="flex items-center mb-4">
                      {renderStars(testimonial.rating)}
                    </div>

                    {/* Content */}
                    <p className="text-gray-700 mb-2 leading-relaxed text-base">
                      "{testimonial.content}"
                    </p>

                    {/* Customer Info */}
                    <div className="flex items-center mt-4">
                      <div
                        className={`w-14 h-14 rounded-full flex items-center justify-center mr-4 ${
                          typeof testimonial.avatar === 'string' && testimonial.avatar.startsWith('/asset/') ? '' : 'bg-blue-100'
                        }`}
                      >
                        {typeof testimonial.avatar === 'string' && testimonial.avatar.startsWith('/asset/') ? (
                          <img
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            className="w-14 h-14 rounded-full object-cover"
                          />
                        ) : (
                          <span className="text-2xl">{testimonial.avatar}</span>
                        )}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 text-base">{testimonial.name}</h4>
                        <p className="text-gray-600 text-sm">{testimonial.title}</p>
                        <p className="text-blue-600 text-sm font-medium">{testimonial.institution}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop arrows */}
          {!isMobile && (
            <>
              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center text-gray-500 hover:bg-white z-30 shadow-md transition-all duration-300 hover:scale-110"
                onClick={() => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center text-gray-500 hover:bg-white z-30 shadow-md transition-all duration-300 hover:scale-110"
                onClick={() => setCurrentIndex((prev) => (prev + 1) % testimonials.length)}
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}

          {/* Dots */}
          <div className="absolute bottom-6 left-0 right-0 flex justify-center items-center space-x-3 z-30">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${currentIndex === idx ? 'bg-gray-500 w-5' : 'bg-gray-200 hover:bg-gray-300'}`}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to testimonial ${idx + 1}`}
              />)
            )}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-700 mb-6">
            加入1000+满意客户的行列，体验蓝博专业服务
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-colors font-medium">
            立即咨询
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
