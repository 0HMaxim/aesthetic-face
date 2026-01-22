// utils/adminNavigate.ts
export function adminPath(
    lang: string,
    businessSlug: string,
    path: string = ""
) {
    return `/${lang}/admin/${businessSlug}/${path}`.replace(/\/+$/, "");
}
