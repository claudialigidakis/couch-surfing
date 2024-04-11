import seed from "../../seed.json";

export const getDogProfile = async (userId: string) => {
    return seed.users.find((dog: any) => dog.id === userId);
}

export const getUserPosts = async (userId: string) => {
    return seed.posts.filter((post: any) => post.authorId=== userId)
}