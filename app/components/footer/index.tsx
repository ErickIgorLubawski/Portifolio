import {IoMdHeart} from 'react-icons/io'

export const Footer = () =>{
    return (
        <footer className="h-14 w-full flex items-center justify-center bg-zinc-900">
            <span className='flex items-center gap-1.5 text-xs sm:text-sm font-mono text-gray-400'>
                Made By
                <IoMdHeart size ={13} className='text-yellow-800'/>
                by
                <strong className='font-medium'>Erick igor Lubawski</strong>                
            </span>
        </footer>
    )
}