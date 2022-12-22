import React from 'react'
import '../TodoStyles/todos.css'

import editSvg from '../../../assets/svgs/edit.svg'

export default function Edit() {
  return (
    <>
      <a href='#' className='edit'>
        <img src={editSvg} alt='edit' />
      </a>
    </>
  )
}
