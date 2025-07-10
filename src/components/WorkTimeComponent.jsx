function WorkTime() {
  return (
    <section id="hours" className="w-full px-4 py-20 bg-white ">
      <div className="w-full max-w-7xl mx-auto text-[#31395f] rtl">
        {/* Section Title */}
        <div className="mb-8 text-right">
          <h1 className="text-2xl md:text-4xl font-bold text-[#31395f]">
            أوقات العمل
          </h1>
        </div>

        {/* Content Row */}
        <p>
          نحن هنا لخدمتكم خلال هذه الأوقات. يرجى الاتصال بنا لأي استفسارات
          إضافية.
        </p>
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Table */}

          <div className="  w-full flex justify-center">
            <table className="w-full text-right border border-gray-200 rounded-lg overflow-hidden shadow-sm">
              <tbody>
                <tr className="bg-white">
                  <td className="py-4 px-3">9:00 صباحًا - 5:00 مساءً</td>
                  <td className="py-4 px-3 font-bold">الأحد - الأربعاء </td>
                  <td className="py-4 px-3 text-[#31395f]">دوام رسمي</td>
                </tr>
                <tr className="bg-gray-100">
                  <td className="py-4 px-3">مغلق</td>
                  <td className="py-4 px-3 font-bold">الخميس و الجمعة </td>
                  <td className="py-4 px-3 text-[#31395f]"> عطلة </td>
                </tr>
                <tr className="bg-white">
                  <td className="py-4 px-3">9:00 صباحًا - 5:00 مساءً</td>
                  <td className="py-4 px-3 font-bold">السبت</td>
                  <td className="py-4 px-3 text-[#31395f]">دوام رسمي </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorkTime;
