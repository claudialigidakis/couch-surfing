import { getPost } from "@/app/actions"
import LoadingSpinner from "@/app/components/LoadingSpinner"
import DetailedPost from "./DetailedPost";

export default async function Page({ params }: { params: { postId: string } }) {
  const { postId } = params;

  const post = await getPost(postId)

  if (!post) return (<LoadingSpinner />)

  return (
    <DetailedPost post={post} />
  )
}