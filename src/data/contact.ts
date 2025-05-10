export interface ContactInfo {
  email: string;
  phone?: string;
  location?: string;
  socials?: {
    label: string;
    url: string;
    icon?: string; // Optionally, for icon usage
  }[];
}

export const contact: ContactInfo = {
  email: "isaksfrontend@gmail.com",
  location: "Karlskoga, Sweden",
  socials: [
    {
      label: "GitHub",
      url: "https://github.com/isakskold",
      icon: "github",
    },
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/isak-sk%C3%B6ld-3b7a0b28a/",
      icon: "linkedin",
    },
  ],
};
