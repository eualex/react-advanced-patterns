import { useState } from "react";
import { Input } from "./Input";
import { Label } from "./Label";
import { CheckboxProvider } from "./useCheckboxContext";

type CheckboxProps = {
  children: React.ReactNode
};

function Checkbox({ children }: CheckboxProps) {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <CheckboxProvider value={{ isChecked, setIsChecked }}>
      {children}
    </CheckboxProvider>
  );
}

Checkbox.Input = Input;
Checkbox.Label = Label;

export { Checkbox }
