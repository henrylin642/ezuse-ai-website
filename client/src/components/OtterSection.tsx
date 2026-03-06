/**
 * Otter Guide Section - CIS Design System
 * Introduce the otter mascot as brand ambassador
 * Background: White with orange accent decorations
 * Colors: #FF8A3D orange, #1C1C1C charcoal, #FFF4E6 beige
 */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ASSETS } from "@/lib/assets";
import { Compass, Headphones, Gamepad2, Sparkles } from "lucide-react";

const otterRoles = [
  {
    image: ASSETS.otterGuide,
    name: "導覽小獺",
    role: "向導",
    desc: "帶領顧客探索 AR 世界，引導完成互動任務，讓每次體驗都充滿驚喜。",
    icon: Compass,
  },
  {
    image: ASSETS.otterService,
    name: "客服小獺",
    role: "客服",
    desc: "24 小時在線的 AI 客服夥伴，用親切的語氣解答疑問，提供即時協助。",
    icon: Headphones,
  },
  {
    image: ASSETS.otterGame,
    name: "遊戲小獺",
    role: "遊戲主持",
    desc: "主持各種 AR 遊戲與挑戰，帶動現場氣氛，讓每次活動都充滿歡樂。",
    icon: Gamepad2,
  },
];

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
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="otter" className="py-24 bg-white relative" ref={ref}>
      {/* Decorative elements */}
      <div className="absolute top-8 right-[10%] w-20 h-20 bg-[#FF8A3D]/5 rounded-full blur-xl" />
      <div className="absolute bottom-12 left-[5%] w-16 h-16 bg-[#FF8A3D]/5 rounded-full blur-lg" />

      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-[#FF8A3D]/10 text-[#FF8A3D] text-sm font-semibold rounded-full mb-4">
            BRAND MASCOT
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1C1C1C] mb-4">
            認識你的<span className="text-[#FF8A3D]">海獺夥伴</span>
          </h2>
          <p className="text-[#1C1C1C]/60 max-w-2xl mx-auto text-lg">
            穿著橘色制服的海獺是 Ezuse AI 的品牌大使，在不同場景中化身為您最得力的助手。
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Otter images */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="grid grid-cols-3 gap-4">
              {otterRoles.map((otter, i) => (
                <motion.div
                  key={otter.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
                  className="group text-center"
                >
                  <div className="relative w-full aspect-square mb-3">
                    <div className="absolute inset-0 bg-[#FF8A3D]/10 rounded-2xl scale-105 group-hover:scale-110 transition-transform duration-500" />
                    <img
                      src={otter.image}
                      alt={otter.name}
                      className="relative w-full h-full object-contain rounded-2xl"
                      loading="lazy"
                    />
                  </div>
                  <div className="inline-flex items-center gap-1 px-2 py-0.5 bg-[#FF8A3D]/10 rounded-full mb-1">
                    <otter.icon className="w-3 h-3 text-[#FF8A3D]" />
                    <span className="text-[10px] font-semibold text-[#FF8A3D]">{otter.role}</span>
                  </div>
                  <h4 className="text-sm font-bold text-[#1C1C1C]">{otter.name}</h4>
                </motion.div>
              ))}
            </div>
            {/* Fun fact card */}
            <div className="mt-6 rounded-2xl bg-gradient-to-r from-[#FF8A3D] to-[#e67a30] p-5 text-white">
              <div className="text-sm font-semibold mb-1">你知道嗎？</div>
              <div className="text-sm text-white/85 leading-relaxed">
                海獺是少數會使用工具的動物之一，就像 Ezuse AI 幫助店家善用科技工具一樣！
              </div>
            </div>
          </motion.div>

          {/* Right: Roles list */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold text-[#1C1C1C] mb-2">
              多重角色，一個夥伴
            </h3>
            <p className="text-[#1C1C1C]/50 mb-8">
              海獺夥伴在不同場景中扮演不同角色，但始終以最親切的方式為您服務。
            </p>

            <div className="space-y-4">
              {roles.map((role, i) => (
                <motion.div
                  key={role.title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                  className="group flex items-start gap-4 p-5 rounded-xl bg-[#FFF4E6]/50 border border-[#1C1C1C]/5 hover:border-[#FF8A3D]/15 hover:shadow-md transition-all"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#FF8A3D]/10 flex items-center justify-center shrink-0 group-hover:bg-[#FF8A3D] transition-colors">
                    <role.icon className="w-5 h-5 text-[#FF8A3D] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1C1C1C] mb-1">{role.title}</h4>
                    <p className="text-sm text-[#1C1C1C]/50 leading-relaxed">{role.desc}</p>
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
