const News = () => {
  const newsItems = [
    {
      date: "2024-08-08",
      title: "蓝博科技发布新一代智能图书管理系统",
      summary: "集成最新AI技术，实现更智能的图书推荐和管理功能",
      category: "产品发布",
      image: "/asset/Meeting.jpeg",
      bgColor: "from-blue-200 to-purple-200"
    },
    {
      date: "2024-08-05",
      title: "与杭州第一中学达成战略合作",
      summary: "将为杭州第一中学提供全面的智能化升级服务",
      category: "合作新闻",
      image: "/asset/MiddleSchool.jpeg",
      bgColor: "from-green-200 to-blue-200"
    },
    {
      date: "2024-08-01",
      title: "人脸识别借书系统正式上线",
      summary: "革命性的借书体验，无需借书证即可完成借阅",
      category: "技术创新",
      image: "/asset/FaceRec.jpeg",
      bgColor: "from-purple-200 to-pink-200"
    },
    {
      date: "2024-07-28",
      title: "获得国家高新技术企业认证",
      summary: "公司技术实力获得权威认可，将继续加大研发投入",
      category: "公司动态",
      image: "/asset/Medal.jpeg",
      bgColor: "from-yellow-200 to-orange-200"
    },
    {
      date: "2024-07-25",
      title: "智能图书推荐算法优化升级",
      summary: "基于用户行为分析的个性化推荐准确率提升30%",
      category: "技术创新",
      image: "/asset/Algo.jpeg",
      bgColor: "from-indigo-200 to-blue-200"
    },
    {
      date: "2024-07-20",
      title: "参加中国图书馆学会年会",
      summary: "展示最新智能图书馆解决方案，获得业界广泛关注",
      category: "行业活动",
      image: "/asset/Conference.jpeg",
      bgColor: "from-teal-200 to-green-200"
    }
  ];

  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12">
          蓝博资讯
        </h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <article key={index} className="bg-blue-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out transform">
              <div className={`h-48 bg-gradient-to-br ${item.bgColor} flex items-center justify-center transition-all duration-300 relative overflow-hidden`}>
                {item.image.startsWith('/asset/') ? (
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-white text-6xl transition-transform duration-300 hover:scale-110">{item.image}</span>
                )}
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-blue-600 font-medium bg-blue-100 px-2 py-1 rounded">
                    {item.category}
                  </span>
                  <span className="text-sm text-gray-500">{item.date}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {item.summary}
                </p>
                <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                  阅读更多 →
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
