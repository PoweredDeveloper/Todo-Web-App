import React from 'react'

import clockSvg from '../../assets/svgs/clock.svg'
import rewardSvg from '../../assets/svgs/reward.svg'

import '../../css/styles.css'
import Edit from './Components/Edit'
import './TodoStyles/todos.css'

export default function Todo({ todo, toggleTodo, deleteTodo }) {
  return (
    <>
      <div className='card'>
        <div className='sideLine' />
        <div className='wrapper'>
          <div
            style={
              todo.complete
                ? { textDecoration: 'line-through' }
                : { textDecoration: 'none' }
            }
          >
            {todo.info.name}
            <Edit />
          </div>

          <div>
            {todo.reward}
            <img className='reward_ico' src={rewardSvg} alt='reward' />
          </div>

          <div>
            <img className='clock_ico' src={clockSvg} alt='clock' />
            <span>{todo.info.dates.date}</span>
            <Edit />
          </div>

          <div>
            <Edit />
            {todo.info.description.length > 25
              ? todo.info.description.slice(0, 25) + '...'
              : todo.info.description}
          </div>
        </div>
        <div className='time'>
          <span>
            <span>{todo.info.dates.time.from}</span>
            <span>-</span>
            <span>{todo.info.dates.time.to}</span>
          </span>
        </div>
      </div>
    </>
  )
}
