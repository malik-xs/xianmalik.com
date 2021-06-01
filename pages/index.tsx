import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import Post from '../types/post'
import { Controller, Scene } from 'react-scrollmagic';

type Props = {
  allPosts: Post[]
}

const Index = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>xianmalik.me()</title>
        </Head>
        <Container>
          <Controller globalSceneOptions={{ triggerHook: 'onLeave' }}>
            <Scene duration={500} pin>
              <section className='bg-black text-gray-100 min-h-screen flex align-middle justify-center flex-col'>
                <div className='text-gray-500 text-sm mb-3'>&lt;intro&gt;</div>
                <div className='text-3xl'>
                  <span className='font-medium tracking-wider text-purple-500'>xianmalik</span> = <span className='text-gray-200'>{'{'}</span>
                </div>
                <div className='ml-8 my-4 text-gray-500 text-xl font-medium tracking-wider'>
                  <span className='text-purple-5  00'>name:</span> Malik Zubayer Ul Haider
                  <br />
                  occupation: Front End Engineer
                </div>
                <div className='text-3xl font-medium tracking-wider'>{'}'}</div>
                <div className='text-gray-500 text-sm mt-3'>&lt;/intro&gt;</div>
              </section>
            </Scene>
            <Scene duration={5000} classToggle="active" pin>
              <div className='bg-black min-h-screen text-gray-100 py-40'>Sticky Example</div>
            </Scene>
            <Scene duration={500} classToggle="active" pin indicators={true}>
              <div className='bg-black min-h-screen text-gray-200 py-40'>Sticky Example</div>
            </Scene>
          </Controller>
        </Container>
      </Layout>
    </>
  )
}

export default Index
