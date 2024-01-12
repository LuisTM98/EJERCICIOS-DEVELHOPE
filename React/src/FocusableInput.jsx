import { useEffect, useRef } from "react";

export function FocusableInput() {
  const leRef1 = useRef(null);

  useEffect(() => {
    leRef1.current?.focus();
  });

  return (
    <div>
      <input type="text" ref={leRef1}></input>
    </div>
  );
}

