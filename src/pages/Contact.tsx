import ContactInfo from '../components/ContactInfo';

const Contact = () => {
  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12">
          联系我们
        </h1>
        
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">联系方式</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                  <span className="text-blue-600 text-sm">📍</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">公司地址</h3>
                  <p className="text-gray-600">浙江省杭州市西湖区文三路</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                  <span className="text-blue-600 text-sm">📞</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">联系电话</h3>
                  <p className="text-gray-600">0571-81956312</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                  <span className="text-blue-600 text-sm">✉️</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">邮箱地址</h3>
                  <p className="text-gray-600">info@bluebird.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                  <span className="text-blue-600 text-sm">🕒</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">工作时间</h3>
                  <p className="text-gray-600">周一至周五 9:00-18:00</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">服务支持</h2>
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">技术支持</h3>
                <p className="text-gray-600 text-sm">
                  7×24小时技术支持服务，确保系统稳定运行
                </p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">培训服务</h3>
                <p className="text-gray-600 text-sm">
                  提供专业的系统操作培训和管理培训
                </p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">定制开发</h3>
                <p className="text-gray-600 text-sm">
                  根据客户需求提供个性化定制开发服务
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Contact Info Component */}
        <ContactInfo />
      </div>
    </div>
  );
};

export default Contact;
