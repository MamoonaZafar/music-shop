import React from 'react'
import Container from '../Container'
import FooterList from './FooterList'
import Link from 'next/link'
import { MdFacebook } from 'react-icons/md'
import { AiFillInstagram, AiFillTwitterCircle, AiFillYoutube } from 'react-icons/ai'

const footer = () => {
  return (
    <footer className='bg-slate-700 text-slate-200 text-sm mt-16'>
        <Container>
            <div className='flex flex-col md:flex-row justify-between pt-16 pb-8'>
                <FooterList>
                    <h3 className='text-base font-bold mb-2'>Shop Categories</h3>
                    <Link href="#">Guitar</Link>
                    <Link href="#">Flute</Link>
                    <Link href="#">Saxophone</Link>
                    <Link href="#">Cello</Link>
                    <Link href="#">Harp</Link>
                    <Link href="#">Drums</Link>
                </FooterList>
                <FooterList>
                    <h3 className='text-base font-bold mb-2'>Customer Service</h3>
                    <Link href="#">Contact Us</Link>
                    <Link href="#">Shipping Policy</Link>
                    <Link href="#">Privacy Policy</Link>
                    <Link href="#">Returns & Exchanges</Link>
                </FooterList>
                <div className='w-full md:w-1/3 mb-6 md:mb-0'>
                    <h3 className='text-base font-bold mb-2'>About Us</h3>
                    <p className='mb-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                    <p>&copy; {new Date() .getFullYear()} Music~Shop. All Rights Reserved</p>
                </div>
                <FooterList>
                <h3 className='text-base font-bold mb-2'>Follow Us</h3>
                <div className="flex gap-2">
                <Link href="#">
                    <MdFacebook size={24}/>
                    <AiFillTwitterCircle size={24}/>
                    <AiFillInstagram size={24}/>
                    <AiFillYoutube size={24}/>
                </Link>
                </div>
                </FooterList>
            </div>
        </Container>
    </footer>
  )
}

export default footer