import Head from "next/head";
import react from "react";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import {
  ArrowPathIcon,
  Bars3Icon,
  CalendarIcon,
  ChartBarIcon,
  CursorArrowRaysIcon,
  PhoneIcon,
  PlayIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'

import { AiOutlineInstagram, AiFillFacebook, AiFillGithub, AiOutlineMail } from 'react-icons/ai';
import { BsFillMoonStarsFill } from "react-icons/bs";
import { envelope, phone } from '@heroicons/react/20/solid'
import { useState } from "react";
import Image from "next/image";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
import website3d from "../Assets/web report.png";
import PaintB from "../Assets/paint Bucket.png";
import coffee from "../Assets/coffee.png";
import DDLogo from "../public/DDLogo.png";
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'

const solutions = [
  {
    name: 'Home',
    description: 'Get a better understanding of where your traffic is coming from.',
    href: '/',
    icon: ChartBarIcon,
  },
  {
    name: 'Services',
    description: 'Speak directly to your customers in a more meaningful way.',
    href: '#ser',
    icon: CursorArrowRaysIcon,
  },
  {
    name: 'Our Work',
    description: "Your customers' data will be safe and secure.",
    href: '#work',
    icon: ShieldCheckIcon
  },
  {
    name: 'About',
    description: "Connect with third-party tools that you're already using.",
    href: '#about',
    icon: Squares2X2Icon,

  },
]
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  return (


    <Popover className=" bg-zinc-900">
      <div className={darkMode ? "dark" : ""}>
        <div className="mx-auto max-w-7xl px-7 sm:px-6 ">
          <div className="flex items-center justify-between py-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <a href="#">
                <span className="sr-only">Dooley Digital</span>
                <Image src={DDLogo} width={100} height={100} alt="DD logo" />
              </a>
            </div>
            <div className="-my-2 -mr-2 md:hidden">
              <Popover.Button className="inline-flex items-center justify-center rounded-md bg-zinc-900 p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-400 mb-3 mr-3">
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
            <Popover.Group as="nav" className="hidden space-x-10 md:flex">

              <a href="#" className="text-sm font-semibold text-gray-500 dark:text-white dark:hover:text-teal-400 hover:text-gray-900">
                Home
              </a>

              <a href="#ser" className="text-sm font-semibold text-gray-500 dark:text-white dark:hover:text-teal-400 hover:text-gray-900">
                Services
              </a>

              <a href="#work" className="text-sm font-semibold text-gray-500 dark:text-white dark:hover:text-teal-400 hover:text-gray-900">
                Our Work
              </a>
              <a href="#about" className="text-sm font-semibold text-gray-500 dark:text-white dark:hover:text-teal-400 hover:text-gray-900">
                About
              </a>


            </Popover.Group>

            <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
              <a>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-xl text-white dark:text-white dark:hover:text-teal-400"
                />
              </a>
              <a
                href="#contact"
                className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-teal-400 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-teal-600"
              >
                Contact
              </a>

            </div>
          </div>
        </div>

        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel focus className=" absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden">
            <div className=" divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pt-5 pb-6">
                <div className="flex items-center justify-between">
                  <div>
                  <Image src={DDLogo} width={100} height={100} className="h-8 w-auto" alt="Dooley Digital Services" />
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:text-teal-400 mb-3 mr-3">
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true"/>
                    </Popover.Button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-8">
                    {solutions.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
                      >
                        <item.icon className="h-6 w-6 flex-shrink-0 text-teal-400" aria-hidden="true" />
                        <span className="ml-3 text-base font-medium text-gray-900">{item.name}</span>
                      </a>
                    ))}
                  </nav>
                </div>
              </div>
            </div>

          </Popover.Panel>
        </Transition>
        
        {/* Website Start  */}

        <Head>
          <title>Dooley Digital Services</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className=" bg-white px-10 dark:bg-zinc-900 md:px-20 lg:px-40  mx-auto max-w-7xl sm:px-6 ">

          {/* Section 1  */}
          <section id="home" className="py-2">
            <div className="text-left p-10 py-10">
              <h2 className="text-5xl py-2 text-black font-medium dark:text-white md:text-6xl">
                Jordan <span className="text-teal-400">Dooley</span>
              </h2>
              <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
                Developer & Designer
              </h3>
              <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl md:text-l">
                Hi, I&apos;m a developer, designer based in the United Kingdom.
                I&apos;m the business owner Dooley Digital, where we develop amazing websites, mobile apps and software.
              </p>
              <div className="text-4xl flex justify-left gap-12 py-3 text-gray-600 dark:text-gray-400">
                <a href="mailto:Info@DooleyDigital.co.uk"><AiOutlineMail className=" dark:text-white hover:text-teal-500 dark:hover:text-teal-500" /></a>
                <a href="https://www.instagram.com/dooleydigital_/"><AiOutlineInstagram className=" dark:text-white hover:text-teal-500 dark:hover:text-teal-500" /></a>
                <a href="https://www.facebook.com/profile.php?id=100086924306047"><AiFillFacebook className=" dark:text-white hover:text-teal-500 dark:hover:text-teal-500" /></a>
                <a href="https://github.com/DooleyDigital/DooleyDigital"><AiFillGithub className=" dark:text-white hover:text-teal-500 dark:hover:text-teal-500" /></a>

              </div>
            </div>
          </section>

          {/* Section2  */}

          <section id="ser" >
            <div className="lg:flex gap-10 py-20">
              <div className="text-center shadow-lg p-10 rounded-3xl my-10  dark:bg-white flex-1">
                <Image src={website3d} width={100} height={100} alt="website icon" />
                <h3 className="text-lg font-medium pt-8 pb-2  ">
                  Website & Hosting
                </h3>
                <p className="py-2">
                We&apos;re on a mission to make high-quality websites that are accessible and easy to use, no matter what device you’re using.
                </p>
              </div>


              <div className="text-center shadow-lg p-10 rounded-3xl my-10  dark:bg-white flex-1">
                <Image src={PaintB} width={100} height={100} alt="Paint Icon"/>
                <h3 className="text-lg font-medium pt-8 pb-2  ">
                  Graphic Design
                </h3>
                <p className="py-2">
                Hands on design experience and knowledge of design principles to create the best quality product possible.
                </p>
              </div>


              <div className="text-center shadow-lg p-10 rounded-3xl my-10  dark:bg-white flex-1">
                <Image src={coffee} width={100} height={100} alt="Dev Icon" />
                <h3 className="text-lg font-medium pt-8 pb-2  ">
                  Mobile Apps & Software
                </h3>
                <p className="py-2">
                 Our apps are created for both B2B and B2C. We offer many different types of applications for various industries.
                </p>
              </div>
            </div>
          </section>

          <section id="about">
            <div className="text-left py-20" >
              <h2 className="text-5xl py2 text-black font-medium md:text-6xl dark:text-white">About</h2>
              <div className="border-b-2 w-12 mt-8 mb-3"></div>
              <div className="flex auto">
                <p className="text-md pt-5 leading-8 text-zinc-400 dark:text-gray-200 max-w-xl md:text-l">
                  I started my business to help all types of businesses big and small create websites, branding, marketing materials and apps. My goal is to exceed clients expectations with the personal touch that I bring to every project.

                  I believe in the value of long-standing relationships, which is why I take the time to get to know my clients, understand their goals and vision, and offer tailored solutions that will help them reach them—even if it means going above and beyond what they initially asked for.

                  I&apos;m also here to help you keep up with the times! Today&apos;s brand needs are changing faster than ever, so I&apos;m always on top of the latest trends in design, development, and marketing.

                  If you&apos;re ready to partner with a designer who shares your values, who believes in creating an amazing experience for each client instead of just churning out cookie-cutter products like most companies do these days… then <a href="#contact" className="text-teal-400 ">let&apos;s talk!</a>
                </p>

              </div>
            </div>
          </section>

          {/* Contact section  */}
          <section id="contact" className="py-20">
            <div className="rounded p-2 ">
              <div>
                  <h3 className="text-3xl py-2 mb-5 dark:text-white md:text-4xl font-medium text-center">Contact Us</h3>
              </div>

              <div class=" w-full md:w-106 md:max-w-full mx-auto">
                  <div class="p-6 sm:rounded-md bg-inherit rounded">
                    <form action="https://public.herotofu.com/v1/ff7a0c70-6cc1-11ed-a377-655c67143cec" method="post">
                      <label class="block mb-6">
                        <span class="text-white">Your name</span>
                        <input
                          name="name"
                          type="text"
                          class="
                                  pl-1
                                  block
                                  w-full
                                  mt-1
                                  border-2 border-teal-400
                                  rounded-md
                                  shadow-sm
                                  focus:border-blue-400
                                  focus:ring
                                  focus:ring-red-900
                                  focus:ring-opacity-50
                                  bg-transparent
                                  placeholder-gray-400
                                  text-white
                                "
                          placeholder="Joe Bloggs"
                          required
                        />
                      </label>
                      <label class="block mb-6">
                        <span class="text-white">Email address</span>
                        <input
                          name="email"
                          type="email"
                          class="
                                  pl-1
                                  block
                                  w-full
                                  mt-1
                                  border-2 border-teal-400
                                  rounded-md
                                  shadow-sm
                                  focus:border-blue-400
                                  focus:ring
                                  focus:ring-red-900
                                  focus:ring-opacity-50
                                  bg-transparent
                                  placeholder-gray-400
                                  text-white
                                    
                                  "
                          placeholder="Joe.bloggs@example.com"
                          required
                        />
                      </label>
                      <label class="block mb-6">
                        <span class="text-white">Contact Number</span>
                        <input
                          name="Phone"
                          type="Phone"
                          class="
                                  pl-1
                                  block
                                  w-full
                                  mt-1
                                  border-2 border-teal-400
                                  rounded-md
                                  shadow-sm
                                  focus:border-blue-400
                                  focus:ring
                                  focus:ring-red-900
                                  focus:ring-opacity-50
                                  bg-transparent
                                  placeholder-gray-400
                                  text-white
                                  "
                          placeholder="+44 7739366237"
                          required
                        />
                      </label>
                      <label class="block mb-6">
                        <span class="text-white">Message</span>
                        <textarea
                          name="message"
                          class=" 
                                  pl-1
                                  block
                                  w-full
                                  mt-1
                                  border-2 border-teal-400
                                  rounded-md
                                  shadow-sm
                                  focus:border-blue-400
                                  focus:ring
                                  focus:ring-red-900
                                  focus:ring-opacity-50
                                  bg-transparent
                                  placeholder-gray-400
                                  text-white
                                  "
                          rows="3"
                          placeholder="Tell us what about your project..."
                        ></textarea>
                      </label>
                      <div class="mb-6">
                        <button
                          type="submit"
                          class="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white
                                    h-10
                                    px-5
                                    rounded-lg
                                    transition-colors
                                    duration-150
                                    focus:shadow-outline
                                  "
                        >
                          Send Message
                        </button>
                      </div>
                    </form>
                  </div>
             </div>
            </div>
          </section>


          <section id="work" className="py-16">
            <div>
              <h3 className="text-3xl py-1 dark:text-white ">Recent Work</h3>
              <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                I offer from a wide range of services, including brand design,
                programming and teaching.
              </p>
            </div>
            <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
              <div className="basis-1/4 flex-1 dark:hover:opacity-50"><a href="https://highfieldcarsales.co.uk">
                <Image
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={web1}
                  alt="web1"
                />
                </a>
              </div>
              <div className="basis-1/4 flex-1 dark:hover:opacity-50">
                <Image
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={web2}
                  alt="web2"
                />
              </div>
              <div className="basis-1/4 flex-1 dark:hover:opacity-50">
                <Image
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={web3}
                  alt="web3"
                />
              </div>
              <div className="basis-1/4 flex-1 dark:hover:opacity-50">
                <Image
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={web4}
                  alt="web4"
                />
              </div>
              <div className="basis-1/4 flex-1 dark:hover:opacity-50">
                <Image
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={web5}
                  alt="web5"
                />
              </div>
              <div className="basis-1/4 flex-1 dark:hover:opacity-50">
                <Image
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={web6}
                  alt="web6"
                />
              </div>
            </div>
          </section>
          

          {/* Footer Start  */}
          <section>
            <div className="mt-10 border-t">
              <div className="py-10 flex flex-col items-center justify-between sm:flex-row gap-4">

                <div class="flex gap-6 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                  <a class="transition hover:text-teal-500 dark:hover:text-teal-400" href="#about">About</a>
                  <a class="transition hover:text-teal-500 dark:hover:text-teal-400" href="#work">Projects</a>
                  <a class="transition hover:text-teal-500 dark:hover:text-teal-400" href="#ser">Services</a>
                  <a class="transition hover:text-teal-500 dark:hover:text-teal-400" href="https://billing.stripe.com/p/login/fZe29oaG7a1QbEA5kk">Client Portal</a>
                </div>
                   
                <div className="">
                   <h3 className="text-gray-500">© 2022 DooleyDigital. All rights reserved.</h3>
                </div>
              </div>
            </div>
          </section>

        </main>
      </div>
    </Popover>

  )
}
