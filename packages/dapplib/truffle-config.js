require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict enter occur slab chaos note mushroom essay grace lock outer silly'; 
let testAccounts = [
"0xacacb62bd0306cb254eba8dade2a376d299b17374015db73b63ad11add8dc93f",
"0xecf51bdb7d75018ed059011684ffc50ab9b605b01d1acc7d988d85a923c1ae49",
"0x759ed5d5858a4e974101a88095252d7d6ed1e5a44d73a037034d493b4b4eb1c8",
"0x9adedb91aacb7a23f15c1099d5aeca3bef47be9bd97f6d0cc9c6c1629a9a9816",
"0x4187b83755b74c4363e7b441f35edf5f90882abcd196b3edee328e045cdcfc81",
"0x1551e1664173756a87eb7c72ea2e5da7af541928a5e04d534d394a933ea02529",
"0x550d5e90933d5f4ef99f5620b684edc07bad77dfde76d78f2e54fec3878cc585",
"0x321293bc77176dfa10644740ab85d9f3766473640d377360c785c9cbaded6da2",
"0xa2b0dc44fe2b0a047b6eb7e738991e37f96e928bedcbc2ba5124b86ede552ade",
"0x14091a98ff931f5d67dd5d2f0a64ea83b2462d9b8f8265b9459f1abde8ef75b8"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
