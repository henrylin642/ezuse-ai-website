/**
 * Why Ezuse AI Section - CIS Design System
 * Background: Warm Beige #FFF4E6
 * Cards with orange accent, white bg
 * Decorations: orange gradient bubbles
 */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Bot, Gamepad2, Rocket } from "lucide-react";

const reasons = [
  {
    icon: Bot,
    title: "親和力 AI Agent",
    desc: "客製化、結構化的專屬服務顧問，人人都能擁有自己的 Agent。透過 RAG + STT/TTS 技術，打造最懂您業務的 AI 助手。",
  },
  {
    icon: Gamepad2,
    title: "遊戲化工具箱",
    desc: "將日常任務變成可玩的體驗：AR 小遊戲、任務點數、卡路里遊戲等。讓顧客在互動中完成消費旅程。",
  },
  {
    icon: Rocket,
    title: "快速部署",
    desc: "以 AR 行銷編輯器 + 模組化流程，行銷與活動公司可快速上線。拖拉式操作，無需寫程式即可建立 AR 體驗。",
  },
];

export default function WhySection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="why" className="relative py-24 bg-[#FFF4E6]" ref={ref}>
      {/* Decorative orange bubbles */}
      <div className="absolute top-12 right-12 w-24 h-24 bg-[#FF8A3D]/8 rounded-full blur-xl" />
      <div className="absolute bottom-16 left-8 w-16 h-16 bg-[#FF8A3D]/6 rounded-full blur-lg" />
      <div className="absolute top-1/2 right-[5%] w-3 h-3 bg-[#FF8A3D]/20 rounded-full" />
      <div className="absolute top-[30%] left-[8%] w-2 h-2 bg-[#FF8A3D]/25 rounded-full" />

      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-[#FF8A3D]/10 text-[#FF8A3D] text-sm font-semibold rounded-full mb-4">
            WHY EZUSE AI
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1C1C1C] mb-4">
            為什麼選擇 <span className="text-[#FF8A3D]">Ezuse AI</span>
          </h2>
          <p className="text-[#1C1C1C]/60 max-w-2xl mx-auto text-lg">
            我們結合 AI 智慧與遊戲化設計，為中小店家與行銷公司提供最親和、最有效的數位工具。
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 * i }}
              className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-[#FF8A3D]/5 hover:border-[#FF8A3D]/20"
            >
              <div className="absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-[#FF8A3D] to-[#FF8A3D]/40 rounded-b-full opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-14 h-14 rounded-xl bg-[#FF8A3D]/10 flex items-center justify-center mb-6 group-hover:bg-[#FF8A3D] transition-colors">
                <item.icon className="w-7 h-7 text-[#FF8A3D] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-[#1C1C1C] mb-3">{item.title}</h3>
              <p className="text-[#1C1C1C]/55 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
