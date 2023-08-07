const CAT_END_POINT_URL = 'https://catfact.ninja/fact';
export const getRadomFact = async () => {
  const res = await fetch(CAT_END_POINT_URL);
  const data = await res.json();
  const { fact } = data;
  return fact;
};
