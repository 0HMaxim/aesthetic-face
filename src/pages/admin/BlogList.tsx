import { useParams } from "react-router-dom";
import {AdminBlogList} from "../../components/AdminLists.tsx";

export default function ServiceList() {
    const { businessSlug } = useParams<{ businessSlug: string }>();
    return <AdminBlogList businessSlug={businessSlug!} />;
}
