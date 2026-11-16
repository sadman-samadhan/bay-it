import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/data/services";
import { Icon } from "@/components/Icon";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}/`}
      className="group flex flex-col rounded-lg border border-gray-200 bg-white p-6 transition-colors hover:border-gray-400"
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-md bg-brand-50 text-brand-700">
        <Icon name={service.iconName} className="h-5 w-5" />
      </span>
      <h3 className="mt-4 text-lg font-semibold text-gray-900">{service.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">{service.summary}</p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-700">
        Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}
