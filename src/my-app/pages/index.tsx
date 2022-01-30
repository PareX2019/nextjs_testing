import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/index.module.css'
import { NextUIProvider, Button, Spacer } from '@nextui-org/react';


const Home: NextPage = () => {
  return (
    <NextUIProvider>
      <div>
      <Button shadow >Click me</Button>
      <Spacer y={2} />
      <Button>Click me1</Button>
      </div>
     
   </NextUIProvider>
  )
}

export default Home
