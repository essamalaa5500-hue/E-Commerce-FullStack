export default function Footer() {
  return (
    <div className="w-full bg-gray-200 px-4 py-6 sm:px-6 sm:py-7 lg:px-8 lg:py-8 2xl:py-10">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-3 max-w-5xl mx-auto">
        <p className="text-sm sm:text-base font-semibold">© 2026 Ecommerce</p>
        <div className="flex gap-4 text-sm sm:text-base">
          <a href="#" className="hover:text-gray-600">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-gray-600">
            Terms
          </a>
          <a href="#" className="hover:text-gray-600">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}
