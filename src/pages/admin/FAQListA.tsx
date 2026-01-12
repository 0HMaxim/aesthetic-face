

    import { useParams } from "react-router-dom";
    import {AdminFAQList} from "../../components/AdminLists.tsx";

    export default function FAQListA() {
        const { businessSlug } = useParams<{ businessSlug: string }>();
        return <AdminFAQList businessSlug={businessSlug!} />;
    }
