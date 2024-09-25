import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { gmapProps } from "./types";

const GmapComponent = ({ selected }: gmapProps) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_API_KEY,
  });
  const coords = {
    lat: selected?.longitude || 0,
    lng: selected?.latitude || 0,
  };

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={{ width: "100%", height: "100%" }}
      center={coords}
      zoom={14}
    >
      <Marker position={coords} />
    </GoogleMap>
  ) : (
    <></>
  );
};

export default GmapComponent;
