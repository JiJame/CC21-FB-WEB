import { useEffect, useState } from "react";
import useUserStore from "../stores/userStore";
import CreatePost from "./CreatePost";
import axios from "axios";

function PostContainer() {
  const user = useUserStore((state) => state.user);
  const token = useUserStore((state) => state.token);
  const [allPosts, setAllPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8899/api/post", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((resp) => {
        setAllPosts(resp.data.posts);
      });
  }, []);

  return (
    <div className="w-[680px] mx-auto min-h-screen my-3 flex flex-col gap-4 rounded-lg bg-amber-200">
      <CreatePost />

      {allPosts.map((post) => (
        <div className="card bg-base-100">
          <div className="card-body">
            <p>
              {post.user.firstName} {post.user.lastName}
            </p>
            <p>{post.message}</p>
            <img src={post.image} className="max-h-[120px] object-contain" />
            <div className="divider"></div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PostContainer;
