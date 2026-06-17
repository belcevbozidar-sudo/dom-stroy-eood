import {
  AlertTriangle,
  BrickWall,
  Droplets,
  Home,
  Layers,
  Wrench,
  ArrowRight,
} from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

const SERVICES = [
  {
    id: "roof-repair",
    icon: Wrench,
    title: "Ремонт на покриви",
    description:
      "Разкриване, пренареждане на керемиди, ремонт на дървена конструкция, претърсване и подмяна на повредени елементи с писмена гаранция от 5 до 30 години.",
    color: "bg-[#e63c2f]",
    accent: "border-[#e63c2f]",
  },
  {
    id: "waterproofing",
    icon: Droplets,
    title: "Хидроизолация",
    description:
      "Професионална хидроизолация на плоски и скатни покриви с воалит или течна гума с армировка от стъклофазерна мрежа за трайна защита.",
    color: "bg-[#0056b3]",
    accent: "border-[#0056b3]",
  },
  {
    id: "gutters",
    icon: Home,
    title: "Улуци и обшивки",
    description:
      "Монтаж на безшевни поцинковани и пластифицирани улуци, водосточни тръби, казанчета и обшивки на комини и бордове за качествено отводняване.",
    color: "bg-[#f5a623]",
    accent: "border-[#f5a623]",
  },
  {
    id: "alpinism-repairs",
    icon: BrickWall,
    title: "Алпинизъм & Ремонти",
    description:
      "Ремонти на труднодостъпни места чрез промишлен алпинизъм, както и довършителни дейности — гипсокартон, замазки, шпакловка, боядисване и огради.",
    color: "bg-[#2ecc40]",
    accent: "border-[#2ecc40]",
  },
];

const WARNING_SIGNS = [
  { icon: Droplets, text: "Петна и влага по таваните" },
  { icon: Layers, text: "Изместени или ронещи се керемиди" },
  { icon: BrickWall, text: "Проблеми около комини и бордове" },
  { icon: AlertTriangle, text: "Течащи улуци и компрометирана изолация" },
];

export default function ServicesSection() {
  return (
    <section id="услуги" className="relative bg-[#ebedf0] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-12 max-w-2xl text-center"
        >
          <span className="text-xs font-black tracking-[0.2em] text-[#e63c2f] uppercase">
            Услуги, които предлагаме
          </span>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-[#0a1628] uppercase sm:text-4xl">
            Нашите услуги
          </h2>
          <div className="mt-3 mx-auto w-20 h-1 bg-[#0056b3]" />
          <p className="mt-5 text-lg leading-relaxed text-[#4a5568]">
            Основните покривни дейности на едно място: ремонт, керемиди,
            хидроизолация, улуци и обшивки с гаранция за извършената работа.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={`group relative flex flex-col justify-between bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl border-l-4 ${service.accent}`}
            >
              <div className="space-y-4">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl ${service.color} text-white transition-transform duration-300 group-hover:scale-110`}
                >
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-black leading-snug text-[#0a1628]">
                  <Link to={`/services/${service.id}`} className="hover:text-[#e63c2f] transition-colors">
                    {service.title}
                  </Link>
                </h3>
                <p className="text-sm leading-relaxed text-[#4a5568] line-clamp-4">
                  {service.description}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-[#ebedf0]">
                <Link
                  to={`/services/${service.id}`}
                  className="inline-flex items-center gap-1.5 text-xs font-black text-[#0a1628] hover:text-[#e63c2f] transition-colors uppercase tracking-wider"
                >
                  Виж повече
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="border-l-4 border-[#f5a623] bg-white p-6 shadow-md">
            <span className="text-xs font-black tracking-[0.18em] text-[#e63c2f] uppercase">
              Кога да ни потърсите?
            </span>
            <h3 className="mt-2 text-2xl font-black text-[#0a1628]">
              Не отлагайте малкия теч.
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[#4a5568]">
              Навременният ремонт спестява по-големи разходи по тавани, стени
              и конструкция. Идваме на място и даваме ясна оценка.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {WARNING_SIGNS.map((sign) => (
              <div
                key={sign.text}
                className="flex items-center gap-3 rounded-xl border border-[#d9e1ef] bg-white/80 px-4 py-3 shadow-sm"
              >
                <sign.icon className="h-5 w-5 shrink-0 text-[#e63c2f]" />
                <span className="text-sm font-bold text-[#0a1628]">
                  {sign.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
