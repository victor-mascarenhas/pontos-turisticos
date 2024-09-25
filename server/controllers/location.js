import Location from "../models/location.js";
import axios from "axios";
import { parseFeaturesToLocationData } from "../utils/index.js";

export const getAllLocations = async (req, res) => {
  try {
    const locations = await Location.find({});
    res.json(locations);
  } catch (err) {
    console.error(err.message);
    res.status(500).send({ error: "Erro ao buscar localizações." });
  }
};

const DATA_URL =
  "https://services8.arcgis.com/TpaOLI1HCh5AcRQB/arcgis/rest/services/Grouplayer_NELTUR_GESTAO_AGOL/FeatureServer/20/query?where=1%3D1&outFields=*&outSR=4326&f=json";
export const updateLocations = async () => {
  try {
    const { data } = await axios.get(DATA_URL);
    const parsedData = parseFeaturesToLocationData(data.features);
    parsedData.map(async (parsedlocation) => {
      const newLocations = await Location.findOneAndUpdate(
        { objectID: parsedlocation.objectID },
        parsedlocation,
        {
          new: true,
          upsert: true,
          runValidators: true,
        }
      );
      return newLocations;
    });

    console.log("Localizações atualizadas!");
  } catch (err) {
    console.log(err);
    console.log("Problema ao buscar informações na API");
  }
};
