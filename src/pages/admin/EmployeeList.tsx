
    import { useParams } from "react-router-dom";
    import {AdminEmployeeList} from "../../components/AdminLists.tsx";

    export default function EmployeeList() {
        const { businessSlug } = useParams<{ businessSlug: string }>();
        return <AdminEmployeeList businessSlug={businessSlug!} />;
    }
