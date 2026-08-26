import { NavLink } from 'react-router-dom'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'

const navigation = [
  { label: 'Home', to: '/' },
  { label: 'About us', to: '/about' },
  { label: 'Features', to: '/features' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Blog', to: '/blog' },
  { label: 'Privacy Policy', to: '/privacy-policy' },
]

function Footer() {
  return (
    <footer className="w-full bg-[#1C1E53] text-white">
      {/* Top Footer Section */}
      <div className="mx-auto grid w-[calc(100%-40px)] max-w-[1200px] gap-10 py-16 lg:grid-cols-2">
        {/* Left Column */}
        <div className="flex flex-col justify-between space-y-6">
          <div>
            <NavLink to="/" className="text-[26px] font-bold tracking-tight text-white transition-opacity hover:opacity-90">
              {'{Finsweet'}
            </NavLink>
            <p className="mt-3 max-w-[360px] text-[14px] leading-[1.6] text-white/70">
              We are always open to discuss your project and improve your online presence.
            </p>
          </div>

          {/* Yellow Contact Card */}
          <div className="flex flex-wrap items-center justify-between gap-4 bg-[#FCD980] px-7 py-4 text-[#282938] sm:max-w-[480px]">
            <div>
              <p className="text-[13px] font-semibold">Email me at</p>
              <a href="mailto:contact@website.com" className="text-[14px] text-[#282938]/85 hover:underline">
                contact@website.com
              </a>
            </div>
            <div>
              <p className="text-[13px] font-semibold">Call us</p>
              <a href="tel:0927627728525" className="text-[14px] text-[#282938]/85 hover:underline">
                0927 6277 28525
              </a>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col justify-between space-y-6">
          <div>
            <h2 className="text-[32px] font-bold tracking-tight sm:text-[36px]">Lets Talk!</h2>
            <p className="mt-3 max-w-[420px] text-[14px] leading-[1.6] text-white/70">
              We are always open to discuss your project, improve your online presence and help with your UX/UI design challenges.
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4 text-white">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="transition-opacity hover:opacity-80" aria-label="Facebook">
              <FaFacebook size={18} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="transition-opacity hover:opacity-80" aria-label="Twitter">
              <FaTwitter size={18} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="transition-opacity hover:opacity-80" aria-label="Instagram">
              <FaInstagram size={18} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="transition-opacity hover:opacity-80" aria-label="LinkedIn">
              <FaLinkedin size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="bg-white py-5 text-[#282938]">
        <div className="mx-auto flex w-[calc(100%-40px)] max-w-[1200px] flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-[14px] font-medium text-[#282938]">Copyright 2021, Finsweet.com</p>
          <nav className="flex flex-wrap items-center gap-6 sm:gap-8" aria-label="Footer navigation">
            {navigation.map(({ label, to }) => (
              <NavLink
                key={to}
                className={({ isActive }) =>
                  `text-[14px] font-medium transition-colors hover:text-[#1C1E53] ${
                    isActive ? 'text-[#1C1E53] font-semibold' : 'text-[#282938]/80'
                  }`
                }
                to={to}
                end={to === '/'}
              >
                {label}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}

export default Footer
