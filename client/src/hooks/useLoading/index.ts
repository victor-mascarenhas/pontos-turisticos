import { LocationContext } from "@/context";
import { useContext } from "react";

const useLoading = () => {
  const context = useContext(LocationContext);

  const onChangeIsLoading = (value: boolean) => {
    context?.loading.setIsLoading(value);
  };

  return {
    isLoading: context?.loading.isLoading || false,
    onChangeIsLoading,
  };
};
export default useLoading;
