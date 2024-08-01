import CompanyRegister from '@/components/register/CompanyRegister';
import StudentRegister from '@/components/register/StudentRegister';
import { useRouter } from 'next/router'
import React from 'react'

const Register = () => {
  const router = useRouter();
  const {label} = router.query;
  return (
    <>
      {
        label === 'student'
        ?
        <StudentRegister />
        :
        label === 'company' && <CompanyRegister />
      }

    
    </>
  )
}

export default Register