const NICKNAMES = [
  "Wolf",
  "Shadow",
  "Nova",
  "Phoenix",
  "Raven",
  "Blaze",
  "Titan",
  "Orion",
  "Falcon",
  "Ghost",
  "Draco",
  "Storm",
  "Lynx",
  "Echo",
  "Vortex",
  "Hunter",
  "Pixel",
  "Comet",
  "Atlas",
  "Nexus",
] as const;

export function randomNickname(): string {
  const index = Math.floor(Math.random() * NICKNAMES.length);
  const number = Math.floor(Math.random() * 100000);
  return `${NICKNAMES[index]}${number}`;
}
