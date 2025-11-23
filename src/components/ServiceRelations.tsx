import { ref, update } from "firebase/database";
import type {Service} from "../models/Service.ts";
import type {Subservice} from "../models/Subservice.ts";
import type {Special} from "../models/Special.ts";
import type {Employee} from "../models/Employee.ts";
import type {Blog} from "../models/Blog.ts";
import type {PriceModel} from "../models/Price.ts";
import {SyncedRelationSelect} from "./SyncedRelationSelect.tsx";
import {db} from "../firebase.ts";

interface Props {
  service: Service;
  setService: (s: Service) => void;
  subserviceIds: Subservice[];
  specials: Special[];
  employees: Employee[];
  blogs: Blog[];
  prices: PriceModel[];
}

export default function ServiceRelations({
                                           service,
                                           setService,
                                           subserviceIds,
                                           specials,
                                           employees,
                                           blogs,
                                           prices,
                                         }: Props) {
  return (
      <div className="space-y-4">

        {/* 🔹 Subservices */}
        <SyncedRelationSelect
            label="Subservices"
            multiple
            value={service.subserviceIds || []}
            options={subserviceIds}
            getLabel={(o) => o.title?.uk || "Untitled"}
            getValue={(o) => o.id || ""}
            onChange={(v) => setService({ ...service, subserviceIds: v as string[] })}
            onSyncChange={async (selectedIds) => {
              const prevIds = service.subserviceIds || [];
              const added = selectedIds.filter((id) => !prevIds.includes(id));
              const removed = prevIds.filter((id) => !selectedIds.includes(id));
              const updates: Record<string, any> = {};
              added.forEach((id) => updates[`subservices/${id}/serviceId`] = service.id || "");
              removed.forEach((id) => updates[`subservices/${id}/serviceId`] = null);
              if (Object.keys(updates).length) await update(ref(db), updates);
            }}
        />

        {/* 🔹 Specials */}
        <SyncedRelationSelect
            label="Specials"
            multiple
            value={service.specials || []}
            options={specials}
            getLabel={(o) => o.title?.uk || "Untitled"}
            getValue={(o) => o.id || ""}
            onChange={(v) => setService({ ...service, specials: v as string[] })}
            onSyncChange={async (selectedIds) => {
              const prevIds = service.specials || [];
              const added = selectedIds.filter((id) => !prevIds.includes(id));
              const removed = prevIds.filter((id) => !selectedIds.includes(id));
              const updates: Record<string, any> = {};
              added.forEach((id) => updates[`specials/${id}/serviceId`] = service.id || "");
              removed.forEach((id) => updates[`specials/${id}/serviceId`] = null);
              if (Object.keys(updates).length) await update(ref(db), updates);
            }}
        />

        {/* 🔹 Employees */}
        <SyncedRelationSelect
            label="Employees"
            multiple
            value={service.employees || []}
            options={employees}
            getLabel={(o) => o.name || "Unnamed"}
            getValue={(o) => o.id || ""}
            onChange={(v) => setService({ ...service, employees: v as string[] })}
            onSyncChange={async (selectedIds) => {
              // можно добавить логику синхронизации сотрудников с сервисом
            }}
        />

        {/* 🔹 Blogs */}
        <SyncedRelationSelect
            label="Blogs"
            multiple
            value={service.blogs || []}
            options={blogs}
            getLabel={(o) => o.title?.uk || "Untitled"}
            getValue={(o) => o.id || ""}
            onChange={(v) => setService({ ...service, blogs: v as string[] })}
            onSyncChange={async (selectedIds) => {
              const prevIds = service.blogs || [];
              const added = selectedIds.filter((id) => !prevIds.includes(id));
              const removed = prevIds.filter((id) => !selectedIds.includes(id));
              const updates: Record<string, any> = {};
              added.forEach((id) => updates[`blogs/${id}/serviceId`] = service.id || "");
              removed.forEach((id) => updates[`blogs/${id}/serviceId`] = null);
              if (Object.keys(updates).length) await update(ref(db), updates);
            }}
        />

        {/* 🔹 Prices */}
        <SyncedRelationSelect
            label="Prices"
            multiple
            value={service.prices || []}
            options={prices}
            getLabel={(o) => o.category?.uk || "Untitled"}
            getValue={(o) => o.serviceId || ""}
            onChange={(v) => setService({ ...service, prices: v as string[] })}
            onSyncChange={async (selectedIds) => {
              const prevIds = service.prices || [];
              const added = selectedIds.filter((id) => !prevIds.includes(id));
              const removed = prevIds.filter((id) => !selectedIds.includes(id));
              const updates: Record<string, any> = {};
              added.forEach((id) => updates[`prices/${id}/serviceId`] = service.id || "");
              removed.forEach((id) => updates[`prices/${id}/serviceId`] = null);
              if (Object.keys(updates).length) await update(ref(db), updates);
            }}
        />

      </div>
  );
}
