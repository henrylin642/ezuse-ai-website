/**
 * Why Ezuse AI Section
 * Playful Bauhaus: three geometric cards, stagger animation, warm palette
 */
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Bot, Gamepad2, Rocket } from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "親和力 AI Agent",
    desc: "客製化、結構化的專屬服務顧問，人人都能擁有自己的 Agent。不需要技術背景，輕鬆打造專屬的 AI 助手。",
    bgColor: "bg-brand-orange/8",
    iconBg: "bg-brand-orange/15",
    borderColor: "border-brand-orange/15",
    iconColor: "text-brand-orange",
  },
  {
    icon: Gamepad2,
    title: "遊戲化工具箱",
    desc: "將日常任務變成可玩的體驗：AR 小遊戲、任務點數、卡路里遊戲等。讓顧客互動不再枯燥，轉化率自然提升。",
    bgColor: "bg-brand-teal/8",
    iconBg: "bg-brand-teal/15",
    borderColor: "border-brand-teal/15",
    iconColor: "text-brand-teal",
  },
  {
    icon: Rocket,
    title: "快速部署",
    desc: "以 AR 行銷編輯器 + 模組化流程，行銷與活動公司可快速上線。從構想到執行，最快一週內完成部署。",
    bgColor: "bg-brand-blue/8",
    iconBg: "bg-brand-blue/15",
    borderColor: "border-brand-blue/15",
    iconColor: "text-brand-blue",
  },
];

export default function WhySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="why" className="py-24 md:py-32 bg-white relative">
      {/* Geometric decorations */}
      <div className="absolute top-12 right-[10%] w-12 h-12 border-2 border-brand-orange/8 rounded-xl rotate-12" />
      <div className="absolute bottom-20 left-[5%] w-8 h-8 bg-brand-teal/5 rounded-full" />

      <div className="container" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-orange/8 text-brand-orange text-sm font-medium mb-4">
            核心優勢
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark mb-4">
            為什麼選擇 <span className="text-brand-orange">Ezuse AI</span>
          </h2>
          <p className="text-brand-dark/50 text-lg max-w-2xl mx-auto">
            我們將 AI 技術與遊戲化體驗完美結合，為中小店家打造最親和的數位轉型工具
          </p>
        </motion.div>

        {/* Feature cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
              className={`group relative p-8 ${feature.bgColor} rounded-2xl border ${feature.borderColor} hover:shadow-xl hover:-translate-y-2 transition-all duration-300`}
            >
              {/* Icon */}
              <div className={`w-14 h-14 ${feature.iconBg} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <feature.icon size={28} className={feature.iconColor} />
              </div>

              <h3 className="text-xl font-bold text-brand-dark mb-3">
                {feature.title}
              </h3>
              <p className="text-brand-dark/55 leading-relaxed">
                {feature.desc}
              </p>

              {/* Corner decoration */}
              <div className={`absolute top-4 right-4 w-3 h-3 rounded-full ${feature.iconBg} opacity-60`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
