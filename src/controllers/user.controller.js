import Usuario from "../models/User.js";

const findAll = async (req, res) => {
  try {
    const usuario = await Usuario.findOne({ idUser: req.params.idUsuario });

    if (!usuario) {
      return res
        .status(404)
        .json({ mensagem: "Usuário não encontrado ou expirado" });
    }

    const dataAtual = new Date();

    if (usuario.dataValidade > dataAtual) {
      res.json(usuario);
    } else {
      res.json({ mensagem: "Usuário não encontrado ou expirado" });
    }
  } catch (error) {
    res.status(500).json({ mensagem: error.message });
  }
};

export default { findAll };
