import * as petRepository from "../repositories/pet.repository.js";

export async function newPet(req, res) {
  try {
    const pet = req.body;
    const newPet = await petRepository.newPet(pet);
    return res.status(201).json(newPet);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Erro interno do servidor" });
  }
}

export async function editPet(req, res) {
  try {
    const { petId } = req.params;
    const pet = req.body;

    const petExist = await petRepository.findPet(petId);
    if (!petExist)
      return res.status(404).json({ message: "Pet não encontrado" });
    const updatedPet = await petRepository.editPet(petId, pet);
    return res.status(200).json(updatedPet);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Erro interno do servidor" });
  }
}
