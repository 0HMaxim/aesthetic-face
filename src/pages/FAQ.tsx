import FAQList from "../components/FAQList.tsx";
import { faqs } from "../data/services";

export default function FAQ() {

  return (
      <div className="w-full px-4 lg:px-[10rem] py-8">

        <FAQList faqs={faqs} />

      </div>
  );

}