export const STUDIO_INFO = {
  name: "Tinta Tattoo Studio",
  street: "Trubarjeva cesta 28",
  city: "1000 Ljubljana",
  country: "Slovenia",
  coordinates: {
    lat: 46.05235671111265,
    lng: 14.509266617349384
  },
  mapsLinks: {
    google: "https://maps.app.goo.gl/DrYKgSoGUZFJF1Fa6",
    apple: "https://maps.apple/p/tThtyHgn6PL.ML"
  },
  social: {
    facebook: "https://facebook.com/tintatattoo", // Update with actual URL
    instagram: "https://instagram.com/tintatattoo" // Update with actual URL
  }
};

export const NAV_LINKS = [
  { href: "/", labelKey: "nav.home" },
  { href: "/instructions", labelKey: "nav.instructions" },
  { href: "/care", labelKey: "nav.care" },
  { href: "/faq", labelKey: "nav.faq" }
] as const;
