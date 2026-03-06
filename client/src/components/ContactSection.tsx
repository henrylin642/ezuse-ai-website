/**
 * Contact / Demo Request Section - CIS Design System
 * Background: Deep Charcoal #1C1C1C
 * Form with orange accents
 * Colors: #FF8A3D orange, white text
 */
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, CheckCircle, Mail, Building2, User, MessageSquare } from "lucide-react";
import { toast } from "sonner";

const needOptions = [
  "AR 活動策劃",
  "AI Agent 客製",
  "展會 AR 遊戲",
  "卡路里掃描遊戲",
  "AI 客服解決方案",
  "信義區燈柱廣告",
  "其他需求",
];

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    need: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.need) {
      toast.error("請填寫必填欄位");
      return;
    }
    setSubmitted(true);
    toast.success("感謝您的提交！我們將盡快與您聯繫。");
  };

  return (
    <section id="contact" className="py-24 bg-[#1C1C1C] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-[10%] w-32 h-32 border border-white/5 rounded-full" />
        <div className="absolute bottom-20 right-[15%] w-24 h-24 border border-[#FF8A3D]/10 rounded-xl rotate-12" />
        <div className="absolute top-[40%] right-[5%] w-4 h-4 rounded-full bg-[#FF8A3D]/20" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FF8A3D]/30 to-transparent" />
      </div>

      <div className="container relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#FF8A3D]/15 text-[#FF8A3D] text-sm font-semibold mb-4">
              CONTACT US
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              立即預約
              <br />
              <span className="text-[#FF8A3D]">Demo 體驗</span>
            </h2>
            <p className="text-white/50 text-lg leading-relaxed mb-8 max-w-md">
              無論您是行銷公司、中小店家或活動策劃者，我們都能為您量身打造最適合的 AI + AR 解決方案。
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-white/40">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                  <Mail className="w-4 h-4 text-[#FF8A3D]" />
                </div>
                <span>contact@ezuseai.com</span>
              </div>
              <div className="flex items-center gap-3 text-white/40">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                  <Building2 className="w-4 h-4 text-[#FF8A3D]" />
                </div>
                <span>易用科技有限公司 / Ezuse AI</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {submitted ? (
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-10 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <CheckCircle className="w-16 h-16 text-[#FF8A3D] mx-auto mb-4" />
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-2">感謝您的提交！</h3>
                <p className="text-white/50">我們的團隊將在 24 小時內與您聯繫。</p>
                <button
                  onClick={() => { setSubmitted(false); setFormData({ name: "", company: "", email: "", need: "", message: "" }); }}
                  className="mt-6 px-6 py-2.5 bg-[#FF8A3D] text-white rounded-xl text-sm font-medium hover:bg-[#e67a30] transition-colors"
                >
                  再次填寫
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8"
              >
                <div className="space-y-5">
                  <div>
                    <label className="flex items-center gap-2 text-sm font-medium text-white/70 mb-2">
                      <User className="w-3.5 h-3.5" />
                      姓名 <span className="text-[#FF8A3D]">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="請輸入您的姓名"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/25 focus:border-[#FF8A3D]/50 focus:ring-1 focus:ring-[#FF8A3D]/30 outline-none transition-all"
                      required
                    />
                  </div>

                  <div>
                    <label className="flex items-center gap-2 text-sm font-medium text-white/70 mb-2">
                      <Building2 className="w-3.5 h-3.5" />
                      公司名稱
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="請輸入公司名稱"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/25 focus:border-[#FF8A3D]/50 focus:ring-1 focus:ring-[#FF8A3D]/30 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="flex items-center gap-2 text-sm font-medium text-white/70 mb-2">
                      <Mail className="w-3.5 h-3.5" />
                      Email <span className="text-[#FF8A3D]">*</span>
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/25 focus:border-[#FF8A3D]/50 focus:ring-1 focus:ring-[#FF8A3D]/30 outline-none transition-all"
                      required
                    />
                  </div>

                  <div>
                    <label className="flex items-center gap-2 text-sm font-medium text-white/70 mb-2">
                      <MessageSquare className="w-3.5 h-3.5" />
                      需求類型 <span className="text-[#FF8A3D]">*</span>
                    </label>
                    <select
                      value={formData.need}
                      onChange={(e) => setFormData({ ...formData, need: e.target.value })}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:border-[#FF8A3D]/50 focus:ring-1 focus:ring-[#FF8A3D]/30 outline-none transition-all appearance-none"
                      required
                    >
                      <option value="" className="bg-[#1C1C1C] text-white/50">請選擇需求類型</option>
                      {needOptions.map((opt) => (
                        <option key={opt} value={opt} className="bg-[#1C1C1C] text-white">{opt}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="flex items-center gap-2 text-sm font-medium text-white/70 mb-2">
                      補充說明
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="請描述您的需求或問題..."
                      rows={4}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/25 focus:border-[#FF8A3D]/50 focus:ring-1 focus:ring-[#FF8A3D]/30 outline-none transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-[#FF8A3D] text-white font-semibold rounded-xl shadow-lg shadow-[#FF8A3D]/25 hover:bg-[#e67a30] hover:-translate-y-0.5 transition-all"
                  >
                    <Send className="w-4 h-4" />
                    立即預約 Demo
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
