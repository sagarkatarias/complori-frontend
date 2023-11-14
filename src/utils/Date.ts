export const IsoToDateString = (isoDate: string) => {
  return new Date(isoDate).toLocaleDateString();
};
export const IsoToTimeString = (isoDate: string) => {
  return new Date(isoDate).toLocaleTimeString();
};
