import { useTranslation } from 'react-i18next';
import {Breadcrumbs} from "../components/Breadcrumbs.tsx";
import {TopImage} from "../components/TopImage.tsx";

export default function Services() {

  const {  t } = useTranslation();

  const imagee = "https://nextmedasia.com/wp-content/uploads/2022/11/lede.jpg";



  return (

      <div className="w-full items-center justify-center ">

        {imagee && (
            <TopImage source={imagee}/>
        )}


        <div className="w-full px-4 md:px-[5rem]">

          <Breadcrumbs  />


          <div className="py-8 mb-[3.5rem]">
            <h2 className="text-3xl lg:text-5xl font-[800] mb-[1.5rem]">
              {t("header.home")}
            </h2>

            {/*{t("services.subtitle")}*/}
            <span className="block text-lg lg:text-4xl font-semibold mb-[0.5rem]">
              </span>

            <p className="text-base lg:text-2xl font-normal text-foreground duration-500">
              {t("home.description")}
            </p>
          </div>








        </div>
      </div>

  );
}
