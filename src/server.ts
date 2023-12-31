import mongoose from 'mongoose'
import app from './app'
import config from '../config'

main().catch(err => console.log(err))

async function main() {
  try {
    await mongoose.connect(config.database_url as string)
    console.log('Server connected with db')

    app.listen(config.port, () => {
      console.log(`Application listening on port ${config.port}`)
    })
  } catch (err) {
    console.log("DB doesn't connected!", err)
  }

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
