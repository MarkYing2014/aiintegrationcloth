const Products = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12">
          产品中心
        </h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "智能借阅系统",
              description: "基于AI技术的智能借阅管理系统，支持人脸识别、自动借还书等功能",
              features: ["人脸识别借书", "自动归还提醒", "智能推荐"]
            },
            {
              title: "图书管理平台",
              description: "全面的图书馆管理平台，包含图书采购、编目、流通等全流程管理",
              features: ["图书编目", "库存管理", "数据分析"]
            },
            {
              title: "校园一卡通集成",
              description: "与校园一卡通系统无缝集成，实现统一身份认证和消费管理",
              features: ["身份认证", "消费记录", "权限管理"]
            },
            {
              title: "移动端应用",
              description: "支持iOS和Android的移动应用，方便用户随时查询和预约图书",
              features: ["在线预约", "续借服务", "消息推送"]
            },
            {
              title: "数据分析系统",
              description: "强大的数据分析功能，为图书馆决策提供科学依据",
              features: ["借阅统计", "用户画像", "趋势分析"]
            },
            {
              title: "云端备份服务",
              description: "安全可靠的云端数据备份服务，确保数据安全和业务连续性",
              features: ["自动备份", "灾难恢复", "数据同步"]
            }
          ].map((product, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                <span className="text-white text-6xl">📚</span>
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
                <button className="w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition-colors">
                  了解更多
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
