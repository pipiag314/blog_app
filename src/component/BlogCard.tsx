import Image from "next/image";
import Link from "next/link";

interface BlogCardProps {
    image: string;
    title: string;
    date?: string;
    href: string;
    desctiption: string;
}

const BlogCard = ({image, href, title, desctiption}: BlogCardProps) => {
  return (
    <div className="flex justify-start gap-2 flex-col items-start">
      <div className="flex relative">

          <div className="relative w-[250px] min-h-[300px]">
              <Image src={image} alt="alt text" className="object-cover" fill />
          </div>
          <span className="absolute text-sm right-[-55px] rotate-[270deg] self-center">1/18/2024</span>

      </div>
      <h1 className="text-xl font-bold">{title}</h1>
      <p className="text-secondary w-[80%]">{desctiption}</p>
      <Link className="underline" href={`blog/${href}`}>READ MORE</Link>
    </div>
  )
}
export default BlogCard