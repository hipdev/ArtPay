import { useForm } from 'react-hook-form'
import { Wizard } from 'react-use-wizard'
import FirstStepQuote from './Steps/FirstStepQuote'
import SecondStepQuote from './Steps/SecondStepQuote'
import ThirdStepQuote from './Steps/ThirdStepQuote'
import ShareStep from './Steps/ShareStep'
import { useAppContext } from '../../../context/state'
import { initNear, loadContract } from '../../../context/utils'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import ShareLink from './ShareLink'

const MintNFT = () => {

  const router = useRouter()

  const {
    register,
    trigger,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      legalAssignment: 1,
    },
  })

  const [minted, setMint] = useState(null)
  useEffect(()=> {
    const urlParams = new URLSearchParams(window.location.search);
    setMint(urlParams.get('transactionHashes'));
  }, []);

  const sessionState = useAppContext();

  const onSubmit = async (data) => {
    const { near, wallet } = await initNear();
    sessionState.near = near;
    sessionState.wallet = wallet;

    const contract: any = loadContract(sessionState.near, sessionState.wallet, "nft")
    const response = await contract.nft_mint( 
      {
        receiver_id: sessionState.wallet.getAccountId(),
        token_id: sessionState.newNFT.tokenId,
        metadata: { 
          title: "ArtPay", 
          description: "Example ArtPay NFT!", 
          media: "IPFS URL / URL", 
          copies: 1,
          copyright: sessionState.newNFT.copyright, // IMPORTANT FOR ARTPAY NFT
          right_assign: sessionState.newNFT.rightAssign, // IMPORTANT FOR ARTPAY NFT
        },
        // perpetual_royalties: attributeParties,
      },
      sessionState.MAX_GAS, sessionState.MINT_PRICE,
    );
  }


  return (
    <>
    {minted 
    ?
    <div>
      <div className="mb-5 px-2">
        <div className="mt-5 text-center font-medium">NFT Minted!</div>
        <ShareLink url={`https://explorer.testnet.near.org/transactions/${minted}`}/>   
      </div>
    </div>
    :
    <section className="px-3 mt-3 text-darky">
      <h2 className="text-2xl font-bold mb-5">Mint</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Wizard>
          <FirstStepQuote register={register} trigger={trigger} />
          <SecondStepQuote
            register={register}
            trigger={trigger}
            watch={watch}
          />
          <ThirdStepQuote register={register} trigger={trigger} />
          <ShareStep register={register} trigger={trigger} />
        </Wizard>
      </form>
    </section>
    }
    </>
  )
}

export default MintNFT
