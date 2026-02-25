import Image from "next/image";
import Link from "next/link";
import Button from "../components/Button"
import Dropdown from "../components/Dropdown";
import Header from "../components/Header";

export default function Home() {
  return (
    <section className="bg-[#FFFAEE]  text-black font-normal">
      {/* landing page */}
      <section className="flex flex-col min-h-screen md:flex-row items-center justify-between bg-[linear-gradient(270deg,#FFFFFF_22.69%,rgba(255,201,67,0.9)_100%)] p-10">

        {/* left: text content */}
        <div className="w-full md:w-1/2 text-center md:text-left md:pr-10 md:ml-20">
          <h1 className="text-[#830033] font-[Oleo_Script_Swash_Caps] font-bold text-[96px] mb-1">Kalamandapam</h1>
          <h2 className="text-[48px] mb-4">Kuchipudi Dance School</h2>

          <p className="text-[32px] leading-relaxed mb-8">Discover the vibrant world of Kuchipudi dance at our studio in Sammamish, Washington.</p>
          <Button text="Learn More" link="/about">Learn More</Button>
        </div>

        {/* right: dancer image */}
        <div className="h-full md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0 w-[50vh]">
          <img
            src = "/landingImage.png"
            alt = "kuchipudi dancer image"
            className = "h-full object-contain"
          ></img>
        </div>
      </section>

      {/* message */}
      <div className="flex h-107 justify-center items-center p-10 gap-2.5 mx-auto">
        <p className="text-center text-[32px] leading-12">
          At Kalamandapam, we believe in the power of dance to inspire, educate, and connect people. Our experienced
          instructors are passionate about sharing their knowledge and expertise, ensuring that each student
          recieves personalized attention to develop their skills, grace, and confidence. Through a blend of traditional
          techniques and modern teaching methods, we create a dyanmic learning experience that celebrate the heritage of Kuchipudi
          while encouraging individual expression.
        </p>
      </div>

      {/* classes offered */}
      <section className="py-16 bg-[#FFE299]">
        <div className="max-w-6xl mx-auto px-6 flex flex-col items-center text-center">

          {/* Title */}
          <div className="mb-12">
            <Header>Classes Offered</Header>
          </div>

          {/* Class Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full">

            {/* Beginner */}
            <div className="bg-white rounded-t-[10px] shadow-md overflow-hidden transform transition duration-300 hover:scale-105 flex flex-col">
              <div className="relative h-82.25">
                <Image
                  src="/placeholder.jpg"
                  alt="Beginner Class"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-2.5 h-14.75 bg-[#830033] flex items-center justify-center">
                <p className="text-[32px] font-bold text-white">Beginner</p>
              </div>
              <div className="bg-[#FFFAEE] p-6 rounded-b-[10px] h-62.75 text-[20px] text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
            </div>

            {/* Intermediate */}
            <div className="bg-white rounded-t-[10px] shadow-md overflow-hidden transform transition duration-300 hover:scale-105 flex flex-col">
              <div className="relative h-82.25">
                <Image
                  src="/placeholder.jpg"
                  alt="Intermediate Class"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-2.5 h-14.75 bg-[#830033] flex items-center justify-center">
                <p className="text-[32px] font-bold text-white">Intermediate</p>
              </div>
              <div className="bg-[#FFFAEE] p-6 rounded-b-[10px] h-62.75 text-[20px] text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
            </div>

            {/* Advanced */}
            <div className="bg-white rounded-t-[10px] shadow-md overflow-hidden transform transition duration-300 hover:scale-105 flex flex-col">
              <div className="relative h-82.25">
                <Image
                  src="/placeholder.jpg"
                  alt="Advanced Class"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-2.5 h-14.75 bg-[#830033] flex items-center justify-center">
                <p className="text-[32px] font-bold text-white">Advanced</p>
              </div>
              <div className="bg-[#FFFAEE] p-6 rounded-b-[10px] h-62.75 text-[20px] text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
            </div>

          </div>

          {/* Enroll Button */}
          <div className="mt-12">
            <Button text="Enroll Now" link="/classes">Enroll Now</Button>
          </div>

        </div>
      </section>

      {/* upcoming events */}
      <section className="flex flex-col bg-[#FFFAEE] items-center justify-center py-20">
        {/* page content */}
        <div className="mb-22.25">
              <Header>Upcoming Events</Header>
        </div>

        {/* event photos: placeholders */}
        <div className="flex items-center justify-center gap-13">
            <div className="w-159.25 h-149.25 bg-white"></div>

            <div className="flex-col w-120.25 items-start">
              <div className="h-71.5 bg-white mb-6.25"></div>
              <div className="h-71.5 bg-white"></div>
            </div>
        </div>

        {/* view all button */}
        <div className="flex justify-center mt-22.25">
          <Button text="View All" link="/events">View All</Button>
        </div>
      </section>

      {/* get in touch */}
      <section className="flex md:flex-row justify-between items-center py-31 px-16 bg-[#FFE299] gap-16">
        {/* left: title and content */}
        <div className="flex flex-col w-full gap-9">
          <h2 className="text-[64px] font-bold font-[Rambla] text-left">Get In Touch</h2>

          <form className="space-y-9">
            {/* Name */}
            <div>
              <input 
                type="text" 
                placeholder="Name" 
                className="w-full border border-[#AAAAAA] bg-white text-[32px] font-bold px-4 py-2" 
              />
            </div>
            

            {/* Email */}
            <div>
              <input 
                type="email" 
                placeholder="Email" 
                className="w-full border border-[#AAAAAA] bg-white text-[32px] font-bold px-4 py-2"
              />
            </div>
            

            {/* Message */}
            <div>
              <textarea 
                placeholder="Message" 
                rows="5" 
                className="w-full border border-[#AAAAAA] bg-white text-[32px] font-bold px-4 py-2 resize-none"
              />
            </div>

            {/* Submit Button */}
            <button 
              type="submit" 
              className="inline-block w-full h-18.75 bg-[#830033] text-white font-bold text-[24px] rounded-xl px-12.5 py-1.25 text-center transition-transform duration-200 hover:scale-105"
            >
              Send
            </button>
          </form>
        </div>

        {/* location image */}
        <img
            src = "/locationMap.png"
            alt = "kkds map location"
            className = "w-136.25 h-175"
        ></img>

      </section>


      {/* FAQ */}
      <div className="flex px-[89.5px] py-32 bg-[#FFFAEE] gap-20">
        
        {/* Left Side: FAQ Title */}
        <div className="w-1/3">
          <h2 className="text-[64px] font-bold leading-[1.1]">
            Frequently <br /> 
            Asked <br /> 
            <span className="text-[#830033]">Questions</span>
          </h2>
        </div>

        {/* Right Side: Actual Q&A */}
        <div className="w-2/3">
          <Dropdown 
            question="Lorem ipsum dolor sit amet?" 
            answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit." 
          />
          <Dropdown 
            question="Lorem ipsum dolor sit amet?" 
            answer="Detailed answer about classes, schedule, or dress code goes here." 
          />
          <Dropdown 
            question="Lorem ipsum dolor sit amet?" 
            answer="Another detailed answer for your students." 
          />
          <Dropdown 
            question="Lorem ipsum dolor sit amet?" 
            answer="Final question example." 
          />
        </div>

      </div>
    </section>
  );
}