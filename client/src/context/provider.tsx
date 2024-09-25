import { useState } from "react";
import { LocationContext } from ".";
import { Location, ProviderProps } from "./types";

export const LocationProvider = ({ children }: ProviderProps) => {
  const [locations, setLocations] = useState<Location[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectedLoc, setSelectedLoc] = useState<Location | null>(null);
  const [sortedLoc, setSortedLoc] = useState<Location[] | null>(null);
  return (
    <LocationContext.Provider
      value={{
        locations: {
          allData: locations,
          setAllData: setLocations,
          selected: selectedLoc,
          setSelected: setSelectedLoc,
          sortedLoc,
          setSortedLoc,
        },
        loading: {
          isLoading,
          setIsLoading,
        },
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};
