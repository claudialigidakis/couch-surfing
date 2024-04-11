import { getAllPostIds } from "./actions";
import { Post } from "./components/Post";

export default async function Home() {
  const postIds = await getAllPostIds();

  return (
    <div className="flex flex-col gap-6">
      <div className="bg-blue-200 px-4 py-12 md:px-12 rounded">
        <div className="max-w-4xl px-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 pb-4">Paws Around The Globe</h1>
          <p className="text-lg md:text-xl text-gray-700 pb-8">
            Join our furry friends on their adventures as they explore every corner of the earth, sharing their tales through blog posts. From the bustling streets of New York to the serene landscapes of Kyoto, there is a story waiting to be told.
          </p>
          <div className="inline-block bg-yellow-500 text-white font-bold py-3 px-6 rounded-lg">
            Discover their stories below
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3 px-3">
        {
          postIds.map((postIds: any) => (
            <Post key={postIds} postId={postIds} />
          ))
        }
      </div>
    </div>
  );
}

