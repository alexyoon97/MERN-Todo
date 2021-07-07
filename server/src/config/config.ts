const config = {
    mongo:{
        options: {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            socketTimeoutMS: 30000,
            keepAlive: true,
            poolSize: 50,
            autoIndex: false,
            retryWrties: false
        },
        url:'mongodb+srv://alex:superalex@cluster0.klg3x.mongodb.net/todo'
    },
    server: {
      host: "localhost",
      port: 3000
    },
  };
  
  export default config;
  