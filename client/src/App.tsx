import GmapComponent from "./components/Map";
import DataTable from "./components/Table";
import { useEffect } from "react";
import { useFetchData } from "./hooks/useFetchData";
import useLoading from "./hooks/useLoading";
import useLocations from "./hooks/useLocations";
import DisplayCard from "./components/Card";
import FilterButtons from "./components/Filter";
function App() {
  const { getLocationsData } = useFetchData();
  const { isLoading } = useLoading();
  const { locations, selected, sortLocations, sortedLoc } = useLocations();
  const locTypes = Array.from(new Set(locations.map(({ txTipo }) => txTipo)));

  useEffect(
    () => () => {
      getLocationsData();
    },
    []
  );
  return (
    <>
      <div
        className="p-6 max-w-screen-xl mx-auto grid grid-cols-2 gap-6"
        style={{ height: "100vh" }}
      >
        <div className="max-h-full flex flex-col overflow-hidden">
          <div className="text-7xl mb-6 700">
            <h1> Pontos Turísticos </h1>
          </div>
          <FilterButtons types={locTypes} setSort={sortLocations} />
          {isLoading ? "" : <DataTable locations={sortedLoc} />}
        </div>
        <div className="col-span-1 grid grid-rows-4 overflow-hidden gap-2">
          <div className="row-span-3">
            <GmapComponent selected={selected} />
          </div>

          <DisplayCard selected={selected} />
        </div>
      </div>
    </>
  );
}

export default App;
