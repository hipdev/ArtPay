import { useForm } from 'react-hook-form'
import { Wizard } from 'react-use-wizard'
import FirstStepQuote from './Steps/FirstStepQuote'
import FourStepQuote from './Steps/FourStep'
import SecondStepQuote from './Steps/SecondStepQuote'
import ThirdStepQuote from './Steps/ThirdStepQuote'
import ShareStep from './Steps/ShareStep'
import { useAppContext } from '../../../context/state'

const NewQuote = () => {
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
  //const onSubmit = (data) => console.log(data)


  const sessionState = useAppContext();

  const onSubmit = (data) => {
    console.log("No data expected:"+data);
    console.log("SessionState.job should have it"+ sessionState.job);
    //TODO:DB: Append row in JOB table from sessionState.job
  }


  return (
    <section className="px-3 mt-3 text-darky">
      <h2 className="text-2xl font-bold mb-5">New Quote</h2>

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
  )
}

export default NewQuote
