import React, { useEffect, useState } from "react";
import logo from "/logo.png";
import qalam from "/qalam.png";
import kalender from "/kalendar.png";
import heroimg from "/heroimg.png";
import burger from "/burger.png";
import logos from "/Logos.png";
import suyox from "/suyox.png";
import yashil from "/yashil.png";
import pushti from "/pushti.png";
import sariq from "/sariq.png";
import muz from "/muz.png";
import Loading from "./loading/Loading";
import suv from "/suv.png";
import tuvak from "/gultuvak.png";
import yolyol from "/yolyol.png";
import sharik from "/sharik.png";
import man1 from "/man1.png";
import man2 from "/man2.png";
import man3 from "/man3.png";
import man4 from "/man4.png";
import man5 from "/man5.png";
import man6 from "/man6.png";
import facebook from "/facebook.png";
import instagram from "/instagram.png";
import twitter from "/twitter.png";
import xabar from "/xabar.png";

const App = () => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }, []);
    const users = [
      {
        id:1,
        name: "Galaxia Branding",
      },
      {
        id:2,
        name: "John Mayer NYC",
      },
      {
        id:3,
        name: "Nayzak Patterns",
      },
      {
        id:4,
        name: "Crave Chips",
      },
    ]
  return (
    <div>
    {loading ? (
      <Loading />
    ) : (
      <>
        <header className="bg-black">
          <section className="container py-[40px] px-[30px] md:px-[100px] flex flex-row items-center justify-between">
            <img src={logo} />
            <div className="text-white flex flex-row gap-[50px]">
              <ul className="hidden lg:flex flex-row items-center gap-[20px]">
                <li className="font-semibold hover:text-gray-500 cursor-pointer duration-300">
                  Projects
                </li>
                <li className="font-semibold hover:text-gray-500 cursor-pointer duration-300">
                  About
                </li>
                <li className="font-semibold hover:text-gray-500 cursor-pointer duration-300">
                  Team
                </li>
                <li className="font-semibold hover:text-gray-500 cursor-pointer duration-300">
                  Contact
                </li>
              </ul>
              <div className="flex flex-row gap-[30px]">
                <button className="hidden md:flex flex-row items-center gap-[5px] bg-gray-600 py-[10px] px-[20px] rounded-lg hover:bg-gray-500 duration-300">
                  <img src={qalam} />
                  Services
                </button>
                <button className="hidden md:flex flex-row items-center gap-[5px] bg-gray-600 py-[10px] px-[20px] rounded-lg hover:bg-gray-500 duration-300">
                  <img src={kalender} />
                  Get in touch
                </button>
                <img className="w-[50px] xl:hidden" src={burger} />
              </div>
            </div>
          </section>
        </header>
        <main className="bg-black py-[30px]">
          <section className="container flex flex-col justify-center items-center py-[30px] gap-[80px]">
            <div className="w-none md:w-[770px]">
              <h1 className="text-white text-5xl md:text-8xl font-semibold text-center">
                Krate design and motion studio
              </h1>
            </div>
            <img className="w-[1000px]" src={heroimg} />
          </section>
          <section className="container px-[20px] sm:flex flex-col gap-[20px] text-center items-center lg:flex-row lg:items-center xl:text-start justify-between xl:px-[100px] py-[40px]">
            <div className="w-none sm:w-[520px]">
              <h1 className="text-white text-2xl font-semibold">
                We are passionate about creating visually stunning and
                functional solutions that communicate effectively. I have a
                keen eye for detail and a deep understanding of design
                principles, which I use to deliver projects that exceed my
                clients' expectations.
              </h1>
            </div>
            <img src={logos} />
          </section>
          <section className="container px-[30px] md:px-[100px] py-[50px]">
            <div>
              <button className="text-white text-lg">→ Our Services</button>
            </div>
            <div className="text-white flex flex-row items-center justify-between border-[1px] border-b-[#282828] border-transparent mt-[40px]">
              <div className="flex flex-row items-center gap-[20px] mb-[10px]">
                <img className="w-[100px] hidden md:flex" src={suyox} />
                <h1 className="text-xl">Web & Mobile Design</h1>
              </div>
              <h1 className="text-3xl cursor-pointer text-[#282828] mb-[10px]">
                +
              </h1>
            </div>
            <div className="text-white flex flex-row items-center justify-between border-[1px] border-b-[#282828] border-transparent mt-[40px]">
              <div className="flex flex-row items-center gap-[20px] mb-[10px]">
                <img className="w-[100px] hidden md:flex" src={yashil} />
                <h1 className="text-xl">Brand Identity</h1>
              </div>
              <h1 className="text-3xl cursor-pointer text-[#282828] mb-[10px]">
                +
              </h1>
            </div>
            <div className="text-white flex flex-row items-center justify-between border-[1px] border-b-[#282828] border-transparent mt-[40px]">
              <div className="flex flex-row items-center gap-[20px] mb-[10px]">
                <img className="w-[100px] hidden md:flex" src={pushti} />
                <h1 className="text-xl">App Development</h1>
              </div>
              <h1 className="text-3xl cursor-pointer text-[#282828] mb-[10px]">
                +
              </h1>
            </div>
            <div className="text-white flex flex-row items-center justify-between border-[1px] border-b-[#282828] border-transparent mt-[40px]">
              <div className="flex flex-row items-center gap-[20px] mb-[10px]">
                <img className="w-[100px] hidden md:flex" src={sariq} />
                <h1 className="text-xl">Consultancy</h1>
              </div>
              <h1 className="text-3xl cursor-pointer text-[#282828] mb-[10px]">
                +
              </h1>
            </div>
            <div className="text-white flex flex-row items-center justify-between border-[1px] border-b-[#282828] border-transparent mt-[40px]">
              <div className="flex flex-row items-center gap-[20px] mb-[10px]">
                <img className="w-[100px] hidden md:flex" src={muz} />
                <h1 className="text-xl">Packaging</h1>
              </div>
              <h1 className="text-3xl cursor-pointer text-[#282828] mb-[10px]">
                +
              </h1>
            </div>
          </section>
          <section className="container px-[20px] sm:px-[100px] mt-[50px] py-[100px]"> {/*----map---*/}
            <div>
              <button className="text-white text-lg">→ Recent Work</button>
            </div>
            <div className="flex flex-row flex-wrap gap-[30px] mt-[50px]">
              <div className="text-white border-[1px] border-gray-500 w-[500px] rounded-xl">
                <img className="rounded-t-xl" src={suv} />
                <h1 className="py-[30px] px-[20px] text-lg font-semibold">
                  {users[0].name}
                </h1>
              </div>
              <div className="text-white border-[1px] border-gray-500 w-[500px] rounded-xl">
                <img className="rounded-t-xl" src={tuvak} />
                <h1 className="py-[30px] px-[20px] text-lg font-semibold">
                {users[1].name}
                </h1>
              </div>
              <div className="text-white border-[1px] border-gray-500 w-[500px] rounded-xl">
                <img className="rounded-t-xl" src={yolyol} />
                <h1 className="py-[30px] px-[20px] text-lg font-semibold">
                {users[2].name}
                </h1>
              </div>
              <div className="text-white border-[1px] border-gray-500 w-[500px] rounded-xl">
                <img className="rounded-t-xl" src={sharik} />
                <h1 className="py-[30px] px-[20px] text-lg font-semibold">
                {users[3].name}
                </h1>
              </div>
              <button className="text-white border-[1px] border-gray-500 w-[1030px] h-[50px] rounded-full">
                View all work
              </button>
            </div>
          </section>
          <section className="container px-[20px] sm:px-[100px] py-[50px]">
            <div>
              <button className="text-white text-lg">→ Recent Work</button>
            </div>
            <div className="flex justify-center sm:flex-row flex-wrap gap-[30px] lg:justify-between">
              <h1 className="text-white w-[400px] text-3xl font-semibold">
                We are passionate about creating visually stunning and
                functional solutions that communicate effectively.
              </h1>
              <div className="border-[1px] border-gray-500 w-[290px] rounded-xl">
                <img className="rounded-t-xl" src={man1} />
                <div className="text-white py-[10px] px-[20px]">
                  <h1>Jocelyn Schleifer</h1>
                  <h1 className="text-[#9D9FA1]">Managing Director</h1>
                </div>
              </div>
              <div className="border-[1px] border-gray-500 w-[290px] rounded-xl">
                <img className="rounded-t-xl" src={man2} />
                <div className="text-white py-[10px] px-[20px]">
                  <h1>Jocelyn Schleifer</h1>
                  <h1 className="text-[#9D9FA1]">Managing Director</h1>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap justify-center lg: gap-[20px] mt-[40px]">
              <div className="border-[1px] border-gray-500 w-[240px] rounded-xl">
                <img className="rounded-t-xl" src={man3} />
                <div className="text-white py-[10px] px-[20px]">
                  <h1>Jocelyn Schleifer</h1>
                  <h1 className="text-[#9D9FA1]">Managing Director</h1>
                </div>
              </div>
              <div className="border-[1px] border-gray-500 w-[240px] rounded-xl">
                <img className="rounded-t-xl" src={man4} />
                <div className="text-white py-[10px] px-[20px]">
                  <h1>Jocelyn Schleifer</h1>
                  <h1 className="text-[#9D9FA1]">Managing Director</h1>
                </div>
              </div>
              <div className="border-[1px] border-gray-500 w-[240px] rounded-xl">
                <img className="rounded-t-xl" src={man5} />
                <div className="text-white py-[10px] px-[20px]">
                  <h1>Jocelyn Schleifer</h1>
                  <h1 className="text-[#9D9FA1]">Managing Director</h1>
                </div>
              </div>
              <div className="border-[1px] border-gray-500 w-[240px] rounded-xl">
                <img className="rounded-t-xl" src={man6} />
                <div className="text-white py-[10px] px-[20px]">
                  <h1>Jocelyn Schleifer</h1>
                  <h1 className="text-[#9D9FA1]">Managing Director</h1>
                </div>
              </div>
            </div>
            <button className="text-white border-[1px] border-gray-500 w-full h-[50px] rounded-full mt-[40px]">
              See all members
            </button>
          </section>
          <section className="bg-[url('/lamp.png')] py-[260px] container w-none sm:w-[1280px] h-[545px] flex flex-col justify-center items-center">
            <h1 className="text-white text-7xl w-none sm:w-[470px] text-center font-semibold">
              Have an idea? Let’s talk.
            </h1>
            <p className="text-white w-none sm:w-[470px] text-center mt-[30px]">
              Visually attractive design from concept to final result. We
              create solutions that are bold and forward-looking.
            </p>
            <button className="text-black bg-white flex felx-row items-center py-[10px] px-[20px] rounded-full mt-[30px] hover:bg-[#ffffffb2] duration-300">Free Consultation</button>
          </section>
        </main>
    <footer className="bg-black hidden xl:flex py-[100px]">
      <section className="container flex flex-col flex-wrap">
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-[20px]"><img src={logo} /><h1 className="text-white text-2xl">Compser</h1></div>
          <div className="flex flex-row items-center gap-[30px]">
            <div className="text-white">
            <ul className="hidden lg:flex flex-row items-center gap-[20px]">
                <li className="font-semibold hover:text-gray-500 cursor-pointer duration-300">
                  Projects
                </li>
                <li className="font-semibold hover:text-gray-500 cursor-pointer duration-300">
                  About
                </li>
                <li className="font-semibold hover:text-gray-500 cursor-pointer duration-300">
                  Team
                </li>
                <li className="font-semibold hover:text-gray-500 cursor-pointer duration-300">
                  Contact
                </li>
                <li className="font-semibold hover:text-gray-500 cursor-pointer duration-300">
                Services
                </li>
              </ul>
            </div>
            <div className="flex flex-col sm:flex-row gap-[10px]">
              <a href="https://facebook.com"><img className="cursor-pointer" src={facebook} /></a>
              <a href="https://instagram.com"><img className="cursor-pointer" src={instagram} /></a>
              <a href="https://x.com"><img className="cursor-pointer" src={twitter} /></a>
              <a href="https://wattsap.com"><img className="cursor-pointer" src={xabar} /></a>
            </div>
          </div>
      </div>
          <div className="text-white mt-[50px] flex flex-row gap-[40px] px-[100px]">
            <a href="https://hello@Compser.io">hello@Compser.io</a>
            <span>© 2088 Nayzak Design</span>
          </div>
      </section>
    </footer>
      </>
    )}
  </div>
  )
}

export default App;
