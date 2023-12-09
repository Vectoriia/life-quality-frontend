import { useCallback, useState } from 'react';

const usePasswordInput = () => {
  const [isPasswordShown, setPasswordShown] = useState(false);

  const handleShowPassword = useCallback(() => {
    setPasswordShown((val) => !val);
  }, []);

  return { handleShowPassword, isPasswordShown };
};

export default usePasswordInput;
