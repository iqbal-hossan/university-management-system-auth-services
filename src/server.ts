import mongoose from 'mongoose'
import app from './app'
import config from './config'
import { logger, errorLogger } from './shared/logger'
import {Server} from 'http'

main().catch(err => console.log(err))

let server:any;

async function main() {
  try {
    await mongoose.connect(config.database_url as string)
    logger.info('Server connected with db')
    
    server = app.listen(config.port, () => {
      logger.info(`Application listening on port ${config.port}`)
    })
  } catch (err) {
    errorLogger.error("DB doesn't connected!", err)
  }
  
  process.on('unhandledRejection', (error)=>{
    if(server){
      server.close(()=>{
        errorLogger.error(error);
        process.exit(1);
      });
    }else{
      process.exit(1);
    }
  });
  

  process.on("uncaughtException", (error) =>{
    console.error("Uncaught exception is detected...", error);
    process.exit(1);
  });
  
  process.on('SIGTERM', () =>{
    logger.info('SIGTERM is received');
    if(server){
      server.close()
    }
  });


  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
