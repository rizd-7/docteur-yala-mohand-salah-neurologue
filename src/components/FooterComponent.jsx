function Footer() {
  return (
    <section id="contact" className="w-full px-4 py-20 border ">
      <div className="w-full max-w-7xl mx-auto rtl">
        {/* Section Title */}
        <div className="mb-8 text-right">
          <h1 className="text-2xl md:text-4xl font-bold text-[#31395f] tajawal-medium">
            تواصل معنا
          </h1>
          <p className="text-[#31395f] tajawal-medium">
            نحن هنا للإجابة على جميع استفساراتكم ومساعدتكم في حجز مواعيدكم. لا
            تترددوا في الاتصال بنا.
          </p>
        </div>
        <p className="text-[#31395f]">
          <span className="font-bold text-[#31395f] tajawal-bold ">
            رقم الهاتف:{" "}
          </span>
          0697500050
        </p>

        <p className="text-[#31395f]">
          <span className="font-bold text-[#31395f] tajawal-bold ">
            البريد الإلكتروني:{" "}
          </span>
          yalamohandsalah@gmail.com
        </p>
      </div>

      <div className="sr-only">
      Clinique neurologique à Médéa, Docteur neurologue, Spécialiste du cerveau,
      EEG, EMG, Médecin Yaala, Cabinet neurologique Médéa, soins neurologiques en Algérie.
      </div>

    </section>
  );
}

export default Footer;
