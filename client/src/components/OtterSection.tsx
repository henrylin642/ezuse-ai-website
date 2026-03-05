/**
 * Otter Mascot / Brand Element Section
 * Playful Bauhaus: showcase the otter mascot in different roles
 */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ASSETS } from "@/lib/assets";
import { Compass, Headphones, Gamepad2, Sparkles } from "lucide-react";

const roles = [
  {
    icon: Compass,
    title: "場域向導",
    desc: "引導訪客探索 AR 場景，提供即時導覽與互動體驗指引。",
  },
  {
    icon: Headphones,
    title: "AI 客服",
    desc: "24/7 全天候服務，以自然語言回答顧客問題，提升服務品質。",
  },
  {
    icon: Gamepad2,
    title: "遊戲主持",
    desc: "主持 AR 互動遊戲，帶動現場氣氛，讓每次活動都充滿歡樂。",
  },
  {
    icon: Sparkles,
    title: "品牌大使",
    desc: "作為 Ezuse AI 的品牌代言人，傳遞親和力與科技感的品牌形象。",
  },
];

export default function OtterSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="otter" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/5 via-white to-brand-teal/5" />

      {/* Geometric decorations */}
      <div className="absolute top-16 right-[15%] w-20 h-20 border-2 border-brand-orange/8 rounded-full" />
      <div className="absolute bottom-24 left-[10%] w-14 h-14 border-2 border-brand-teal/8 rounded-xl rotate-12" />
      <div className="absolute top-[40%] left-[3%] w-4 h-4 rounded-full bg-brand-orange/10" />

      <div className="container relative z-10" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-orange/10 text-brand-orange text-sm font-medium mb-4">
            品牌夥伴
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark mb-4">
            認識你的專屬<span className="text-brand-orange">海獺夥伴</span>
          </h2>
          <p className="text-brand-dark/50 text-lg max-w-2xl mx-auto">
            穿著橘色制服的海獺，是 Ezuse AI 的服務精神象徵——親切、聰明、永遠在你身邊
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Otter images */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden bg-white shadow-sm border border-brand-orange/5 p-3">
                  <img
                    src={ASSETS.otterMascot}
                    alt="海獺吉祥物 - 主形象"
                    className="w-full h-auto rounded-xl"
                    loading="lazy"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden bg-white shadow-sm border border-brand-teal/5 p-3">
                  <img
                    src={ASSETS.otterService}
                    alt="海獺吉祥物 - AI 客服"
                    className="w-full h-auto rounded-xl"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="pt-8 space-y-4">
                <div className="rounded-2xl overflow-hidden bg-white shadow-sm border border-brand-teal/5 p-3">
                  <img
                    src={ASSETS.otterGameHost}
                    alt="海獺吉祥物 - 遊戲主持"
                    className="w-full h-auto rounded-xl"
                    loading="lazy"
                  />
                </div>
                {/* Fun fact card */}
                <div className="rounded-2xl bg-gradient-to-br from-brand-orange to-brand-orange-dark p-6 text-white">
                  <div className="text-3xl font-extrabold mb-1">🦦</div>
                  <div className="text-sm font-semibold mb-1">你知道嗎？</div>
                  <div className="text-xs text-white/80 leading-relaxed">
                    海獺是少數會使用工具的動物之一，就像 Ezuse AI 幫助店家善用科技工具一樣！
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Roles */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold text-brand-dark mb-2">
              多重角色，一個夥伴
            </h3>
            <p className="text-brand-dark/50 mb-8">
              海獺夥伴在不同場景中扮演不同角色，但始終以最親切的方式為您服務。
            </p>

            <div className="space-y-4">
              {roles.map((role, i) => (
                <motion.div
                  key={role.title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                  className="group flex items-start gap-4 p-5 rounded-xl bg-white border border-brand-dark/5 hover:border-brand-orange/15 hover:shadow-md transition-all"
                >
                  <div className="w-11 h-11 rounded-xl bg-brand-orange/8 flex items-center justify-center shrink-0 group-hover:bg-brand-orange/15 transition-colors">
                    <role.icon size={20} className="text-brand-orange" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-dark mb-1">{role.title}</h4>
                    <p className="text-sm text-brand-dark/50 leading-relaxed">{role.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
