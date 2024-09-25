import { Dispatch, ReactNode, SetStateAction } from "react";

export type LocationState = {
  locations: {
    allData: Location[] | null;
    setAllData: Dispatch<SetStateAction<Location[] | null>>;
    selected: Location | null;
    setSelected: Dispatch<SetStateAction<Location | null>>;
    sortedLoc: Location[] | null;
    setSortedLoc: Dispatch<SetStateAction<Location[] | null>>;
  };
  loading: {
    isLoading: boolean;
    setIsLoading: Dispatch<SetStateAction<boolean>>;
  };
};

export type ProviderProps = {
  children?: ReactNode;
};

export type Location = {
  _id: number;
  txAtrativo: string;
  txEndereco: string;
  txTipo: string;
  txTombamento: string;
  txBairro: string;
  latitude: number;
  longitude: number;
};
