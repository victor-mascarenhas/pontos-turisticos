import mongoose from "mongoose";
export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_CONNECTION);
    return console.log("Banco de dados conectado");
  } catch (err) {
    console.error("Erro ao conectar no banco de dados", err);
    process.exit(1);
  }
};
