export const filteredByValue = (items, value) => {
  const data = items.filter(item => item.name.toLowerCase().includes(value));
  return data;
};