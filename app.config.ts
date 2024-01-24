export const AppConfig = {
  defaultLocale: "en",
  locales: [
    {
      id: "en",
      label: "English",
    },
    {
      id: "ge",
      label: "German",
    },
  ],
  defaultTheme: "system",
};

export type LocaleId = (typeof AppConfig)["locales"][number]["id"];
