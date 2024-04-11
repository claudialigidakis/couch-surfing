import seedData from './seed.json';

export const getAllPostIds = async () => {
    return seedData.posts.map((post: any) => post.id)
}

export const getPost = async (postId: string) => {
    const post = seedData.posts.find(post => post.id === postId);

    if (!post) return null;

    const author = seedData.users.find(user => user.id === post.authorId);

    return {
        ...post,
        author: author ? { name: author.name, avatar: author.avatar } : undefined
    };
}