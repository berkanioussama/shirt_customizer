import Image from 'next/image'
import Hero from './pages/Hero'
import Customizer from './pages/Customizer'
import CanvasModel from './canvasModel'

export default function Home() {
  return (
    <main className='app transition-all ease-in'>
      <Hero/>
      <Customizer/>
      <CanvasModel/>
    </main>
  )
}
