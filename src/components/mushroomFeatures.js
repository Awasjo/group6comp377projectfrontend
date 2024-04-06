const mushroomFeatures = {
  "cap-shape": {
    label: "Cap Shape",
    options: [
      { value: "b", label: "bell" },
      { value: "c", label: "conical" },
      { value: "x", label: "convex" },
      { value: "f", label: "flat" },
      { value: "k", label: "knobbed" },
      { value: "s", label: "sunken" },
    ],
  },
  "cap-surface": {
    label: "Cap Surface",
    options: [
      { value: "f", label: "fibrous" },
      { value: "g", label: "grooves" },
      { value: "y", label: "scaly" },
      { value: "s", label: "smooth" },
    ],
  },
  "cap-color": {
    label: "Cap Color",
    options: [
      { value: "n", label: "brown" },
      { value: "b", label: "buff" },
      { value: "c", label: "cinnamon" },
      { value: "g", label: "gray" },
      { value: "r", label: "green" },
      { value: "p", label: "pink" },
      { value: "u", label: "purple" },
      { value: "e", label: "red" },
      { value: "w", label: "white" },
      { value: "y", label: "yellow" },
    ],
  },
  bruises: {
    label: "Bruises",
    options: [
      { value: "t", label: "bruises" },
      { value: "f", label: "no" },
    ],
  },
  odor: {
    label: "Odor",
    options: [
      { value: "a", label: "almond" },
      { value: "l", label: "anise" },
      { value: "c", label: "creosote" },
      { value: "y", label: "fishy" },
      { value: "f", label: "foul" },
      { value: "m", label: "musty" },
      { value: "n", label: "none" },
      { value: "p", label: "pungent" },
      { value: "s", label: "spicy" },
    ],
  },
  "gill-attachment": {
    label: "Gill Attachment",
    options: [
      { value: "a", label: "attached" },
      { value: "d", label: "descending" },
      { value: "f", label: "free" },
      { value: "n", label: "notched" },
    ],
  },
  "gill-spacing": {
    label: "Gill Spacing",
    options: [
      { value: "c", label: "close" },
      { value: "w", label: "crowded" },
      { value: "d", label: "distant" },
    ],
  },
  "gill-size": {
    label: "Gill Size",
    options: [
      { value: "b", label: "broad" },
      { value: "n", label: "narrow" },
    ],
  },
  "gill-color": {
    label: "Gill Color",
    options: [
      { value: "k", label: "black" },
      { value: "n", label: "brown" },
      { value: "b", label: "buff" },
      { value: "h", label: "chocolate" },
      { value: "g", label: "gray" },
      { value: "r", label: "green" },
      { value: "o", label: "orange" },
      { value: "p", label: "pink" },
      { value: "u", label: "purple" },
      { value: "e", label: "red" },
      { value: "w", label: "white" },
      { value: "y", label: "yellow" },
    ],
  },
  "stalk-shape": {
    label: "Stalk Shape",
    options: [
      { value: "e", label: "enlarging" },
      { value: "t", label: "tapering" },
    ],
  },

  "stalk-surface-above-ring": {
    label: "Stalk Surface Above Ring",
    options: [
      { value: "f", label: "fibrous" },
      { value: "y", label: "scaly" },
      { value: "k", label: "silky" },
      { value: "s", label: "smooth" },
    ],
  },
  "stalk-surface-below-ring": {
    label: "Stalk Surface Below Ring",
    options: [
      { value: "f", label: "fibrous" },
      { value: "y", label: "scaly" },
      { value: "k", label: "silky" },
      { value: "s", label: "smooth" },
    ],
  },
  "stalk-color-above-ring": {
    label: "Stalk Color Above Ring",
    options: [
      { value: "n", label: "brown" },
      { value: "b", label: "buff" },
      { value: "c", label: "cinnamon" },
      { value: "g", label: "gray" },
      { value: "o", label: "orange" },
      { value: "p", label: "pink" },
      { value: "e", label: "red" },
      { value: "w", label: "white" },
      { value: "y", label: "yellow" },
    ],
  },
  "stalk-color-below-ring": {
    label: "Stalk Color Below Ring",
    options: [
      { value: "n", label: "brown" },
      { value: "b", label: "buff" },
      { value: "c", label: "cinnamon" },
      { value: "g", label: "gray" },
      { value: "o", label: "orange" },
      { value: "p", label: "pink" },
      { value: "e", label: "red" },
      { value: "w", label: "white" },
      { value: "y", label: "yellow" },
    ],
  },
  "veil-type": {
    label: "Veil Type",
    options: [
      { value: "p", label: "partial" },
      { value: "u", label: "universal" },
    ],
  },
  "veil-color": {
    label: "Veil Color",
    options: [
      { value: "n", label: "brown" },
      { value: "o", label: "orange" },
      { value: "w", label: "white" },
      { value: "y", label: "yellow" },
    ],
  },

  "ring-number": {
    label: "Ring Number",
    options: [
      { value: "n", label: "none" },
      { value: "o", label: "one" },
      { value: "t", label: "two" },
    ],
  },
  "ring-type": {
    label: "Ring Type",
    options: [
      { value: "c", label: "cobwebby" },
      { value: "e", label: "evanescent" },
      { value: "f", label: "flaring" },
      { value: "l", label: "large" },
      { value: "n", label: "none" },
      { value: "p", label: "pendant" },
      { value: "s", label: "sheathing" },
      { value: "z", label: "zone" },
    ],
  },

  "spore-print-color": {
    label: "Spore Print Color",
    options: [
      { value: "k", label: "black" },
      { value: "n", label: "brown" },
      { value: "b", label: "buff" },
      { value: "h", label: "chocolate" },
      { value: "r", label: "green" },
      { value: "o", label: "orange" },
      { value: "u", label: "purple" },
      { value: "w", label: "white" },
      { value: "y", label: "yellow" },
    ],
  },

  population: {
    label: "Population",
    options: [
      { value: "a", label: "abundant" },
      { value: "c", label: "clustered" },
      { value: "n", label: "numerous" },
      { value: "s", label: "scattered" },
      { value: "v", label: "several" },
      { value: "y", label: "solitary" },
    ],
  },

  habitat: {
    label: "Habitat",
    options: [
      { value: "g", label: "grasses" },
      { value: "l", label: "leaves" },
      { value: "m", label: "meadows" },
      { value: "p", label: "paths" },
      { value: "u", label: "urban" },
      { value: "w", label: "waste" },
      { value: "d", label: "woods" },
    ],
  },
};

export default mushroomFeatures;
