import { NavLink } from 'react-router-dom'

const navigation = [
  { label: 'Home', to: '/' },
  { label: 'About us', to: '/about' },
  { label: 'Features', to: '/features' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Blog', to: '/blog' },
]

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <p>Copyright 2022, Finsweet.com</p>
        <nav className="footer-nav" aria-label="Footer navigation">
          {navigation.map(({ label, to }) => (
            <NavLink key={to} className="footer-link" to={to} end={to === '/'}>
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </footer>
  )
}

export default Footer
