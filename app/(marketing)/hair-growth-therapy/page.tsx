import type { Metadata } from "next";
import { ServicePage } from "@/components/sections/ServicePage";
import { servicesBySlug } from "@/lib/services";

const service = servicesBySlug["hair-growth-therapy"];

export const metadata: Metadata = {
  title: service.name,
  description: service.intro,
};

export default function Page() {
  return <ServicePage service={service} />;
}
