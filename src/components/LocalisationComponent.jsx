function Localisation() {
  return (
    <section className="w-full px-4 py-20 bg-white">
      <div className="w-full max-w-7xl mx-auto rtl">
        {/* Section Title */}
        <div className="mb-8 text-right">
          <h1 className="text-2xl md:text-4xl font-bold text-[#31395f]">
            موقعنا وعنواننا
          </h1>
        </div>

        {/* Content Row */}
        <div className="flex flex-col md:flex-row items-center  gap-10">
          {/* Address Content */}
          <div className="md:w-7/12 w-full text-right space-y-15">
            {/* Address */}
            <div>
              <h2 className="text-2xl font-bold text-[#31395f] mb-2">
                العنوان:
              </h2>
              <p className="text-gray-700 leading-relaxed tajawal-medium">
                Bt A1 Pôle urbain, Médéa 26000 - العمارة A1، القطب الحضري،
                المدية 26000
              </p>
            </div>

            {/* Directions */}
            <div>
              <h2 className="text-2xl font-bold text-[#31395f] mb-2">
                كيف تصل إلينا:
              </h2>
              <p className="text-[#31395f] leading-relaxed mb-4 tajawal-medium">
                عياداتنا تقع في موقع مركزي يسهل الوصول إليه بوسائل النقل
                المختلفة، مع توفر مواقف واسعة للسيارات. استخدم خرائط جوجل
                لتوجيهات أسهل.
              </p>

              <a
                href="https://www.google.com/maps?q=yala+Salah,+Bt+A1+Pôle+urbain,+Médéa+26000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#26a688] tajawal-medium text-white font-semibold py-3 px-6 rounded-lg 
    hover:bg-[#1e8a70] hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
              >
                عرض على الخريطة
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="md:w-4/12 w-full flex justify-center">
            <img
              className="w-10/12 max-w-sm md:max-w-full rounded-lg shadow-md"
              src="./cabinet.png"
              alt=" Clinique neurologique, neurologie à Médéa, EEG EMG"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Localisation;
