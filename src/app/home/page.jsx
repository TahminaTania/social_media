import React from 'react'
import NewsFeed from '../../components/NewsFeed'

export default function HomePage() {
  return (
   <section>
    <div className='grid grid-cols-4'>
        <div className=''>Search</div>
        <div className='col-span-2'>Post <NewsFeed/></div>
        <div className=''>Sign In--Resgistration/ User --LogOut</div>

    </div>
   </section>
  )
}

