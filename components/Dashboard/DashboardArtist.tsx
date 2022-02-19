import {
  BsCheck2,
  BsFillChatFill,
  BsFillJournalBookmarkFill,
  BsFillPencilFill,
} from 'react-icons/bs'
import { BiPlusCircle } from 'react-icons/bi'
import { MdShowChart } from 'react-icons/md'
import { AiOutlineEllipsis } from 'react-icons/ai'
import MintOffer from './MintOffer'
import Image from 'next/image'
import Link from 'next/link'

import { useState, useEffect } from 'react'
import { useAppContext } from '../../context/state'
import { initNear, loadContract } from '../../context/utils'

const DashboardArtist = () => {
  const sessionState = useAppContext();
  const [escrows, setEscrows] = useState([
    {
      title: "Loading",
      description: "...",
      contractor: "...",
      locked_amount: "...",
      escrow_state: "...",
    }
  ]);

  useEffect(() => {
    /* initalise near api here and store in AppContext */ 
    const init = async () => {
      const { near, wallet } = await initNear();
      sessionState.near = near;
      sessionState.wallet = wallet;

      console.log(sessionState.wallet);

      if (sessionState.wallet && sessionState.wallet.isSignedIn()) {
        const contract: any = loadContract(sessionState.near, sessionState.wallet, "escrow")
        setEscrows(await contract.get_escrows_as_client({}));
      }
    }

    init();
  }, []);


  return (
    <section className="px-3 mt-3 text-darky">
      <MintOffer />

      <div className="flex justify-between mt-4 items-center gap-1">
        <span className="tracking-tight">Lock the $ before you start</span>{' '}
        <Link href="/new-quote">
          <a className="bg-primary rounded-sm text-white px-3 py-1 text-lg font-semibold flex gap-1 items-center">
            New Quote
            <span className="text-xl">
              <BiPlusCircle />
            </span>
          </a>
        </Link>
      </div>

      <div className="mb-2">
        <h2 className="flex items-center gap-2 font-medium text-xl mt-7">
          In progress{' '}
          <span>
            <MdShowChart />
          </span>
        </h2>
      </div>

      {
        escrows.map((escrow, index) => {
          return (
            <div key={index} className="shadow-md px-3 py-2 mb-2 bg-white">
              <div className="flex justify-between text-lg mb-2">
                <h3>{escrow.title}</h3>
                <h3>{escrow.contractor}</h3>

                <button>
                  <AiOutlineEllipsis className="text-xl" />
                </button>
              </div>
              <p className="tracking-tight">
                {escrow.description}
              </p>
              <p className="tracking-tight">
                PROGRESS: {escrow.escrow_state}
              </p>
              <div className="mt-4 flex justify-between">
                <div className="flex items-center gap-2">
                  {/* <span className="mx-1">
                    <Image
                      src="/images/julian.jpg"
                      width={32}
                      height={32}
                      className="rounded-full"
                    />
                  </span> */}
                  <p>
                    <span className="text-xs">NEAR</span>
                    <b className="font-bold">{` $${escrow.locked_amount}`}</b>
                  </p>
                </div>
                <div className="flex gap-2 text-lg">
                  <Link href="/update-job/draft">
                    <button className="border border-gray-300 shadow-sm py-2 px-2 rounded-sm">
                        <BsFillPencilFill className="" />
                    </button>
                  </Link>
                  <button className="border border-gray-300 shadow-sm py-2 px-2 rounded-sm">
                    <BsFillChatFill className="" />
                  </button>
                  <Link href="/update-job/final">
                    <button className="border border-gray-300 shadow-sm py-2 px-2 rounded-sm">
                      <BsCheck2 className="" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          )
        })
      }      

      <div className="mb-2">
        <h2 className="flex items-center gap-2 font-medium text-xl mt-7">
          Completed
          <span>
            <BsCheck2 />
          </span>
        </h2>

        <p className="tracking-tight">Finished job appear here</p>
      </div>

      <div className="mb-2">
        <h2 className="flex items-center gap-2 font-medium text-xl mt-7">
          Quotes
          <span>
            <BsFillJournalBookmarkFill />
          </span>
        </h2>
        <p className="tracking-tight">Jobs waiting for approval</p>
      </div>
    </section>
  )
}

export default DashboardArtist
