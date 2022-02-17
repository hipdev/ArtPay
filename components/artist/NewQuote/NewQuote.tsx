import { useForm } from 'react-hook-form'
import { Wizard } from 'react-use-wizard'
import FirstStepQuote from './Steps/FirstStepQuote'
import FourStepQuote from './Steps/FourStep'
import SecondStepQuote from './Steps/SecondStepQuote'
import ThirdStepQuote from './Steps/ThirdStepQuote'
import ShareStep from './Steps/ShareStep'

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
  const onSubmit = (data) => console.log(data)

  return (
    <section className="px-5 mt-3 text-darky">
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
