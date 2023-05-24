import React from 'react'

const Footer = () => {
    return (
        <footer className='w-full bottom-0 bg-black text-white text-center p-2 mt-[100px]'>
            <div className='text-3xl'>
                <a href="" target="_blank" rel='noreferrer'><i className="fab fa-instagram pl-5 pr-5 hover:text-instapurple"></i></a>
                <a href="" target="_blank rel='noreferrer"><i className="fab fa-linkedin pl-5 pr-5 hover:text-linkedinblue"></i></a>
                <a href="" target="_blank rel='noreferrer"><i className="fab fa-github pl-5 pr-5 hover:text-githubgreen"></i></a>
            </div>
            <p className='text-base sm:text-xl font-cursive font-bold'>Created by <span className='text-yellow-400'>Harsh gupta</span></p>
        </footer>
    )
}

export default Footer