  import { useParams } from "react-router-dom";
  import {AdminPhotoList} from "../../components/AdminLists.tsx";

  export default function PhotoList() {
    const { businessSlug } = useParams<{ businessSlug: string }>();
    return <AdminPhotoList businessSlug={businessSlug!} />;
  }