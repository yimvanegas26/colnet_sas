class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
   
    }
  
    parse(message) {
      console.log(message)
      const lowercase = message.toLowerCase()

      if (lowercase.includes("hola")){
        this.actionProvider.greet();
      }

      if (lowercase.includes("Soporte") || lowercase.includes("js")) {
        this.actionProvider.handleJavascriptQuiz();
      }
    }

    


  }
  
  export default MessageParser;