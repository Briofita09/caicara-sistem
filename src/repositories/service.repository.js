import moment from "moment/moment.js";

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

export async function calculateServicesInAMonth(month) {
  const startOfMonth = moment(`2023-${month}-01`).startOf("month").toDate();
  const endOfMonth = moment(`2023-${month}-31`).endOf("month").toDate();
  Service.aggregate([
    {
      $match: {
        serviceDate: {
          $gte: startOfMonth,
          $lte: endOfMonth,
        },
      },
    },
    {
      $group: {
        _id: {
          pet: "$petId",
          typeService: "$typeServiceId",
        },
        total: { $sum: "$typeServiceId.value" },
      },
    },
    {
      $project: {
        pet: "$_id.pet",
        typeService: "$_id.typeService",
        total: 1,
        _id: 0,
      },
    },
  ])
    .populate("petId typeServiceId")
    .exec((err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
      }
    });
}
