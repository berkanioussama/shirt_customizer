'use client'

import Image from 'next/image';
import {motion, AnimatePresence } from 'framer-motion'
import { useSnapshot } from 'valtio';
import state from '../store';
import CustomButton from '../components/CustomButton';
import logo from '@/public/threejs.png'

import {
    headContainerAnimation,
    headContentAnimation,
    headTextAnimation,
    slideAnimation
} from '../config/motion'

const Hero = () => {

    const snap = useSnapshot(state);

    return ( 
        <AnimatePresence>
            {snap.intro && (
                <motion.section className='home' {...slideAnimation('left')}>
                    <motion.header {...slideAnimation('down')}>
                        <Image
                            src={logo}
                            alt='logo'
                            className='w-8 h-8 object-contain'
                            width={32}
                            height={32}
                        />
                    </motion.header>
                    <motion.div className='home-content' {...headContainerAnimation}>
                        <motion.div {...headTextAnimation}>
                            <h1 className='head-text'>LET`S <br className='hidden sm:block'/>DO IT</h1>
                        </motion.div>
                        <motion.div className='flex flex-col sm:gap-5 gap-1' {...headContentAnimation}>
                            <p className='max-w-md font-normal text-gray-600 text-base'>Create your unique and exclusive shirt with our brand-new 3D customization tool. <strong>Unleash your imagination</strong>{" "} and define your own style.</p>
                        </motion.div>
                        <CustomButton
                            type="filled"
                            title="Customize It"
                            customStyles="w-fit px-4 py-2.5 font-bold test-sm"
                            handleClick={() => {state.intro=false}}
                        />
                    </motion.div>
                </motion.section>
            )}
        </AnimatePresence>
    );
}
 
export default Hero;