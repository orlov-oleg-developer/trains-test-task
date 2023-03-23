import { useEffect, useState } from 'react'

const useValidation = (inputValue: any, validations: any) => {
  const [isInt, setIsInt] = useState({ state: true, errorMessage: "Число должно быть целым" });
  const [isPositive, setIsPositive] = useState({ state: true, errorMessage: "Число должно быть положительным" });
  const [isInputValid, setIsInputValid] = useState(false);

  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case 'isInt':
          Number.isInteger(Number(inputValue)) ? setIsInt({ ...isInt, state: false }) : setIsInt({ ...isInt, state: true });
          break;
        case 'isPositive':
          (Number(inputValue) >= 0) ? setIsPositive({ ...isPositive, state: false }) : setIsPositive({ ...isPositive, state: true });
          break;
      }
    }
  }, [inputValue])

  useEffect(() => {
    if (isInt.state || isPositive.state) {
      setIsInputValid(false)
    }
    else setIsInputValid(true)
  }, [isInt, isPositive])

  return {
    isInt,
    isPositive,
    isInputValid,
  }
}

export default useValidation;
