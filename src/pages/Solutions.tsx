const Solutions = () => {
  const solutions = [
    {
      title: "高校图书馆解决方案",
      description: "专为高等院校设计的综合性图书馆管理解决方案，支持多校区、多馆藏的统一管理",
      features: [
        "多校区统一管理",
        "学生身份认证集成",
        "学术资源管理",
        "研究数据分析"
      ],
      image: "🎓"
    },
    {
      title: "公共图书馆解决方案",
      description: "面向公共图书馆的智能化管理系统，提供市民友好的借阅体验和高效的管理工具",
      features: [
        "市民卡集成",
        "多媒体资源管理",
        "活动管理系统",
        "社区服务功能"
      ],
      image: "🏛️"
    },
    {
      title: "企业图书馆解决方案",
      description: "为企业内部图书馆和知识管理中心提供的专业解决方案，助力企业知识管理",
      features: [
        "员工权限管理",
        "内部资料管理",
        "知识库建设",
        "学习追踪系统"
      ],
      image: "🏢"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12">
          蓝博方案
        </h1>
        
        <div className="space-y-12">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className={index % 2 === 0 ? "order-1" : "order-2"}>
                  <div className="text-6xl mb-4">{solution.image}</div>
                  <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                    {solution.title}
                  </h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {solution.description}
                  </p>
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">核心功能：</h3>
                    <ul className="grid grid-cols-2 gap-2">
                      {solution.features.map((feature, idx) => (
                        <li key={idx} className="text-gray-600 flex items-center">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors">
                    了解详情
                  </button>
                </div>
                <div className={index % 2 === 0 ? "order-2" : "order-1"}>
                  <div className="h-64 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center">
                    <span className="text-white text-8xl">{solution.image}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-100 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">定制化服务</h2>
          <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
            我们理解每个图书馆都有其独特的需求和挑战。我们的专业团队将根据您的具体需求，
            定制最适合的技术方案，确保系统完美契合您的业务流程。
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-colors">
            联系我们定制方案
          </button>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
