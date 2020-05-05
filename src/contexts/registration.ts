import { createContext, useContext, useState } from 'react';

export interface IRegistrationData {
  PAGE_REGISTER_LAST_NAME: string;
  PAGE_REGISTER_GIVEN_NAME: string;
  PAGE_REGISTER_EMAIL: string;
  PAGE_REGISTER_PASSWORD: string;
  PAGE_REGISTER_RETYPE_PASSWORD: string;
  PAGE_REGISTER_ID_PHOTO: FileBase64;
}

export type SetRegistrationData = (registrationData: IRegistrationData) => void | Promise<void>;

export interface IRegistrationDataContext {
  clearRegistrationData: () => void;
  registrationData: IRegistrationData;
  setRegistrationData: SetRegistrationData;
}

const initialState: IRegistrationData = {
  PAGE_REGISTER_LAST_NAME: '',
  PAGE_REGISTER_GIVEN_NAME: '',
  PAGE_REGISTER_EMAIL: '',
  PAGE_REGISTER_PASSWORD: '',
  PAGE_REGISTER_RETYPE_PASSWORD: '',
  PAGE_REGISTER_ID_PHOTO: {
    name: '',
    size: -1,
    type: '',
    base64: '',
  },
};

export const RegistrationDataContext: React.Context<IRegistrationDataContext> = createContext<IRegistrationDataContext>(
  {} as IRegistrationDataContext,
);

export const useRegistrationData = () => useContext(RegistrationDataContext);

export const createRegistrationData = (): IRegistrationDataContext => {
  const [registrationData, updateRegistrationData] = useState<IRegistrationData>(initialState);

  const setRegistrationData: SetRegistrationData = async (value: IRegistrationData) => {
    const newState: IRegistrationData = {
      ...registrationData,
      ...value,
    };

    updateRegistrationData(newState);
  };

  const clearRegistrationData = async () => {
    updateRegistrationData(initialState);
  };

  return { clearRegistrationData, registrationData, setRegistrationData };
};
