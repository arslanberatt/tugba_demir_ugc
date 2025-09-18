import aboutMe from "../assets/header.jpg";
const AboutMe = () => {
  return (
    <section className="w-full pt-24 p-2 text-neutral-900">
      <div className="max-w-7xl md:block flex justify-center mx-auto pb-12">
        <div className="mt-6 md:shadow-xl md:py-6 md:rounded-md md:ring-1 md:ring-black/5">
          <div className="grid grid-cols-1 md:grid-cols-4 space-y-4 justify-center items-center gap-8 p-16 md:p-8">
            <div className="md:space-y-12  space-y-6 md:col-span-2">
              <h2 className="text-3xl text-gray-900 font-serif mb-4">
                HAKKIMDA
              </h2>
              <h3 className="text-lg font-serif text-gray-900 italic mb-6">
                Tuğba Demir
              </h3>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Farklı platformlarda içerik üretmeyi ve paylaşmayı seviyorum.
                Belirli bir kalıba sıkışmadan, içeriklerimde çeşitlilik
                sağlamaktan mutluluk duyuyorum. Bu durum, hem üretim sürecini
                daha keyifli hale getiriyor hem de kendi benliğimi içeriklerime
                yansıtarak özgün kalmamı sağlıyor. Günlük yaşamımdan kesitler
                paylaşmak, çeşitli konularda videolar oluşturmak, hizmetleri ya
                da ürünleri tanıtmak ve onları deneyimleyerek izleyicilerle
                paylaşmak benim için büyük bir motivasyon kaynağı. Farklı
                formatlar denemek, izleyicilerle etkileşim kurmak ve sürekli
                yeni fikirler üretmek bana ilham veriyor.
              </p>
            </div>
            <div className="sm:col-span-2">
              <img
                src={aboutMe}
                alt="Emily Wilder"
                className="object-cover w-full rounded"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutMe;
