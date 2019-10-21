import React from 'react';
import Contacts from './Contacts';
import './Contacts.css'

const list = [
   {
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
      name: "Merle de",
      online: true
   },
   {
      avatar: "https://randomuser.me/api/portraits/men/46.jpg",
      name: "Ducon lol",
      online: false
   },
   {
      avatar: "https://randomuser.me/api/portraits/women/92.jpg",
      name: "Lol Mdr",
      online: true
   },
   {
      avatar: "https://randomuser.me/api/portraits/women/27.jpg",
      name: "Patouille fuck",
      online: true
   },

   {
      avatar: "https://randomuser.me/api/portraits/men/58.jpg",
      name: "Paw Paw",
      online: false
   }
]

const ContactList = () => (
   <div>
      {list.map(item =>
         (
            <Contacts online={item.online} avatar={item.avatar} name={item.name}/>
         )
      )}
   </div>
);


      

export default ContactList;

