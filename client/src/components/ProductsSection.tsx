/**
 * Products & Services Section
 * Playful Bauhaus: alternating layout, product cards with illustrations
 */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ASSETS } from "@/lib/assets";
import { ArrowUpRight } from "lucide-react";

const products = [
  {
    title: "AR 行銷編輯器",
    subtitle: "拖拉式流程，即時預覽",
    desc: "直覺的拖拉式介面，讓您輕鬆客製 AR 任務與互動流程。無需寫程式，即時預覽效果，從構想到上線一氣呵成。",
    image: ASSETS.iconArEditor,
    tags: ["拖拉式流程", "客製 AR 任務", "即時預覽"],
  },
  {
    title: "信義區燈柱資源",
    subtitle: "實體 + AR 廣告一組到位",
    desc: "結合信義區實體燈柱廣告與 AR 數位內容，打造線上線下整合的廣告體驗。一次投放，雙重曝光。",
    image: ASSETS.iconXinyi,
    tags: ["實體廣告", "AR 數位內容", "O2O 整合"],
  },
  {
    title: "展會 AR 遊戲",
    subtitle: "為展覽／活動設計互動任務",
    desc: "專為展覽與活動設計的雙人或多人 AR 互動任務，提升參展者的參與度與停留時間，讓展會體驗更加難忘。",
    image: ASSETS.iconExhibition,
    tags: ["多人互動", "展覽活動", "任務挑戰"],
  },
  {
    title: "卡路里掃描遊戲",
    subtitle: "拍攝食物 → 計算熱量 → 趣味挑戰",
    desc: "拍攝食物即可計算熱量，搭配蟑螂卡爪挑戰等趣味遊戲機制，用好玩的方式傳遞健康飲食概念。",
    image: ASSETS.iconCalorie,
    tags: ["食物辨識", "熱量計算", "健康遊戲化"],
  },
  {
    title: "AI 客服解決方案",
    subtitle: "WebAR + RAG + STT/TTS",
    desc: "結合 WebAR 介面、RAG 知識檢索與語音互動技術，打造智慧客服系統。已在動物園等場域完成 PoC 驗證。",
    image: ASSETS.iconAiService,
    tags: ["WebAR", "RAG 知識庫", "語音互動"],
  },
];

function ProductCard({ product, index }: { product: typeof products[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.1 }}
      className={`grid md:grid-cols-2 gap-8 lg:gap-12 items-center ${
        !isEven ? "md:[direction:rtl]" : ""
      }`}
    >
      {/* Image */}
      <div className={`${!isEven ? "md:[direction:ltr]" : ""}`}>
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/10 to-brand-teal/10 rounded-2xl rotate-2 group-hover:rotate-3 transition-transform" />
          <div className="relative bg-white rounded-2xl p-6 shadow-sm border border-brand-orange/5 overflow-hidden">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-64 object-contain rounded-xl"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className={`${!isEven ? "md:[direction:ltr]" : ""}`}>
        <span className="inline-block px-3 py-1 rounded-full bg-brand-orange/8 text-brand-orange text-xs font-medium mb-3">
          {product.subtitle}
        </span>
        <h3 className="text-2xl lg:text-3xl font-bold text-brand-dark mb-4">
          {product.title}
        </h3>
        <p className="text-brand-dark/55 leading-relaxed mb-6">
          {product.desc}
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {product.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1.5 bg-brand-cream rounded-lg text-xs font-medium text-brand-dark/60"
            >
              {tag}
            </span>
          ))}
        </div>
        <a
          href="#contact"
          className="inline-flex items-center gap-1.5 text-brand-orange font-semibold text-sm hover:gap-3 transition-all"
        >
          了解更多 <ArrowUpRight size={16} />
        </a>
      </div>
    </motion.div>
  );
}

export default function ProductsSection() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section id="products" className="py-24 md:py-32 bg-brand-cream/50 relative">
      {/* Decorations */}
      <div className="absolute top-20 left-[8%] w-6 h-6 border-2 border-brand-teal/10 rounded-full" />
      <div className="absolute bottom-32 right-[12%] w-10 h-10 border-2 border-brand-orange/8 rounded-lg rotate-45" />

      <div className="container">
        {/* Section header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-teal/10 text-brand-teal text-sm font-medium mb-4">
            產品與服務
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark mb-4">
            全方位的 <span className="text-brand-teal">AR + AI</span> 工具
          </h2>
          <p className="text-brand-dark/50 text-lg max-w-2xl mx-auto">
            從 AR 情境編輯到 AI 客服，我們提供完整的數位轉型解決方案
          </p>
        </motion.div>

        {/* Product cards */}
        <div className="space-y-20 lg:space-y-28">
          {products.map((product, i) => (
            <ProductCard key={product.title} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
