import { createContext, useContext } from "react";
import type { BusinessMeta } from "../models/Meta";

interface BusinessContextType {
    slug: string;
    meta: BusinessMeta;
}

export const BusinessContext = createContext<BusinessContextType | null>(null);

export const useBusiness = () => {
    const ctx = useContext(BusinessContext);
    if (!ctx) throw new Error("useBusiness must be used within BusinessProvider");
    return ctx;
};
