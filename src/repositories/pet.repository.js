import Pet from "../models/Pet.model.js";

export async function newPet(pet) {
  return await Pet.create(pet);
}

export async function editPet(petId, pet) {
  return await Pet.findOneAndUpdate({ _id: petId }, pet, {
    new: true,
  });
}

export async function findPet(petId) {
  return await Pet.find({ _id: petId });
}

export async function getPets() {
  return await Pet.find();
}

export async function petDelete(petId) {
  return await Pet.findOneAndDelete({ _id: petId });
}

export async function assignTutor(tutorId, petId) {
  return await Pet.findOneAndUpdate(
    { _id: petId },
    { $push: { tutor: tutorId } }
  );
}
