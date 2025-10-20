import { useTranslation } from "react-i18next";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { TopImage } from "../components/TopImage";
import {SpecialsSlider} from "../components/SpecialsSection.tsx";

export default function About() {
  const {  t } = useTranslation();

  const imagee =
      "https://www.aestheticclinicmalaysia.com/wp-content/uploads/2023/10/Aesthetic-Clinic-Malaysia.jpg";

  return (
      <div className="w-full flex flex-col items-center justify-center">
        {imagee && <TopImage source={imagee} />}


        <div className="w-full px-4 md:px-[5rem]">

          <Breadcrumbs />

          <div className="py-8 mb-[2.5rem]">
            <h2 className="text-3xl lg:text-5xl font-extrabold mb-6">
              {t("about.title")}
            </h2>
          </div>


          {/* Контейнер с левой информацией и правой картой */}
          <div className="flex flex-col lg:flex-row gap-8">
            <SpecialsSlider />
          </div>
        </div>
      </div>
  );
}
