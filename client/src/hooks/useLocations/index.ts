import { LocationContext } from "@/context";
import { Location } from "@/context/types";
import { useContext } from "react";

const useLocations = () => {
  const context = useContext(LocationContext);

  const onChangeLocations = (locationsList: Location[]) => {
    context?.locations.setAllData(locationsList);
  };

  const onChangeSortedLocations = (locationsList: Location[]) => {
    context?.locations.setSortedLoc(locationsList);
  };

  const onChangeSelectedLoc = (selectedLoc: Location) => {
    context?.locations.setSelected(selectedLoc);
  };

  const sortLocations = (type: string) => {
    const fullData = context?.locations.allData;
    const sorted = fullData?.filter((item) => item.txTipo === type);
    if (sorted) {
      context?.locations.setSortedLoc(sorted);
    }
  };

  return {
    locations: context?.locations.allData || [],
    onChangeLocations,
    onChangeSelectedLoc,
    selected: context?.locations.selected || null,
    sortLocations,
    sortedLoc: context?.locations.sortedLoc || [],
    onChangeSortedLocations,
  };
};

export default useLocations;
