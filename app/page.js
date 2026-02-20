import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#FFFAEE]  text-black">
      {/* landing page */}
      <div className="pl-[89.5px] w-fill h-236.25 bg-[linear-gradient(270deg,#FFFFFF_22.69%,rgba(255,201,67,0.9)_100%)]">
        <div className="absolute w-193.75 top-70.5">
          <h1 className="text-[#830033] h-37 font-[Oleo_Script_Swash_Caps] font-bold text-[96px] tracking-[5px] m-0 pb-0">Kalamandapam</h1>
          <h2 className="h-17.5 text-[48px] m-0 pt-0">Kuchipudi Dance School</h2>
        </div>
        <div className="absolute w-156.25 h-19.5 top-126.25">
          <p className="text-[32px] tracking-[0.5px]">Discover the vibrant world of Kuchipudi dance at our studio in Sammamish, Washington.</p>
        </div>
        <button className="absolute top-153.25 w-50 h-16 pt-1.25 pb-1.25 pr-12.5 pl-12.5 bg-[#830033] text-white font-bold text-[20px] leading-none rounded-[10px] gap-2.5">
          Learn More
        </button>
      </div>

      {/* message */}
      <div>
        <p>
          At Kalamandapam, we believe in the power of dance to inspire, educate, and connect people. Our experienced
          instructors are passionate about sharing their knowledge and expertise, ensuring that each student
          recieves personalized attention to develop their skills, grace, and confidence. Through a blend of traditional
          techniques and modern teaching methods, we create a dyanmic learning experience that celebrate the heritage of Kuchipudi
          while encouraging individual expression.
        </p>
      </div>
    </div>
  );
}
