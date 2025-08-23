import { useTranslation } from 'react-i18next';


export default function Specials() {
  const { t } = useTranslation();

  console.log(t("header.services"))

  return (
      <div className="text-[2rem] font-[1000]">
        {t("header.specials")}
      </div>
  );

}


