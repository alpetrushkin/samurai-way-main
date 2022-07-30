import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogItemType = {
   name: string
   id: string
}

const DialogItem = (props: DialogItemType) => {
   let path = '/dialogs/' + props.id

   return (
      <div className={s.dialog + ' ' + s.active}>
         <NavLink to={path}>{props.name}</NavLink>
      </div>
   )
}

type MessageType = {
   message: string
}

const Message = (props: MessageType) => {
   return (
      <div className={s.dialog}>{props.message}</div>
   )
}

export const Dialogs = () => {
   return (
      <div className={s.dialogs}>
         <div className={s.dialogItems}>
            <DialogItem name='Alex' id='1'/>
            <DialogItem name='Denis' id='2'/>
            <DialogItem name='Mark' id='3'/>
            <DialogItem name='Olga' id='4'/>
            <DialogItem name='Dimych' id='5'/>
            <DialogItem name='Valera' id='6'/>
         </div>
         <div className={s.messages}>
            <Message message='Hi' />
            <Message message='How is your it-kamasutra' />
            <Message message='Yo' />
            <Message message='Hello' />
         </div>
      </div>

   )
}