import { useTranslation } from 'react-i18next';

export default function Gallery() {


  const { t } = useTranslation();

  console.log(t('header.Gallery'))



  return (
      <>
        {(t('header.gallery'))}
        <br/>
        Gallery Gallery Gallery Gallery
      </>
  );

}