const Team = () => {
  const teamMembers = [
    {
      name: "李以镭",
      position: "总经理",
      image: "/asset/liyilei.jpeg",
      email: "liyilei@bluebird.com",
      phone: "18667601495",
      description: "拥有15年图书馆管理系统开发经验，致力于推动图书馆智能化发展"
    },
    {
      name: "王荣林",
      position: "技术总监",
      image: "/asset/wangronglin.jpeg",
      email: "wangronglin@bluebird.com",
      phone: "13588888888",
      description: "AI技术专家，负责公司核心技术研发和产品架构设计"
    }
  ];

  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12">
          我们的团队
        </h1>
        
        <div className="text-center mb-16">
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            蓝博科技拥有一支专业的技术团队，我们的成员来自知名高校和科技企业，
            在图书馆管理系统、人工智能、软件开发等领域具有丰富的经验。
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-8 text-center">
              <img 
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
              />
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">{member.name}</h3>
              <p className="text-blue-600 font-medium mb-4">{member.position}</p>
              <p className="text-gray-600 mb-6 leading-relaxed">{member.description}</p>
              <div className="space-y-2">
                <p className="text-sm text-gray-500">
                  📧 {member.email}
                </p>
                <p className="text-sm text-gray-500">
                  📱 {member.phone}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">👥</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">专业团队</h3>
            <p className="text-gray-600">
              拥有多年行业经验的专业技术团队
            </p>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">专注创新</h3>
            <p className="text-gray-600">
              持续关注行业前沿技术，不断创新产品
            </p>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🤝</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">客户至上</h3>
            <p className="text-gray-600">
              以客户需求为导向，提供优质服务
            </p>
          </div>
        </div>

        <div className="bg-blue-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">加入我们</h2>
          <p className="text-gray-600 mb-6">
            我们正在寻找有才华的人才加入我们的团队，一起推动图书馆智能化的发展。
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors">
            查看职位
          </button>
        </div>
      </div>
    </div>
  );
};

export default Team;
