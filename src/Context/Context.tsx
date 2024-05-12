// ButtonProvider.tsx
import React, { createContext, useState } from 'react';

type ButtonProviderProps = {
    children: React.ReactNode; // Allow children to be passed as props
  };

type ButtonContextType = {
  passSignal:boolean;
  setPassSignal:React.Dispatch<React.SetStateAction<boolean>>;
  selectedButton: string | number;
  setSelectedButton: React.Dispatch<React.SetStateAction<string | number>>;
  refresh: string | number;
  setRefresh: React.Dispatch<React.SetStateAction<string | number>>;
};

const ButtonContext = createContext<ButtonContextType>({
  selectedButton: '',
  setSelectedButton: () => {},
  refresh: '',
  setRefresh: () => {},
  setPassSignal: () => {},
  passSignal:false
});

export const ButtonProvider: React.FC<ButtonProviderProps> = ({ children }) => {

  const [selectedButton, setSelectedButton] = useState<string | number>('');
  const [refresh, setRefresh] = useState<string | number> ('')
  const [passSignal, setPassSignal] = useState<boolean>(false)

  return (
    <ButtonContext.Provider value={{ selectedButton, setSelectedButton, refresh, setRefresh, passSignal, setPassSignal }}>
      {children}
    </ButtonContext.Provider>
  );
};

export default ButtonContext;
