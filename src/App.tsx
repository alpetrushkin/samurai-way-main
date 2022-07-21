import React from 'react';
import './App.css';


function App() {
   return (
      <div className='app-wrapper'>
         <header>
            <img src="https://cdn-icons-png.flaticon.com/512/3800/3800024.png" alt=""/>
         </header>
         <nav>
            <div>
               <a href="#">Profile</a>
            </div>
            <div>
               <a href="#">Messages</a>
            </div>
            <div>
               <a href="#">News</a>
            </div>
            <div>
               <a href="#">Music</a>
            </div>
            <div>
               <a href="#">Settings</a>
            </div>
         </nav>
         <div className='content'>
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
               <div>
                  <div>
                     post 1
                  </div>
                  <div>
                     post 2
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}


export default App;
