import { AdminEntityList } from "./AdminEntityList";
import type { Blog } from "../models/Blog.ts";
import type { Service } from "../models/Service.ts";
import type { Employee } from "../models/Employee.ts";
import type { Special } from "../models/Special.ts";
import type { PriceModel } from "../models/Price.ts";
import type {FAQ} from "../models/FAQ.ts";
import type {Photo} from "../models/Photo.ts";

// 1. СПИСОК БЛОГОВ (теперь экспортируется отдельно)
export const AdminBlogList = ({ businessSlug }: { businessSlug: string }) => (
    <AdminEntityList<Blog>
        entityName="Blogs"
        firebasePath="blogs"
        headerImageField="blogHeaderImage"
        businessSlug={businessSlug}
        getLabel={(item) => item.title?.uk || item.title?.en || "Untitled Blog"}
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
        headerImageField="servicesHeaderImage"
        businessSlug={businessSlug}
        getLabel={(item) => item.title?.uk || item.title?.en || "Untitled Service"}
        getSlug={(item) => item.slug}
        newRoute={`/en/admin/${businessSlug}/services/new`}
        editRoute={(id) => `/en/admin/${businessSlug}/services/${id}`}
    />
);

export const AdminFAQList = ({ businessSlug }: { businessSlug: string }) => (
    <AdminEntityList<FAQ>
        entityName="FAQ"
        firebasePath="faqs" // Убедитесь, что путь совпадает (обычно маленькими буквами)
        headerImageField="faqsHeaderImage"
        businessSlug={businessSlug}
        // Используем question вместо title
        getLabel={(item) => item.question?.uk || item.question?.en || "Untitled Question"}
        // Slug не нужен, можно убрать эту строку или выводить ID:
        // getSlug={(item) => item.id}
        newRoute={`/en/admin/${businessSlug}/faq/new`}
        editRoute={(id) => `/en/admin/${businessSlug}/faq/${id}`}
    />
);


// 3. СПИСОК АКЦИЙ
export const AdminSpecialList = ({ businessSlug }: { businessSlug: string }) => (
    <AdminEntityList<Special>
        entityName="Specials"
        firebasePath="specials"
        headerImageField="specialsHeaderImage"
        businessSlug={businessSlug}
        getLabel={(item) => item.title?.uk || item.title?.en || "Untitled Special"}
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
        headerImageField="employeesHeaderImage"
        businessSlug={businessSlug}
        getLabel={(item) => item.fullName?.uk || item.fullName?.en || "Unnamed"}
        newRoute={`/en/admin/${businessSlug}/employees/new`}
        editRoute={(id) => `/en/admin/${businessSlug}/employees/${id}`}
    />
);

// 5. СПИСОК ЦЕН
export const AdminPriceList = ({ businessSlug }: { businessSlug: string }) => (
    <AdminEntityList<PriceModel>
        entityName="Prices"
        firebasePath="prices"
        businessSlug={businessSlug}
        headerImageField="pricesHeaderImage"
        getLabel={(item) => item.category?.uk || "Unnamed Price"}
        newRoute={`/en/admin/${businessSlug}/prices/new`}
        editRoute={(id) => `/en/admin/${businessSlug}/prices/${id}`}
    />
);


export const AdminPhotoList = ({ businessSlug }: { businessSlug: string }) => (
    <AdminEntityList<Photo>
        entityName="Photos"
        firebasePath="photos"
        businessSlug={businessSlug}
        headerImageField="galleryHeaderImage"
        getLabel={(item) => item.title?.uk || "Unnamed Price"}
        newRoute={`/en/admin/${businessSlug}/photos/new`}
        editRoute={(id) => `/en/admin/${businessSlug}/photos/${id}`}
    />
);



