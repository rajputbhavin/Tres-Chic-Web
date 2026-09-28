/** Press & recognition, verified from the current website's media page. */

export type PressMark = { name: string; note: string };

export const pressMarks: PressMark[] = [
  { name: "Local 10 News", note: "Featured, 2019" },
  { name: "VoyageMIA", note: "Founder interview" },
  { name: "Shoutout Miami", note: "Featured" },
  { name: "Wedding Chicks", note: "Featured, 2020" },
  { name: "WeddingWire", note: "Couples' Choice Awards" },
  { name: "Best of Miramar", note: "Award recipient" },
];

export const pressStripCopy = {
  heading: "As featured in & recognized by",
  footnote: "",
};
