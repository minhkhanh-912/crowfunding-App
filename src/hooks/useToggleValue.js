import { useState } from "react";

export default function useToggleValue(innitialeValue = false) {
  const [value, setvalue] = useState(innitialeValue);
  const handleValue = () => {
    setvalue(!value);
  };
  return {
    value,
    handleValue,
  };
}
