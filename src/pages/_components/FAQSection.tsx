import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus, HelpCircle } from "lucide-react";

const FAQ_ITEMS = [
  {
    question: "Как се извършва безплатният оглед на покрива?",
    answer: "След като се свържете с нас по телефон или чрез формата ни, уговаряме удобен за Вас ден и час. Наш специалист посещава обекта, прави нужните замервания и оглежда детайлно състоянието на покрива. Всичко това е напълно безплатно.",
  },
  {
    question: "Има ли писмена гаранция за извършената услуга?",
    answer: "Да, абсолютно! Всички наши ремонтни и строителни дейности се извършват по писмен договор с приложена писмена гаранция от 5 до 30 години (в зависимост от вида на услугата и използваните материали).",
  },
  {
    question: "Колко време отнема един ремонт на покрив?",
    answer: "Продължителността зависи от сложността и обема на работата (обикновено между 3 и 7 работни дни за стандартна къща). При подписване на договора уточняваме точните срокове за стартиране и приключване, които спазваме стриктно.",
  },
  {
    question: "Какви материали използвате за покривните конструкции?",
    answer: "Работим с висококачествени дървени материали и маркови покривни покрития (Bramak, Tondach, Tegola, Novaglas и др.). Не правим компромис с качеството на материалите, тъй като те са в основата на здравия и дълготраен покрив.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="въпроси" className="relative bg-[#ebedf0] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-12 max-w-2xl text-center"
        >
          <span className="text-xs font-black tracking-[0.2em] text-[#e63c2f] uppercase">
            Въпроси и отговори
          </span>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-[#0a1628] uppercase sm:text-4xl">
            Често задавани въпроси
          </h2>
          <div className="mt-3 mx-auto w-20 h-1 bg-[#0056b3]" />
          <p className="mt-5 text-lg leading-relaxed text-[#4a5568]">
            Имате въпроси относно ремонта на вашия покрив? Вижте отговорите на най-често задаваните въпроси от нашите клиенти.
          </p>
        </motion.div>

        <div className="mx-auto max-w-3xl space-y-4">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="overflow-hidden rounded-2xl border border-[#d9e1ef] bg-white shadow-sm transition-all duration-300 hover:shadow-md"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left cursor-pointer hover:bg-[#f7f9fc]"
                >
                  <span className="flex items-center gap-3 text-base font-black text-[#0a1628]">
                    <HelpCircle className="h-5 w-5 text-[#e63c2f] shrink-0" />
                    {item.question}
                  </span>
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#f7f9fc] text-[#0a1628] border border-[#d9e1ef]">
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="border-t border-[#f0f4f8] p-5 text-sm leading-relaxed text-[#4a5568] bg-[#f7f9fc] font-medium">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
