import React, { Component } from 'react';
import Chatbot from 'react-chatbot-kit';
import Config from './Config';

import ActionProvider from './ActionProvider';
import MessageParser from './MessageParser';
import { Fab } from '@mui/material';
import botonColnet from "/Users/Janus/colnet_sas/src/assets/colnetcolor.png";
import botonWhatsapp from "/Users/Janus/colnet_sas/src/assets/whatsapp2.png";
import chat from "/Users/Janus/colnet_sas/src/assets/chat.png";

class SimpleForm extends Component {


  render() {

    const chatbot1 = () => {
      <div className="index z-50 fixed bottom-3 right-14 text-blue-500 " size={41}>
        <Chatbot config={Config} messageParser={MessageParser} actionProvider={ActionProvider} />
      </div >

    }


    return (





      <div className="index z-50 fixed bottom-3 right-14 text-blue-500 " size={41}
      >

        <img
          className='z-50  h-16  w-16 xl:h-24 xl:w-24 rounded-full fixed bottom-3 right-14  '
          src={chat}
          onClick={chatbot1}
        />



      </div>





    );
  }

}

export default SimpleForm;