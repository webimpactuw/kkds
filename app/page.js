import Image from "next/image";
import Button from "../components/Button";
import Header from "../components/Header";

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
    </div>
  );
}
