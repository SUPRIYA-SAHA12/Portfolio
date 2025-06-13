import React from 'react'

const Home = () => {
  return (
    <div className='flex text-white w-full justify-between items-start p-10 md:p-20'>
        <div className='md:w-2/4 md:pt-10'>
          <h1 className='text-3xl md:text-6xl font-bold flex leading-normal tracking-tighter'>"Hello , I am 𝐒𝐮𝐩𝐫𝐢𝐲𝐚 𝐬𝐚𝐡𝐚</h1>
          <p className='text-white  text-sm md:text-2xl tracking-tight font-thin'>Motivated and dedicated MCA student with strong foundational skills in web development and programming. Eager to contribute to team success through hard work, attention to detail, and a passion for building practical applications. Seeking an opportunity to grow and apply my knowledge in a dynamic professional environment.
            </p>
            <button type="button" class="w-40 py-3 active:scale-95 transition text-sm text-white rounded-lg bg-indigo-600 flex items-center justify-center gap-1 hover:bg-blue-800">
        <svg class="mt-0.5" width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.568 10.304c0 .1-.02.195-.047.285l-4.403-4.735 4.45-3.46zm-13.074.962 4.462-4.754 1.69 1.278 1.618-1.286 4.535 4.762c-.071.016-12.234.016-12.305 0m-.769-.962v-7.91l4.45 3.46-4.403 4.735a1 1 0 0 1-.047-.285m13.349-8.9L8.647 6.35 2.219 1.404zm-.495-.988H2.714A1.98 1.98 0 0 0 .736 2.393v7.91c0 1.093.886 1.978 1.978 1.978h11.865a1.98 1.98 0 0 0 1.978-1.977v-7.91A1.98 1.98 0 0 0 14.579.415" fill="#fff"/>
        </svg>
        <p class="mb-0.5">Message Me</p> </button>
                </div>
        <div><img src="" alt="" /></div>

    </div>
  )
}

export default Home