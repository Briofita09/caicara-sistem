import * as petRepository from "../repositories/pet.repository.js";
import * as petServices from "../services/pet.services.js";

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

export async function getPets(_req, res) {
  try {
    const pets = await petRepository.getPets();
    return res.status(200).json(pets);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Erro interno do servidor" });
  }
}

export async function getOnePet(req, res) {
  try {
    const { petId } = req.params;
    const pet = await petRepository.findPet(petId);
    return res.status(200).json(pet);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Erro interno do servidor" });
  }
}

export async function calculateServicesInAMonth(req, res) {
  try {
    const { month } = req.params;
    const petsServices = await petServices.calculateServicesInAMonth(month);
    return res.status(200).json(petsServices);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Erro interno do servidor" });
  }
}

export async function petDelete(req, res) {
  try {
    const { petId } = req.params;
    const petDeleted = await petRepository.petDelete(petId);
    if (!petDeleted)
      return res.status(404).json({ message: "Pet não encontrado" });
    return res.sendStatus(204);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Erro interno do servidor" });
  }
}
