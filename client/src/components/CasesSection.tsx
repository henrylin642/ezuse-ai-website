/**
 * Case Studies / Success Stories Section
 * Playful Bauhaus: stat counters, timeline-style cards
 */
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { MapPin, Users, TrendingUp, Award } from "lucide-react";

const stats = [
  { value: 3.6, suffix: "M", label: "營收案例", prefix: "NT$", icon: TrendingUp, decimals: 1 },
  { value: 7000, suffix: "+", label: "體驗人次", prefix: "", decimals: 0, icon: Users },
  { value: 15, suffix: "+", label: "合作夥伴", prefix: "", decimals: 0, icon: Award },
  { value: 50, suffix: "+", label: "AR 場景", prefix: "", decimals: 0, icon: MapPin },
];

const cases = [
  {
    title: "信義區 AR 活動 / 廣告樞紐",
    desc: "結合信義區燈柱實體廣告與 AR 數位互動，打造全台首個 O2O 廣告樞紐。消費者掃描燈柱即可開啟 AR 體驗，有效提升品牌互動率。",
    tags: ["信義區", "O2O 廣告", "AR 互動"],
    barClass: "bg-brand-orange",
  },
  {
    title: "竹北文化祭互動任務",
    desc: "與光時代合作，為竹北文化祭設計 AR 互動任務路線。參與者透過手機探索在地文化景點，完成任務即可獲得獎勵，成功吸引大量年輕族群參與。",
    tags: ["竹北", "文化祭", "光時代合作"],
    barClass: "bg-brand-teal",
  },
  {
    title: "光 XR 實境樂園",
    desc: "打造沉浸式 XR 實境樂園體驗，累計超過 7,000+ 體驗分數，創造 3.6M 營收佳績。結合 AR、VR 與遊戲化機制，成為業界標竿案例。",
    tags: ["XR 樂園", "7000+ 體驗", "3.6M 營收"],
    barClass: "bg-brand-blue",
  },
  {
    title: "中小零售店 AI 客服導入",
    desc: "為中小零售店家導入 AI 客服解決方案，結合 RAG 知識檢索與語音互動，大幅降低人力成本，同時提升顧客滿意度與回購率。",
    tags: ["AI 客服", "中小零售", "成本優化"],
    barClass: "bg-brand-orange",
  },
];

function AnimatedCounter({ value, suffix, prefix, decimals }: { value: number; suffix: string; prefix: string; decimals: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
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
  }, [isInView, value]);

  const displayValue = decimals > 0 ? count.toFixed(decimals) : Math.round(count).toLocaleString();

  return (
    <span ref={ref}>
      {prefix}{displayValue}{suffix}
    </span>
  );
}

function CaseCard({ caseItem, index }: { caseItem: typeof cases[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group p-8 rounded-2xl bg-white border border-brand-dark/5 hover:shadow-xl hover:border-brand-orange/15 transition-all duration-300"
    >
      {/* Color accent bar */}
      <div className={`w-12 h-1.5 rounded-full ${caseItem.barClass} mb-6`} />
      <h3 className="text-xl font-bold text-brand-dark mb-3 group-hover:text-brand-orange transition-colors">
        {caseItem.title}
      </h3>
      <p className="text-brand-dark/50 leading-relaxed mb-5 text-sm">
        {caseItem.desc}
      </p>
      <div className="flex flex-wrap gap-2">
        {caseItem.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 rounded-full bg-brand-cream text-xs font-medium text-brand-dark/50"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function CasesSection() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section id="cases" className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-orange via-brand-teal to-brand-blue opacity-20" />

      <div className="container">
        {/* Section header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-blue/10 text-brand-blue text-sm font-medium mb-4">
            成功案例
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark mb-4">
            用數字說話的<span className="text-brand-blue">實績</span>
          </h2>
          <p className="text-brand-dark/50 text-lg max-w-2xl mx-auto">
            從信義區到竹北，從展會到零售，我們的解決方案持續創造價值
          </p>
        </motion.div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="text-center p-6 rounded-2xl bg-gradient-to-br from-brand-cream to-white border border-brand-orange/5"
            >
              <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-brand-orange/8 flex items-center justify-center">
                <stat.icon size={22} className="text-brand-orange" />
              </div>
              <div className="text-2xl md:text-3xl font-extrabold text-brand-dark mb-1">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} prefix={stat.prefix} decimals={stat.decimals} />
              </div>
              <div className="text-sm text-brand-dark/45">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Case cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {cases.map((caseItem, i) => (
            <CaseCard key={caseItem.title} caseItem={caseItem} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
