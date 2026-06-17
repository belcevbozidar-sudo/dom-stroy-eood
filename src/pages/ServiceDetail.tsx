import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "motion/react";
import { Wrench, Droplets, Home, BrickWall, Phone, ArrowLeft, CheckCircle2, ShieldCheck, Mail } from "lucide-react";
import Header from "./_components/Header.tsx";
import Footer from "./_components/Footer.tsx";
import SkyBackground from "./_components/SkyBackground.tsx";

interface SubService {
  title: string;
  description: string;
}

interface PriceItem {
  name: string;
  price: string;
}

interface ServiceData {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: any;
  image: string;
  color: string;
  accent: string;
  advantages: string[];
  subservices: SubService[];
  prices: PriceItem[];
}

const SERVICES_DATA: Record<string, ServiceData> = {
  "roof-repair": {
    id: "roof-repair",
    title: "Ремонт на покриви",
    subtitle: "Цялостни покривни ремонти, пренареждане на керемиди и нови конструкции",
    description: "Дом Строй ЕООД предлага надежден и бърз ремонт на покриви. С над 15 години опит в бранша, нашият екип гарантира професионално изпълнение с качествени материали, писмен договор и гаранция до 30 години. Работим в цялата страна.",
    icon: Wrench,
    image: "/images/gallery-wood.png",
    color: "bg-[#e63c2f]",
    accent: "border-[#e63c2f]",
    advantages: ["Използване на сертифициран дървен материал", "Писмена гаранция от 5 до 30 години", "Бързо изпълнение (обикновено от 3 до 7 дни)", "Безплатен оглед и изготвяне на подробна оферта"],
    subservices: [
      {
        title: "Разкриване и почистване на покрив",
        description: "Внимателен демонтаж на съществуващи керемиди, почистване на прах, кал и стари летви от покривната плоча.",
      },
      {
        title: "Наковаване на двойна летвена скара",
        description: "Полагане на вертикални и хоризонтални дървени летви за осигуряване на добра вентилация под керемидите.",
      },
      {
        title: "Полагане на паропропускливо фолио",
        description: "Монтаж на качествена хидроизолационна подпокривна мушама, която спира влагата, но позволява на покрива да диша.",
      },
      {
        title: "Нареждане и измазване на капаци",
        description: "Подреждане на керемидите (глинени, бетонни или битумни) и измазване на капаците с високоустойчив вароциментов разтвор."
      }
    ],
    prices: [
      { name: "Разкриване на покрив", price: "10.00 лв/м²" },
      { name: "Почистване на кал", price: "7.00 лв/м²" },
      { name: "Полагане на подпокривно фолио (мушама)", price: "8.00 лв/м²" },
      { name: "Наковаване на летви (двойна скара)", price: "20.00 лв/м²" },
      { name: "Нареждане на керемиди", price: "28.00 лв/м²" },
      { name: "Измазване на капаци с разтвор", price: "24.00 лв/м²" },
      { name: "Нова дървена конструкция (труд + материали)", price: "160.00 лв/м²" }
    ]
  },
  "waterproofing": {
    id: "waterproofing",
    title: "Хидроизолация",
    subtitle: "Модерна хидроизолация за плоски и скатни покриви, гаражи и тераси",
    description: "Надеждната хидроизолация спира течовете веднъж завинаги. Ние от Дом Строй ЕООД използваме съвременни полимерни битумни мембрани (воалит) и течна гума с висок процент на еластичност, устойчиви на екстремни температури и UV лъчи.",
    icon: Droplets,
    image: "/images/gallery-hydro.png",
    color: "bg-[#0056b3]",
    accent: "border-[#0056b3]",
    advantages: ["Използване на сертифициран воалит с посипка", "Безшевно полагане на течна гума с армировка", "Висока устойчивост на замръзване и слънчева радиация", "Писмен договор с реална гаранция"],
    subservices: [
      {
        title: "Полагане на полиестерна битумна мембрана (Воалит)",
        description: "Газопламъчно заваряване на битумни рула (4 кг/м²) със сива минерална посипка за максимална защита.",
      },
      {
        title: "Полагане на течна гума с мрежа",
        description: "Нанасяне на три слоя високоеластична течна гума, армирана с мрежа от стъклофазер за 100% безшевно покритие.",
      },
      {
        title: "Грундиране с битумен грунд",
        description: "Основна обработка на повърхността за запечатване на праха и отлично сцепление на хидроизолационните слоеве."
      }
    ],
    prices: [
      { name: "Полагане на воалит (4 кг/м² с минерална посипка)", price: "75.00 лв/м²" },
      { name: "Полагане на полиестерен воалит (без посипка)", price: "65.00 лв/м²" },
      { name: "Полагане на течна гума с армираща мрежа (3 ръце)", price: "85.00 лв/м²" },
      { name: "Хидроизолация с PVC мембрана", price: "105.00 лв/м²" },
      { name: "Грундиране с висококачествен битумен грунд", price: "25.00 лв/м²" }
    ]
  },
  "gutters": {
    id: "gutters",
    title: "Улуци и обшивки",
    subtitle: "Американски безшевни улуци, водосточни тръби и тенекеджийски услуги",
    description: "Професионалното отводняване предпазва основите, фасадата и мазилката на вашия дом от намокряне и повреди. Дом Строй ЕООД предлага бързо производство и монтаж на място на безшевни метални улуци.",
    icon: Home,
    image: "/images/gallery-gutters.png",
    color: "bg-[#f5a623]",
    accent: "border-[#f5a623]",
    advantages: ["Производство на улуци директно на обекта без снаждане", "Възможност за пластифицирана ламарина с избор на цвят", "Пълна тенекеджийска защита (обшивки)", "Антикорозионно покритие с гаранция до 15 години"],
    subservices: [
      {
        title: "Безшевни поцинковани и пластифицирани улуци",
        description: "Монтаж на улуци от едно цяло парче ламарина, без риск от протичане по снадките. Включва и здрави скоби.",
      },
      {
        title: "Водосточни тръби и казанчета",
        description: "Поставяне на тръби за бързо отвеждане на дъждовната вода и монтаж на отводнителни казанчета.",
      },
      {
        title: "Обшивки на комини и бордове",
        description: "Тенекеджийски обшивки около комини, бордове и капандури за спиране на течове в критичните зони."
      }
    ],
    prices: [
      { name: "Безшевни поцинковани улуци (над 50 л.м.)", price: "30.00 лв/л.м." },
      { name: "Пластифицирани безшевни улуци (над 30 л.м.)", price: "35.00 лв/л.м." },
      { name: "Вертикални водосточни тръби (над 30 л.м.)", price: "40.00 лв/л.м." },
      { name: "Водосборни казанчета (поцинковани/пластифицирани)", price: "65.00 - 75.00 лв/бр." },
      { name: "Обшивка на комини (труд + материали)", price: "95.00 лв/л.м." },
      { name: "Обшивка на бордове", price: "110.00 лв/м²" },
      { name: "Надулучни поли", price: "110.00 лв/л.м." }
    ]
  },
  "alpinism-repairs": {
    id: "alpinism-repairs",
    title: "Алпинизъм & Ремонти",
    subtitle: "Височинни покривни услуги чрез въжен достъп и вътрешни довършителни дейности",
    description: "Когато скелето е икономически неизгодно или невъзможно за поставяне, нашият екип от промишлени алпинисти е насреща. Предлагаме също и пълен набор от класически вътрешни и външни довършителни строителни ремонти.",
    icon: BrickWall,
    image: "/images/gallery-alpinism.png",
    color: "bg-[#2ecc40]",
    accent: "border-[#2ecc40]",
    advantages: ["Сертифицирани и обучени промишлени алпинисти", "Бърз достъп без необходимост от изграждане на скъпо скеле", "Пълен спектър от довършителни дейности", "Работим както в жилищни, така и в търговски обекти"],
    subservices: [
      {
        title: "Промишлен алпинизъм за покриви",
        description: "Ремонт на покриви, почистване на улуци, монтаж на обшивки и водосточни тръби по високи сгради.",
      },
      {
        title: "Вътрешни довършителни работи",
        description: "Изграждане на конструкции от гипсокартон, полагане на теракот, фаянс, шпакловка, мазилка и фино боядисване.",
      },
      {
        title: "Дворни огради и зидове",
        description: "Професионално строителство на огради, подпорни стени и дворни зидове по индивидуален проект."
      }
    ],
    prices: [
      { name: "Ремонт на труднодостъпни места от алпинисти", price: "По договаряне" },
      { name: "Гипсокартон (стени и окачени тавани)", price: "По договаряне" },
      { name: "Шпакловки, мазилки и боядисване", price: "По договаряне" },
      { name: "Фаянс, теракот и гранитогрес", price: "По договаряне" },
      { name: "Изграждане на дворни огради", price: "По договаряне" }
    ]
  }
};

