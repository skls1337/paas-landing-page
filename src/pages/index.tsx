/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { useRef, useState } from 'react';

import { Button } from 'primereact/button';
import { Divider } from 'primereact/divider';
import { Ripple } from 'primereact/ripple';
import { StyleClass } from 'primereact/styleclass';


import { classNames } from 'primereact/utils';

const LandingPage = () => {
  const [isHidden, setIsHidden] = useState(false);

  const menuRef = useRef<HTMLElement | null>(null);

  const toggleMenuItemClick = () => {
    setIsHidden((prevState) => !prevState);
  };
  const handleClick = () => {
    window.location.href = 'https://paas-resume-checker-fe-lx8z.vercel.app'
  }

  return (
    <div className="surface-0 flex justify-content-center">
      <div id="home" className="landing-wrapper overflow-hidden">
        <div className="py-4 px-4 mx-0 md:mx-6 lg:mx-8 lg:px-8 flex align-items-center justify-content-between relative lg:static">
          <Link href="/" className="flex align-items-center">
            <img src={`/layout/images/dark-logo.png`} alt="Sakai Logo" height="50" className="mr-0 lg:mr-2" />
          </Link>
          <StyleClass nodeRef={menuRef as any} selector="@next" enterClassName="hidden" leaveToClassName="hidden" hideOnOutsideClick>
            <i ref={menuRef} className="pi pi-bars text-4xl cursor-pointer block lg:hidden text-700"></i>
          </StyleClass>
          <div className={classNames('align-items-center surface-0 flex-grow-1 justify-content-between hidden lg:flex absolute lg:static w-full left-0 px-6 lg:px-0 z-2', { hidden: isHidden })} style={{ top: '100%' }}>
            <ul className="list-none p-0 m-0 flex lg:align-items-center select-none flex-column lg:flex-row cursor-pointer">
              <li>
                <a href="#home" onClick={toggleMenuItemClick} className="p-ripple flex m-0 md:ml-5 px-0 py-3 text-900 font-medium line-height-3 no-underline">
                  <span>Home</span>
                  <Ripple />
                </a>
              </li>
              <li>
                <a href="#features" onClick={toggleMenuItemClick} className="p-ripple flex m-0 md:ml-5 px-0 py-3 text-900 font-medium line-height-3 no-underline">
                  <span>Features</span>
                  <Ripple />
                </a>
              </li>
              <li>
                <a href="#highlights" onClick={toggleMenuItemClick} className="p-ripple flex m-0 md:ml-5 px-0 py-3 text-900 font-medium line-height-3 no-underline">
                  <span>Highlights</span>
                  <Ripple />
                </a>
              </li>
              <li>
                <a href="#pricing" onClick={toggleMenuItemClick} className="p-ripple flex m-0 md:ml-5 px-0 py-3 text-900 font-medium line-height-3 no-underline">
                  <span>Pricing</span>
                  <Ripple />
                </a>
              </li>
            </ul>
            <div className="flex justify-content-between lg:block border-top-1 lg:border-top-none surface-border py-3 lg:py-0 mt-3 lg:mt-0">
              <Button label="Login" text rounded className="border-none font-light line-height-2 text-purple-700" onClick={handleClick}></Button>
              <Button label="Register" rounded className="border-none ml-5 font-light line-height-2 bg-purple-700 text-white" onClick={handleClick}></Button>
            </div>
          </div>
        </div>

        <div
          id="hero"
          className="flex flex-column pt-4 px-4 lg:px-8 overflow-hidden"
          style={{ background: 'linear-gradient(0deg, rgba(139, 92, 246, 0.2), rgba(139, 92, 246, 0.2)), radial-gradient(77.36% 256.97% at 77.36% 57.52%, #EEEFAF 0%, #C3E3FA 100%)', clipPath: 'ellipse(150% 87% at 93% 13%)' }}
        >
          <div className="mx-4 md:mx-8 mt-0 md:mt-4">
            <h1 className="text-6xl font-bold text-gray-900 line-height-2">
              <span className="font-light block">Resume Analyzing Solution</span>powered by AI
            </h1>
            <p className="font-normal text-2xl line-height-3 md:mt-3 text-gray-700">An NLP based platform that can score your resume based on a job description </p>
            <Button type="button" label="Get Started" rounded className="text-xl border-none mt-3 bg-purple-700 font-normal line-height-3 px-3 text-white" onClick={handleClick}></Button>
          </div>
          <div className="flex justify-content-center md:justify-content-end">
            <img src="/demo/images/landing/parsing.png" alt="Hero Image" className="w-9 md:w-auto" />
          </div>
        </div>

        <div id="features" className="py-4 px-4 lg:px-8 mt-5 mx-0 lg:mx-8">
          <div className="grid justify-content-center">
            <div className="col-12 text-center mt-8 mb-4">
              <h2 className="text-900 font-normal mb-2">Marvelous Features</h2>
              <span className="text-600 text-2xl">Discover the extraordinary capabilities of our platform's marvelous features. Say goodbye to manual screening and hello to a streamlined hiring process that saves you time and effort.</span>
            </div>

            <div className="col-12 md:col-12 lg:col-4 p-0 lg:pr-5 lg:pb-5 mt-4 lg:mt-0">
              <div
                style={{
                  height: '160px',
                  padding: '2px',
                  borderRadius: '10px',
                  background: 'linear-gradient(90deg, rgba(253, 228, 165, 0.2), rgba(187, 199, 205, 0.2)), linear-gradient(180deg, rgba(253, 228, 165, 0.2), rgba(187, 199, 205, 0.2))'
                }}
              >
                <div className="p-3 surface-card h-full" style={{ borderRadius: '8px' }}>
                  <div className="flex align-items-center justify-content-center bg-yellow-200 mb-3" style={{ width: '3.5rem', height: '3.5rem', borderRadius: '10px' }}>
                    <i className="pi pi-fw pi-users text-2xl text-yellow-700"></i>
                  </div>
                  <h5 className="mb-2 text-900">Easy to Use</h5>
                  <span className="text-600">User-friendly interface for easy navigation.</span>
                </div>
              </div>
            </div>

            <div className="col-12 md:col-12 lg:col-4 p-0 lg:pr-5 lg:pb-5 mt-4 lg:mt-0">
              <div
                style={{
                  height: '160px',
                  padding: '2px',
                  borderRadius: '10px',
                  background: 'linear-gradient(90deg, rgba(145,226,237,0.2),rgba(251, 199, 145, 0.2)), linear-gradient(180deg, rgba(253, 228, 165, 0.2), rgba(172, 180, 223, 0.2))'
                }}
              >
                <div className="p-3 surface-card h-full" style={{ borderRadius: '8px' }}>
                  <div className="flex align-items-center justify-content-center bg-cyan-200 mb-3" style={{ width: '3.5rem', height: '3.5rem', borderRadius: '10px' }}>
                    <i className="pi pi-fw pi-palette text-2xl text-cyan-700"></i>
                  </div>
                  <h5 className="mb-2 text-900">Fresh Design</h5>
                  <span className="text-600">Fluid and intuitive user experience design.</span>
                </div>
              </div>
            </div>



            <div className="col-12 md:col-12 lg:col-4 p-0 lg:pr-5 lg:pb-5 mt-4 lg:mt-0">
              <div
                style={{
                  height: '160px',
                  padding: '2px',
                  borderRadius: '10px',
                  background: 'linear-gradient(90deg, rgba(187, 199, 205, 0.2),rgba(251, 199, 145, 0.2)), linear-gradient(180deg, rgba(253, 228, 165, 0.2),rgba(145, 210, 204, 0.2))'
                }}
              >
                <div className="p-3 surface-card h-full" style={{ borderRadius: '8px' }}>
                  <div className="flex align-items-center justify-content-center bg-bluegray-200 mb-3" style={{ width: '3.5rem', height: '3.5rem', borderRadius: '10px' }}>
                    <i className="pi pi-fw pi-id-card text-2xl text-bluegray-700"></i>
                  </div>
                  <h5 className="mb-2 text-900">Responsive Layout</h5>
                  <span className="text-600">Seamless cross-device experience with responsive layout.</span>
                </div>
              </div>
            </div>

            <div className="col-12 md:col-12 lg:col-4 p-0 lg:pr-5 lg:pb-5 mt-4 lg:mt-0">
              <div
                style={{
                  height: '160px',
                  padding: '2px',
                  borderRadius: '10px',
                  background: 'linear-gradient(90deg, rgba(187, 199, 205, 0.2),rgba(246, 158, 188, 0.2)), linear-gradient(180deg, rgba(145, 226, 237, 0.2),rgba(160, 210, 250, 0.2))'
                }}
              >
                <div className="p-3 surface-card h-full" style={{ borderRadius: '8px' }}>
                  <div className="flex align-items-center justify-content-center bg-orange-200 mb-3" style={{ width: '3.5rem', height: '3.5rem', borderRadius: '10px' }}>
                    <i className="pi pi-fw pi-star text-2xl text-orange-700"></i>
                  </div>
                  <h5 className="mb-2 text-900">Clean Code</h5>
                  <span className="text-600">Efficient and concise code implementation.</span>
                </div>
              </div>
            </div>

            <div className="col-12 md:col-12 lg:col-4 p-0 lg:pr-5 mt-4 lg:mt-0">
              <div
                style={{
                  height: '160px',
                  padding: '2px',
                  borderRadius: '10px',
                  background: 'linear-gradient(90deg, rgba(145, 210, 204, 0.2), rgba(212, 162, 221, 0.2)), linear-gradient(180deg, rgba(251, 199, 145, 0.2), rgba(160, 210, 250, 0.2))'
                }}
              >
                <div className="p-3 surface-card h-full" style={{ borderRadius: '8px' }}>
                  <div className="flex align-items-center justify-content-center bg-blue-200 mb-3" style={{ width: '3.5rem', height: '3.5rem', borderRadius: '10px' }}>
                    <i className="pi pi-fw pi-globe text-2xl text-blue-700"></i>
                  </div>
                  <h5 className="mb-2 text-900">Modern Practices</h5>
                  <span className="text-600">Integration of modern industry standards.</span>
                </div>
              </div>
            </div>

            <div className="col-12 md:col-12 lg:col-4 p-0 lg-4 mt-4 lg:mt-0">
              <div
                style={{
                  height: '160px',
                  padding: '2px',
                  borderRadius: '10px',
                  background: 'linear-gradient(90deg, rgba(160, 210, 250, 0.2), rgba(212, 162, 221, 0.2)), linear-gradient(180deg, rgba(246, 158, 188, 0.2), rgba(212, 162, 221, 0.2))'
                }}
              >
                <div className="p-3 surface-card h-full" style={{ borderRadius: '8px' }}>
                  <div className="flex align-items-center justify-content-center bg-purple-200 mb-3" style={{ width: '3.5rem', height: '3.5rem', borderRadius: '10px' }}>
                    <i className="pi pi-fw pi-eye text-2xl text-purple-700"></i>
                  </div>
                  <h5 className="mb-2 text-900">Privacy</h5>
                  <span className="text-600">Upholding strict confidentiality standards.</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="highlights" className="py-4 px-4 lg:px-8 mx-0 my-6 lg:mx-8">
          <div className="text-center">
            <h2 className="text-900 font-normal mb-2">Powerful Everywhere</h2>
            <span className="text-600 text-2xl">Harness the power of our platform's robust functionalities wherever you are, ensuring that you have the tools you need at your fingertips.</span>
          </div>

          <div className="grid mt-8 pb-2 md:pb-8">
            <div className="flex justify-content-center col-12 lg:col-6 bg-purple-100 p-0 flex-order-1 lg:flex-order-0" style={{ borderRadius: '8px' }}>
              <img src="/demo/images/landing/phone.png" className="w-11" alt="mockup mobile" />
            </div>

            <div className="col-12 lg:col-6 my-auto flex flex-column lg:align-items-end text-center lg:text-right">
              <div className="flex align-items-center justify-content-center bg-purple-200 align-self-center lg:align-self-end" style={{ width: '4.2rem', height: '4.2rem', borderRadius: '10px' }}>
                <i className="pi pi-fw pi-mobile text-5xl text-purple-700"></i>
              </div>
              <h2 className="line-height-1 text-900 text-4xl font-normal">Power at Your Fingertips, Anywhere</h2>
              <span className="text-700 text-2xl line-height-3 ml-0 md:ml-2" style={{ maxWidth: '650px' }}>
                Whether you're in the office or on the move, our platform's powerful capabilities are there to support you, providing reliable and effective CV analysis wherever you go.
              </span>
            </div>
          </div>

          <div className="grid my-8 pt-2 md:pt-8">
            <div className="col-12 lg:col-6 my-auto flex flex-column text-center lg:text-left lg:align-items-start">
              <div className="flex align-items-center justify-content-center bg-yellow-200 align-self-center lg:align-self-start" style={{ width: '4.2rem', height: '4.2rem', borderRadius: '10px' }}>
                <i className="pi pi-fw pi-desktop text-5xl text-yellow-700"></i>
              </div>
              <h2 className="line-height-1 text-900 text-4xl font-normal">AI's Dynamic Symphony</h2>
              <span className="text-700 text-2xl line-height-3 mr-0 md:mr-2" style={{ maxWidth: '650px' }}>
                Unleash the Power of Flexibility: empowering your journey with our platform's mighty capabilities, ensuring reliable and effective CV analysis wherever you roam.
              </span>
            </div>

            <div className="flex justify-content-end flex-order-1 sm:flex-order-2 col-12 lg:col-6 bg-yellow-100 p-0" style={{ borderRadius: '8px' }}>
              <img src="/demo/images/landing/banner.png" className="w-9" alt="mockup" />
            </div>
          </div>
        </div>

        <div id="pricing" className="py-4 px-4 lg:px-8 my-2 md:my-4">
          <div className="text-center">
            <h2 className="text-900 font-normal mb-2">Pricing Plans</h2>
            <span className="text-600 text-2xl">Choose your plan</span>
          </div>

          <div className="grid justify-content-between mt-8 md:mt-0">
            <div className="col-12 lg:col-4 p-0 md:p-3">
              <div className="p-3 flex flex-column border-200 pricing-card cursor-pointer border-2 hover:border-primary transition-duration-300 transition-all">
                <h3 className="text-900 text-center my-5">Basic</h3>
                <img src="/demo/images/landing/free.svg" className="w-10 h-10 mx-auto" alt="free" />
                <div className="my-5 text-center">
                  <span className="text-5xl font-bold mr-2 text-900">$5</span>
                  <span className="text-600">per month</span>
                  <Button label="Get Started" rounded className="block mx-auto mt-4 border-none ml-3 font-light line-height-2 bg-purple-700 text-white" onClick={handleClick}></Button>
                </div>
                <Divider className="w-full bg-surface-200"></Divider>
                <ul className="my-5 list-none p-0 flex text-900 flex-column">
                  <li className="py-2">
                    <i className="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                    <span className="text-xl line-height-3">150 searches</span>
                  </li>
                  <li className="py-2">
                    <i className="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                    <span className="text-xl line-height-3">Access to base GPT model</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-12 lg:col-4 p-0 md:p-3 mt-4 md:mt-0">
              <div className="p-3 flex flex-column border-200 pricing-card cursor-pointer border-2 hover:border-primary transition-duration-300 transition-all">
                <h3 className="text-900 text-center my-5">Premium</h3>
                <img src="/demo/images/landing/startup.svg" className="w-10 h-10 mx-auto" alt="startup" />
                <div className="my-5 text-center">
                  <span className="text-5xl font-bold mr-2 text-900">$29</span>
                  <span className="text-600">per month</span>
                  <Button label="Get Started" rounded className="block mx-auto mt-4 border-none ml-3 font-light line-height-2 bg-purple-700 text-white" onClick={handleClick}></Button>
                </div>
                <Divider className="w-full bg-surface-200"></Divider>
                <ul className="my-5 list-none p-0 flex text-900 flex-column">
                  <li className="py-2">
                    <i className="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                    <span className="text-xl line-height-3">Unlimited searches</span>
                  </li>
                  <li className="py-2">
                    <i className="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                    <span className="text-xl line-height-3">Access to both base and latest GPT model</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-12 lg:col-4 p-0 md:p-3 mt-4 md:mt-0">
              <div className="p-3 flex flex-column border-200 pricing-card cursor-pointer border-2 hover:border-primary transition-duration-300 transition-all">
                <h3 className="text-900 text-center my-5">Enterprise</h3>
                <img src="/demo/images/landing/enterprise.svg" className="w-10 h-10 mx-auto" alt="enterprise" />
                <div className="my-5 text-center">
                  <span className="text-5xl font-bold mr-2 text-900">$49</span>
                  <span className="text-600">per month</span>
                  <Button label="Get Started" rounded className="block mx-auto mt-4 border-none ml-3 font-light line-height-2 bg-purple-700 text-white" onClick={handleClick}></Button>
                </div>
                <Divider className="w-full bg-surface-200"></Divider>
                <ul className="my-5 list-none p-0 flex text-900 flex-column">
                  <li className="py-2">
                    <i className="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                    <span className="text-xl line-height-3">Includes everything from Premium plan</span>
                  </li>
                  <li className="py-2">
                    <i className="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                    <span className="text-xl line-height-3">Special offer for businesses</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="py-4 px-4 mx-0 mt-8 lg:mx-8">
          <div className="grid justify-content-between">
            <div className="col-12 md:col-2" style={{ marginTop: '-1.5rem' }}>
              <Link href="/" className="flex align-items-center">
                <img src={`/layout/images/dark-logo.png`} alt="Sakai Logo" height="50" className="mr-0 lg:mr-2" />
              </Link>
            </div>

            <div>© Andy Grecu 2023</div>

            <div className='flex gap-2 align-items-center'>
              Socials
              <i className="pi pi-github cursor-pointer" style={{ fontSize: "2rem" }} onClick={() => window.location.href = "https://github.com/skls1337"}></i>
              <i className="pi pi-linkedin cursor-pointer" style={{ fontSize: "2rem" }} onClick={() => window.location.href = "https://www.linkedin.com/in/andy-grecu/"}></i>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
};



export default LandingPage;