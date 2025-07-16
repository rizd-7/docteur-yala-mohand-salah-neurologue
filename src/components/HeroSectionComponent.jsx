import React from "react";
import "./HeroAnimation.css"; // make sure this file is created

function HeroSection() {
  return (
    <section className="flex flex-col md:flex-row-reverse items-center max-w-[1700px] mx-auto px-4  rtl">
      {/* Text Content */}
      <div className="md:w-3/5 w-full mt-6 md:mt-0 md:mr-10">
        <h1
          className="fade-in-up text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-bold text-[#31395f] mb-4 leading-tight"
          style={{ animationDelay: "0s" }}
        >
          عيادة الطبيب يعلى لطب الأعصاب: رعاية متخصصة لراحة بالكم
        </h1>
        <p
          className="fade-in-up text-2xl tajawal-medium lg:text-xl 2xl:text-[1.6875rem] text-[#31395f] mb-6"
          style={{ animationDelay: "0.2s" }}
        >
          نقدم رعاية عصبية متكاملة بأسلوب يجمع بين أحدث التقنيات واللمسة
          الإنسانية، لضمان تشخيص دقيق وعلاج فعال لحالاتكم.
        </p>
        <div
          className="fade-in-up flex flex-wrap gap-4"
          style={{ animationDelay: "0.4s" }}
        >
          <a
            href="#services"
            className="bg-[#26a688] tajawal-medium text-white font-semibold py-3 px-6 rounded-lg 
      hover:bg-[#1e8a70] hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
          >
            اكتشف خدماتنا
          </a>

          <a
            href="#contact"
            className="border-2 border-[#26a688] tajawal-medium text-[#26a688] font-semibold py-3 px-6 rounded-lg 
      hover:bg-[#26a688] hover:text-white hover:shadow-md transform hover:scale-105 transition duration-300 ease-in-out"
          >
            تواصل معنا
          </a>
        </div>
      </div>

      {/* Image */}
      <div
        className="fade-in-up md:w-2xl w-2/5 relative"
        style={{ animationDelay: "0.6s" }}
      >
        <img
          src="/healthHD.webp"
          alt="Clinique neurologique, neurologie à Meda, EEG EMG, Docteur Yala Mohand Salah "
          className="w-full h-auto max-h-[600px] object-cover rounded-lg"
        />
      </div>
    </section>
  );
}

export default HeroSection;
