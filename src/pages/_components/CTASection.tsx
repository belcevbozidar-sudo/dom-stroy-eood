import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button.tsx";
import { motion } from "motion/react";

export default function CTASection() {
  return (
    <section
      id="контакти"
      className="relative overflow-hidden bg-[#0056b3] py-16 sm:py-20"
    >
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#f5a623] opacity-10 rotate-45 translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#e63c2f] opacity-10 rotate-12 -translate-x-1/4 translate-y-1/4" />
      <div className="absolute top-0 left-0 right-0 h-2 bg-[#f5a623]" />
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-[#e63c2f]" />

      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#2ecc40] px-4 py-1.5 text-xs font-black tracking-wider text-white uppercase">
            <span className="h-2 w-2 animate-pulse rounded-full bg-white" />
            Безплатен оглед
          </span>

          <h2 className="text-balance text-3xl font-black tracking-tight text-white uppercase sm:text-4xl lg:text-5xl">
            Нужен ви е{" "}
            <span className="text-[#f5a623]">
              ремонт на покрива?
            </span>
          </h2>

          <p className="mt-5 text-lg text-white/80 max-w-xl mx-auto leading-relaxed">
            Обадете се сега за безплатен оглед и оценка.
            Ще получите ясна оферта с договор и гаранция — без скрити разходи.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-[#e63c2f] px-10 py-7 text-lg font-black tracking-wide text-white uppercase shadow-2xl shadow-black/30 hover:bg-[#c52e22] cursor-pointer"
            >
              <a href="tel:0876414066">
                <Phone className="h-5 w-5 mr-2.5" />
                0876 414 066
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              className="rounded-full bg-[#f5a623] px-10 py-7 text-lg font-black tracking-wide text-[#0a1628] uppercase shadow-2xl shadow-black/30 hover:bg-[#d9911a] cursor-pointer"
            >
              <a href="sms:0876414066">
                <MessageCircle className="h-5 w-5 mr-2.5" />
                Пишете ни
              </a>
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs font-bold tracking-wider text-white/60 uppercase sm:gap-6">
            <span>Безплатен оглед</span>
            <span className="h-1 w-1 bg-white/40 rounded-full" />
            <span>Договор</span>
            <span className="h-1 w-1 bg-white/40 rounded-full" />
            <span>Гарантирано качество</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