export default function ServiceDetail() {
  const { serviceId } = useParams<{ serviceId: string }>();

  if (!serviceId || !SERVICES_DATA[serviceId]) {
    return <Navigate to="/404" replace />;
  }

  const service = SERVICES_DATA[serviceId];
  const IconComponent = service.icon;

  return (
    <div className="relative min-h-screen">
      <SkyBackground />
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />

        <main className="flex-grow">
          {/* Breadcrumbs / Back button */}
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <Link
              to="/#услуги"
              className="inline-flex items-center gap-2 text-sm font-black text-[#0a1628] hover:text-[#e63c2f] transition-colors uppercase"
            >
              <ArrowLeft className="h-4 w-4" />
              Назад към услугите
            </Link>
          </div>

          {/* Hero Section for Service */}
          <section className="relative overflow-hidden bg-[#0a1628] text-white py-16 sm:py-20 border-b-4 border-[#e63c2f]">
            <div className="absolute inset-0 opacity-20">
              <img src={service.image} alt={service.title} className="h-full w-full object-cover" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628] via-[#0a1628]/90 to-transparent" />
            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                  className="flex items-center gap-3 mb-6"
                >
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${service.color} text-white shadow-lg`}>
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <span className="text-xs font-black tracking-[0.2em] text-[#f5a623] uppercase">
                    Услуга с гаранция
                  </span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="text-3xl font-black tracking-tight uppercase sm:text-4xl lg:text-5xl"
                >
                  {service.title}
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="mt-4 text-lg text-white/80 leading-relaxed max-w-2xl font-bold"
                >
                  {service.subtitle}
                </motion.p>
              </div>
            </div>
          </section>

          {/* Content Details */}
          <section className="py-16 sm:py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
                {/* Left side: Detailed descriptions and subservices */}
                <div className="space-y-10">
                  <div>
                    <h2 className="text-2xl font-black text-[#0a1628] uppercase border-l-4 border-[#e63c2f] pl-4 mb-4">
                      За Услугата
                    </h2>
                    <p className="text-base text-[#4a5568] leading-relaxed font-medium">
                      {service.description}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-black text-[#0a1628] uppercase mb-6">
                      Какво включва дейността:
                    </h3>
                    <div className="space-y-6">
                      {service.subservices.map((sub, i) => (
                        <div key={i} className="flex gap-4 p-5 rounded-2xl bg-white border border-[#d9e1ef] shadow-sm">
                          <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${service.color} text-white font-black text-sm`}>
                            {i + 1}
                          </span>
                          <div>
                            <h4 className="text-base font-black text-[#0a1628]">{sub.title}</h4>
                            <p className="mt-1.5 text-sm text-[#718096] leading-relaxed font-medium">{sub.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right side: Prices and Advantages */}
                <div className="space-y-8">
                  {/* Advantages list */}
                  <div className="border border-white/10 bg-[#0a1628] p-6 text-white rounded-2xl shadow-xl">
                    <h3 className="text-lg font-black text-[#f5a623] uppercase mb-5 flex items-center gap-2">
                      <ShieldCheck className="h-5 w-5 text-[#2ecc40]" />
                      Нашите Предимства
                    </h3>
                    <ul className="space-y-3.5">
                      {service.advantages.map((adv, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-sm font-bold text-white/95">
                          <CheckCircle2 className="h-5 w-5 text-[#2ecc40] shrink-0 mt-0.5" />
                          <span>{adv}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Specific Price Table card */}
                  <div className="border border-[#d9e1ef] bg-white p-6 rounded-2xl shadow-lg">
                    <h3 className="text-lg font-black text-[#0a1628] uppercase mb-5">
                      Ориентировъчни Цени
                    </h3>
                    <div className="space-y-3">
                      {service.prices.map((p, idx) => (
                        <div key={idx} className="flex items-center justify-between border-b border-[#f0f4f8] pb-2.5 last:border-b-0 last:pb-0">
                          <span className="text-sm font-bold text-[#4a5568]">{p.name}</span>
                          <span className="text-sm font-black text-[#0a1628] bg-[#ebedf0] px-2.5 py-1 rounded-lg">
                            {p.price}
                          </span>
                        </div>
                      ))}
                    </div>
                    <p className="mt-4 text-[10px] text-[#718096] font-bold italic">
                      * Цените са ориентировъчни, без ДДС и се финализират след безплатен оглед.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Banner inside service detail */}
          <section className="relative overflow-hidden bg-[#0056b3] py-12 text-white border-t border-[#f5a623]">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#f5a623] opacity-10 rotate-45 translate-x-1/3 -translate-y-1/3" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#e63c2f] opacity-10 rotate-12 -translate-x-1/4 translate-y-1/4" />
            <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
              <div>
                <h3 className="text-2xl font-black uppercase text-white">
                  Имате нужда от {service.title}?
                </h3>
                <p className="mt-1 text-sm text-white/80 font-medium max-w-xl">
                  Свържете се с нас за безплатна консултация, оглед на място и изготвяне на подробна ценова оферта.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <a
                  href="tel:0876414066"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#e63c2f] hover:bg-[#c52e22] text-white font-black text-sm uppercase px-6 py-3.5 shadow-lg shadow-black/20 transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  0876 414 066
                </a>
                <a
                  href="sms:0876414066"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#f5a623] hover:bg-[#d9911a] text-[#0a1628] font-black text-sm uppercase px-6 py-3.5 shadow-lg shadow-black/20 transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  Изпрати SMS
                </a>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
}
