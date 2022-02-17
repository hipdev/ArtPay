import ReviewUpdate from '../components/client/ReviewUpdate'
import Layout from '../components/common/Layout'

//TODO: Router param should include the step number.  Pass down the step to render the correct view

export default function NewQuotePage() {
  return (
    <Layout>
      <ReviewUpdate />
    </Layout>
  )
}
