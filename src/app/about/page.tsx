import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="flex 1024:flex-row lg:gap-0 gap-10 max-lg:mt-10 flex-col">
      <div className="flex-1 flex flex-col justify-between">
        <h3 className="text-[blue] font-bold text-xl">About us</h3>
        <h1 className="font-bold md:text-6xl text-2xl">
          We create digital ideas that are bigger, bolder, braver and better.
        </h1>
        <p className="text-secondary">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi
          suscipit veniam quidem! Maxime dolores possimus vitae, maiores iste
          necessitatibus qui, architecto totam quas cumque, ipsum ullam veniam
          minus eius. Atque.
        </p>
        <div className="flex justify-between">
          <div><h1 className="text-2xl font-bold">10 K+</h1><p>Years of experience</p></div>
          <div><h1 className="text-2xl font-bold">234 K+</h1><p>People reached</p></div>
          <div><h1 className="text-2xl font-bold">5 K+</h1><p>Services and plugins</p></div>
        </div>
      </div>
      <div className="flex-1 self-center">
        <div className="relative lg:w-[500px] lg:h-[500px] w-[400px] h-[400px]">
          <Image className="" src="/about.png" alt="about page hero" fill />
        </div>
      </div>
    </div>
  );
};
export default AboutPage;
