import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Wrench, Droplets, Home, AlertTriangle, Check, Phone } from "lucide-react";

const CATEGORIES = [
  { id: "roof", label: "Ремонт на покриви", icon: Wrench },
  { id: "hydro", label: "Хидроизолация", icon: Droplets },
  { id: "tin", label: "Улуци & Обшивки", icon: Home },
  { id: "emergency", label: "Аварийни & Други", icon: AlertTriangle },
];

const PRICING_DATA: Record<string, Array<{ name: string; bgn: string; eur: string; desc?: string }>> = {
  roof: [
    { name: "Разкриване на покрив", bgn: "10.00 лв/м²", eur: "5.11 €/м²", desc: "Внимателно отстраняване на стари керемиди" },
    { name: "Почистване на кал от плоча", bgn: "7.00 лв/м²", eur: "3.58 €/м²", desc: "Подготовка на основата за следващи слоеве" },
    { name: "Полагане на мушама / фолио", bgn: "8.00 лв/м²", eur: "4.09 €/м²", desc: "Висококачествено хидроизолационно фолио под керемидите" },
    { name: "Наковаване на летви (двойна скара)", bgn: "20.00 лв/м²", eur: "10.21 €/м²", desc: "Осигурява вентилация и стабилност на конструкцията" },
    { name: "Нареждане на керемиди", bgn: "28.00 лв/м²", eur: "14.30 €/м²", desc: "Прецизно подреждане за оптимално оттичане" },
    { name: "Измазване на капаци", bgn: "24.00 лв/м²", eur: "12.26 €/м²", desc: "Вароциментов разтвор за защита на билото" },
    { name: "Нова дървена покривна конструкция", bgn: "160.00 лв/м²", eur: "81.72 €/м²", desc: "Пълно изграждане с включени труд и материали" },
  ],
  hydro: [
    { name: "Полагане на воалит (4 кг/м² със сива посипка)", bgn: "75.00 лв/м²", eur: "38.30 €/м²", desc: "Гарантирана дълготрайна хидроизолация" },
    { name: "Полагане на полиестерен воалит (без посипка)", bgn: "65.00 лв/м²", eur: "33.20 €/м²", desc: "Отлична еластичност и устойчивост" },
    { name: "Полагане на течна гума с армировка", bgn: "85.00 лв/м²", eur: "43.41 €/м²", desc: "Три ръце с мрежа от стъклофазер за безшевно покритие" },
    { name: "Хидроизолация с PVC мембрана", bgn: "105.00 лв/м²", eur: "53.63 €/м²", desc: "За модерно и изключително издръжливо покритие" },
    { name: "Грундиране с битумен грунд", bgn: "25.00 лв/м²", eur: "12.77 €/м²", desc: "Подготовка за сигурно сцепление на изолацията" },
  ],
  tin: [
    { name: "Поцинковани безшевни улуци (над 50 л.м.)", bgn: "30.00 лв/л.м.", eur: "15.32 €/л.м.", desc: "Включва и монтаж на скоби" },
    { name: "Пластифицирани безшевни улуци (над 30 л.м.)", bgn: "35.00 лв/л.м.", eur: "17.88 €/л.м.", desc: "Разнообразие от цветове, дълъг живот" },
    { name: "Вертикални водосточни тръби (над 30 л.м.)", bgn: "40.00 лв/л.м.", eur: "20.43 €/л.м.", desc: "Професионално отвеждане на водите" },
    { name: "Водосборни казанчета", bgn: "65.00 - 75.00 лв/бр.", eur: "33.20 - 38.30 €/бр.", desc: "За поцинковани или пластифицирани модели" },
    { name: "Обшивка на комини", bgn: "95.00 лв/л.м.", eur: "48.52 €/л.м.", desc: "Труд и висококачествени материали" },
    { name: "Обшивка на бордове", bgn: "110.00 лв/м²", eur: "56.18 €/м²", desc: "Пълна защита на фасадните бордове" },
    { name: "Надулучни поли", bgn: "110.00 лв/л.м.", eur: "56.18 €/л.м.", desc: "Предотвратяват подливането под улука" },
  ],
  emergency: [
    { name: "Авариен ремонт на течове (до 5 м²)", bgn: "300.00 лв общо", eur: "153.22 € общо", desc: "Бърза реакция, труд и материали" },
    { name: "Авариен ремонт на течове (до 10 м²)", bgn: "500.00 лв общо", eur: "255.36 € общо", desc: "Бърза реакция, труд и материали" },
    { name: "Авариен ремонт на течове (до 20 м²)", bgn: "1000.00 лв общо", eur: "510.72 € общо", desc: "Спиране на течове, гаранция" },
    { name: "Промишлен алпинизъм", bgn: "По договаряне", eur: "По договаряне", desc: "За високи сгради и труднодостъпни места" },
    { name: "Вътрешни довършителни ремонти", bgn: "По договаряне", eur: "По договаряне", desc: "Гипсокартон, шпакловка, боядисване, фаянс, огради" },
  ],
};

