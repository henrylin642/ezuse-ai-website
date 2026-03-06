/**
 * Case Studies / Success Stories - CIS Design System
 * Background: Warm Beige #FFF4E6
 * Stats with orange accents, case cards with orange bar
 * Colors: #FF8A3D orange, #1C1C1C charcoal
 */
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { TrendingUp, Users, Award, MapPin } from "lucide-react";

const stats = [
  { value: 7.0, suffix: "M+", label: "營收案例", prefix: "NT$", decimals: 1, icon: TrendingUp },
  { value: 7000, suffix: "+", label: "體驗人次", prefix: "", decimals: 0, icon: Users },
  { value: 15, suffix: "+", label: "合作夥伴", prefix: "", decimals: 0, icon: Award },
  { value: 50, suffix: "+", label: "AR 場景", prefix: "", decimals: 0, icon: MapPin },
];

const cases = [
  {
    title: "信義區 AR 活動 / 廣告樞紐",
    desc: "結合信義區燈柱實體廣告與 AR 數位互動，打造全台首個 O2O 廣告樞紐。消費者掃描燈柱即可開啟 AR 體驗，有效提升品牌互動率。",
    tags: ["信義區", "O2O 廣告", "AR 互動"],
  },
  {
    title: "竹北文化祭互動任務",
    desc: "與光時代合作，為竹北文化祭設計 AR 互動任務路線。參與者透過手機探索在地文化景點，完成任務即可獲得獎勵，成功吸引大量年輕族群參與。",
    tags: ["竹北", "文化祭", "光時代合作"],
  },
  {
    title: "光 XR 實境樂園",
    desc: "打造沉浸式 XR 實境樂園體驗，累計超過 7,000+ 體驗分數，創造超過 7.0M 營收佳績。結合 AR、VR 與遊戲化機制，成為業界標竿案例。",
    tags: ["XR 樂園", "7000+ 體驗", ">7.0M 營收"],
  },
  {
    title: "中小零售店 AI 客服導入",
    desc: "為中小零售店家導入 AI 客服解決方案，結合 RAG 知識檢索與語音互動，大幅降低人力成本，同時提升顧客滿意度與回購率。",
    tags: ["AI 客服", "中小零售", "成本優化"],
  },
];

function AnimatedCounter({ value, suffix, prefix, decimals }: { value: number; suffix: string; prefix: string; decimals: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      current += increment;
      if (step >= steps) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, value]);

  const displayValue = decimals > 0 ? count.toFixed(decimals) : Math.round(count).toLocaleString();

  return (
    <span ref={ref}>
      {prefix}{displayValue}{suffix}
    </span>
  );
}

export default function CasesSection() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section id="cases" className="py-24 bg-[#FFF4E6] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF8A3D]/30 via-[#FF8A3D]/10 to-[#FF8A3D]/30" />

      <div className="container">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-[#FF8A3D]/10 text-[#FF8A3D] text-sm font-semibold rounded-full mb-4">
            SUCCESS STORIES
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1C1C1C] mb-4">
            用數字說話的<span className="text-[#FF8A3D]">實績</span>
          </h2>
          <p className="text-[#1C1C1C]/60 max-w-2xl mx-auto text-lg">
            從信義區到竹北，從展會到零售，我們的解決方案持續創造價值
          </p>
        </motion.div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="text-center p-6 rounded-2xl bg-white border border-[#FF8A3D]/8 shadow-sm"
            >
              <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-[#FF8A3D]/10 flex items-center justify-center">
                <stat.icon className="w-5 h-5 text-[#FF8A3D]" />
              </div>
              <div className="text-2xl md:text-3xl font-extrabold text-[#1C1C1C] mb-1">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} prefix={stat.prefix} decimals={stat.decimals} />
              </div>
              <div className="text-sm text-[#1C1C1C]/45">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Case cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {cases.map((caseItem, i) => (
            <motion.div
              key={caseItem.title}
              initial={{ opacity: 0, y: 40 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              className="group p-8 rounded-2xl bg-white border border-[#1C1C1C]/5 hover:shadow-xl hover:border-[#FF8A3D]/15 transition-all duration-300"
            >
              <div className="w-12 h-1.5 rounded-full bg-[#FF8A3D] mb-6" />
              <h3 className="text-xl font-bold text-[#1C1C1C] mb-3 group-hover:text-[#FF8A3D] transition-colors">
                {caseItem.title}
              </h3>
              <p className="text-[#1C1C1C]/50 leading-relaxed mb-5 text-sm">
                {caseItem.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {caseItem.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-[#FFF4E6] text-xs font-medium text-[#1C1C1C]/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
