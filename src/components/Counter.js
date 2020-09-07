import React, { useState, useEffect } from 'react';

export default function Counter({ contract }) {
  const [initialValue, setInitialValue] = useState(null);

  useEffect(() => {
    if (!initialValue) {
      (async () => {
        const initialValue = await contract.methods.value().call();
        setInitialValue(initialValue);
      })();
    }
  });

  useEffect(() => {
    console.log(initialValue);
  }, [initialValue]);

  return (
    <div>{initialValue ? `Counter value: ${initialValue}` : 'Loading...'}</div>
  );
}
