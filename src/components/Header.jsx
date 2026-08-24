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
    <header className="site-header">
      <div className="header-inner">
        <NavLink className="brand" to="/">{'{Finsweet'}</NavLink>
        <nav className="header-nav" aria-label="Main navigation">
          {navigation.map(({ label, to }) => (
            <NavLink key={to} className="header-link" to={to} end={to === '/'}>
              {label}
            </NavLink>
          ))}
          <NavLink className="contact-button" to="/contact">Contact us</NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Header
