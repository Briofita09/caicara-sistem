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
  return await Pet.find({ _id: petId })
    .populate("tutor services typeServices")
    .populate({
      path: "services",
      populate: { path: "typeServiceId", model: "TypeService" },
      select: { name: 1, value: 1, serviceDate: 1 },
    });
}

export async function getPets() {
  return await Pet.find()
    .populate("tutor services typeServices")
    .populate({
      path: "services",
      populate: { path: "typeServiceId", model: "TypeService" },
      select: { name: 1, value: 1, serviceDate: 1 },
    });
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

export async function calculateServicesInAMonth(month, year) {
  console.log("entrei");
  Pet.aggregate([
    {
      $lookup: {
        from: "TypeService",
        localField: "typeServices",
        foreignField: "_id",
        as: "typeServices",
      },
    },
    {
      $unwind: "$typeServices",
    },
    {
      $match: {
        "typeServices.createdAt": {
          $gte: new Date(year, month - 1, 1),
          $lt: new Date(year, month, 1),
        },
      },
    },
    {
      $project: {
        _id: "$_id",
        name: "$name",
        totalTypeService: "$typeServices.value",
      },
    },
    {
      $group: {
        _id: "$_id",
        name: { $first: "$name" },
        totalTypeService: { $sum: "$totalTypeService" },
      },
    },
  ]).exec((err, pets) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(pets);
  });
}
