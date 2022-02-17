import {
  BsCheck2,
  BsFillChatFill,
  BsFillJournalBookmarkFill,
  BsFillPencilFill,
} from 'react-icons/bs'
import { AiOutlineEllipsis } from 'react-icons/ai'
import MintOffer from './MintOffer'
import Image from 'next/image'
import FeaturedArtist from './FeaturedArtist'

const DashboardClient = () => {
  return (
    <section className=" mt-3 text-darky">
      <div className="px-3">
        <MintOffer />

        <div className="p-3 text-center text-slate-400">
          <p className="tracking-tight text-xs">
            Invite an artist. Earn credits.
          </p>
        </div>

        <div className="mb-2">
          <h2 className="flex items-center gap-2 font-medium text-xl mt-7">
            My Orders
            <span>
              <BsFillJournalBookmarkFill />
            </span>
          </h2>
        </div>

        <div className="shadow-md px-3 py-2 bg-white">
          <div className="flex justify-between text-lg mb-2">
            <h3>NFT headshot sketch for surfie</h3>
            <button>
              <AiOutlineEllipsis className="text-xl" />
            </button>
          </div>
          <p className="tracking-tight text-sm">
            Make me cross between a shark and a surfboard 🤙 …
          </p>
          <div className="mt-4 flex justify-between">
            <div className="flex items-center gap-2">
              <span className="mx-1">
                <Image
                  src="/images/julian.jpg"
                  width={32}
                  height={32}
                  className="rounded-full"
                />
              </span>
              <p>
                <span className="text-xs">TUSD</span>
                <b className="font-bold">$2,500</b>
              </p>
            </div>
            <div className="flex gap-2 text-lg">
              <button className="border border-gray-300 shadow-sm py-2 px-2 rounded-sm">
                <BsFillPencilFill className="" />
              </button>
              <button className="border border-gray-300 shadow-sm py-2 px-2 rounded-sm">
                <BsFillChatFill className="" />
              </button>
              <button className="border border-gray-300 shadow-sm py-2 px-2 rounded-sm">
                <BsCheck2 className="" />
              </button>
            </div>
          </div>
        </div>

        <div className="mb-2">
          <h2 className="flex items-center gap-2 font-medium text-xl mt-7">
            Previous Orders
            <span>
              <BsCheck2 />
            </span>
          </h2>

          <p className="tracking-tight text-slate-400 text-sm">
            Finished job appear here
          </p>
        </div>

        <div className="mb-2">
          <h2 className="flex items-center gap-2 font-medium text-xl mt-7">
            Quotes
            <span>
              <BsFillJournalBookmarkFill />
            </span>
          </h2>
          <p className="tracking-tight text-slate-400 text-sm">
            Jobs waiting for approval
          </p>
        </div>
      </div>

      <div className="mb-2">
        <h2 className="flex px-3 items-center gap-2 font-medium text-xl mt-7">
          Featured Artist
        </h2>
        <hr />
        <FeaturedArtist />
        <hr />
      </div>
    </section>
  )
}

export default DashboardClient
