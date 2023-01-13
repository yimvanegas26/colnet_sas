class ActionProvider {
    constructor(
     createChatBotMessage,
     setStateFunc,
     createClientMessage,
     stateRef,
     createCustomMessage,
     ...rest
   ) {
     this.createChatBotMessage = createChatBotMessage;
     this.setState = setStateFunc;
     this.createClientMessage = createClientMessage;
     this.stateRef = stateRef;
     this.createCustomMessage = createCustomMessage;
   }

    greet = () => {
    const message = this.createChatBotMessage("Hola en que puedo ayudarle.?");
    this.addMessageToState(message);

   };

    handleJavascriptQuiz = () => {
    const message = this.createChatBotMessage("perfecto en breve un consultor de contactara", 
    {
      widget: "javascriptQuiz",
    }
    );
    this.addMessageToState(message);
   };
   


   addMessageToState = (message) => {
    this.setState((prevState => ({
      ...prevState,
      messages: [...prevState.messages, message],
    
     
    })));

   };
 }
 
 export default ActionProvider;