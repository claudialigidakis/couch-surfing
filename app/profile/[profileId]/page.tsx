import { Suspense } from "react"
import { getDogProfile } from "./actions"

import LoadingSpinner from "@/app/components/LoadingSpinner"
import { Profile } from "./Profile";

export default async function Page({
  params: { profileId },
}: {
  params: { profileId: string }
}) {
  const user = await getDogProfile(profileId);

  if (!user) return (<LoadingSpinner />)

  return (
    <>
      <Suspense fallback={<LoadingSpinner />}>
        <Profile user={user} />
      </Suspense>
    </>
  )
}