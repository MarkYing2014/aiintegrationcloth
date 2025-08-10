import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { useState, useEffect } from 'react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const testimonials = [
    {
      id: 1,
      name: "张教授",
      title: "浙江大学图书馆馆长",
      institution: "浙江大学",
      content: "蓝博图书馆管理系统极大地提升了我们的管理效率。多校区统一管理功能让我们能够轻松协调各个分馆的资源，学生反馈非常积极。",
      rating: 5,
      avatar: "/asset/malelib.jpeg"
    },
    {
      id: 2,
      name: "严老师",
      title: "桐乡高级中学图书馆馆长",
      institution: "桐乡高级中学",
      content: "系统的智能化程度很高，市民借阅体验得到显著改善。数据分析功能帮助我们更好地了解读者需求，优化馆藏结构。",
      rating: 5,
      avatar: "/asset/femalelib.jpeg"
    },
    {
      id: 3,
      name: "顾老师",
      title: "杭州第一中学图书馆馆长",
      institution: "杭州第一中学",
      content: "作为中学图书馆，我们特别需要简单易用的系统。蓝博的解决方案完美满足了我们的需求，学生们很快就学会了使用。",
      rating: 5,
      avatar: "/asset/malelib1.jpeg"
    },
    {
      id: 4,
      name: "张经理",
      title: "台州市电力局信息中心主任",
      institution: "台州市电力局",
      content: "企业内部知识管理一直是我们的重点。蓝博提供的企业图书馆解决方案帮助我们建立了完善的知识库，员工学习效率大幅提升。",
      rating: 5,
      avatar: "/asset/malelib2.jpeg"
    },
    {
      id: 5,
      name: "张馆长",
      title: "温州市图书馆馆长",
      institution: "温州市图书馆",
      content: "25年的专业经验确实不是盖的！从系统设计到技术支持，蓝博团队都表现出了极高的专业水准。我们的数字化转型非常成功。",
      rating: 5,
      avatar: "/asset/femaleLib1.jpeg"
    },
    {
      id: 6,
      name: "赵主任",
      title: "宁波大学图书馆技术部主任",
      institution: "宁波大学",
      content: "系统稳定性很好，几乎没有出现过故障。技术支持响应及时，解决问题效率很高。学生和教师都对新系统很满意。",
      rating: 5,
      avatar: "/asset/femaleLib2.jpeg"
    }
  ];

  // Auto-scroll carousel effect
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
      }, 4000); // Change every 4 seconds

      return () => clearInterval(interval);
    }
  }, [isHovered, testimonials.length]);



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

        {/* Carousel Container */}
        <div 
          className="relative overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.div
            className="flex transition-transform duration-1000 ease-in-out"
            animate={{
              x: `-${currentIndex * (100 / 3)}%`
            }}
            style={{
              width: `${testimonials.length * (100 / 3)}%`
            }}
          >
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                className="w-1/3 flex-shrink-0 px-4"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" as const }}
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 relative h-full">
                  {/* Quote Icon */}
                  <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <Quote className="w-4 h-4 text-white" />
                  </div>

                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    {renderStars(testimonial.rating)}
                  </div>

                  {/* Content */}
                  <p className="text-gray-700 mb-6 leading-relaxed text-sm">
                    "{testimonial.content}"
                  </p>

                  {/* Customer Info */}
                  <div className="flex items-center">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${
                        typeof testimonial.avatar === 'string' && testimonial.avatar.startsWith('/asset/') ? '' : 'bg-blue-100'
                      }`}
                    >
                      {typeof testimonial.avatar === 'string' && testimonial.avatar.startsWith('/asset/') ? (
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                      ) : (
                        <span className="text-xl">{testimonial.avatar}</span>
                      )}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 text-sm">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-600 text-xs">
                        {testimonial.title}
                      </p>
                      <p className="text-blue-600 text-xs font-medium">
                        {testimonial.institution}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Carousel Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
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
