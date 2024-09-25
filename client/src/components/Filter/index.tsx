import useLocations from "@/hooks/useLocations";
import { Button } from "../ui/button";
import { filterButtonsProps } from "./types";

const FilterButtons = ({ types, setSort }: filterButtonsProps) => {
  const { onChangeSortedLocations, locations } = useLocations();
  return (
    <div className="mb-3 flex justify-between gap-2 overflow-x-auto h-60 max-h-fit py-4">
      <Button
        onClick={() => onChangeSortedLocations(locations)}
        variant={"secondary"}
      >
        Todos
      </Button>
      {types.map((type, i) => (
        <Button key={i} onClick={() => setSort(type)} variant={"secondary"}>
          {type}
        </Button>
      ))}
    </div>
  );
};

export default FilterButtons;
