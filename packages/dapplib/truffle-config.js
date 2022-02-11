require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good close blue spot shock rare remember erosion grid entire bone stool'; 
let testAccounts = [
"0xc89695db172d43810f5bcd0258302e137c2910a7360dc711cade40932342f9c9",
"0xdcc0a5c32e5083068f20110f57774e69b5d7af4d4afd49842f45d35459cc009a",
"0xe972aa82b25e82682530b268cf781f0dfcf9770c46130ea630da5404449a9204",
"0x2a70aaa5cd8791a8317888e77070f366158f9b9bca721b65a0d61fd4ca27065f",
"0x0333a2e1f8e023a1d8cddfe6dde4ec822ae3c11d275c1f351f35792f75b67ce8",
"0x1552e35b4faec70b51bf7a6ad6d402515aa083fd1bc08dfc47e30c4ec21c8f4c",
"0xddcd0c41e3bab442f0233b0638bbd07487b5fba94c35f2d8a535310926272b7c",
"0x39d6cbae30f9c2927719106fc850fadc0a58b88c1be40b2a6f71cda0dd738ac5",
"0x7576af03cb9b56c956d39431e1c1789c44e59ba4bfbfb0757adbeb93fb1d8b2b",
"0x4a22de88a0329f194e8671c2b2913c53b3832b188ed6dd991d2a302e38c419d2"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


