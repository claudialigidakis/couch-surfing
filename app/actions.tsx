import seedData from './seed.json';

export const getAllPostIds = async () => {
    return seedData.posts.map((post: any) => post.id )
}

export const getPost = async (postId: string) => {
    return seedData.posts.find((post: any) => post.id === postId)    
}