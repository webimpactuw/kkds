import Image from "next/image";
import Button from "../components/Button"

export default function Home() {
  return (
    <div className="bg-[#FFFAEE]  text-black font-normal">
      {/* landing page */}
      <div className="pl-[89.5px] h-236.25 bg-[linear-gradient(270deg,#FFFFFF_22.69%,rgba(255,201,67,0.9)_100%)]">
        <div className="absolute w-193.75 h-fit top-70.5">
          <h1 className="text-[#830033] h-37 font-[Oleo_Script_Swash_Caps] font-bold text-[96px] tracking-[5px] m-0 pb-0">Kalamandapam</h1>
          <h2 className="h-17.5 text-[48px] m-0 pt-0">Kuchipudi Dance School</h2>
        </div>
        <div className="absolute w-156.25 h-19.5 top-126.25">
          <p className="text-[32px] tracking-[0.5px]">Discover the vibrant world of Kuchipudi dance at our studio in Sammamish, Washington.</p>
        </div>
        <div className="absolute top-153.25">
          <Button>Learn More</Button>
        </div>
      </div>

      {/* message */}
      <div className="flex justify-center items-center p-10 gap-2.5 mx-auto">
        <p className="text-center text-[32px] leading-12">
          At Kalamandapam, we believe in the power of dance to inspire, educate, and connect people. Our experienced
          instructors are passionate about sharing their knowledge and expertise, ensuring that each student
          recieves personalized attention to develop their skills, grace, and confidence. Through a blend of traditional
          techniques and modern teaching methods, we create a dyanmic learning experience that celebrate the heritage of Kuchipudi
          while encouraging individual expression.
        </p>
      </div>

      {/* classes offered */}
      <div className="h-279.25 bg-[#FFE299] p-20 g-2.5 text-center">
        <div className="w-319.75 g-[80px]">
          <div className="h-17.5 mb-10">
            <h2 className="text-[64px] font-bold">Classes Offered</h2>
          </div>
          <div className="flex justify-between h-159.75">
            <div className="w-84.25">
              <div className="h-82.25 bg-white rounded-t-[10px]"></div>
              <div className="p-2.5 gap-2.5 h-14.75 bg-[#830033]">
                <p className="text-[32px] font-bold text-white">Beginner</p>
              </div>
              <div className="bg-[#FFFAEE] p-6 g-2.5 rounded-b-[10px] h-62.75">
                <p className="text-[20px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, 
                  consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem 
                  ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
              </div>
            </div>

            <div className="w-84.25">
              <div className="h-82.25 bg-white rounded-t-[10px]"></div>
              <div className="p-2.5 gap-2.5 h-14.75 bg-[#830033]">
                <p className="text-[32px] font-bold text-white">Intermediate</p>
              </div>
              <div className="bg-[#FFFAEE] p-6 g-2.5 rounded-b-[10px] h-62.75">
                <p className="text-[20px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, 
                  consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem 
                  ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
              </div>
            </div>

            <div className="w-84.25">
              <div className="h-82.25 bg-white rounded-t-[10px]"></div>
              <div className="p-2.5 gap-2.5 h-14.75 bg-[#830033]">
                <p className="text-[32px] font-bold text-white">Advanced</p>
              </div>
              <div className="bg-[#FFFAEE] p-6 g-2.5 rounded-b-[10px] h-62.75">
                <p className="text-[20px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, 
                  consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem 
                  ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <Button>Enroll Now</Button>
        </div>
      </div>
    </div>
  );
}
