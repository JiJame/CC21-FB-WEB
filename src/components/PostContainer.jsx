import { useEffect } from "react";
import CreatePost from "./CreatePost";
import usePostStore from "../stores/postStore";
import PostItem from "./PostItem";

function PostContainer() {
  const posts = usePostStore((state) => state.posts);
  const getAllPosts = usePostStore((state) => state.ActionGetAllPosts);

  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <div className="w-[680px] mx-auto min-h-screen my-3 flex flex-col gap-4 rounded-lg bg-amber-200">
      <CreatePost />
      {/* {JSON.stringify(posts, null, 2)} */}
      {/* {allPosts.map((post) => (
        <div className="card bg-base-100">
          <div key={post.id} className="card bg-base-100">
            <p>
              {post.user.firstName} {post.user.lastName}
            </p>
            <p>{post.message}</p>
            <img src={post.image} className="max-h-[120px] object-contain" />
            <div className="divider"></div>
          </div>
        </div>
      ))} */}
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
}

export default PostContainer;
