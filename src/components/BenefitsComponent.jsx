function Benefits() {
  return (
    <section className="w-full px-4 py-20 bg-green-50">
      <div className="w-full max-w-7xl mx-auto rtl">
        {/* Section Title */}
        <div className="mb-8 text-right">
          <h1 className="text-2xl md:text-4xl font-bold text-[#31395f]">
            لماذا تختار عيادة للطبيب يعلى لطب الأعصاب
          </h1>
        </div>

        {/* Benefits Boxes */}
        <div className="flex flex-col md:flex-row gap-6 tajawal-medium">
          {/* Benefit 1 */}
          <div className="flex-1 bg-white rounded-lg shadow p-6 text-right">
            <div className="flex items-center mb-2 justify-end">
              <span className="w-3 h-3 bg-green-500 rounded-sm inline-block ml-2"></span>
              <span className="font-bold text-lg text-[#31395f]">
                أطباء متخصصون
              </span>
            </div>
            <p className="text-[#31395f]">
              فريق من الأطباء ذوي الخبرة العالية في طب الأعصاب لتقديم أفضل رعاية
              صحية.
            </p>
          </div>
          {/* Benefit 2 */}
          <div className="flex-1 bg-white rounded-lg shadow p-6 text-right">
            <div className="flex items-center mb-2 justify-end">
              <span className="w-3 h-3 bg-green-500 rounded-sm inline-block ml-2"></span>
              <span className="font-bold text-lg text-[#31395f]">
                أحدث التقنيات
              </span>
            </div>
            <p className="text-[#31395f]">
              استخدام أحدث الأجهزة والتقنيات لضمان تشخيص دقيق وعلاج فعال.
            </p>
          </div>
          {/* Benefit 3 */}
          <div className="flex-1 bg-white rounded-lg shadow p-6 text-right">
            <div className="flex items-center mb-2 justify-end">
              <span className="w-3 h-3 bg-green-500 rounded-sm inline-block ml-2"></span>
              <span className="font-bold text-lg text-[#31395f]">
                رعاية شاملة
              </span>
            </div>
            <p className="text-[#31395f]">
              تقديم رعاية طبية متكاملة ومتابعة مستمرة لضمان راحة ورضا المرضى.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Benefits;
