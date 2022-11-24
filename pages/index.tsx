import type { NextPage } from "next"
import Head from "next/head"
import About from "../components/aboutPage/About"
import Background from "../components/Background"
import Blog from "../components/blogsPage/Blogs"
import Contact from "../components/contactPage/Contact"
import LoaderPage from "../components/LoaderPage"
import Menus from "../components/Menus"
import ProfileCard from "../components/ProfileCard"
import Resume from "../components/resumePage/Resume"
import Works from "../components/worksPage/Works"
import "react-loading-skeleton/dist/skeleton.css"
import client from "../apollo-client"
import profileOperations from "../graphqlOperations/profile"
import { ProfileData } from "../types"

interface Props {
  profileData: ProfileData
}

const Home: NextPage<Props> = ({ profileData }) => {
  return (
    <main className="min-h-screen relative home flex justify-center items-center">
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <LoaderPage /> */}

      <Background />
      <section className="z-10 w-[126.8rem] h-[62.5rem] flex">
        <Menus />
        <ProfileCard />

        <div className="w-[70.5rem] h-full py-6 relative before:content-[''] before:absolute before:top-6 before:left-0 before:right-[0.7rem] before:h-6 before:bg-gray-900 before:z-30 after:content-[''] after:absolute after:bottom-6 after:left-0 after:right-[0.7rem] after:h-6 after:bg-gray-900 after:z-30">
          <About />
          {/* <Resume /> */}
          {/* <Works /> */}
          {/* <Blog /> */}
          {/* <Contact /> */}
        </div>
      </section>
    </main>
  )
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: profileOperations.Queries.getProfile,
  })

  return {
    props: {
      profileData: data.profiles[0],
      revalidate: 3600,
    },
  }
}

export default Home
