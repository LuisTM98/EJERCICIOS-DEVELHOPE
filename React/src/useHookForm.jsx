import { useState } from "react";

export function useHookForm() {
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  function handleDataUpdate(event) {
    setData({ ...data, [event.target.id]: event.target.value });
  }

  return {
    username: data.username,
    password: data.password,
    handleDataUpdate,
  };
}
