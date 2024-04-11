import tw from "tailwind-styled-components"
import { getUserPosts } from "./actions"
import { Post } from "@/app/components/Post"
import Image from "next/image"
import { StaticImport } from "next/dist/shared/lib/get-img-props"
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode } from "react"
import Link from "next/link"

const ProfileContainer = tw.div`flex flex-col gap-3 px-3`
const HeroContainer = tw.div`bg-blue-50 px-4 py-12 md:px-12`;
const HeroContent = tw.div`max-w-4xl px-auto flex flex-col md:flex-row items-center gap-8`;
const ProfileTextContainer = tw.div``;
const ProfileName = tw.h1`text-3xl md:text-4xl font-bold text-gray-800 pb-2`;
const ProfileDetail = tw.p`text-md md:text-lg text-gray-700 pb-4`;
const Bold = tw.span`font-semibold`;

interface UserProps {
    id: string,
    avatar: string,
    bio: string,
    hometown: string,
    breed: string,
    name: string
}

interface ProfileProps {
    user: UserProps;
}

export async function Profile({ user }: ProfileProps): Promise<ReactElement> {
    const posts = await getUserPosts(user.id)

    return (
        <ProfileContainer>
            <Link href="/">Home</Link>
            <HeroContainer>
                <HeroContent>
                    <Image width="150" height="150" className="rounded-full object-cover" src={user.avatar} alt="Fido" />
                    <ProfileTextContainer>
                        <ProfileName>{user.name}</ProfileName>
                        <ProfileDetail><Bold>Breed:</Bold> {user.breed}</ProfileDetail>
                        <ProfileDetail><Bold>From:</Bold> {user.hometown}</ProfileDetail>
                        <ProfileDetail>{user.bio}</ProfileDetail>
                    </ProfileTextContainer>
                </HeroContent>
            </HeroContainer>

            <ul className="flex flex-col gap-3 px-3">
                {posts.map((post) => (
                    <Post key={post.id} postId={post.id} />
                ))}
            </ul>
        </ProfileContainer>

    )
}