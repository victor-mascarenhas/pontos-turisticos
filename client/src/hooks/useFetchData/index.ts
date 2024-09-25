import axios from "axios";
import useLocations from "../useLocations";
import useLoading from "../useLoading";

export const useFetchData = () => {
  const { onChangeLocations, onChangeSortedLocations } = useLocations();
  const { onChangeIsLoading } = useLoading();
  const baseURL = "http://localhost:3000/location/";

  const getLocationsData = async () => {
    try {
      onChangeIsLoading(true);
      const { data } = await axios.get(baseURL);
      onChangeLocations(data);
      onChangeSortedLocations(data);
      onChangeIsLoading(false);
    } catch (err) {
      onChangeIsLoading(false);
      console.log(err);
    }
  };

  return {
    getLocationsData,
  };
};
