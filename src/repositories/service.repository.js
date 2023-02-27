import Service from "../models/Services.model.js";

export async function newService(service) {
  return Service.create(service);
}

export async function getAllServices() {
  return Service.find();
}

export async function getOneService(id) {
  return Service.find({ _id: id });
}

export async function deleteService(id) {
  return Service.findOneAndDelete({ _id: id });
}
