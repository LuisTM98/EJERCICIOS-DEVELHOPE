import { Color } from "./Color";

export function Colors({ leColorsArray }) {
  return (
    <ul>
      <Color colors={leColorsArray} />
    </ul>
  );
}
