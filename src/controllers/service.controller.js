import * as petRepository from "../repositories/pet.repository.js";
import * as typeServiceRepository from "../repositories/typeServices.repository.js";
import * as serviceRepository from "../repositories/service.repository.js";

export async function newService(req, res) {
  try {
    const service = req.body;
    const petExist = await petRepository.findPet(service.petId);
    if (!petExist.length)
      return res.status(404).json({ message: "Pet não encontrado" });
    const typeService = await typeServiceRepository.getOneService(
      service.typeServiceId
    );
    if (!typeService.length)
      return res
        .status(404)
        .json({ message: "Tipo de serviço não encontrado" });
    const newService = await serviceRepository.newService(service);
    const assignService = await petRepository.assignService(
      newService._id,
      newService.petId
    );
    console.log(assignService);
    return res.status(201).json({
      message: `${typeService.name} cadastrado com sucesso para o pet ${petExist.name}`,
      newService,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Erro interno do servidor" });
  }
}

export async function getAllServices(_req, res) {
  try {
    const services = await serviceRepository.getAllServices();
    return res.status(200).json(services);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Erro interno do servidor" });
  }
}

export async function getOneService(req, res) {
  try {
    const { serviceId } = req.params;
    const service = await serviceRepository.getOneService(serviceId);
    if (!service.length)
      return res.status(404).json({ message: "Serviço não encontrado" });
    return res.status(200).json(service);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Erro interno do servidor" });
  }
}

export async function deleteService(req, res) {
  try {
    const { serviceId } = req.params;
    const service = await serviceRepository.getOneService(serviceId);
    if (!service.length)
      return res.status(404).json({ message: "Serviço não encontrado" });
    await serviceRepository.deleteService(serviceId);
    res.sendStatus(204);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Erro interno do servidor" });
  }
}
