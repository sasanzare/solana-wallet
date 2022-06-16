const {
    Connection,
    PublicKey,
    clusterApiUrl,
    Keypair,
    LAMPORTS_PER_SOL,
} = require('@solana/web3.js');

const wallet = new Keypair();

const publicKey = new PublicKey(wallet._keypair.publickey);
const secretkey = wallet._keypair.secretkey;

const getWalletBalance = async() =>{
    try{
        const connection = new Connection(clusterApiUrl('devnet'),'confirmed');
        const walletBalance = await connection.getBalance(publickey);
        console.log(`wallet balance is: '  ${walletBalance}`);
    }catch(err){
        console.error(err);
    }
}

const main = async () => {
    await getWalletBalance();
}
main();



