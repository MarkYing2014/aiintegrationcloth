import Hero from '../components/Hero';

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
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">创新技术</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                我们致力于将人工智能技术与传统图书馆管理相结合，创造出革命性的智能图书馆解决方案。
                通过先进的AI算法和机器学习技术，我们为客户提供个性化、高效的图书馆管理服务。
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  智能图书管理
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  AI驱动的借阅优化
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  个性化推荐服务
                </li>
              </ul>
            </div>
            <div className="bg-gray-100 h-96 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">图片占位符</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="min-h-screen bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            产品中心
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    产品 {item}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    这是产品 {item} 的详细描述，展示了我们在AI集成图书馆领域的创新成果。
                  </p>
                  <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition-colors">
                    了解更多
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
