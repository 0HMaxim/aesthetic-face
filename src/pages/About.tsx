import { useTranslation } from 'react-i18next';


export default function About() {
  const { t } = useTranslation();

  console.log(t("header.about"))

  return (
      <>
          <div className="text-[5rem] font-[1000]">
          {t("header.about")}
        </div>



      </>
  );

}