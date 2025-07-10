function Services() {
  return (
    <section id="services" className="w-full  px-4 py-12 ">
      {/* centering div*/}
      <div className="w-10/12 mx-auto mt-11">
        {/* Section Title */}

        <div className="text-center mb-6  ">
          <h1 className="text-3xl md:text-4xl font-bold 2xl:text-5xl  text-[#31395f] text-right">
            خدماتنا العصبية المتخصصة
          </h1>
        </div>

        {/* Section description */}
        <div className="text-center mb-12  ">
          <p className="text-lg tajawal-medium 2xl:text-2xl  text-[#31395f] leading-relaxed text-right">
            نقدم مجموعة واسعة من الخدمات التشخيصية والعلاجية في مجال طب الأعصاب،
            مدعومة بفريق طبي ذو خبرة عالية وأحدث الأجهزة لضمان أفضل النتائج
            لمرضانا.
          </p>
        </div>

        {/* Section boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-8xl mx-auto rtl">
          {/* Box 1 */}
          <div className="bg-[#e0f7f1] p-6 rounded-lg shadow-sm hover:shadow-md hover:scale-[1.03] transition-transform duration-300 ease-in-out cursor-pointer">
            <h2 className="text-xl 2xl:text-3xl font-semibold text-[#31395f] mb-2">
              تخطيط الدماغ (EEG)
            </h2>
            <p className="text-[#31395f] 2xl:text-2xl 2xl:mt-6 leading-relaxed tajawal-medium">
              فحص غير مؤلم يقيس النشاط الكهربائي للدماغ، وهو ضروري لتشخيص الصرع،
              اضطرابات النوم، وبعض أمراض الدماغ الأخرى بدقة.
            </p>
          </div>

          {/* Box 2 */}
          <div className="bg-[#e0f7f1] p-6 rounded-lg shadow-sm hover:shadow-md hover:scale-[1.03] transition-transform duration-300 ease-in-out cursor-pointer">
            <h2 className="text-xl 2xl:text-3xl font-semibold text-[#31395f] mb-2">
              الاستشارات العصبية
            </h2>
            <p className="text-[#31395f] 2xl:mt-6 2xl:text-2xl leading-relaxed tajawal-medium">
              جلسات استشارة متخصصة مع أطباء أعصاب مؤهلين لتقييم الحالات، مناقشة
              الخيارات العلاجية، ووضع خطة رعاية فردية وشاملة تلبي احتياجات كل
              مريض.
            </p>
          </div>

          {/* Box 3 */}
          <div className="bg-[#e0f7f1] p-6 rounded-lg shadow-sm hover:shadow-md hover:scale-[1.03] transition-transform duration-300 ease-in-out cursor-pointer">
            <h2 className="text-xl 2xl:text-3xl font-semibold text-[#31395f] mb-2">
              تخطيط العضلات والأعصاب (EMG)
            </h2>
            <p className="text-[#31395f] 2xl:text-2xl 2xl:mt-6 leading-relaxed tajawal-medium">
              يستخدم لتشخيص أمراض الأعصاب والعضلات، مثل متلازمة النفق الرسغي،
              اعتلال الأعصاب الطرفية، والانزلاق الغضروفي، من خلال قياس استجابة
              الأعصاب والعضلات للمحفزات.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
