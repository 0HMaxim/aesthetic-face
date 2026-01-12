import { useParams } from "react-router-dom";
import {AdminPriceList} from "../../components/AdminLists.tsx";

export default function PriceList() {
    const { businessSlug } = useParams<{ businessSlug: string }>();
    return <AdminPriceList businessSlug={businessSlug!} />;
}