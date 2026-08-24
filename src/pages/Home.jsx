import { ArrowRight, Check, ChevronDown, Code2, FileText, MessageSquare, PenTool, Settings, Users } from 'lucide-react'
import { Link } from 'react-router-dom'

// Use the original SVG artwork instead of the small PNG exports.
// SVG keeps the illustrations sharp at every screen size.
import heroImage from '../assets/home/user-hero.png'
import projectMain from '../assets/home/user-project.png'
import projectA from '../assets/home/project-a.svg'
import projectB from '../assets/home/project-b.svg'
import ctaImage from '../assets/home/cta.png'
import blogA from '../assets/home/blog-a.svg'
import blogB from '../assets/home/blog-b.svg'
import blogC from '../assets/home/blog-c.svg'
import blogBoy from '../assets/home/blog-a.png'
import blogLaptop from '../assets/home/user-project.png'
import blogGirl from '../assets/home/user-cta.png'

const workItems = [
  ['01', 'Strategy', 'We help you turn your ideas into a clear strategy that gets results.', PenTool],
  ['02', 'Wireframing', 'We create simple structures that make your website easy to use.', FileText],
  ['03', 'Design', 'We turn the structure into a beautiful, purposeful interface.', Settings],
  ['04', 'Development', 'We build a fast, responsive website ready for launch.', Code2],
]

const featureItems = [
  ['Uses Client First', 'We use a clean and scalable system so your website stays easy to maintain.', Users],
  ['Two Free Revision Rounds', 'You get room to refine the work until it feels right for your business.', Check],
  ['Template Customization', 'We customize the design around your brand, content and goals.', PenTool],
  ['24/7 Support', 'We are here when you need help with your website and its next steps.', MessageSquare],
  ['Quick Delivery', 'A focused process keeps the project moving without unnecessary delays.', Check],
  ['Hands-on approach', 'You work directly with us throughout the project from start to finish.', Users],
]

const faqs = [
  ['How much time does it take?', 'The timeline depends on the project scope, but we agree on the schedule before the work starts.'],
  ['What is your class naming convention?', 'We keep the structure clear and consistent so future edits are simple.'],
  ['How do you communicate?', 'We keep communication direct and share progress throughout the project.'],
  ['I have a bigger project. Can you handle it?', 'Yes. We can scale the process around larger websites and product requirements.'],
  ['What is your class naming convention?', 'We use a consistent naming system that keeps components organized and reusable.'],
]

const blogs = [
  [blogBoy, '5 Web Design Blogs You Should Be Reading'],
  [blogLaptop, '5 Great Web Design Resources in the internet'],
  [blogGirl, 'Why We Love Webflow (And You Should, Too!)'],
]

const container = 'mx-auto w-[calc(100%-40px)] max-w-[1200px]'
const heading = 'font-bold tracking-[-0.5px] text-[#282938]'

