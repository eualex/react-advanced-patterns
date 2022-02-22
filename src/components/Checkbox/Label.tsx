import { useCheckboxContext } from "./useCheckboxContext";

type LabelProps = {
  children?: React.ReactText
};

export function Label({ children }: LabelProps) {
  const { setIsChecked } = useCheckboxContext()

  return (
    <p onClick={() => (setIsChecked ? setIsChecked((prev) => !prev) : "")}>
      {children}
    </p>
  );
}