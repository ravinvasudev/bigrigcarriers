import type { Metadata } from "next";
import ServiceDetail from "@/components/service-detail";
import { services } from "@/components/data/services";
import { company } from "@/components/data/company";

const service = services[2];

export const metadata: Metadata = {
	title: service.pageTitle,
	description: service.description,
	alternates: {
		canonical: service.target,
	},
	openGraph: {
		siteName: company.name,
		title: service.pageTitle,
		description: service.description,
		url: service.target,
		images: [service.image],
	},
	twitter: {
		title: service.pageTitle,
		description: service.description,
		images: [service.image],
	},
};

export default function FlatbedPage() { return <ServiceDetail service={service} />; }