function Home() {
  return (
    <main className="w-full overflow-hidden bg-white font-sans text-[#282938]">
      {/* Hero */}
      <section className="bg-[#1C1E53] py-16 text-white md:py-[72px]">
        <div className={`${container} grid items-center gap-10 md:grid-cols-2`}>
          <div className="max-w-[540px]">
            <h1 className="text-[36px] font-bold leading-[1.1] tracking-[-1px] sm:text-[42px] lg:text-[48px]">
              Building stellar websites for early startups
            </h1>
            <p className="mt-5 max-w-[500px] text-[14px] leading-[1.7] text-white/70 sm:text-[15px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-6">
              <Link to="/work" className="inline-flex items-center justify-center rounded-full bg-[#FCD980] px-6 py-3 text-[13px] font-semibold text-[#282938] transition hover:bg-[#f7d36e]">
                View our work
              </Link>
              <Link to="/pricing" className="inline-flex items-center gap-2 text-[13px] font-semibold text-white">
                View pricing <ArrowRight size={13} />
              </Link>
            </div>
          </div>
          <img src={heroImage} alt="Website design illustration" className="w-full max-w-[520px] justify-self-end object-contain" />
        </div>
      </section>

      {/* How we work */}
      <section className="bg-[#F4F6FC] py-[72px] md:py-[84px]">
        <div className={`${container} grid gap-12 lg:grid-cols-[.8fr_1.4fr] lg:gap-[70px]`}>
          <div>
            <h2 className={`${heading} text-[30px] leading-[1.15] sm:text-[34px]`}>How we work</h2>
            <p className="mt-4 max-w-[390px] text-[14px] leading-[1.65] text-[#282938]/65">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
            </p>
            <Link to="/contact" className="mt-5 inline-flex items-center gap-2 text-[13px] font-semibold text-[#2405F2]">
              Get in touch with us <ArrowRight size={13} />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 sm:gap-x-14">
            {workItems.map(([number, title, text, Icon]) => (
              <article key={number} className="relative">
                <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-[5px] bg-[#2405F2] text-white">
                  <Icon size={14} />
                </div>
                <span className="absolute left-[42px] top-[8px] text-[10px] text-[#B8B9C4]">{number}</span>
                <h3 className="text-[18px] font-bold leading-[1.2]">{title}</h3>
                <p className="mt-2 text-[12px] leading-[1.6] text-[#282938]/60">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-[72px] md:py-[84px]">
        <div className={container}>
          <div className="mb-7 flex items-center justify-between gap-5">
            <h2 className={`${heading} text-[30px] leading-[1.15] sm:text-[34px]`}>View our projects</h2>
            <Link to="/work" className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#282938]">
              View all projects <ArrowRight size={12} />
            </Link>
          </div>

          <div className="grid gap-5 lg:grid-cols-[1.55fr_.75fr]">
            <Link to="/case-study" className="group relative min-h-[390px] overflow-hidden bg-[#1C1E53] sm:min-h-[460px]">
              <img src={projectMain} alt="Featured project" className="absolute inset-0 h-full w-full object-cover object-center transition duration-500 group-hover:scale-[1.02]" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#1C1E53] via-[#1C1E53]/85 to-transparent px-7 pb-7 pt-28 text-white sm:px-8">
                <h3 className="text-[22px] font-bold sm:text-[25px]">Template 6</h3>
                <p className="mt-2 max-w-[470px] text-[12px] leading-[1.55] text-white/70">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-[12px] font-semibold">
                  View project <ArrowRight size={12} />
                </span>
              </div>
            </Link>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
              <Link to="/case-study" className="group relative min-h-[190px] overflow-hidden bg-[#1C1E53] lg:min-h-[220px]">
                <img src={projectA} alt="Project" className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]" />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#1C1E53]/90 to-transparent" />
                <span className="absolute bottom-4 left-5 inline-flex items-center gap-1.5 text-[12px] font-semibold text-white">Template 5 <ArrowRight size={11} /></span>
              </Link>
              <Link to="/case-study" className="group relative min-h-[190px] overflow-hidden bg-[#1C1E53] lg:min-h-[220px]">
                <img src={projectB} alt="Project" className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]" />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#1C1E53]/90 to-transparent" />
                <span className="absolute bottom-4 left-5 inline-flex items-center gap-1.5 text-[12px] font-semibold text-white">Template 4 <ArrowRight size={11} /></span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-[#F4F6FC] py-[70px] text-center md:py-[78px]">
        <div className={container}>
          <p className="text-[11px] font-semibold text-[#6F7180]">Features</p>
          <h2 className={`${heading} mt-2 text-[28px] leading-[1.2] sm:text-[32px]`}>
            Design that solves<br className="hidden sm:block" /> problems, one product at a time
          </h2>
          <div className="mt-9 grid gap-[18px] text-left sm:grid-cols-2 lg:grid-cols-3">
            {featureItems.map(([title, text, Icon]) => (
              <article key={title} className="min-h-[170px] bg-white p-6">
                <Icon size={14} className="text-[#2405F2]" />
                <h3 className="mt-4 text-[15px] font-bold">{title}</h3>
                <p className="mt-2 text-[11px] leading-[1.6] text-[#282938]/60">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-[#FCD980]/10 py-[72px] md:py-[84px]">
        <div className={`${container} grid gap-10 lg:grid-cols-[.7fr_1.3fr] lg:gap-[60px]`}>
          <div>
            <h2 className={`${heading} text-[28px] leading-[1.2] sm:text-[32px]`}>What our clients<br />say about us</h2>
            <p className="mt-5 max-w-[690px] text-[17px] font-semibold leading-[1.55] sm:text-[18px]">
              “The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus.”
            </p>
          </div>
          <div className="flex items-center gap-3 self-end">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#D9D9DF] text-[11px] font-bold">JW</div>
            <div>
              <strong className="block text-[12px]">Jenny Wilson</strong>
              <span className="mt-0.5 block text-[10px] text-[#777985]">Vice President</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-[72px] md:py-[84px]">
        <div className={`${container} grid gap-12 lg:grid-cols-[.72fr_1.28fr] lg:gap-[60px]`}>
          <div>
            <h2 className={`${heading} text-[30px] leading-[1.15] sm:text-[34px]`}>Frequently asked questions</h2>
            <Link to="/contact" className="mt-5 inline-flex text-[13px] font-semibold text-[#2405F2]">Contact us for more info</Link>
          </div>
          <div className="border-t border-[#282938]/15">
            {faqs.map(([question, answer], index) => (
              <details key={`${question}-${index}`} className="group border-b border-[#282938]/15 py-[18px]">
                <summary className="grid cursor-pointer list-none grid-cols-[30px_1fr_16px] items-center gap-2.5 text-[13px] font-medium marker:hidden">
                  <span className="text-[#2405F2]">0{index + 1}</span>
                  <span>{question}</span>
                  <ChevronDown size={13} className="transition-transform group-open:rotate-180" />
                </summary>
                <p className="ml-10 mt-3 text-[11px] leading-[1.6] text-[#282938]/60">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-[72px] md:pb-[84px]">
        <div className={`${container} grid bg-[#1C1E53] text-white lg:grid-cols-2`}>
          <div className="relative min-h-[380px] overflow-hidden sm:min-h-[430px]">
            <img src={ctaImage} alt="Design work" className="absolute inset-0 h-full w-full object-cover object-center" />
            <div className="absolute inset-0 bg-[#1C1E53]/55" />
            <div className="relative z-10 flex h-full max-w-[450px] flex-col justify-center px-8 py-10 sm:px-11">
              <h2 className="text-[26px] font-bold leading-[1.15] tracking-[-.5px] sm:text-[29px]">Building stellar websites for early startups</h2>
              <p className="mt-4 text-[12px] leading-[1.6] text-white/70">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.
              </p>
            </div>
          </div>
          <div className="p-8 sm:p-11">
            <h3 className="text-[22px] font-bold sm:text-[24px]">Send an inquiry</h3>
            <p className="mt-2 text-[12px] leading-[1.5] text-white/65">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="mt-6 grid gap-4">
              <label className="text-[9px] text-white/70">Your name<input className="mt-1 block w-full border-0 border-b border-white/30 bg-transparent py-2 text-[11px] text-white outline-none placeholder:text-white/40 focus:border-white/70" placeholder="Your name" /></label>
              <label className="text-[9px] text-white/70">Email<input className="mt-1 block w-full border-0 border-b border-white/30 bg-transparent py-2 text-[11px] text-white outline-none placeholder:text-white/40 focus:border-white/70" placeholder="Email" /></label>
              <label className="text-[9px] text-white/70">Paste your Figma design URL<input className="mt-1 block w-full border-0 border-b border-white/30 bg-transparent py-2 text-[11px] text-white outline-none placeholder:text-white/40 focus:border-white/70" placeholder="Provide a link" /></label>
              <Link to="/contact" className="mt-1 inline-flex w-max items-center justify-center rounded-full bg-[#FCD980] px-6 py-3 text-[13px] font-semibold text-[#282938]">Get in touch</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="pb-[75px] md:pb-[84px]">
        <div className={container}>
          <h2 className={`${heading} mb-7 text-[30px] leading-[1.15] sm:text-[34px]`}>Our blog</h2>
          <div className="grid gap-7 md:grid-cols-3">
            {blogs.map(([image, title]) => (
              <Link to="/blog" className="group block" key={title}>
                <img src={image} alt="Blog post" className="h-[190px] w-full object-cover transition duration-500 group-hover:scale-[1.01]" />
                <small className="mt-4 block text-[9px] text-[#777985]">December 11, 2021</small>
                <h3 className="mt-2 text-[16px] font-bold leading-[1.4]">{title}</h3>
                <p className="mt-2 text-[11px] leading-[1.55] text-[#282938]/60">See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract.</p>
                <span className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-semibold">Read more <ArrowRight size={11} /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home
