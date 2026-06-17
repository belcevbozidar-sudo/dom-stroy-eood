import { ArrowDown, CheckCircle2, Phone, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button.tsx";
import { motion } from "motion/react";

const HERO_IMAGE = "/images/hero-roof.png";

const TRUST_POINTS = [
  "Безплатен оглед",
  "Писмен договор",
  "Гаранция за ремонта",
];

export default function HeroSection() {
  return (
    <section
      id="начало"
      className="relative flex min-h-[78vh] items-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGE}
          alt="Професионален ремонт на покриви"
          className="h-full w-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/95 via-[#0a1628]/76 to-[#0a1628]/30" />
        <div className="absolute right-0 top-0 h-full w-2 bg-[#f5a623]" />
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-[#e63c2f]" />
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-10 px-4 py-20 sm:px-6 sm:py-24 lg:grid-cols-[1fr_360px] lg:px-8">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-black tracking-wider text-white uppercase backdrop-blur">
              <ShieldCheck className="h-3.5 w-3.5" />
              Качествени ремонти с гаранция
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
            className="text-balance text-4xl font-black leading-[1.08] tracking-tight text-white uppercase sm:text-5xl lg:text-6xl"
          >
            Ремонт на{" "}
            <span className="text-[#f5a623]">покриви</span> в цялата страна
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            className="mt-6 max-w-2xl border-l-4 border-[#f5a623] pl-4 text-lg leading-relaxed text-white/85 sm:text-xl"
          >
            Пренареждане на керемиди, хидроизолация, нови покриви, улуци и
            обшивки. Работим с договор, качествени материали и ясна оферта.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.45, ease: "easeOut" }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Button
              asChild
              size="lg"
              className="rounded-full bg-[#e63c2f] px-8 py-6 text-base font-black tracking-wide text-white uppercase shadow-lg shadow-[#e63c2f]/30 hover:bg-[#c52e22] cursor-pointer"
            >
              <a href="tel:0876414066">
                <Phone className="h-5 w-5 mr-2" />
                0876 414 066
              </a>
            </Button>
            <Button
              asChild
              variant="secondary"
              size="lg"
              className="rounded-full border-2 border-[#f5a623] bg-white/10 px-8 py-6 text-base font-bold tracking-wide text-white uppercase hover:bg-[#f5a623] hover:text-[#0a1628] cursor-pointer"
            >
              <a href="#услуги">
                Нашите услуги
                <ArrowDown className="h-4 w-4 ml-2" />
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-6 flex flex-wrap items-center gap-3"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-[#f5a623] px-4 py-2 text-sm font-black text-[#0a1628] uppercase">
              -30% отстъпка на труда
            </span>
            {TRUST_POINTS.map((point) => (
              <span
                key={point}
                className="inline-flex items-center gap-2 text-sm font-bold text-white/65"
              >
                <CheckCircle2 className="h-4 w-4 text-[#2ecc40]" />
                {point}
              </span>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="hidden border border-white/15 bg-white/10 p-6 text-white shadow-2xl backdrop-blur-md lg:block"
        >
          <p className="text-xs font-black tracking-[0.2em] text-[#f5a623] uppercase">
            Дом Строй ЕООД
          </p>
          <h2 className="mt-3 text-2xl font-black uppercase leading-tight">
            Ние пазим дома ви отгоре!
          </h2>
          <div className="mt-6 grid grid-cols-2 gap-3">
            {["Покриви", "Керемиди", "Улуци", "Изолация"].map((item) => (
              <div key={item} className="border-l-4 border-[#e63c2f] bg-white/10 px-3 py-2">
                <span className="text-sm font-bold">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
