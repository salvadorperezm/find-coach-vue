export const convertObjectToArray = (response) => {
  const results = [];
  for (const id in response) {
    results.push({
      id: id,
      name: response[id].name,
      price: response[id].price,
      technologies: response[id].technologies,
    });
  }
  return results;
};
