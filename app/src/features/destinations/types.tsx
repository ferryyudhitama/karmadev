export type Location = {
  country: string;
  region: string;
};

export type Links = {
    instagram: string;
    xlink: string;
    youtube: string;
    tripadvisor: string;
    email: string;
    whatsapp: string;
    destination_guide: string;
};

export type Accommodation = {
    title: string;
    description: string;
    images: string[];
};

export type Destination = {
  slug: string;
  title: string;
  location: Location;
  links: Links;
  accommodation: Accommodation;
  description: string;
  thumbnail: string;
  titleContent: string;
  banner: string;
};

export interface FilterState {
  search: string;
  country: string;
  region: string;
}