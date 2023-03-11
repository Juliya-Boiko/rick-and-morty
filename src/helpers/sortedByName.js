export const sortedByName = (arr) => {
  const data = [...arr];
  data.sort((a, b) => a.name > b.name ? 1 : -1);
  return data;
};