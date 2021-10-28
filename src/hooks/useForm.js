import { useState } from "react";

export const useForm = (initialState = {}) => {
  const [formValues, setForm] = useState(initialState);

  const handleInputChange = (e) => {
    setForm({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  return {
    formValues,
    handleInputChange,
  };
};