export default function PricingSection() {
  const [activeTab, setActiveTab] = useState("roof");

  return (
    <section id="цени" className="relative bg-[#f7f9fc] py-16 sm:py-20 border-b border-[#d9e1ef]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-12 max-w-2xl text-center"
        >
          <span className="text-xs font-black tracking-[0.2em] text-[#e63c2f] uppercase">
            Нашите Тарифи
          </span>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-[#0a1628] uppercase sm:text-4xl">
            Ценоразпис
          </h2>
          <div className="mt-3 mx-auto w-20 h-1 bg-[#0056b3]" />
          <p className="mt-5 text-lg leading-relaxed text-[#4a5568]">
            Предлагаме конкурентни и прозрачни цени. Посочените цени са ориентировъчни и без ДДС. Крайната цена се определя след безплатен оглед.
          </p>
        </motion.div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-2 rounded-full px-5 py-3 text-sm font-black tracking-wide uppercase transition-all duration-300 cursor-pointer border ${
                  isActive
                    ? "bg-[#0a1628] text-white border-[#0a1628] shadow-md"
                    : "bg-white text-[#0a1628] border-[#d9e1ef] hover:bg-[#ebedf0] hover:text-[#e63c2f]"
                }`}
              >
                <Icon className={`h-4 w-4 ${isActive ? "text-[#f5a623]" : ""}`} />
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Pricing Table Content */}
        <div className="mx-auto max-w-4xl rounded-2xl border border-[#d9e1ef] bg-white p-6 shadow-xl sm:p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="space-y-4"
            >
              {PRICING_DATA[activeTab].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col justify-between gap-4 border-b border-[#f0f4f8] pb-4 last:border-b-0 last:pb-0 sm:flex-row sm:items-center"
                >
                  <div className="flex-1">
                    <h4 className="text-base font-black text-[#0a1628] flex items-center gap-2">
                      <Check className="h-4 w-4 text-[#2ecc40] shrink-0" />
                      {item.name}
                    </h4>
                    {item.desc && (
                      <p className="mt-1 text-xs text-[#718096] pl-6 font-medium">
                        {item.desc}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-wrap items-center gap-2 pl-6 sm:pl-0">
                    <span className="inline-block rounded-lg bg-[#ebedf0] px-3 py-1.5 text-sm font-black text-[#0a1628]">
                      {item.bgn}
                    </span>
                    <span className="inline-block rounded-lg bg-[#f7f9fc] border border-[#d9e1ef] px-3 py-1.5 text-xs font-bold text-[#718096]">
                      {item.eur}
                    </span>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Disclaimer & Action */}
        <div className="mt-10 text-center max-w-xl mx-auto">
          <p className="text-xs font-bold text-[#718096] italic">
            * Всеки обект е индивидуален. Фирмата запазва правото си на промяна в цените след детайлен оглед на място.
          </p>
          <div className="mt-6">
            <a
              href="tel:0876414066"
              className="inline-flex items-center gap-2 rounded-full bg-[#e63c2f] px-6 py-3.5 text-sm font-black text-white uppercase shadow-lg shadow-[#e63c2f]/20 hover:bg-[#c52e22] transition-colors"
            >
              <Phone className="h-4 w-4" />
              Заяви безплатен оглед: 0876 414 066
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
