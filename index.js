

const server = require('./src/infra/server')
// Creating the main function
const main = async () => {
  // Run Server
  await server()
}

main()
