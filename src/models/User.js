import mongoose from "mongoose";

const UsuarioSchema = new mongoose.Schema({
  idUser: String,
  dataValidade: Date,
});

const Usuario = mongoose.model("Usuario", UsuarioSchema);

export default Usuario;
