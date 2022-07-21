import React from 'react';
import s from './Post.module.css'

export const Post = () => {
   return (
      <div className={s.item}>
         <img src="https://gamebomb.ru/files/galleries/001/3/32/351570.jpg" alt=""/>
         post 1
         <div>
            <span>like</span>
         </div>
      </div>
   )
};

