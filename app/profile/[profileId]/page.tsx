import { Suspense } from "react"
import { getDogProfile, getUserPosts } from "./actions"

import LoadingSpinner from "@/app/components/LoadingSpinner"
import { Post } from "@/app/components/Post"

async function Profile({ userId }: { userId: string }) {
  const posts = await getUserPosts(userId)
 
  return (
    <ul>
      {posts.map((post) => (
        <Post key={post.id} postId={post.id}/>
      ))}
    </ul>
  )
}
 
export default async function Page({
  params: { profileId },
}: {
  params: { profileId: string }
}) {
  const user = await getDogProfile(profileId);

  if(!user) return ( <LoadingSpinner /> )
 
  return (
    <>
      <h1>{user.name}</h1>
      <p>{user.bio}</p>
      
      <Suspense fallback={<LoadingSpinner/>}>
        <Profile userId={user.id} />
      </Suspense>
    </>
  )
}