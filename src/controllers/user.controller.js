import Usuario from "../models/User.js";

const findAll = async (req, res) => {
  try {
    const idUser = req.params.idUsuario;
    const usuario = await Usuario.find({ idUser });
    const nickname = req.query.nn;
    const world = req.query.wd;

    console.log(usuario);

    if (!usuario) {
      return res
        .status(404)
        .json({ mensagem: "Usuário não encontrado ou expirado" });
    }

    const dataAtual = Date.now();

    console.log(
      "idUser:",
      idUser,
      "- Usuário:",
      nickname,
      "- Mundo:",
      world,
      "- Validade:",
      new Date(usuario.dataValidade)
    );

    console.log(
      usuario.dataValidade,
      dataAtual,
      "-",
      usuario.dataValidade > dataAtual
    );

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
