import * as typeServiceRepository from "../repositories/typeServices.repository.js";

export async function newTypeService(req, res) {
  try {
    const service = req.body;
    const foundService = await typeServiceRepository.getOneServiceByName(
      service.name
    );
    if (foundService.length)
      return res
        .status(409)
        .json({ message: "Já existe um serviço com esse nome" });
    const newService = await typeServiceRepository.newTypeService(service);
    return res.status(201).json(newService);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Erro interno do servidor" });
  }
}

export async function getTypeService(_req, res) {
  try {
    const services = await typeServiceRepository.getAllServices();
    return res.status(200).json(services);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Erro interno do servidor" });
  }
}

export async function getOneService(req, res) {
  try {
    const { typeServiceId } = req.params;
    const service = await typeServiceRepository.getOneService(typeServiceId);
    if (!service.length)
      return res.status(404).json({ message: "Serviço não encontrado" });
    return res.status(200).json(service);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Erro interno do servidor" });
  }
}

export async function updateService(req, res) {
  try {
    const { typeServiceId } = req.params;
    const editService = req.body;
    const service = await typeServiceRepository.getOneService(typeServiceId);
    if (!service.length)
      return res.status(404).json({ message: "Serviço não encontrado" });
    const updatedService = await typeServiceRepository.editService(
      typeServiceId,
      editService
    );
    return res.status(200).json(updatedService);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Erro interno do servidor" });
  }
}

export async function deleteService(req, res) {
  try {
    const { typeServiceId } = req.params;
    const service = await typeServiceRepository.getOneService(typeServiceId);
    if (!service.length)
      return res.status(404).json({ message: "Serviço não encontrado" });
    const deletedService = await typeServiceRepository.deleteService(
      typeServiceId
    );
    return res.sendStatus(204);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Erro interno do servidor" });
  }
}
