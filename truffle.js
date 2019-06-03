module.exports = {
     // See <http://truffleframework.com/docs/advanced/configuration>
     // to customize your Truffle configuration!
     networks: {
          ganache: {
               host: "localhost",
               port: 7545,
               network_id: "*" // Match any network id
          },
          chainskills2:{
               host: "localhost",
               port: 8545,
               network_id: "4225",
               // from: '0xf6b0bd1aae651c10fbb01acc7bd7959696548fd0'
          }
     }
};