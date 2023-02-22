import * as tutorRepository from "../repositories/tutor.repository.js";
import * as petRepository from "../repositories/pet.repository.js";

export async function newTutor(req, res) {
  try {
    const tutor = req.body;
    const tutorExist = await tutorRepository.findTutorByName(tutor.name);
    if (tutorExist.length > 0)
      return res
        .status(409)
        .json({ message: "Já existe este tutor cadastrado" });
    const newTutor = await tutorRepository.createTutor(tutor);
    return res.status(201).json(newTutor);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Erro interno do servidor" });
  }
}

export async function getTutors(_req, res) {
  try {
    const tutors = await tutorRepository.getTutors();
    return res.status(200).json(tutors);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Erro interno do servidor" });
  }
}

export async function assignPet(req, res) {
  try {
    const { tutorId } = req.params;
    const { petId } = req.body;
    const petExist = await petRepository.findPet(petId);
    if (!petExist)
      return res.status(404).json({ message: "Pet não encontrado" });
    const tutorExist = await tutorRepository.findTutorById(tutorId);
    if (!tutorExist)
      return res.status(404).json({ message: "Tutor não encontrado" });
    const tutorAssign = await tutorRepository.assignPet(tutorId, petId);
    const petAssign = await petRepository.assignTutor(tutorId, petId);
    return res.status(200).json(tutorAssign);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Erro interno do servidor" });
  }
}

export async function getOneTutor(req, res) {
  try {
    const { tutorId } = req.params;
    const tutor = await tutorRepository.findTutorById(tutorId);
    return res.status(200).json(tutor);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Erro interno do servidor" });
  }
}
