import { AdminEntityList } from "./AdminEntityList";
import type { Blog } from "../models/Blog.ts";
import type { Service } from "../models/Service.ts";
import type { Employee } from "../models/Employee.ts";
import type { Special } from "../models/Special.ts";
import type { PriceModel } from "../models/Price.ts";
import type {FAQ} from "../models/FAQ.ts";
import type {Photo} from "../models/Photo.ts";


const localizedToString = (value?: string | string[]) => {
    if (Array.isArray(value)) return value.join(", ");
    return value ?? "";
};


// 1. СПИСОК БЛОГОВ (теперь экспортируется отдельно)
export const AdminBlogList = ({ businessSlug }: { businessSlug: string }) => (
    <AdminEntityList<Blog>
        entityName="Blogs"
        firebasePath="blogs"
        tabRoute="blogs"
        businessSlug={businessSlug}
        getLabel={(item) =>
            localizedToString(item.title?.uk) ||
            localizedToString(item.title?.en) ||
            "Untitled Blog"
        }
        getSlug={(item) => item.slug}
        newRoute={`/en/admin/${businessSlug}/blogs/new`}
        editRoute={(id) => `/en/admin/${businessSlug}/blogs/${id}`}
    />
);

// 2. СПИСОК УСЛУГ
export const AdminServiceList = ({ businessSlug }: { businessSlug: string }) => (
    <AdminEntityList<Service>
        entityName="Services"
        firebasePath="services"
        tabRoute="services"
        businessSlug={businessSlug}
        getLabel={(item) =>
            localizedToString(item.title?.uk) ||
            localizedToString(item.title?.en) ||
            "Untitled Service"
        }
        getSlug={(item) => item.slug}
        newRoute={`/en/admin/${businessSlug}/services/new`}
        editRoute={(id) => `/en/admin/${businessSlug}/services/${id}`}
    />
);

export const AdminFAQList = ({ businessSlug }: { businessSlug: string }) => (
    <AdminEntityList<FAQ>
        entityName="FAQ"
        firebasePath="faqs"
        tabRoute="faq"
        businessSlug={businessSlug}
        getLabel={(item) =>
            localizedToString(item.question?.uk) ||
            localizedToString(item.question?.en) ||
            "Untitled Question"
        }
        newRoute={`/en/admin/${businessSlug}/faq/new`}
        editRoute={(id) => `/en/admin/${businessSlug}/faq/${id}`}
    />
);


// 3. СПИСОК АКЦИЙ
export const AdminSpecialList = ({ businessSlug }: { businessSlug: string }) => (
    <AdminEntityList<Special>
        entityName="Specials"
        firebasePath="specials"
        tabRoute="specials"
        businessSlug={businessSlug}
        getLabel={(item) =>
            localizedToString(item.title?.uk) ||
            localizedToString(item.title?.en) ||
            "Untitled Special"
        }
        getSlug={(item) => item.slug}
        newRoute={`/en/admin/${businessSlug}/specials/new`}
        editRoute={(id) => `/en/admin/${businessSlug}/specials/${id}`}
    />
);

// 4. СПИСОК СОТРУДНИКОВ
export const AdminEmployeeList = ({ businessSlug }: { businessSlug: string }) => (
    <AdminEntityList<Employee>
        entityName="Employees"
        firebasePath="employees"
        tabRoute="employees"
        businessSlug={businessSlug}
        getLabel={(item) =>
            localizedToString(item.fullName?.uk) ||
            localizedToString(item.fullName?.en) ||
            "Unnamed employee"
        }
        newRoute={`/en/admin/${businessSlug}/employees/new`}
        editRoute={(id) => `/en/admin/${businessSlug}/employees/${id}`}
    />
);

// 5. СПИСОК ЦЕН
export const AdminPriceList = ({ businessSlug }: { businessSlug: string }) => (
    <AdminEntityList<PriceModel>
        entityName="Prices"
        firebasePath="prices"
        tabRoute="price"
        businessSlug={businessSlug}
        getLabel={(item) =>
            localizedToString(item.category?.uk) ||
            localizedToString(item.category?.en) ||
            "Unnamed category price"
        }
        newRoute={`/en/admin/${businessSlug}/prices/new`}
        editRoute={(id) => `/en/admin/${businessSlug}/prices/${id}`}
    />
);


export const AdminPhotoList = ({ businessSlug }: { businessSlug: string }) => (
    <AdminEntityList<Photo>
        entityName="Photos"
        firebasePath="photos"
        tabRoute="gallery"
        businessSlug={businessSlug}
        getLabel={(item) =>
            localizedToString(item.title?.uk) ||
            localizedToString(item.title?.en) ||
            "Unnamed category price"
        }
        newRoute={`/en/admin/${businessSlug}/photos/new`}
        editRoute={(id) => `/en/admin/${businessSlug}/photos/${id}`}
    />
);



