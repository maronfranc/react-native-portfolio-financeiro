const addZero = d => {
  if (d < 10) d = '0' + 1;
  return d;
}
export const getHoursMinutesSeconds = () => {
  const d = new Date();
  const hours = addZero(d.getHours())
  const minutes = addZero(d.getMinutes())
  const seconds = addZero(d.getSeconds())
  return `${hours}:${minutes}:${seconds}`;
}

// Recebe um número, deixa com duas casas decimais e muda o ponto para vírgula
export const replaceDotWithComma = (number: number) => {
  return number.toFixed(2).replace(".", ",");
}
