import { useForm } from 'react-hook-form'
import { Wizard } from 'react-use-wizard'
import FirstStepUpdate from './Steps/FirstStepUpdate'
import FinalStepUpdate from './Steps/FinalStepUpdate'
import YourDeliverable from './Steps/YourDeliverable'
import ReceiveQuote from './Steps/ReceiveQuote'
import FundEscrow from './Steps/FundEscrow'
//import SecondStepUpdate from './Steps/SecondStepUpdate'
//import ThirdStepUpdate from './Steps/ThirdStepUpdate'

const ReviewUpdate = () => {
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
  const pageId = 0; //this.props.id passed in param
  const onSubmit = (data) => console.log(data)

  return (
    <section className="px-5 mt-3 text-darky">
      <h2 className="text-2xl font-bold mb-5">[Job Name]</h2>
      <div className="mt-3 flex justify-end">[expiry date]</div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Wizard startIndex={pageId}>
          {/**
           * ReceiveQuote
           * FundEscrow
           * Update (FirstStepUpdate) - can be issued multiple times
           * Final
           * Your NFT (YourDeliverable)
           */}

          <ReceiveQuote register={register} trigger={trigger} />
          <FundEscrow register={register} trigger={trigger} />
          <FirstStepUpdate register={register} trigger={trigger} />
          <FinalStepUpdate register={register} trigger={trigger} />
          <YourDeliverable register={register} trigger={trigger} />
        </Wizard>
      </form>
    </section>
  )
}

export default ReviewUpdate
