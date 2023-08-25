// import Layout from '../components/layout'
// import NestedLayout from '../components/nested-layout'

export default function Page() {
  return (
    /** Your content */
    <div>Page</div>
  )
}

Page.getLayout = function getLayout(page) {
  return (
    // <Layout>
    //   <NestedLayout>{page}</NestedLayout>
    // </Layout>
    <div>Layout</div>
  )
}