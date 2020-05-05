import { createContext, useContext, useState } from 'react';

export interface IStateData {
  [key: string]: any;
}

export type SetStateData = (stateData: IStateData) => void | Promise<void>;

export interface IStateDataContext {
  clearStateData: () => void;
  stateData: IStateData;
  setStateData: SetStateData;
}

const initialState: IStateData = {};

export const StateDataContext: React.Context<IStateDataContext> = createContext<IStateDataContext>({} as IStateDataContext);

export const useStateData = () => useContext(StateDataContext);

export const createStateData = (): IStateDataContext => {
  const [stateData, updateStateData] = useState<IStateData>(initialState);

  const setStateData: SetStateData = async (value: IStateData) => {
    const newState: IStateData = {
      ...stateData,
      ...value,
    };

    updateStateData(newState);
  };

  const clearStateData = async () => {
    updateStateData(initialState);
  };

  return { clearStateData, stateData, setStateData };
};
