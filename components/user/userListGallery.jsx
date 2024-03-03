import React from 'react'
import Navbar from '../navbar'
import ListGalleryItem from './listGalleryItem'


export default function UserListGallery() {
  return (
    <div className='flex flex-col h-full'>
    <div className='w-full flex flex-col items-center'>
        <ListGalleryItem />
        <ListGalleryItem />
        <ListGalleryItem />
        <ListGalleryItem />
        <ListGalleryItem />

     </div>   
      <div className='w-full'>
        <Navbar />
      </div>
    </div>
  )
}
