import { NavLink } from 'react-router-dom'

const navigation = [
  { label: 'Home', to: '/' },
  { label: 'About us', to: '/about' },
  { label: 'Features', to: '/features' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Blog', to: '/blog' },
]

function Header() {
  return (
    <header className="w-full bg-[#1C1E53] text-white">
      <div className="mx-auto flex w-[calc(100%-40px)] max-w-[1200px] flex-col items-center justify-between py-5 sm:flex-row">
        <NavLink className="text-[24px] font-bold tracking-tight text-white transition-opacity hover:opacity-90" to="/">
          {'{Finsweet'}
        </NavLink>
        <nav className="mt-4 flex flex-wrap items-center justify-center gap-5 sm:mt-0 sm:gap-8" aria-label="Main navigation">
          {navigation.map(({ label, to }) => (
            <NavLink
              key={to}
              className={({ isActive }) =>
                `text-[15px] font-medium transition-colors hover:text-white ${
                  isActive ? 'text-white font-semibold' : 'text-[#BBBACD]'
                }`
              }
              to={to}
              end={to === '/'}
            >
              {label}
            </NavLink>
          ))}
          <NavLink
            className="rounded-full border border-white/30 px-6 py-2.5 text-[15px] font-semibold text-white transition-all hover:bg-white hover:text-[#1C1E53]"
            to="/contact"
          >
            Contact us
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Header
