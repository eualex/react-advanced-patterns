import { createContext, useContext } from "react";

type CheckboxContextProps = {
  isChecked?: boolean;
  setIsChecked?: React.Dispatch<React.SetStateAction<boolean>>;
};

type CheckboxProviderProps = {
  children: React.ReactNode;
  value: CheckboxContextProps;
};

const CheckboxContext = createContext({} as CheckboxContextProps);

export function CheckboxProvider({ children, value }: CheckboxProviderProps) {
  return (
    <CheckboxContext.Provider value={value}>
      {children}
    </CheckboxContext.Provider>
  );
}

export function useCheckboxContext() {
  const context = useContext(CheckboxContext);

  if (!context) {
    throw new Error(
      "useCheckboxContext must be used within a CheckboxProvider"
    );
  }

  return context;
}