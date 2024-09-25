import mongoose from "mongoose";

const locationSchema = new mongoose.Schema({
  objectID: { type: Number, unique: true },
  txAtrativo: { type: String, unique: true },
  txEndereco: { type: String },
  txTipo: { type: String },
  txTombamento: { type: String },
  txBairro: { type: String },
  latitude: { type: Number },
  longitude: { type: Number },
});

const locationModel = mongoose.model("location", locationSchema);

export default locationModel;
