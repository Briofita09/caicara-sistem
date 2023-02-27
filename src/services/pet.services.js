import * as petRepository from "../repositories/pet.repository.js";

export async function calculateServicesInAMonth(month) {
  const pets = await petRepository.getPets();
  const jsMonth = month - 1;

  const servicesByPet = {};

  pets.forEach((pet) => {
    const servicesByType = {};
    let total = 0;

    pet.services.forEach((service) => {
      const serviceMonth = new Date(service.serviceDate).getMonth();
      if (serviceMonth === jsMonth) {
        const serviceName = service.typeServiceId.name;
        const serviceValue = service.typeServiceId.value;
        if (!servicesByType[serviceName]) {
          servicesByType[serviceName] = { total: 0, quantity: 0 };
        }
        servicesByType[serviceName].total += serviceValue;
        servicesByType[serviceName].quantity += 1;
        total += serviceValue;
      }
    });

    if (total > 0) {
      servicesByPet[pet.name] = {
        petName: pet.name,
        servicesByType: servicesByType,
        total: total,
      };
    }
  });

  return Object.values(servicesByPet);
}
