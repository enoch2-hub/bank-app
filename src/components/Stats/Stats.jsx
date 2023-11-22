import React from 'react'

import './Stats.css'

const Stats = () => {
  return (
    <>
    <div className="stats-container">
        <div className="stats-1">
            <span>5600+</span>
            <span className='text-gradient'>USERS ACTIVE</span>
        </div>
        <div className="stats-2">
            <span>522++</span>
            <span className='text-gradient'>TRUSTED COMPANIES</span>
        </div>
        <div className="stats-3">
            <span>100M+</span>
            <span className='text-gradient'>TRANSACTIONS</span>
        </div>
    </div>
    
    </>
  )
}

export default Stats