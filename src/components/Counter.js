import React, { useState, useEffect, useCallback } from 'react';

export default function Counter({ contract }) {
  const [value, setValue] = useState(null);
  const [updating, setUpdating] = useState(false);
  const [error, setError] = useState(null);

  const fetchValue = useCallback(async () => {
    const initialValue = await contract.methods.value().call();
    setValue(initialValue);
  }, [contract]);

  useEffect(() => {
    // Load current value on component mount
    if (!value) {
      fetchValue();
    }
  });

  useEffect(() => {
    // Update value when 'updating' toggled true
    if (updating && contract) {
      // Reset any previous errors
      setError(null);
      // Send transaction
      contract.methods
        .increase()
        .send()
        .on('receipt', () => {
          fetchValue();
          setUpdating(false);
        })
        .on('error', (error) => {
          setError(error);
          setUpdating(false);
        });
    }
  }, [updating, contract, fetchValue]);

  useEffect(() => {
    console.log(value);
  }, [value]);

  return (
    <>
      <div>{value ? `Counter value: ${value}` : 'Loading...'}</div>
      <button onClick={() => setUpdating(true)} disabled={!!updating}>
        Increase Counter
      </button>
      <div>{updating && 'Awaiting Transaction'}</div>
      <div>{error && error.message}</div>
    </>
  );
}
