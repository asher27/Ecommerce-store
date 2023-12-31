'use client';

import { useEffect, useState } from 'react';

const formatter = Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

interface CurrencyProps {
  value?: number | string;
}

const Currency = ({ value }: CurrencyProps) => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return <div className={'font-semibold'}>{formatter.format(Number(value))}</div>;
};

export default Currency;
