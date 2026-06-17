import { Phone, MapPin, Home } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t-4 border-[#e63c2f] bg-[#0a1628] text-white/70">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <div>
            <Link
              to="/"
              onClick={() => {
                if (window.location.pathname === "/") {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
              className="flex items-center gap-3 mb-4 cursor-pointer hover:opacity-90 transition-opacity"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#e63c2f] text-white">
                <Home className="h-6 w-6" />
              </div>
              <div>
                <span className="block text-sm font-black text-white uppercase tracking-wide leading-tight">
                  Дом Строй
                </span>
                <span className="block text-[10px] font-bold text-white/50 uppercase tracking-wider">
                  ЕООД
                </span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed max-w-xs">
              Ремонт на покриви в цялата страна — пренареждане на керемиди,
              хидроизолация, нови покриви, улуци и обшивки. Качествени
              ремонти с гаранция!
            </p>
            <p className="mt-3 text-xs font-bold text-[#f5a623]">
              Ние пазим дома ви отгоре!
            </p>
          </div>

          <div>
            <h4 className="text-sm font-black text-white uppercase tracking-wider mb-4 border-l-4 border-[#f5a623] pl-3">
              Бързи връзки
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "Начало", href: "#начало" },
                { label: "Услуги", href: "#услуги" },
                { label: "Цени", href: "#цени" },
                { label: "Процес", href: "#процес" },
                { label: "Галерия", href: "#галерия" },
                { label: "Въпроси", href: "#въпроси" },
                { label: "Контакти", href: "#контакти" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm font-medium hover:text-[#f5a623] transition-colors cursor-pointer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-black text-white uppercase tracking-wider mb-4 border-l-4 border-[#e63c2f] pl-3">
              Контакти
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:0876414066"
                  className="flex items-center gap-2.5 text-sm font-medium hover:text-[#f5a623] transition-colors cursor-pointer"
                >
                  <Phone className="h-4 w-4 text-[#2ecc40] shrink-0" />
                  0876 414 066
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-sm">
                <MapPin className="h-4 w-4 text-[#e63c2f] shrink-0 mt-0.5" />
                <span>Работим в цялата страна</span>
              </li>
            </ul>

            <div className="mt-6 space-y-2">
              <p className="text-xs font-bold text-white/50 flex items-center gap-2">
                <span className="h-1.5 w-1.5 bg-[#2ecc40] rounded-full" />
                Безплатен оглед
              </p>
              <p className="text-xs font-bold text-white/50 flex items-center gap-2">
                <span className="h-1.5 w-1.5 bg-[#f5a623] rounded-full" />
                Договор и гаранция
              </p>
              <p className="text-xs font-bold text-white/50 flex items-center gap-2">
                <span className="h-1.5 w-1.5 bg-[#e63c2f] rounded-full" />
                Качествени материали
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t-2 border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            &copy; {year} Дом Строй ЕООД. Всички права запазени.
          </p>
          <p className="text-xs text-white/30">
            Ремонт на покриви в цялата страна
          </p>
        </div>
      </div>
    </footer>
  );
}
