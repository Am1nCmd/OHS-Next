export type Outlet = {
  slug: string;
  name: string;
  region: "Central" | "East" | "North" | "West";
  address: string;
  postal: string;
  phone: string;
  hours: { days: string; time: string }[];
  mapsQuery: string;
  nearest: string;
};

export const outlets: Outlet[] = [
  // ── Central ────────────────────────────────────────────────────────────────
  {
    slug: "ngee-ann-city",
    name: "Ngee Ann City",
    region: "Central",
    address: "#05-19, 391A Orchard Rd",
    postal: "Singapore 238873",
    phone: "+65 6838 0235",
    hours: [
      { days: "Mon – Fri", time: "11:00 – 21:00" },
      { days: "Sat / Sun / PH", time: "11:00 – 19:00" },
    ],
    mapsQuery: "Oriental Hair Solutions Ngee Ann City Orchard Singapore",
    nearest: "Orchard MRT (NS22/TE14), 4 min walk",
  },
  {
    slug: "jean-yip-loft",
    name: "Jean Yip Loft",
    region: "Central",
    address: "#03-01, 307 New Bridge Rd",
    postal: "Singapore 088757",
    phone: "+65 6377 5056",
    hours: [
      { days: "Mon – Fri", time: "11:00 – 21:00" },
      { days: "Sat / Sun / PH", time: "11:00 – 19:00" },
    ],
    mapsQuery: "Jean Yip Loft 307 New Bridge Road Singapore",
    nearest: "Outram Park MRT (EW16/NE3/TE17), Exit 4",
  },
  {
    slug: "tiong-bahru-plaza",
    name: "Tiong Bahru Plaza",
    region: "Central",
    address: "#03-104, 302 Tiong Bahru Rd",
    postal: "Singapore 168732",
    phone: "+65 6665 1921",
    hours: [
      { days: "Mon – Fri", time: "11:00 – 21:00" },
      { days: "Sat / Sun / PH", time: "11:00 – 19:00" },
    ],
    mapsQuery: "Tiong Bahru Plaza Singapore",
    nearest: "Tiong Bahru MRT (EW17), 3 min walk",
  },

  // ── East ───────────────────────────────────────────────────────────────────
  {
    slug: "tampines-1",
    name: "Tampines 1",
    region: "East",
    address: "#05-27, 10 Tampines Central 1",
    postal: "Singapore 529536",
    phone: "+65 6260 6911",
    hours: [
      { days: "Mon – Fri", time: "11:00 – 21:00" },
      { days: "Sat / Sun / PH", time: "11:00 – 19:00" },
    ],
    mapsQuery: "Tampines 1 Mall Singapore",
    nearest: "Tampines MRT (EW2/DT32), 2 min walk",
  },
  {
    slug: "parkway-parade",
    name: "Parkway Parade",
    region: "East",
    address: "#05-17, 80 Marine Parade Road",
    postal: "Singapore 449269",
    phone: "+65 6348 1585",
    hours: [
      { days: "Mon – Fri", time: "11:00 – 21:00" },
      { days: "Sat / Sun / PH", time: "11:00 – 19:00" },
    ],
    mapsQuery: "Parkway Parade Singapore",
    nearest: "Marine Parade MRT (TE26), 5 min walk",
  },

  // ── North ──────────────────────────────────────────────────────────────────
  {
    slug: "bishan-junction-8",
    name: "Bishan Junction 8",
    region: "North",
    address: "#B1-07A, 9 Bishan Pl",
    postal: "Singapore 579837",
    phone: "+65 6734 2298",
    hours: [
      { days: "Mon – Fri", time: "11:00 – 21:00" },
      { days: "Sat / Sun / PH", time: "11:00 – 19:00" },
    ],
    mapsQuery: "Junction 8 Bishan Singapore",
    nearest: "Bishan MRT (NS17/CC15), direct access",
  },
  {
    slug: "causeway-point",
    name: "Causeway Point",
    region: "North",
    address: "#04-14, 1 Woodlands Sq",
    postal: "Singapore 738099",
    phone: "+65 6894 1800",
    hours: [
      { days: "Mon – Fri", time: "11:00 – 21:00" },
      { days: "Sat / Sun / PH", time: "11:00 – 19:00" },
    ],
    mapsQuery: "Causeway Point Woodlands Singapore",
    nearest: "Woodlands MRT (NS9/TE2), direct link",
  },
  {
    slug: "compass-one",
    name: "Compass One",
    region: "North",
    address: "#03-16, 1 Sengkang Square",
    postal: "Singapore 545078",
    phone: "+65 6386 8733",
    hours: [
      { days: "Mon – Fri", time: "11:00 – 21:00" },
      { days: "Sat / Sun / PH", time: "11:00 – 19:00" },
    ],
    mapsQuery: "Compass One Sengkang Singapore",
    nearest: "Sengkang MRT (NE16/STC), direct access",
  },

  // ── West ───────────────────────────────────────────────────────────────────
  {
    slug: "clementi-mall",
    name: "Clementi Mall",
    region: "West",
    address: "#05-38/39, 3155 Commonwealth Ave W",
    postal: "Singapore 129588",
    phone: "+65 6659 2846",
    hours: [
      { days: "Mon – Fri", time: "11:00 – 21:00" },
      { days: "Sat / Sun / PH", time: "11:00 – 19:00" },
    ],
    mapsQuery: "The Clementi Mall Singapore",
    nearest: "Clementi MRT (EW23), direct link",
  },
  {
    slug: "jurong-point",
    name: "Jurong Point",
    region: "West",
    address: "#B1-03/04, 1 Jurong West Central 2",
    postal: "Singapore 648886",
    phone: "+65 6790 9822",
    hours: [
      { days: "Mon – Fri", time: "11:00 – 21:00" },
      { days: "Sat / Sun / PH", time: "11:00 – 19:00" },
    ],
    mapsQuery: "Jurong Point Shopping Centre Singapore",
    nearest: "Boon Lay MRT (EW27/JS1), 3 min walk",
  },
];

/** Outlets grouped by region */
export const outletsByRegion = (["Central", "East", "North", "West"] as const).map(
  (region) => ({
    region,
    outlets: outlets.filter((o) => o.region === region),
  })
);
