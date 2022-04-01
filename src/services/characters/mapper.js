export const charactersListMapper = (characters) => {
  return characters.map(
    ({ created, location, name, image, status, species, origin, gender }) => ({
      name,
      image,
      status,
      species,
      originName: origin.name,
      Location: location.name,
      created,
      gender,
    })
  );
};
