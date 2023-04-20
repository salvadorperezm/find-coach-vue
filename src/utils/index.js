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

export const convertRequestsObjectToArray = (response) => {
  const results = [];
  for (const id in response) {
    results.push({
      id: id,
      email: response[id].email,
      message: response[id].message,
    });
  }
  return results;
};
