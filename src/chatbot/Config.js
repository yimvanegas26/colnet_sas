import { createChatBotMessage } from "react-chatbot-kit";
import Options from "./Options";
import Quiz from "./Quiz";
import React from "react";

const Config = {

  botname: "LearningBot",
  initialMessages: [createChatBotMessage(`Hola en que puedo ayudarte ?`, {
    widget: "options",
  }),
],
  widgets: [
    {

      widgetName: "options",
      widgetFunc: (props) => <Options {...props} />,
    },
    {
      widgetName: "javascriptQuiz",
      widgetFunc: (props) => <Quiz {...props} />,
      props: {
        question: [
          {
            question: "Nesecitas soporte tecnico?",
            aswer:
            "en breve uno de nuestros asesores te atendera continua en linea",
            id: 1,
          },
          {
            question: "Deseas adquirir un servicio con nosotros?",
            aswer:
            "en breve uno de nuestros asesores te atendera continua en linea",
            id: 2,

          },
        ],
      },
    },
  ],


};

export default Config


