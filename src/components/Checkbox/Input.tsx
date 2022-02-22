import { useCheckboxContext } from "./useCheckboxContext";

type InputProps = React.HTMLAttributes<HTMLInputElement>;

export function Input(props: InputProps) {
  const { isChecked, setIsChecked } = useCheckboxContext()

  return (
    <input
      {...props}
      type="checkbox"
      checked={isChecked}
      onChange={(e) => (setIsChecked ? setIsChecked(e.target.checked) : e)}
    />
  );
}