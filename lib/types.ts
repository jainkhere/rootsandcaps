export type HomeContent = {
  hero: {
    headline: string;
    subheadline: string;
    image: string;
    ctaLabel: string;
    /** Optional; when empty, `clinic.json` `phone` is used for all Call links. */
    ctaPhone?: string;
  };
  intro: string;
};

export type DoctorContent = {
  name: string;
  degree: string;
  bio: string;
  image: string;
};

export type ClinicContent = {
  siteName: string;
  tagline: string;
  address: string;
  phone: string;
  whatsapp: string;
  facebookUrl: string;
  instagramUrl: string;
  mapEmbedUrl: string;
  hours: { day: string; hours: string }[];
};

export type ServiceItem = {
  id: string;
  title: string;
  description: string;
  image: string;
};

export type TestimonialItem = {
  id: string;
  name: string;
  text: string;
  image: string;
};

export type BlogFrontmatter = {
  title: string;
  date: string;
  description?: string;
};
