import { useParams } from "react-router-dom";
import {AdminServiceList} from "../../components/AdminLists.tsx";

export default function ServiceList() {
    const { businessSlug } = useParams<{ businessSlug: string }>();
    return <AdminServiceList businessSlug={businessSlug!} />;
}
