import { motion } from "motion/react";

const GALLERY_ITEMS = [
  {
    src: "/images/gallery-wood.png",
    alt: "Изграждане на нова покривна конструкция",
    label: "Нов покрив",
    accent: "bg-[#e63c2f]",
  },
  {
    src: "/images/hero-roof.png",
    alt: "Професионално пренареждане на керемиди",
    label: "Ремонт на покриви",
    accent: "bg-[#0056b3]",
  },
  {
    src: "/images/gallery-hydro.png",
    alt: "Полагане на хидроизолация",
    label: "Хидроизолация",
    accent: "bg-[#f5a623]",
  },
  {
    src: "/images/gallery-gutters.png",
    alt: "Монтаж на безшевни метални улуци",
    label: "Улуци & Обшивки",
    accent: "bg-[#2ecc40]",
  },
];

export default function GallerySection() {
  return (
    <section id="галерия" className="relative bg-[#f7f9fc] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-12 max-w-2xl text-center"
        >
          <span className="text-xs font-black tracking-[0.2em] text-[#e63c2f] uppercase">
            Нашата работа
          </span>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-[#0a1628] uppercase sm:text-4xl">
            Галерия
          </h2>
          <div className="mt-3 mx-auto w-20 h-1 bg-[#0056b3]" />
          <p className="mt-5 text-lg leading-relaxed text-[#4a5568]">
            Примери за дейности по покриви, керемиди, конструкции и изолация.
            Всеки обект започва с оглед и ясна оферта.
          </p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {GALLERY_ITEMS.map((item, i) => (
            <motion.div
              key={item.src}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl border-2 border-[#d1d5db] shadow-md transition-all duration-300 hover:border-[#e63c2f] hover:shadow-xl"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-[#0a1628]/85 via-[#0a1628]/20 to-transparent p-5">
                <div>
                  <span
                    className={`mb-2 inline-block rounded-full px-3 py-1 ${item.accent} text-[10px] font-black tracking-wider text-white uppercase`}
                  >
                    {item.label}
                  </span>
                  <p className="text-white text-sm font-bold">{item.alt}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
