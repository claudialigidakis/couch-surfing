import { getAllPostIds } from "./actions";
import { Post } from "./components/Post";

export default async function Home() {
  const postIds = await getAllPostIds();

  return (
    <div>
      <div>Hero placement introducing app concept</div>
      {
        postIds.map((postIds: any) => (
          <Post key={postIds} postId={postIds}/>
        ))
      }
    </div>
  );
}

