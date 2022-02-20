import { connect, Contract, keyStores, WalletConnection, utils  } from 'near-api-js'


const abi = {
    nft: {
      contractAddr: "nft.artpay.testnet",
      viewMethods: ["nft_metadata", "nft_token"],
      changeMethods: ["nft_mint", "allowance", "nft_transfer"],
    },
    escrow: {
      contractAddr: "escrow.artpay.testnet",
      viewMethods: [],
      changeMethods: [
          "release_escrow", 
          "contractor_approval",
          "client_approval", 
          "create_new_escrow", 
          "create_escrow_checkin",
          "take_my_money",
          "get_escrow_checkin",
          "get_escrow_checkins_list",
          "get_escrows_as_contractor",
          "get_escrows_as_client",
          "set_nft_deliverable"],
    }
}

export async function initNear() {
    const config = {
        networkId: "testnet",
        keyStore: new keyStores.BrowserLocalStorageKeyStore(),
        nodeUrl: "https://rpc.testnet.near.org",
        walletUrl: "https://wallet.testnet.near.org",
        helperUrl: "https://helper.testnet.near.org",
        explorerUrl: "https://explorer.testnet.near.org",
    };
    
    const near = await connect(config);
    const wallet = new WalletConnection(near);

    if(!wallet.isSignedIn()) {
        await wallet.requestSignIn(abi.escrow.contractAddr, "ArtPay");
    }

    return { near: near, wallet: wallet }
}

export async function signout(wallet) {
    wallet.signOut();
}


export function loadContract(near, wallet, contract) {
    return new Contract(
      wallet.account(),
      abi[contract].contractAddr,
      {
        viewMethods: abi[contract].viewMethods,
        changeMethods: abi[contract].changeMethods,
        sender: wallet.getAccountId(), 
      }
    )
}

export function yoctoToNear(amount = "1000000000000000000000000") {
  return Number(utils.format.formatNearAmount(amount)).toFixed(2);
}
