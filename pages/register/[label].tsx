import { useRouter } from 'next/router'
import React from 'react'

const Register = () => {
  const router = useRouter();
  const {label} = router.query;
  
  return (
    <div></div>
  )
}

export default Register