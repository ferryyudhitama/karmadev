import { Destination } from "./types";

export const destinations: Destination[] = [
  {
    slug: "karma-kandara",
    title: "Karma Kandara",
    description: "Luxury cliff resort di Uluwatu.",
  },
  {
    slug: "karma-jimbaran",
    title: "Karma Jimbaran",
    description: "Resort vibes di area Jimbaran.",
  },
];

export function getDestinationBySlug(slug: string) {
  return destinations.find((d) => d.slug === slug);
}