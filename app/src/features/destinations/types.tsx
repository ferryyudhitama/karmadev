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

export type Destination = {
  slug: string;
  title: string;
  location: Location;
  links: Links;
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