import * as userService from "../services/user.services.js";

export async function createUser(req, res) {
  try {
    const user = req.body;
    const userExist = await userService.createUser(user);
    if (!userExist)
      return res.status(409).json({ message: "Usuário já cadastrado" });
    return res
      .status(201)
      .json({
        message: "Usuário cadastrado com sucesso",
        name: userExist.name,
        email: userExist.email,
      });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Erro interno do servidor" });
  }
}

export async function loginUser(req, res) {
  try {
    const user = req.body;
    const confirmedUser = await userService.loginUser(user);
    if (!confirmedUser) {
      return res.status(401).json({ message: "Email e/ou senha inválidos" });
    }
    res.status(200).json(confirmedUser);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Erro interno do servidor" });
  }
}
