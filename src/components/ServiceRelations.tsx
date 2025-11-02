import type {Service} from "../models/Service.ts";
import type {Special} from "../models/Special.ts";
import type {Subservice} from "../models/Subservice.ts";
import type {Employee} from "../models/Employee.ts";
import type {Blog} from "../models/Blog.ts";
import type {PriceModel} from "../models/Price.ts";
import {SyncedRelationSelect} from "./SyncedRelationSelect.tsx";

interface Props {
  service: Service;
  setService: (s: Service) => void;
  subservices: Subservice[];
  specials: Special[];
  employees: Employee[];
  blogs: Blog[];
  prices: PriceModel[];
}

export default function ServiceRelations({
                                           service,
                                           setService,
                                           subservices,
                                           specials,
                                           employees,
                                           blogs,
                                           prices,
                                         }: Props) {
  const selects = [
    {
      label: "Subservices",
      value: service.subserviceIds || [],
      options: subservices,
      getLabel: (o: Subservice) => o.title?.uk || "Untitled",
      getValue: (o: Subservice) => o.id || "",
      firebasePath: "subservices",
      setter: (v: string[]) => setService({ ...service, subserviceIds: v }),
    },
    {
      label: "Specials",
      value: service.specials || [],
      options: specials,
      getLabel: (o: Special) => o.title?.uk || "Untitled",
      getValue: (o: Special) => o.id || "",
      firebasePath: "specials",
      setter: (v: string[]) => setService({ ...service, specials: v }),
    },
    {
      label: "Employees",
      value: service.employees || [],
      options: employees,
      getLabel: (o: Employee) => o.fullName?.en || "Unnamed",
      getValue: (o: Employee) => o.id || "",
      firebasePath: "employees",
      setter: (v: string[]) => setService({ ...service, employees: v }),
    },
    {
      label: "Blogs",
      value: service.blogs || [],
      options: blogs,
      getLabel: (o: Blog) => o.title?.uk || "Untitled",
      getValue: (o: Blog) => o.id || "",
      firebasePath: "blogs",
      setter: (v: string[]) => setService({ ...service, blogs: v }),
    },
    {
      label: "Prices",
      value: service.prices || [],
      options: prices,
      getLabel: (o: PriceModel) => o.category?.uk || "Untitled",
      getValue: (o: PriceModel) => o.serviceIds || "",
      firebasePath: "prices",
      setter: (v: string[]) => setService({ ...service, prices: v }),
    },
  ];

  return (
      <div className="space-y-4">
        {selects.map((s) => (
            <SyncedRelationSelect
                key={s.label}
                label={s.label}
                multiple
                value={s.value}
                options={s.options}
                getLabel={s.getLabel}
                getValue={s.getValue}
                firebasePath={s.firebasePath}
                parentId={service.id}
                onChange={s.setter}
            />
        ))}
      </div>
  );
}
