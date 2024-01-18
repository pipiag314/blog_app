import Image from "next/image";

const ContactPage = () => {
  return (
    <div className="flex lg:flex-row flex-col">
      <div className="flex-1 self-center">
        <div className="relative md:w-[500px] md:h-[500px] sm:w-[300px] sm:h-[300px] w-[200px] h-[200px]">
          <Image
            src="/contact.png"
            className="object-contain"
            alt="contact page image"
            fill
          />
        </div>
      </div>
      <div className="flex-1 ">
        <form action="" className="flex flex-col gap-5 forChildInputs">
          <input type="text" placeholder="Name and Surname" required />
          <input type="email" placeholder="Email Address" required />
          <input
            type="number"
            className="removeArrows"
            placeholder="Phone number (optional)"
          />
          <textarea
            cols={30}
            rows={10}
            placeholder="Message"></textarea>
          <button className="w-full text-white bg-blue-500 py-4 px-5">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};
export default ContactPage;
