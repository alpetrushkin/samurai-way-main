import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";

export const Profile = () => {
   return (
      <div className={s.content}>
         <div>
            <img src="https://klike.net/uploads/posts/2019-11/1572608842_3.jpg" alt=""/>
         </div>
         <div>
            ava + description
         </div>
         <MyPosts />
      </div>
   );
};

