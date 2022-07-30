import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

export const Dialogs = () => {
   return (
      <div className={s.dialogs}>
         <div className={s.dialogItems}>
            <div className={s.dialog + ' ' + s.active}>
               <NavLink to='/dialogs/1'>Alex</NavLink>
            </div>
            <div className={s.dialog}>
               <NavLink to='/dialogs/2'>Denis</NavLink>
            </div>
            <div className={s.dialog}>
               <NavLink to='/dialogs/3'>Mark</NavLink>
            </div>
            <div className={s.dialog}>
               <NavLink to='/dialogs/4'>Olga</NavLink>
            </div>
            <div className={s.dialog}>
               <NavLink to='/dialogs/5'>Dimych</NavLink>
            </div>
            <div className={s.dialog}>
               <NavLink to='/dialogs/6'>Valera</NavLink>
            </div>
         </div>
         <div className={s.messages}>
            <div className={s.message}>Hi</div>
            <div className={s.message}>How is your it-kamasutra</div>
            <div className={s.message}>Yo</div>
         </div>
      </div>

   )
}