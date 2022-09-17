import React from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";

export const MyPosts = () => {
   const messageData = [
      {id: 1, message: 'Hi, how are you?', likeCount: 12},
      {id: 2, message: "It's my first post", likeCount: 21},
   ]

   return (
      <div className={s.postsBlock}>
         <h3>My posts</h3>
         <div>
            <div>
               <textarea></textarea>
            </div>
            <div>
               <button>Add post</button>
            </div>
         </div>
         <div className={s.posts}>
           <Post id={messageData[0].id} message={messageData[0].message} likeCount={messageData[0].likeCount}  />
           <Post id={messageData[1].id} message={messageData[1].message} likeCount={messageData[1].likeCount}  />
         </div>
      </div>
   )
};

