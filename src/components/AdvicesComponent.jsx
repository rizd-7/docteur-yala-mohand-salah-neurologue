function Advices() {
  return (
    <section id="advices" className="w-full px-4 py-20 bg-white">
      <div className="w-full max-w-7xl mx-auto rtl">
        {/* Section Title */}
        <div className="mb-8 text-right">
          <h1 className="text-2xl md:text-4xl font-bold text-[#31395f]">
            نصائح للحفاظ على صحة دماغك
          </h1>
        </div>

        {/* Content Row */}
        <div className="flex flex-col md:flex-row items-center gap-10 tajawal-medium">
          {/* Advice List */}
          <div className="md:w-7/12 w-full">
            <ul className="list-disc pr-6 text-[1.1rem] space-y-8 text-[#31395f]">
              <li>
                <p>
                  <span className="font-bold">تغذية صحية: </span>
                  تناول الأطعمة الغنية بمضادات الأكسدة وأوميغا 3 مثل الأسماك
                  والمكسرات والخضروات الورقية.
                </p>
              </li>
              <li>
                <p>
                  <span className="font-bold">نشاط بدني منتظم: </span>
                  يساعد على تحسين تدفق الدم إلى الدماغ وتعزيز الذاكرة والوظائف
                  الإدراكية.
                </p>
              </li>
              <li>
                <p>
                  <span className="font-bold">نوم كافٍ: </span>
                  يساهم النوم الجيد في ترميم الدماغ وتقوية الذاكرة والتخلص من
                  السموم.
                </p>
              </li>
              <li>
                <p>
                  <span className="font-bold">تحدي عقلك: </span>
                  حافظ على نشاطك الذهني من خلال التعلم المستمر وحل الألغاز
                  والقراءة.
                </p>
              </li>
              <li>
                <p>
                  <span className="font-bold">إدارة التوتر: </span>
                  مارس تقنيات الاسترخاء مثل التأمل واليوجا لتقليل تأثير التوتر
                  على صحة الدماغ.
                </p>
              </li>
            </ul>
          </div>

          {/* Image */}
          <div className="md:w-5/12 w-full flex justify-center">
            <img
              className="w-10/12 max-w-sm md:max-w-full"
              src="./healthyBrain.png"
              alt="Clinique neurologique, neurologie à Médéa, EEG EMG"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Advices;
