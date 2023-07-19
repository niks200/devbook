import React, { useEffect, useState } from "react";
import api from "../../utils/api"


const Posts = () => {
  const [posts, setPosts] = useState(null);
  useEffect( () => {
    async function fetchData(){
      const res = await api.get('posts');
    setPosts(res.data)
    }
    fetchData()
  }, [posts]);


  const handleClick = (post,action)=>{

  }
  return (
    <div>
      <h2 className="my-2">Posts</h2>
      <table className="table w-100">
        <thead>
          <tr>
          <th>Avatar</th>
            <th>Name</th>

            <th className="hide-sm">Text</th>

            <th className="hide-sm">Date</th>

            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            posts?.map((post)=>(
                <tr>
                    <td><img src={post.avatar} className="image-avatar" alt="profile-image" /></td>

                    <td>{post.name}</td>
                    <td>{post.text}</td>
                    <td>{post.date}</td>
                    <td>
                <button className={(post?.blocked)?"action-btn unblock-btn":"action-btn block-btn"} onClick={handleClick(post?._id,post?.blocked)}>{(post.blocked)?"Unblock":"Block"}</button>
              </td>
                </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

export default Posts;
