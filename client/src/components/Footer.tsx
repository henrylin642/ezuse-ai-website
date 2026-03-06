/**
 * Footer - CIS Design System
 * Background: Deep Charcoal #1C1C1C (darker shade)
 * Logo: ez(orange) use(white) ai(orange)
 * Colors: #FF8A3D orange, white text
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
    <footer className="bg-[#151515] border-t border-white/5">
      <div className="container py-16">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-1.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[#FF8A3D] flex items-center justify-center shadow-md">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M12 4C8.5 4 5.5 6.2 4.5 9.3c1.2-.5 2.5-.8 3.8-.8 4.7 0 8.5 3.4 8.5 7.5 0 .5-.1 1-.2 1.5C19.2 16.2 21 13.3 21 10c0-3.3-4-6-9-6z" fill="white" opacity="0.9"/>
                  <path d="M8.3 10.5c-3.2 0-5.8 2.1-5.8 4.8s2.6 4.8 5.8 4.8c2.5 0 4.6-1.2 5.4-3-.5.1-1 .2-1.5.2-3.2 0-5.8-2.1-5.8-4.8 0-.7.2-1.4.5-2h1.4z" fill="white" opacity="0.7"/>
                </svg>
              </div>
              <span className="text-xl font-bold tracking-tight">
                <span className="text-[#FF8A3D]">ez</span>
                <span className="text-white">use</span>
                <span className="text-[#FF8A3D] ml-0.5">ai</span>
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
                      className="text-white/35 text-sm hover:text-[#FF8A3D] transition-colors"
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
            &copy; {new Date().getFullYear()} Ezuse AI（易用科技有限公司）. All rights reserved.
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
