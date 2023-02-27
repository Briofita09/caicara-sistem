import TypeService from "../models/TypeServices.model.js";

export async function newTypeService(service) {
  return await TypeService.create(service);
}

export async function getAllServices() {
  return await TypeService.find();
}

export async function getOneService(id) {
  return await TypeService.find({ _id: id });
}

export async function getOneServiceByName(name) {
  return await TypeService.find({ name });
}

export async function editService(id, service) {
  return await TypeService.findOneAndUpdate({ _id: id }, service, {
    new: true,
  });
}

export async function deleteService(id) {
  return await TypeService.findOneAndDelete({ _id: id });
}
