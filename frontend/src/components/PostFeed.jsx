import React from 'react'
import profileImg from "../assets/profile_1.jpg";
import likeIcon from "../assets/like.png";
import commentIcon from "../assets/comment.png";
import filter from "../assets/filter.png";
import {posts} from "../assets/assets.js";

const PostFeed = () => {
  return (
    <div className="flex flex-col px-4 md:px-10 py-4 gap-4 h-full min-h-0 overflow-y-auto scrollbar-hide">

      {/* new Post */}
      <div className="bg-white rounded-xl shadow-xl/20 p-4 flex items-center gap-3">
        <img src={profileImg} className="w-10 h-10 rounded-full" />

        <div className="flex-1 bg-gray-200 rounded-full px-4 py-2 outline-none text-[14px] xl:text-[17px]">
          <p className='text-gray-600'>Hello Ravindu, What you want to fix?</p>
        </div>

        <img src={filter} className="w-6 h-6 cursor-pointer" />
      </div>


      {/* Post list */}
      <div className="flex flex-col gap-4">
      {posts.map((post) => (
        <div key={post.id} className="bg-white rounded-lg shadow-xl/20 text-[14px] xl:text-[19px]">

          {/* Header */}
          <div className="flex items-center gap-3 p-4">
            <img
              src={post.userImage}
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="font-semibold">{post.userName}</p>
              <p className="text-gray-500">{post.time}</p>
            </div>
          </div>

          {/* Post image */}
          <img src={post.postImage} className="w-full h-100" />

          {/* like and comments */}
          <div className="flex m-2">
            <button className="flex-1 py-2 rounded-2xl m-2 shadow-xl hover:bg-gray-200">
              <img src={likeIcon} alt="Like" className="w-5 h-5 xl:w-6 xl:h-6 inline mr-2" />{post.likes}
            </button>

            <button className="flex-1 py-2 hover:bg-gray-200 rounded-2xl m-2 shadow-xl">
              <img src={commentIcon} alt="Comment" className="w-5 h-5 xl:w-6 xl:h-6 inline mr-2" />{post.comments}
            </button>
          </div>

        </div>
      ))}
      </div>

    </div>
  )
}

export default PostFeed
