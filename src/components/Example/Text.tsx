import { useState } from "react";
export default function Text(): JSX.Element {
  const [text, setText] = useState<boolean>(false);
  const toggleText = (): void => {
    setText(!text);
  };
  return (
    <div>
      {text ? <div> 'Yoel Tavger' </div> : null}
      <button onClick={toggleText}>Toggle Text</button>
    </div>
  );
}
