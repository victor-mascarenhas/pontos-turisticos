import { createContext } from "react";
import { LocationState } from "./types";

export const LocationContext = createContext<LocationState | null>(null);
