import { HiOutlineSelector } from 'react-icons/hi'
import { StepProps } from '../NewUpdateTypes'
import UpdateSteps from '../NewUpdateNumberSteps'

const FundEscrow = ({ register, trigger }: StepProps) => {
  return (
    <div>
      <UpdateSteps />

      <h3 className="text-xl font-medium mb-5">Fund the Escrow</h3>

      <label className="flex flex-col mb-5">
        <div className="flex justify-between px-5 py-2 deliveryBox"></div>
      </label>

      <h3 className="text-xl font-medium mb-5">What happens next?</h3>
      <label className="flex flex-col mb-5">
        <div className="rounded-sm text-darky">
          <p>
            The contractor will update you every 3 days until the job is done or
            up until [expiry date]{' '}
          </p>
        </div>
      </label>

      <h3 className="text-xl font-medium mb-5">What if they don’t?</h3>
      <label className="flex flex-col mb-5">
        <div className="rounded-sm text-darky">
          <p>The funds will be returned to you.</p>
        </div>
      </label>

      <div className="mt-3 flex justify-end ">
        <button
          type="button"
          className="px-3 border border-gray-400 rounded-sm py-1 font-medium"
        >
          Back
        </button>

        <button className="px-3 rounded-sm py-1 bg-primary text-white font-medium">
          Done
        </button>
      </div>
    </div>
  )
}

export default FundEscrow
