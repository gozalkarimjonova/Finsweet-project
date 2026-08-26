import React from 'react'

function PrivacyPolicy() {
  return (
    <main className="w-full bg-white font-sans text-[#282938]">
      {/* Header Banner / Title Section */}
      <section className="py-12 md:py-16 text-center">
        <div className="mx-auto w-[calc(100%-40px)] max-w-[840px]">
          <h1 className="text-[36px] font-bold tracking-tight text-[#282938] sm:text-[44px] lg:text-[48px]">
            Privacy Policy
          </h1>
          <p className="mt-4 text-[14px] leading-relaxed text-[#282938]/70 sm:text-[16px]">
            When you're ready to go beyond prototyping in Figma, Webflow's ready to help you bring your
          </p>
        </div>
      </section>

      {/* Main Content Body */}
      <section className="pb-20 md:pb-28">
        <div className="mx-auto w-[calc(100%-40px)] max-w-[840px] space-y-10 text-[14px] leading-[1.7] text-[#282938]/80 sm:text-[15px]">
          {/* Section 1 */}
          <div className="space-y-4">
            <h2 className="text-[28px] font-bold tracking-tight text-[#282938] sm:text-[34px]">
              Lorem ipsum dolor.
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
            </p>
            <p>
              Sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>

          {/* Section 2 */}
          <div className="space-y-4">
            <h2 className="text-[28px] font-bold tracking-tight text-[#282938] sm:text-[34px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident. Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
            
            {/* Bullet list */}
            <ul className="mt-4 space-y-3 pl-2 text-[#282938]/80">
              <li className="flex items-start gap-2">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#282938] mt-2.5 flex-shrink-0" />
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#282938] mt-2.5 flex-shrink-0" />
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#282938] mt-2.5 flex-shrink-0" />
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</span>
              </li>
            </ul>

            <p className="mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default PrivacyPolicy