import { useParams } from "react-router-dom";
import {AdminSpecialList} from "../../components/AdminLists.tsx";

export default function SpecialList() {
  const { businessSlug } = useParams<{ businessSlug: string }>();
  return <AdminSpecialList businessSlug={businessSlug!} />;
}
