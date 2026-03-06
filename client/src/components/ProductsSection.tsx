/**
 * Products & Services Section - CIS Design System
 * Background: White
 * Alternating left-right layout with orange icon squares
 * Colors: #FF8A3D orange, #1C1C1C charcoal, #FFF4E6 beige
 */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ASSETS } from "@/lib/assets";
import { Layers, MapPin, Users, Camera, Headphones, ArrowUpRight } from "lucide-react";

const products = [
  {
    icon: Layers,
    title: "AR 行銷編輯器",
    subtitle: "拖拉式流程，快速上線",
    desc: "拖拉式流程、客製 AR 任務、即時預覽。無需程式背景，行銷人員也能輕鬆建立 AR 互動體驗，從構想到上線最快一週完成。",
    image: ASSETS.iconArEditor,
    tags: ["拖拉式流程", "客製 AR 任務", "即時預覽"],
  },
  {
    icon: MapPin,
    title: "信義區燈柱資源",
    subtitle: "實體 + AR 廣告一組到位",
    desc: "結合實體燈柱廣告與 AR 數位內容，打造信義區獨家的 O2O 廣告樞紐。路過的消費者掃描即可進入 AR 互動世界。",
    image: ASSETS.iconXinyi,
    tags: ["實體廣告", "AR 數位內容", "O2O 整合"],
  },
  {
    icon: Users,
    title: "展會 AR 遊戲",
    subtitle: "雙人或多人互動任務",
    desc: "為展覽、活動設計雙人或多人 AR 任務遊戲。提升展場互動率與停留時間，讓參觀者成為品牌的主動傳播者。",
    image: ASSETS.iconExhibition,
    tags: ["多人互動", "展覽活動", "任務挑戰"],
  },
  {
    icon: Camera,
    title: "卡路里掃描遊戲",
    subtitle: "拍攝食物，健康互動",
    desc: "拍攝食物即時計算熱量，搭配蟑螂卡爪挑戰等趣味關卡，在遊戲中傳遞健康飲食概念。適合餐飲業與健康品牌。",
    image: ASSETS.iconCalorie,
    tags: ["食物辨識", "熱量計算", "健康遊戲化"],
  },
  {
    icon: Headphones,
    title: "AI 客服解決方案",
    subtitle: "WebAR + RAG + STT/TTS",
    desc: "整合 WebAR 介面與 RAG 知識庫、語音辨識與合成技術，打造 24 小時不間斷的智慧客服。已在動物園等案場完成 PoC 驗證。",
    image: ASSETS.iconAiService,
    tags: ["WebAR", "RAG 知識庫", "語音互動"],
  },
];

function ProductCard({ product, index }: { product: typeof products[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.1 }}
      className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-8 p-6 md:p-8 rounded-2xl bg-[#FFF4E6]/50 border border-[#FF8A3D]/5 hover:border-[#FF8A3D]/15 hover:shadow-lg transition-all group`}
    >
      {/* Image */}
      <div className="w-full md:w-2/5 flex justify-center">
        <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden bg-white shadow-sm group-hover:shadow-md transition-shadow">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>

      {/* Content */}
      <div className="w-full md:w-3/5">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-lg bg-[#FF8A3D] flex items-center justify-center shadow-sm">
            <product.icon className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-[#1C1C1C]">{product.title}</h3>
            <p className="text-sm text-[#FF8A3D] font-medium">{product.subtitle}</p>
          </div>
        </div>
        <p className="text-[#1C1C1C]/60 leading-relaxed mb-4">{product.desc}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {product.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-[#FFF4E6] rounded-lg text-xs font-medium text-[#1C1C1C]/60"
            >
              {tag}
            </span>
          ))}
        </div>
        <a
          href="#contact"
          className="inline-flex items-center gap-1.5 text-[#FF8A3D] font-semibold text-sm hover:gap-3 transition-all"
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
    <section id="products" className="py-24 bg-white relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FF8A3D]/20 to-transparent" />

      <div className="container">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-[#FF8A3D]/10 text-[#FF8A3D] text-sm font-semibold rounded-full mb-4">
            PRODUCTS & SERVICES
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1C1C1C] mb-4">
            產品<span className="text-[#FF8A3D]">＆</span>服務
          </h2>
          <p className="text-[#1C1C1C]/60 max-w-2xl mx-auto text-lg">
            從 AR 編輯器到 AI 客服，一站式滿足行銷與活動的所有需求
          </p>
        </motion.div>

        <div className="space-y-8">
          {products.map((product, i) => (
            <ProductCard key={product.title} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
