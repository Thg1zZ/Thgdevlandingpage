// Parsed as local date parts: new Date("YYYY-MM-DD") is UTC and shifts the day in Brazil
export function getAge(birthDate: string, now = new Date()) {
  const [year, month, day] = birthDate.split("-").map(Number);
  const hadBirthday = now.getMonth() + 1 > month || (now.getMonth() + 1 === month && now.getDate() >= day);
  return now.getFullYear() - year - (hadBirthday ? 0 : 1);
}
