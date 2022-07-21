import React from 'react';
import s from './Profile.module.css'

export const Profile = () => {
   return (
      <div className={s.content}>
         <div>
            <img src="https://klike.net/uploads/posts/2019-11/1572608842_3.jpg" alt=""/>
         </div>
         <div>
            ava + description
         </div>
         <div>
            My posts
            <div>
               New post
            </div>
            <div className={s.posts}>
               <div className={s.item}>
                  post 1
               </div>
               <div className={s.item}>
                  post 2
               </div>
            </div>
         </div>
      </div>
   );
};

