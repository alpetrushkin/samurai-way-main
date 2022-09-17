import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogItemType = {
   name: string
   id: number
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
   id: number
}

const Message = (props: MessageType) => {
   return (
      <div className={s.dialog}>{props.message}</div>
   )
}

export const Dialogs = () => {
   const dialogsData = [
      {id: 1, name: 'Alex'},
      {id: 2, name: 'Denis'},
      {id: 3, name: 'Mark'},
      {id: 4, name: 'Olga'},
      {id: 5, name: 'Dimych'},
      {id: 6, name: 'Valera'},
   ]

   const messageData = [
      {id: 1, message: 'Hi'},
      {id: 2, message: 'How is your it-kamasutra'},
   ]

   return (
      <div className={s.dialogs}>
         <div className={s.dialogItems}>
            <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
            <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
         </div>
         <div className={s.messages}>
            <Message id={messageData[0].id} message={messageData[0].message} />
            <Message id={messageData[1].id} message={messageData[1].message} />
         </div>
      </div>
   )
}