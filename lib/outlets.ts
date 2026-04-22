export type Outlet = {
  slug: string;
  name: string;
  address: string;
  postal: string;
  phone: string;
  hours: { days: string; time: string }[];
  mapsQuery: string;
  nearest: string;
};

export const outlets: Outlet[] = [
  {
    slug: "novena",
    name: "Novena",
    address: "10 Sinaran Drive, #04-00 Novena Specialist Center",
    postal: "Singapore 307506",
    phone: "+65 6100 1001",
    hours: [
      { days: "Mon – Fri", time: "10:00 – 20:00" },
      { days: "Sat", time: "10:00 – 18:00" },
      { days: "Sun & PH", time: "10:00 – 16:00" },
    ],
    mapsQuery: "Novena Specialist Center Singapore",
    nearest: "Novena MRT (NS20), 3 min walk",
  },
  {
    slug: "tampines",
    name: "Tampines",
    address: "10 Tampines Central 1, #03-00 Tampines One",
    postal: "Singapore 529536",
    phone: "+65 6100 1002",
    hours: [
      { days: "Mon – Fri", time: "10:00 – 21:00" },
      { days: "Sat & Sun", time: "10:00 – 19:00" },
    ],
    mapsQuery: "Tampines One Singapore",
    nearest: "Tampines MRT (EW2/DT32), 2 min walk",
  },
  {
    slug: "jurong",
    name: "Jurong East",
    address: "3 Gateway Drive, #03-00 Westgate",
    postal: "Singapore 608532",
    phone: "+65 6100 1003",
    hours: [
      { days: "Mon – Sun", time: "10:00 – 21:00" },
    ],
    mapsQuery: "Westgate Jurong East",
    nearest: "Jurong East MRT (NS1/EW24), direct link",
  },
  {
    slug: "orchard",
    name: "Orchard",
    address: "391 Orchard Road, #05-00 Ngee Ann City",
    postal: "Singapore 238873",
    phone: "+65 6100 1004",
    hours: [
      { days: "Mon – Sun", time: "10:00 – 21:30" },
    ],
    mapsQuery: "Ngee Ann City Orchard",
    nearest: "Orchard MRT (NS22), 4 min walk",
  },
];
