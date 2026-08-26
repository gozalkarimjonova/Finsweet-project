import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { Home, ArrowLeft } from 'lucide-react'

function NotFound() {
  const navigate = useNavigate()

  return (
    <main className="flex min-h-[65vh] w-full flex-col items-center justify-center bg-white px-4 py-20 text-center font-sans text-[#282938]">
      <div className="mx-auto w-[calc(100%-40px)] max-w-[600px]">
        {/* Error Code Tag */}
        <span className="inline-block rounded-full bg-[#1C1E53]/10 px-5 py-2 text-[14px] font-semibold text-[#1C1E53]">
          404 Xatolik
        </span>

        {/* Big 404 Text & Heading */}
        <h1 className="mt-6 text-[48px] font-bold tracking-tight text-[#1C1E53] sm:text-[64px]">
          Sahifa topilmadi
        </h1>
        <p className="mt-4 text-[15px] leading-relaxed text-[#282938]/70 sm:text-[16px]">
          Kechirasiz, siz qidirayotgan sahifa mavjud emas, o'chirilgan yoki boshqa manzilga ko'chirilgan bo'lishi mumkin.
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          {/* Bosh sahifaga qaytish */}
          <Link
            to="/"
            className="inline-flex items-center gap-2.5 rounded-full bg-[#1C1E53] px-7 py-3.5 text-[15px] font-semibold text-white transition-all hover:bg-[#282938] hover:shadow-md"
          >
            <Home size={18} />
            Bosh sahifaga qaytish
          </Link>

          {/* Ortga qaytish */}
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2.5 rounded-full bg-[#FCD980] px-7 py-3.5 text-[15px] font-semibold text-[#282938] transition-all hover:bg-[#f5c853] hover:shadow-md cursor-pointer"
          >
            <ArrowLeft size={18} />
            Ortga qaytish
          </button>
        </div>
      </div>
    </main>
  )
}

export default NotFound