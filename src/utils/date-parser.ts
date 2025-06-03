const MONTHS = {
  es: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
  en: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
} as const;

const NOW = {
  es: "A la actualidad",
  en: "Present",
} as const;

export const parseDate = (date?: Date, locale: string = "en"): string => {
  const key = (locale in MONTHS ? locale : "en") as keyof typeof MONTHS;
  if (!date) return NOW[key];

  const month = MONTHS[key][date.getUTCMonth()];
  const year = date.getUTCFullYear();
  return `${month} ${year}`;
};
