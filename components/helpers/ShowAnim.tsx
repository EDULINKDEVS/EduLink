import React, { ReactNode } from 'react'

const ShowAnim = ({children}: {children: ReactNode}) => {
  return (
    <div style={{
        animation: '.7s showAnimLev1 forwards'
    }}>{children}</div>
  )
}

export default ShowAnim