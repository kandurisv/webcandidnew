import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'
import Footer from '../Components/Footer'
import HeaderNoSearch from '../Components/HeaderNoSearch'
import LandingPage from '../Components/LandingPage'
import UserPage from '../Components/UserPage'
import { API } from '../utils/exports'
//import Error from '../../Components/Error'



const User = (props) => {
  const router = useRouter()
  const {user} = router.query
  const [data,setData] = React.useState(props)

  React.useEffect(() => {
    console.log(user)
    console.log(API)
    console.log(props)
  },[user,data,props])

  return (
    <div >
      <Head>
        <title> Candid reviews posted by {user} </title>
        <meta name="description" content={"Find best products shared by " + user + " and incentivize them by buying using their links"} />
        <link rel="icon" href="/500SCircle.png" />
      </Head>
      <div>
        <div className = "bg-white lg:top-0 lg:z-50">
          <HeaderNoSearch />
        </div>
        <div>
          <LandingPage content= {data} />
        </div>
        <div className = "bg-white lg:bottom-0 lg:z-50 mt-20">
          <Footer />
        </div>
      </div>
    </div>
  )

}

export async function getServerSideProps(context) {
  
  const { user } = context.params

  // Fetch data from external API

   const res = await fetch(API + 'user?user_name=' + user)
   const data = await res.json()
  
//   // Pass data to the page via props
   return { props: { data } }
}


export default User

