import Image from "next/image"
import { IPost } from "../page"
import Postuser from "@/component/Postuser";
import { Suspense } from "react";

const getPost = async (id: number) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  return res.json();
}


const OneBlogPage = async ({params}: any) => {

  const {id} = params

  const post: IPost = await getPost(id);
  
  return (
    <div className="flex gap-20">
      <div className="relative w-[600px] h-[500px]">
        <Image className="object-cover" src="https://images.pexels.com/photos/19855379/pexels-photo-19855379/free-photo-of-a-yellow-fiat-car-parked-in-front-of-a-building.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="blog image" fill />
      </div>
      <div className="flex flex-col gap-5">
        <h1>{post.title}</h1>
        <div className="flex gap-5">
          <div className="relative w-[50px] h-[50px]">
            <Image className="rounded-full" src="https://images.pexels.com/photos/19855379/pexels-photo-19855379/free-photo-of-a-yellow-fiat-car-parked-in-front-of-a-building.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="user icon" fill />
          </div>
          <Suspense fallback={<div>Loading...</div>}>
            <Postuser userId={post.userId} />
          </Suspense>
          <div className="flex flex-col">
            <p>published</p>
            <p>10-04T09:30</p>
          </div>
        </div>
        <p>{post.body}</p>
      </div>
    </div>
  )
}
export default OneBlogPage