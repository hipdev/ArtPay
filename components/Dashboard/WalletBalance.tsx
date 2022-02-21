import { yoctoToNear } from '../../context/utils'
import { useAppContext } from '../../context/state'




// Somehow can't pass value in balance so for now load via near here.
const WalletBalance = ({ balance }) =>
{
    const sessionState = useAppContext();
  
    var walletUrl = 'http://wallet.near.org/';
    var walletName = sessionState.wallet && sessionState.wallet.getAccountId();
    if (walletName.includes('.testnet'))
    {
        walletUrl = 'http://wallet.testnet.near.org/';
    }

    return (
        <div>
            <div className="flex justify-between mt-2 mr-2">
                <p className="text-black">NEAR</p>
                <p className="font-bold">{yoctoToNear(balance.toString())}</p>
            </div>
            <div className="text-slate-400 tracking-tight text-xs text-left">
                <a href={walletUrl} target='_blank' rel="noreferrer">
                View on NEAR Wallet
                </a>
            </div>
        </div>
    )
} 

export default WalletBalance