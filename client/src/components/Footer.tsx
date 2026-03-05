/**
 * Footer Component
 * Playful Bauhaus: clean footer with brand identity
 */
import { ASSETS } from "@/lib/assets";

const footerLinks = [
  {
    title: "產品服務",
    links: [
      { label: "AR 行銷編輯器", href: "#products" },
      { label: "信義區燈柱資源", href: "#products" },
      { label: "展會 AR 遊戲", href: "#products" },
      { label: "AI 客服方案", href: "#products" },
    ],
  },
  {
    title: "關於我們",
    links: [
      { label: "為什麼選我們", href: "#why" },
      { label: "成功案例", href: "#cases" },
      { label: "海獺夥伴", href: "#otter" },
      { label: "聯絡我們", href: "#contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-brand-dark border-t border-white/5">
      <div className="container py-16">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-brand-orange to-brand-teal flex items-center justify-center text-white font-bold text-lg font-[Outfit] shadow-md">
                E
              </div>
              <span className="font-[Outfit] font-bold text-xl tracking-tight text-white">
                Ezuse<span className="text-brand-orange"> AI</span>
              </span>
            </div>
            <p className="text-white/35 text-sm leading-relaxed max-w-sm mb-6">
              讓 AI 與遊戲化成為店家的超能力。用親和力十足的 AR／Agent 工具，幫中小店家把每件事變得簡單又好玩。
            </p>
            <div className="flex items-center gap-3">
              <img
                src={ASSETS.logoLightGen}
                alt="光時代股份有限公司"
                className="h-8 opacity-50 hover:opacity-80 transition-opacity"
              />
              <span className="text-white/25 text-xs">光時代股份有限公司</span>
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="text-white/70 font-semibold text-sm mb-4">{group.title}</h4>
              <ul className="space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/35 text-sm hover:text-brand-orange transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-xs">
            &copy; {new Date().getFullYear()} Ezuse AI（易用科技）/ 光時代股份有限公司. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-white/25 text-xs">
            <span>隱私權政策</span>
            <span>服務條款</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
