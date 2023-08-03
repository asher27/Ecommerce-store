'use client';

import { useEffect, useState } from 'react';
import PreviewModal from '@/components/preview-modal';

const ModalProvider = () => {
  const [isMounted, setIsMounter] = useState(false);
  useEffect(() => {
    setIsMounter(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <PreviewModal />
    </>
  );
};

export default ModalProvider;
