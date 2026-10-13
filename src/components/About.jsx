export default function About() {
  return (
    <div className="px-4 py-8 md:px-8 md:py-12 lg:px-16 lg:py-16 bg-gray-100">
      <h1 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-8">
        About Us
      </h1>

      <div className="max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto text-center">
        <p className="text-base md:text-lg text-black leading-relaxed mb-4 font-bold">
          متميزون في الملابس الجاهزة، ونسعى دائمًا لتقديم أفضل تجربة تسوق
          أونلاين لعملائنا.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 max-w-3xl mx-auto mt-8 md:mt-10">
        <div className="text-center p-4 border border-black  rounded-lg">
          <p className="text-2xl md:text-3xl font-bold text-indigo-600">2022</p>
          <p className="text-sm md:text-base text-black mt-1">تم التأسيس في </p>
        </div>
        <div className="text-center p-4 border border-black rounded-lg">
          <p className="text-2xl md:text-3xl font-bold text-indigo-600">#1</p>
          <p className="text-sm md:text-base text-black mt-1">
            متميزون في البيع
          </p>
        </div>
        <div className="text-center p-4 border border-black rounded-lg">
          <p className="text-2xl md:text-3xl font-bold text-indigo-600">
            الأفضل
          </p>
          <p className="text-sm md:text-base text-black mt-1">
            رقم واحد على الانترنت
          </p>
        </div>
      </div>
    </div>
  );
}
