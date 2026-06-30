import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#1a0034] text-slate-100">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4 ">
            <img
              className=" w-full md:w-30 lg:w-78 h-15  pb-2 bg-white rounded-3xl"
              src="/logo1.svg"
            />
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Shop with confidence.
            </h2>
            <p className="text-slate-100/90 leading-7">
              Fast delivery, secure checkout, and customer support ready to help
              you every step of the way.
            </p>
          </div>

          <div className="flex flex-wrap justify-between md:gap-3">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
              <div className="space-y-3 text-slate-100/90">
                <p className="transition duration-300 hover:text-white">
                  support@onlinestore.com
                </p>
                <p className="transition duration-300 hover:text-white">
                  +1 (800) 123-4567
                </p>
                <p className="transition duration-300 hover:text-white">
                  Mon - Fri: 9am - 8pm
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">
                Quick Links
              </h3>
              <ul className="space-y-3 text-slate-100/90  flex flex-col gap-3 sm:flex-row">
                <li>
                  <Link
                    className="transition duration-300 hover:text-white hover:underline"
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    className="transition duration-300 hover:text-white hover:underline"
                    to="/about"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    className="transition duration-300 hover:text-white hover:underline"
                    to="/contact"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    className="transition duration-300 hover:text-white hover:underline"
                    to="/cart"
                  >
                    Cart
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-200/20 pt-6 text-sm text-slate-100/80 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Online Store. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            <Link
              className="transition duration-300 text-slate-100/90 hover:text-white hover:underline"
              to="/about"
            >
              About
            </Link>
            <Link
              className="transition duration-300 text-slate-100/90 hover:text-white hover:underline"
              to="/contact"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
