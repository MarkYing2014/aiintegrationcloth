import Hero from '../components/Hero';
import { Cpu } from 'lucide-react';
import { motion } from 'framer-motion';
import WhyLanbo from '@/components/WhyLanbo';
import Testimonials from '@/components/Testimonials';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <Hero/>

      {/* About Section */}
      <section id="about" className="min-h-screen bg-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            关于我们
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.3,
                  delayChildren: 0.2
                }
              }
            }}
          >
            <motion.h2 
              className="text-3xl font-semibold text-gray-800 mb-6"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
              }}
            >
              蓝博科技
            </motion.h2>
            
            <motion.p 
              className="text-gray-600 mb-4 leading-relaxed text-lg text-left"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
              }}
            >
              杭州蓝博计算机有限公司(下简称蓝博)始建于1999年6月，是一家专门从事计算机应用软件开发与研究的高科技公司。
            </motion.p>
            
            <motion.p 
              className="text-gray-600 mb-4 leading-relaxed text-lg text-left"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
              }}
            >
              浙江省教育厅专门发了《关于在全省中小学推广使用"蓝博"中小学图书馆管理软件的通知》（浙教图(1999)03号）的文件来大力推广"蓝博"图书馆管理系统。
            </motion.p>
            
            <motion.p 
              className="text-gray-600 mb-6 leading-relaxed text-lg text-left"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
              }}
            >
              公司本着"以人为本，创新至上"的管理理念，全面提高浙江省及省外各学校、企事业单位的图书馆管理水平。
            </motion.p>
          </motion.div>
          <motion.div 
            className="h-96 rounded-lg bg-gray-100"
            style={{
              backgroundImage: 'url(/asset/lbpicture.jpeg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
            title="蓝博科技公司形象"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: { opacity: 0, scale: 0.8, x: 50 },
              visible: { 
                opacity: 1, 
                scale: 1, 
                x: 0,
                transition: { 
                  duration: 0.8, 
                  delay: 0.4,
                  ease: "easeOut"
                } 
              }
            }}
          >
            {/* Fallback content if background image doesn't load */}
            <div className="w-full h-full flex items-center justify-center text-gray-500">
              <span>蓝博科技</span>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-600">AI</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">人工智能技术</h3>
            <p className="text-gray-600">
              运用最新的AI算法，实现智能图书推荐、自动分类管理等功能
            </p>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-600">📚</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">智能管理系统</h3>
            <p className="text-gray-600">
              全面的图书馆管理解决方案，提升管理效率和用户体验
            </p>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-600">🔧</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">定制化服务</h3>
            <p className="text-gray-600">
              根据不同图书馆需求，提供个性化的技术解决方案
            </p>
          </div>
        </div>
        </div>
      </section>

      <WhyLanbo /> 

      {/* Products Section */}
      <section id="products" className="min-h-screen bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            产品中心
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "智能借阅系统",
                description: "基于AI技术的智能借阅管理系统，支持人脸识别、自动借还书等功能",
                features: ["人脸识别借书", "自动归还提醒", "智能推荐"],
                icon: <Cpu className="w-5 h-5 md:w-6 md:h-6" />,
                bgColor: "from-blue-100 to-cyan-100",
                image: "/asset/borrowAI.jpeg"
              },
              {
                title: "智能图书管理平台",
                description: "全面的图书馆管理平台，包含图书采购、编目、流通等全流程管理",
                features: ["图书编目", "库存管理", "数据分析"],
                icon: "📚",
                bgColor: "from-green-100 to-emerald-100",
                image: "/asset/library.jpeg"
              },
              {
                title: "智能校园一卡通集成",
                description: "与校园一卡通系统无缝集成，实现统一身份认证和消费管理",
                features: ["身份认证", "消费记录", "权限管理"],
                icon: <Cpu className="w-5 h-5 md:w-6 md:h-6" />,
                bgColor: "from-purple-100 to-violet-100",
                image: "/asset/oneCard.jpeg"
              },
              {
                title: "智能移动端应用",
                description: "支持iOS和Android的移动应用，方便用户随时查询和预约图书",
                features: ["在线预约", "续借服务", "消息推送"],
                icon: "📱",
                bgColor: "from-pink-100 to-rose-100",
                image: "/asset/mobile.jpeg"
              },
              {
                title: "智能数据分析系统",
                description: "强大的数据分析功能，为图书馆决策提供科学依据",
                features: ["借阅统计", "用户画像", "趋势分析"],
                icon: "📊",
                bgColor: "from-indigo-100 to-blue-100",
                image: "/asset/data.jpeg"
              },
              {
                title: "智能云端备份服务",
                description: "安全可靠的云端数据备份服务，确保数据安全和业务连续性",
                features: ["自动备份", "灾难恢复", "数据同步"],
                icon: "☁️",
                bgColor: "from-teal-100 to-cyan-100",
                image: "/asset/cloud.jpeg"
              }
            ].map((product, index) => (
              <div key={index} className="bg-blue-50 rounded-lg shadow-lg overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out transform">
                <div className={`h-48 bg-gradient-to-br ${product.bgColor} flex items-center justify-center transition-all duration-300 relative overflow-hidden`}>
                  {product.image ? (
                    <img 
                      src={product.image} 
                      alt={product.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-white text-6xl transition-transform duration-300 hover:scale-110">{product.icon}</span>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {product.description}
                  </p>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">主要功能：</h4>
                    <ul className="space-y-1">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-center">
                          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />
    </>
  );
};

export default Home;
