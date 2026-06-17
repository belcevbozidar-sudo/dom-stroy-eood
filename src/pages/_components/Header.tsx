import { useState } from "react";
import { Phone, Menu, X, Home, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button.tsx";
import { AnimatePresence, motion } from "motion/react";

const NAV_LINKS = [
  { label: "Начало", href: "#начало" },
  { label: "Услуги", href: "#услуги" },
  { label: "Цени", href: "#цени" },
  { label: "Процес", href: "#процес" },
  { label: "Галерия", href: "#галерия" },
  { label: "Въпроси", href: "#въпроси" },
  { label: "Контакти", href: "#контакти" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/70 bg-white/90 shadow-lg shadow-[#0a1628]/10 backdrop-blur-xl">
      <div className="hidden bg-[#0a1628] px-4 py-2 text-center text-xs font-bold uppercase tracking-[0.18em] text-white/80 sm:block">
        <span className="inline-flex items-center gap-2">
          <ShieldCheck className="h-3.5 w-3.5 text-[#f5a623]" />
          Безплатен оглед, договор и гаранция
        </span>
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between sm:h-[72px]">
          <a href="#начало" className="flex items-center gap-2.5 shrink-0 cursor-pointer">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#e63c2f] text-white shadow-lg shadow-[#e63c2f]/25 sm:h-12 sm:w-12">
              <Home className="h-5 w-5 sm:h-6 sm:w-6" />
            </div>
            <div>
              <span className="block text-sm font-black leading-tight tracking-wide text-[#0a1628] uppercase">
                Дом Строй
              </span>
              <span className="block text-[10px] font-bold tracking-wider text-[#4a5568] uppercase">
                ЕООД
              </span>
            </div>
          </a>

          <nav className="hidden items-center rounded-full border border-[#d9e1ef] bg-[#f7f9fc] p-1 lg:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-4 py-2 text-xs font-black tracking-wider text-[#0a1628] uppercase transition-colors hover:bg-white hover:text-[#e63c2f] cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Button
              asChild
              size="sm"
              className="hidden rounded-full bg-[#e63c2f] text-white shadow-lg shadow-[#e63c2f]/25 hover:bg-[#c52e22] sm:inline-flex font-bold tracking-wide cursor-pointer"
            >
              <a href="tel:0876414066">
                <Phone className="h-4 w-4 mr-1.5" />
                0876 414 066
              </a>
            </Button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="rounded-lg p-2 text-[#0a1628] transition-colors hover:bg-[#ebedf0] hover:text-[#e63c2f] lg:hidden cursor-pointer"
              aria-label="Отвори меню"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-[#d9e1ef] bg-white lg:hidden"
          >
            <nav className="px-4 py-4 space-y-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-sm font-bold tracking-wider text-[#0a1628] uppercase transition-colors hover:bg-[#ebedf0] hover:text-[#e63c2f] cursor-pointer"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2">
                <Button asChild className="w-full rounded-full bg-[#e63c2f] text-white hover:bg-[#c52e22] font-bold uppercase cursor-pointer">
                  <a href="tel:0876414066">
                    <Phone className="h-4 w-4 mr-1.5" />
                    0876 414 066
                  </a>
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
