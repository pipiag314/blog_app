import Button from "@/component/Button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex xl:flex-row flex-col-reverse justify-between">

      <div className="flex flex-col justify-between py-10 gap-5 flex-1">

        <h1 className="lg:text-8xl md:text-4xl text-2xl font-bold font-sans">Creative thoughts Agency.</h1>
        <p className="font-thin">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ratione
          voluptate ex quasi expedita accusamus dolor possimus nostrum iusto
          corrupti! Nobis dolor quidem amet quam? Suscipit quod provident
          officiis ab.
        </p>
        <div className="flex gap-5 px-2">
          <Button text="Learn More" />
          <Button text="Contact" />
        </div>
        <div className="relative md:w-[600px] w-[200px] xs:w-[300px] sm:w-[500px] h-[70px] grayscale-[100%]">
          <Image src="/brands.png" alt="brands logos" fill className="object-contain" />
        </div>
        
      </div>

      <div className="relative flex justify-center items-center flex-1">
        <div className="xl:h-[500px] xl:w-[500px] h-[700px] w-[200px]">
          <Image src="/hero.gif" alt="hero gif" fill className="object-contain" />
        </div>
      </div>
      
    </div>
  );
}
