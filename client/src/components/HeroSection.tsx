/**
 * Hero Section - CIS Design System
 * Deep blue tech background with luminous waves
 * Low-Poly geometric otter mascot - centered composition
 * White + orange text, centered layout matching CIS reference
 * Colors: #FF8A3D orange, deep blue bg, white text
 */
import { motion } from "framer-motion";
import { ASSETS } from "@/lib/assets";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-[100vh] flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Deep blue background image */}
      <div className="absolute inset-0">
        <img
          src={ASSETS.heroBg}
          alt=""
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628]/30 via-transparent to-[#0a1628]/50" />
      </div>

      {/* Floating particles decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            style={{
              left: `${5 + (i * 4.7) % 90}%`,
              top: `${8 + (i * 7.3) % 80}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 3 + (i % 4),
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      {/* Content - Centered layout matching CIS reference */}
      <div className="container relative z-10 text-center pt-20 pb-8">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8"
        >
          <div className="w-2 h-2 bg-[#FF8A3D] rounded-full animate-pulse" />
          <span className="text-white/80 text-sm font-medium">AI + AR + Gamification</span>
        </motion.div>

        {/* Title - Centered, matching CIS reference exactly */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-6"
        >
          <span className="text-white">Let </span>
          <span className="text-[#FF8A3D]">AI</span>
          <span className="text-white"> &amp; </span>
          <span className="text-[#FF8A3D]">Gamification</span>
          <br />
          <span className="text-white">Be Your </span>
          <span className="text-[#FF8A3D]">Superpower</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-lg sm:text-xl text-white/70 mb-2 max-w-2xl mx-auto"
        >
          讓 AI 與遊戲化成為店家的超能力
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-base text-white/50 mb-8 max-w-xl mx-auto"
        >
          用親和力十足的 AR／Agent 工具，幫中小店家把每件事變得簡單又好玩。
        </motion.p>
      </div>

      {/* Otter - Centered, larger, matching CIS reference */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        className="relative z-10 w-full flex justify-center"
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="relative"
        >
          {/* Glow effect behind otter */}
          <div className="absolute inset-0 bg-[#FF8A3D]/15 blur-3xl rounded-full scale-75" />
          <img
            src={ASSETS.otterHero}
            alt="Ezuse AI 海獺吉祥物"
            className="relative w-64 sm:w-80 md:w-96 lg:w-[28rem] h-auto drop-shadow-2xl"
            loading="eager"
          />

          {/* Floating stat card - left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="absolute bottom-4 -left-8 sm:-left-16 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg p-3"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#FF8A3D]/10 flex items-center justify-center">
                <span className="text-[#FF8A3D] font-bold text-sm">7K+</span>
              </div>
              <div>
                <div className="text-xs text-[#1C1C1C]/50">體驗人次</div>
                <div className="text-sm font-semibold text-[#1C1C1C]">XR 樂園</div>
              </div>
            </div>
          </motion.div>

          {/* Floating stat card - right */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="absolute top-4 -right-8 sm:-right-16 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg p-3"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#FF8A3D]/10 flex items-center justify-center">
                <span className="text-[#FF8A3D] font-bold text-sm">3.6M</span>
              </div>
              <div>
                <div className="text-xs text-[#1C1C1C]/50">營收案例</div>
                <div className="text-sm font-semibold text-[#1C1C1C]">光 XR 樂園</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* CTA Buttons - Centered below otter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="relative z-10 flex flex-col sm:flex-row gap-4 justify-center mt-8 mb-12 px-4"
      >
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white text-[#1C1C1C] font-bold rounded-xl shadow-lg hover:shadow-xl transition-all text-base"
        >
          立即體驗
          <ArrowRight className="w-5 h-5" />
        </motion.a>
        <motion.a
          href="#products"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#FF8A3D] text-white font-bold rounded-xl shadow-lg shadow-[#FF8A3D]/30 hover:bg-[#e67a30] transition-all text-base"
        >
          取得 Demo
        </motion.a>
      </motion.div>

      {/* Trust badges */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="relative z-10 flex items-center gap-6 justify-center mb-8 px-4"
      >
        {[
          { label: "WebAR", tag: "AR" },
          { label: "Agent 客製化", tag: "AI" },
          { label: "遊戲化體驗", tag: "XR" },
        ].map((item) => (
          <div key={item.tag} className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
              <span className="text-[#FF8A3D] text-xs font-bold">{item.tag}</span>
            </div>
            <span className="text-white/50 text-sm">{item.label}</span>
          </div>
        ))}
      </motion.div>

      {/* Bottom wave divider to beige */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" className="w-full">
          <path
            d="M0,80 C360,120 720,40 1080,80 C1260,100 1380,60 1440,80 L1440,120 L0,120 Z"
            fill="#FFF4E6"
          />
        </svg>
      </div>
    </section>
  );
}
