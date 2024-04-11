import { getPost } from "@/app/actions"
import LoadingSpinner from "@/app/components/LoadingSpinner"
import Link from "next/link"

export default async function Page({ params }: { params: { postId: string } }) {
  const { postId } = params;

  const post = await getPost(postId)

  if (!post) return (<LoadingSpinner />)

  return (
    <div className="flex flex-col p-2 border rounded-md">
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <Link href="/">Home</Link>
    </div>
  )
}