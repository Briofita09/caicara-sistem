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
  return await Pet.find({ _id: petId }).populate("tutor services typeServices");
}

export async function getPets() {
  return await Pet.find().populate("tutor services typeServices");
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

export async function assignService(serviceId, petId) {
  console.log(serviceId, petId);
  return await Pet.findOneAndUpdate(
    { _id: petId },
    { $push: { services: serviceId } }
  );
}
