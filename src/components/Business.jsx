// components/AnalyticsSection.jsx
import { LineChart, Users2, BadgePercent } from "lucide-react";
import phone1 from "../assets/phone1.png";
import phone2 from "../assets/phone2.png";

const Business = ({
  stats = [
    {
      icon: <Users2 className="w-7 h-7" />,
      value: "800+",
      label: "TAKİPÇİ",
    },
    {
      icon: <LineChart className="w-7 h-7" />,

      value: "18 - 35 YAŞ",
      label: "YAŞ ARALIĞI",
    },
    {
      icon: <BadgePercent className="w-7 h-7" />,
      value: "31B +",
      label: "GÖRÜNTÜLEMELER",
    },
  ],
  badgeText = "Instagram",
  headline = "Genç ve Etkileşimli Kitle",
  subline = "Genç bir topluluğa hitap eden içeriklerim 18–29 yaş aralığında yoğun ilgi görüyor. Instagram’da milyonlara ulaşan etkileşimimle markalara değer katıyorum.",
}) => {
  return (
    <section className="w-full pt-24 p-2 text-neutral-900">
      <div className="max-w-7xl mx-auto p-6">
        <h2 className="font-serif text-3xl tracking-tight">{headline}</h2>
        <p className="mt-2 max-w-2xl text-sm text-neutral-600">{subline}</p>
      </div>
      <div className="max-w-7xl md:block flex justify-center mx-auto pb-12">
        <div className="mt-6 md:shadow-xl md:py-6 md:rounded-md md:ring-1 md:ring-black/5">
          <div className="grid grid-cols-1 md:grid-cols-3 space-y-4 justify-center items-center gap-8 p-16 md:p-8">
            {/* Sol: istatistikler */}
            <div className="md:space-y-12  space-y-6 md:col-span-1">
              {stats.map((s, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="shrink-0 rounded-xl p-3 text-neutral-800">
                    {s.icon}
                  </div>
                  <div>
                    <div className="text-2xl md:text-3xl font-bold">
                      {s.value}
                    </div>
                    <div className="text-sm md:text-lg text-neutral-600">
                      {s.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="sm:col-span-2">
              <div className="relative grid grid-cols-1 md:grid-cols-2 gap-16 items-end">
                {/* Telefon 1 */}
                <PhoneMock imageUrl={phone1}>
                  <Badge>{badgeText}</Badge>
                </PhoneMock>

                <PhoneMock imageUrl={phone2}>
                  <Badge>{badgeText}</Badge>
                </PhoneMock>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

function PhoneMock({ imageUrl, children }) {
  return (
    <div className="relative mx-auto w-[240px] h-[480px] rounded-[2.2rem] bg-neutral-900 shadow-xl">
      {/* Çerçeve */}
      <div className="absolute inset-[6px] rounded-[1.9rem] bg-black overflow-hidden">
        {/* İçerik görseli */}
        <img src={imageUrl} alt="" className="w-full h-full object-cover" />
      </div>

      {/* Üst çentik */}
      <div className="absolute left-1/2  rounded-2xl -translate-x-1/2 top-2 h-5 w-24 bg-neutral-800" />

      {/* Alt: rozet/etiketler (children) */}
      <div className="absolute bottom-16 -right-20 -translate-x-1/2">
        {children}
      </div>
      <div className="absolute bottom-16 left-8 -translate-x-1/2">
        {children}
      </div>
    </div>
  );
}

function Badge({ children }) {
  return (
    <div className="flex items-center gap-2 rounded-sm bg-gray-950 text-white px-6 py-6 shadow ring-1 ring-black/5">
      <span className="text-xs font-semibold">{children}</span>
    </div>
  );
}

export default Business;
