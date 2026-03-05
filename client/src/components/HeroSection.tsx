/**
 * Hero Section
 * Playful Bauhaus: diagonal cut, geometric dots, warm orange gradient
 * Light background with dark text for readability
 */
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { ASSETS } from "@/lib/assets";

export default function HeroSection() {
  return (
    <section className="relative min-h-[100vh] overflow-hidden bg-gradient-to-br from-brand-cream via-white to-brand-orange-light/20">
      {/* Geometric decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-[10%] w-4 h-4 rounded-full bg-brand-orange/20 animate-pulse" />
        <div className="absolute top-40 right-[15%] w-6 h-6 rounded-full bg-brand-teal/15 animate-pulse delay-300" />
        <div className="absolute bottom-40 left-[20%] w-3 h-3 rounded-full bg-brand-blue/20 animate-pulse delay-700" />
        <div className="absolute top-[30%] left-[5%] w-20 h-20 border-2 border-brand-orange/10 rounded-2xl rotate-12" />
        <div className="absolute bottom-[20%] right-[8%] w-16 h-16 border-2 border-brand-teal/10 rounded-full" />
        <div className="absolute top-[60%] right-[25%] w-8 h-8 bg-brand-orange/5 rounded-lg rotate-45" />
        {/* Large blurred accent circles */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-brand-orange/8 rounded-full blur-3xl" />
        <div className="absolute -bottom-48 -left-48 w-[500px] h-[500px] bg-brand-teal/6 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 pt-28 md:pt-36 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left: Text content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-xl"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-orange/10 text-brand-orange text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
              AI + 遊戲化解決方案
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-brand-dark mb-6">
              讓 AI 與遊戲化
              <br />
              成為店家的
              <span className="relative inline-block">
                <span className="relative z-10 text-brand-orange">超能力</span>
                <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 200 12" fill="none">
                  <path d="M2 8 C50 2, 150 2, 198 8" stroke="#FF8A3D" strokeWidth="3" strokeLinecap="round" opacity="0.4" />
                </svg>
              </span>
            </h1>

            <p className="text-lg text-brand-dark/60 leading-relaxed mb-8 max-w-md">
              用親和力十足的 AR／Agent 工具，幫中小店家把每件事變得簡單又好玩。
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 px-7 py-3.5 bg-brand-orange text-white font-semibold rounded-xl shadow-lg shadow-brand-orange/25 hover:shadow-xl hover:shadow-brand-orange/30 hover:-translate-y-0.5 transition-all"
              >
                立即體驗
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 px-7 py-3.5 bg-white text-brand-dark font-semibold rounded-xl border-2 border-brand-dark/10 hover:border-brand-orange/30 hover:bg-brand-orange/5 transition-all"
              >
                <Play size={16} className="text-brand-orange" />
                取得 Demo
              </a>
            </div>

            {/* Trust badges */}
            <div className="mt-10 flex items-center gap-6 text-sm text-brand-dark/40">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-brand-teal/10 flex items-center justify-center">
                  <span className="text-brand-teal text-xs font-bold">AR</span>
                </div>
                <span>WebAR 技術</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-brand-orange/10 flex items-center justify-center">
                  <span className="text-brand-orange text-xs font-bold">AI</span>
                </div>
                <span>Agent 客製化</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-brand-blue/10 flex items-center justify-center">
                  <span className="text-brand-blue text-xs font-bold">XR</span>
                </div>
                <span>遊戲化體驗</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Background shape */}
              <div className="absolute inset-0 -m-6 bg-gradient-to-br from-brand-orange/10 to-brand-teal/10 rounded-[2rem] rotate-3" />
              <img
                src={ASSETS.otterHero}
                alt="Ezuse AI 海獺吉祥物"
                className="relative z-10 w-full max-w-lg rounded-2xl"
                loading="eager"
              />
              {/* Floating stat card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-3 border border-brand-orange/10"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-brand-teal/10 flex items-center justify-center">
                    <span className="text-brand-teal font-bold text-sm">7K+</span>
                  </div>
                  <div>
                    <div className="text-xs text-brand-dark/50">體驗人次</div>
                    <div className="text-sm font-semibold text-brand-dark">XR 樂園</div>
                  </div>
                </div>
              </motion.div>
              {/* Floating revenue card */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="absolute -top-2 -right-2 bg-white rounded-xl shadow-lg p-3 border border-brand-teal/10"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-brand-orange/10 flex items-center justify-center">
                    <span className="text-brand-orange font-bold text-sm">3.6M</span>
                  </div>
                  <div>
                    <div className="text-xs text-brand-dark/50">營收案例</div>
                    <div className="text-sm font-semibold text-brand-dark">光 XR 樂園</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" className="w-full">
          <path
            d="M0 40 C360 80 720 0 1080 40 C1260 60 1380 50 1440 40 L1440 80 L0 80 Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
