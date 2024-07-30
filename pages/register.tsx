import { useRouter } from 'next/router';
import { useEffect } from 'react';

const RegisterRedirect = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace('/#register');
  }, [router]);

  return null;
};

export default RegisterRedirect;
