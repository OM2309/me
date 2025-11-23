import React from 'react'

const Footer = () => {
  return (
    <footer>
        <div className="flex flex-col justify-center items-center my-10">
            <p className="font-inter text-center text-zinc-600 dark:text-zinc-400 text-md font-normal">
               Desing and Developed by <span className="underline font-semibold">Anurag</span>
            </p>
            <p className="font-inter text-center text-zinc-600 dark:text-zinc-400 text-sm font-normal " >
                &copy; 2025. All rights reserved.
            </p>
        </div>
    </footer>
  )
}

export default Footer