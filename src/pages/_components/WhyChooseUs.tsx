import { CheckCircle2, FileText, Hammer, MapPin, Search } from "lucide-react";
import { motion } from "motion/react";

const STEPS = [
  {
    icon: Search,
    number: "01",
    title: "Безплатен оглед",
    description:
      "Оценяваме състоянието на покрива и ви казваме какво е най-важно.",
  },
  {
    icon: FileText,
    number: "02",
    title: "Оферта и договор",
    description:
      "Получавате ясна оферта, срокове и писмен договор преди започване.",
  },
  {
    icon: Hammer,
    number: "03",
    title: "Ремонт с материали",
    description:
      "Работим с качествени материали за дълготрайна защита от течове.",
  },
  {
    icon: CheckCircle2,
    number: "04",
    title: "Предаване и гаранция",
    description:
      "Предаваме обекта с гаранция за извършената работа.",
  },
];

const CITIES = [
  "София",
  "Пловдив",
  "Варна",
  "Бургас",
  "Русе",
  "Стара Загора",
  "Плевен",
  "Велико Търново",
  "Благоевград",
  "Перник",
];

export default function WhyChooseUs() {
  return (
    <section id="процес" className="relative bg-[#0a1628] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-12 max-w-2xl text-center"
        >
          <span className="text-xs font-black tracking-[0.2em] text-[#f5a623] uppercase">
            Процес и покритие
          </span>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-white uppercase sm:text-4xl">
            Как работим
          </h2>
          <div className="mt-3 mx-auto w-20 h-1 bg-[#e63c2f]" />
          <p className="mt-5 text-lg leading-relaxed text-white/70">
            Работим прозрачно от първия оглед до предаването на обекта, с ясни
            срокове, договор и гаранция.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.12 }}
              className="group relative border border-white/10 bg-white/[0.06] p-6 shadow-lg transition-all duration-300 hover:border-[#f5a623] hover:bg-white/[0.09]"
            >
              <div className="mb-5 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#e63c2f] text-white transition-transform duration-300 group-hover:scale-110">
                  <step.icon className="h-6 w-6" />
                </div>
                <span className="text-3xl font-black text-white/15">
                  {step.number}
                </span>
              </div>

              <h3 className="text-lg font-black leading-snug text-white">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/60">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div className="border-l-4 border-[#f5a623] bg-white p-6 shadow-xl">
            <span className="inline-flex items-center gap-2 text-xs font-black tracking-[0.18em] text-[#e63c2f] uppercase">
              <MapPin className="h-4 w-4" />
              Покритие
            </span>
            <h3 className="mt-2 text-2xl font-black text-[#0a1628]">
              Работим в цялата страна
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[#4a5568]">
              Екипът идва на място с нужните инструменти и материали,
              независимо в кой регион се намира обектът.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {CITIES.map((city) => (
              <span
                key={city}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold text-white/80"
              >
                <MapPin className="h-3.5 w-3.5 text-[#f5a623]" />
                {city}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
