import FAQList from "../components/FAQList.tsx";
import { faqs } from "../data/services";

export default function FAQ() {

  return (
      <div className="container mx-auto py-8">

        <FAQList faqs={faqs} />

      </div>
  );

}