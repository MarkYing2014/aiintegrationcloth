import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12">
          关于我们
        </h1>
        
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
          <div 
            className="h-96 rounded-lg bg-gray-100"
            style={{
              backgroundImage: 'url(/asset/lbpicture.jpeg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
            title="蓝博科技公司形象"
          >
            {/* Fallback content if background image doesn't load */}
            <div className="w-full h-full flex items-center justify-center text-gray-500">
              <span>蓝博科技</span>
            </div>
          </div>
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
            <h3 className="text-xl font-semibold text-gray-800 mb-3">专业服务</h3>
            <p className="text-gray-600">
              专业的技术团队提供7×24小时技术支持和维护服务
            </p>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-600">🚀</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">持续创新</h3>
            <p className="text-gray-600">
              不断研发新功能，保持产品的技术领先性和竞争优势
            </p>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">我们的使命</h2>
          <p className="text-gray-600 text-center text-lg leading-relaxed max-w-4xl mx-auto">
            通过智能化技术改变传统图书馆管理模式，让知识更好地服务于社会，
            为构建学习型社会贡献我们的力量。
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
