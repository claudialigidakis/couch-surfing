import Link from "next/link"
import { getPost } from "../actions"
import LoadingSpinner from "./LoadingSpinner"

export async function Post({ postId }: { postId: string }) {
    const post = await getPost(postId)

    if(!post) return (<LoadingSpinner/>)
   
    return (
     <div className="flex flex-col p-2 border rounded-md">
       <h1>{post.title}</h1>
       <p>{post.content}</p>
       <Link href={`/post/${post.id}`}>Detailed Post</Link>
       <Link href={`/profile/${post.authorId}`}>Profile</Link>
     </div>
    )
  }