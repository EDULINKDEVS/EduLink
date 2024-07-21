import React, { ReactNode, useEffect, useState } from 'react';

const ShowAnim = ({ children }: { children: ReactNode }) => {
  const [key, setKey] = useState<number>(0);

  useEffect(() => {
    setKey(prevKey => prevKey + 1);
  }, [children]);

  return (
    <div key={key} style={{animation: '1s showAnimLev1 forwards' }}>
      {children}
    </div>
  );
};

export default ShowAnim;
