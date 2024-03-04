import mongoose from "mongoose";

const UsuarioSchema = new mongoose.Schema({
  idUser: { type: String, required: true },
  dataValidade: { type: Date, required: true },
});

const Usuario = mongoose.model("Usuario", UsuarioSchema);

export default Usuario;
