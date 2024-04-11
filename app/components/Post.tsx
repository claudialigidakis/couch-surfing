"use client";

import Link from "next/link"
import { getPost } from "../actions"
import LoadingSpinner from "./LoadingSpinner"
import tw from "tailwind-styled-components";
import { useEffect, useState } from "react";

const PostContainer = tw.div`p-4 border rounded-lg shadow-lg flex flex-col gap-4`;
const Title = tw.h2`text-xl font-bold rounded `;
const Content = tw.p`line-clamp-2 overflow-hidden`;
const InfoRow = tw.div`flex items-center justify-between`;
const AuthorInfo = tw.div`flex items-center rounded p-2 gap-2`;
const Avatar = tw.img`w-12 h-12 rounded-full`;
const AuthorName = tw.span`font-semibold`;
const PublishDate = tw.span`text-sm`;
const IconButton = tw.button`flex items-center justify-center outline-none gap-2 hover:bg-purple-100 p-2 rounded-lg`;
const BoneIcon = () => (
  <svg fill="#000000" height="20px" width="20px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.001 512.001"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M487.695,88.534c-11.558-11.56-25.986-19.299-41.684-22.545c-3.246-15.698-10.986-30.125-22.545-41.683 c-32.404-32.406-84.856-32.408-117.264,0c-29.162,29.162-31.643,73.807-9.759,105.557L129.852,296.454 c-32.279-22.167-76.881-18.918-105.546,9.749c-32.405,32.404-32.41,84.856,0,117.264c11.558,11.558,25.987,19.299,41.684,22.545 c3.246,15.697,10.986,30.125,22.545,41.683c32.404,32.406,84.856,32.41,117.264,0c28.666-28.665,31.917-73.268,9.749-105.546 l166.602-166.602c32.28,22.169,76.882,18.916,105.546-9.749C520.099,173.395,520.104,120.942,487.695,88.534z M462.438,180.542 c-18.447,18.446-48.303,18.448-66.751,0c-9.798-9.798-20.389-8.658-27.104-1.942L178.599,368.583 c-6.479,6.478-8.171,16.99,1.942,27.104c18.447,18.447,18.447,48.302,0,66.751c-18.446,18.446-48.303,18.448-66.751,0 c-8.75-8.75-13.653-20.393-13.806-32.785c-0.12-9.69-7.946-17.516-17.636-17.636c-12.392-0.154-24.036-5.057-32.786-13.806 c-18.446-18.446-18.448-48.303,0-66.751c18.402-18.402,48.346-18.403,66.751,0c9.775,9.775,20.351,8.697,27.104,1.942L333.4,143.419 c6.479-6.478,8.171-16.99-1.942-27.104c-18.446-18.446-18.448-48.303,0-66.751c18.446-18.446,48.303-18.448,66.751,0 c8.75,8.749,13.653,20.392,13.806,32.786c0.12,9.689,7.946,17.515,17.636,17.636c12.393,0.154,24.036,5.058,32.786,13.806 C480.884,132.236,480.887,162.093,462.438,180.542z"></path> </g></svg>
);

interface PostProps {
  title: string;
  content: string;
  authorId: string;
  createdAt: string;
  id: string;
  author?: {
    name: string;
    avatar: string;
  }
}

export async function Post({ postId }: { postId: string }) {
  const [post, setPost] = useState<PostProps | null>(null);
  const [barks, setBarks] = useState(0);

  const incrementBarks = () => {
    setBarks((currentBarks) => currentBarks + 1);
  };

  useEffect(() => {
    const fetchPost = async () => {
      const fetchedPost = await getPost(postId);
      setPost(fetchedPost);
      setBarks(fetchedPost?.barks || 0);
    };

    fetchPost();
  }, [postId]);

  if (!post) return (<LoadingSpinner />)

  return (
    <PostContainer key={post.id}>
      <div className="flex flex-row justify-between">
        <Link href={`/post/${post.id}`}>
          <Title>{post.title}</Title>
        </Link>
        <PublishDate>
          {new Date(post.createdAt).toLocaleDateString()}
        </PublishDate>
      </div>
      <Content>{post.content}</Content>
      <div className="flex flex-row justify-between">
        <Link href={`/profile/${post.authorId}`}>
          <InfoRow>
            {
              post.author && (
                <AuthorInfo>
                  <Avatar src={post.author?.avatar} alt="Author's avatar" />
                  <AuthorName>{post.author?.name}</AuthorName>
                </AuthorInfo>
              )
            }
          </InfoRow>
        </Link>
        <IconButton onClick={incrementBarks} aria-label="Add bark">
          <BoneIcon />  ({barks})
        </IconButton>
      </div>
    </PostContainer >
  )
}

