import Tutor from "../models/Tutors.model.js";

export async function findTutorByName(name) {
  return await Tutor.find({ name });
}

export async function createTutor(tutor) {
  return await Tutor.create(tutor);
}

export async function getTutors() {
  return await Tutor.find();
}

export async function findTutorById(id) {
  return await Tutor.find({ _id: id }).populate("pets");
}

export async function assignPet(tutorId, petId) {
  return await Tutor.findOneAndUpdate(
    { _id: tutorId },
    { $push: { pets: petId } }
  );
}
