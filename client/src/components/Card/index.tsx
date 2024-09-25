import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { displayCardProps } from "./types";

const DisplayCard = ({ selected }: displayCardProps) => {
  return (
    <>
      <Card className="row-span-1">
        <CardHeader>
          {selected ? (
            <>
              <CardTitle>{selected?.txAtrativo}</CardTitle>
              <CardDescription>{selected?.txEndereco}</CardDescription>
            </>
          ) : (
            <CardTitle>Selecione um local</CardTitle>
          )}
        </CardHeader>
        <CardContent></CardContent>
        <CardFooter></CardFooter>
      </Card>
    </>
  );
};

export default DisplayCard;
