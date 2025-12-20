import type { Service } from "../models/Service.ts";
import type { Special } from "../models/Special.ts";
import type { Employee } from "../models/Employee.ts";
import type { Blog } from "../models/Blog.ts";
import type { PriceModel } from "../models/Price.ts";
import { SyncedRelationSelect } from "./SyncedRelationSelect.tsx";

interface Props {
  service: Service;
  setService: (s: Service) => void;
  availableSubservices: Service[];
  specials: Special[];
  employees: Employee[];
  blogs: Blog[];
  prices: PriceModel[];
}

export default function ServiceRelations({
                                           service,
                                           setService,
                                           availableSubservices,
                                           specials,
                                           employees,
                                           blogs,
                                           prices,
                                         }: Props) {

  const currentServiceId = service.id && service.id !== "new" ? service.id : undefined;

  return (
      <div className="space-y-4">

        <SyncedRelationSelect<Service>
            label="Subservices"
            multiple
            value={service.subservices || []}
            options={availableSubservices}
            getLabel={(o) => String(o.title?.uk) || "Untitled Service"}
            getValue={(o) => o.id || ""}
            onChange={(v) => setService({ ...service, subservices: v as string[] })}
            firebasePath="services"
            parentId={currentServiceId}
            parentFieldName="serviceId"
            syncType="string"
        />

        <SyncedRelationSelect<PriceModel>
            label="Prices"
            multiple
            value={service.prices || []}
            options={prices}
            getLabel={(o) => String(o.category?.uk) || "Untitled Price"}
            getValue={(o) => o.id || ""}
            onChange={(v) => setService({ ...service, prices: v as string[] })}
            firebasePath="prices"
            parentId={currentServiceId}
            parentFieldName="serviceIds"
            syncType="array"
        />

        <SyncedRelationSelect<Employee>
            label="Employees"
            multiple
            value={service.employees || []}
            options={employees}
            getLabel={(o) => String(o.fullName?.uk) || "Unnamed Employee"}
            getValue={(o) => o.id || ""}
            onChange={(v) => setService({ ...service, employees: v as string[] })}
            firebasePath="employees"
            parentId={currentServiceId}
            syncType="none"
        />

        <SyncedRelationSelect<Blog>
            label="Blogs"
            multiple
            value={service.blogs || []}
            options={blogs}
            getLabel={(o) => String(o.title?.uk) || "Untitled Blog"}
            getValue={(o) => o.id || ""}
            onChange={(v) => setService({ ...service, blogs: v as string[] })}
            firebasePath="blogs"
            parentId={currentServiceId}
            syncType="none"
        />

        <SyncedRelationSelect<Special>
            label="Specials"
            multiple
            value={service.specials || []}
            options={specials}
            getLabel={(o) => String(o.title?.uk) || "Untitled Special"}
            getValue={(o) => o.id || ""}
            onChange={(v) => setService({ ...service, specials: v as string[] })}
            firebasePath="specials"
            parentId={currentServiceId}
            parentFieldName="serviceIds"
            syncType="array"
        />

      </div>
  );
}