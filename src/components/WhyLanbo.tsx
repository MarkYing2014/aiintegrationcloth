
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const AnimationCounter = ({
    
    end,
    duration = 2000,
    delay = 0,
    children,
}: {
    end: number;
    duration?: number;
    delay?: number;
    children: (value: number) => React.ReactNode;
}) => {
    const [count, setCount] = useState(0);
    const countRef = useRef<HTMLDivElement>(null);
    const inView = useInView(countRef, {
        once: true,
        margin: "-100px",
    });
    
    useEffect(() => {
        if (!inView) return;
        
        let startTime: number;
        let animationFrame: number;
        
        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp + delay;
            
            const elapsed = timestamp - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            if (progress >= 0) {
                const easeInOutQuad = (t: number) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
                const currentCount = Math.floor(easeInOutQuad(progress) * end);
                setCount(currentCount);
            }
            
            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate);
            } else {
                setCount(end);
            }
        };
        
        animationFrame = requestAnimationFrame(animate);
        
        return () => {
            if (animationFrame) {
                cancelAnimationFrame(animationFrame);
            }
        };
    }, [inView, end, duration, delay]);
    
    return (
        <div ref={countRef}>
            {children(count)}
        </div>
    );
};



const WhyLanbo = () => {
    return (
        <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
            <div className="max-w-6xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                        为什么选择蓝博？
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        25年专业经验，服务全国千余所院校，浙江省中小学图书馆管理系统领导品牌
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* 浙江省市场占有率 */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                        <div className="mb-6">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">🏆</span>
                            </div>
                            <AnimationCounter
                                end={60}
                                duration={2000}
                                delay={500}
                            >
                                {(value) => (
                                    <div className="text-5xl font-bold text-blue-600 mb-2">
                                        {value}%
                                    </div>
                                )}
                            </AnimationCounter>
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">
                                浙江省市场占有率
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                浙江省60%的中小学选择蓝博图书馆管理系统，获得教育厅官方推广认可
                            </p>
                        </div>
                    </motion.div>

                    {/* 专业服务年限 */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                        <div className="mb-6">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">⭐</span>
                            </div>
                            <AnimationCounter
                                end={25}
                                duration={2000}
                                delay={700}
                            >
                                {(value) => (
                                    <div className="text-5xl font-bold text-green-600 mb-2">
                                        {value}+
                                    </div>
                                )}
                            </AnimationCounter>
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">
                                专业服务年限
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                自1999年成立以来，25年专注图书馆管理系统研发与服务
                            </p>
                        </div>
                    </motion.div>

                    {/* 服务机构数量 */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                        <div className="mb-6">
                            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">🎯</span>
                            </div>
                            <AnimationCounter
                                end={1000}
                                duration={2500}
                                delay={900}
                            >
                                {(value) => (
                                    <div className="text-5xl font-bold text-purple-600 mb-2">
                                        {value}+
                                    </div>
                                )}
                            </AnimationCounter>
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">
                                服务机构数量
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                服务全国1000+所学校和企事业单位，覆盖20+个省份
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* 底部说明 */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    className="text-center mt-16"
                >
                    <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
                        蓝博科技始终坚持"以人为本，创新至上"的理念，为图书馆提供智能化、人性化的管理解决方案，
                        助力教育信息化发展，提升图书馆管理效率和服务质量。
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default WhyLanbo;
