import { useTranslation } from "react-i18next";
import { generalInfo } from "../data/services";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { TopImage } from "../components/TopImage";
import MynauiClockFour from '~icons/mynaui/clock-four'
import OcticonMail24 from '~icons/octicon/mail-24'
import UilTelegramAlt from '~icons/uil/telegram-alt'
import SimpleIconsViber from '~icons/simple-icons/viber'
import IcBaselineWhatsapp from '~icons/ic/baseline-whatsapp'
import StreamlineInstagram from '~icons/streamline/instagram'
import F7LogoFacebook from '~icons/f7/logo-facebook'
import BiDashLg from '~icons/bi/dash-lg'
import MaterialSymbolsPhoneIphoneOutlineSharp from '~icons/material-symbols/phone-iphone-outline-sharp'

export default function Contact() {
  const { i18n, t } = useTranslation();
  const lang = i18n.language;

  const imagee =
      "https://www.aestheticclinicmalaysia.com/wp-content/uploads/2023/10/Aesthetic-Clinic-Malaysia.jpg";

  return (
      <div className="w-full flex flex-col items-center justify-center">
        {imagee && <TopImage source={imagee} />}


          <div className="w-full px-4 md:px-[5rem]">

            <Breadcrumbs />

            <div className="py-8 mb-[2.5rem]">
              <h2 className="text-3xl lg:text-5xl font-extrabold mb-6">
                {t("contact.contacts")}
              </h2>
            </div>


            {/* Контейнер с левой информацией и правой картой */}
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Левая колонка */}
              <div className="flex flex-wrap gap-6 lg:w-1/2">

                {/* Адрес */}
                <div className="mb-[2rem] w-full md:w-[calc(50%-0.75rem)]">

                  <div className="flex items-center gap-8 mb-[1rem]">
                    <BiDashLg className="text-muted size-[2rem] md:size-[3rem] duration-500"/>
                    <p className="font-semibold mb-1 text-[1.5rem] md:text-[2rem]">{t("contact.phone")}</p>
                  </div>

                  <div className="flex items-center gap-8">
                    <MaterialSymbolsPhoneIphoneOutlineSharp className="text-foreground size-[2.2rem] md:size-[4rem] duration-500"/>
                    <div>
                      <p className="text-[1rem] md:text-[1.3rem] break-words">{generalInfo.address[lang]}</p>
                      <a href={`tel:${generalInfo.phone[lang]}`} className="text-foreground text-[1.3rem] md:text-[1.7rem] font-[600] duration-500">
                        {generalInfo.phone[lang]}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Рабочие часы */}
                <div className="mb-[2rem] w-full md:w-[calc(50%-0.75rem)]">

                  <div className="flex items-center gap-8 mb-[1rem]">
                    <BiDashLg className="text-muted size-[2rem] md:size-[3rem] duration-500"/>
                    <p className="font-semibold mb-1 text-[1.5rem] md:text-[2rem]">{t("contact.working_hours")}</p>
                  </div>


                  <div className="flex items-center gap-8">

                    <MynauiClockFour className="text-foreground size-[2.2rem] md:size-[3rem] duration-500"/>
                    <div>

                        {generalInfo.working_hours.map((item, idx) => {
                          const daysArray = Array.isArray(item.days) ? item.days : [item.days];
                          return (
                              <p key={idx} className="text-[1rem] md:text-[1.3rem]">
                                {daysArray.map((d) => d[lang]).join(", ")}: <span className="text-[1.3rem] md:text-[1.7rem] font-semibold">{item.hours}</span>
                              </p>
                          );
                        })}
                    </div>

                  </div>
                </div>

                {/* Email */}
                <div className="mb-[2rem] w-full md:w-[calc(50%-0.75rem)]">

                  <div className="flex items-center gap-8 mb-[1rem]">
                    <BiDashLg className="text-muted size-[2rem] md:size-[3rem] duration-500"/>
                    <p className="font-semibold mb-1 text-[1.5rem] md:text-[2rem]">{t("contact.email")}</p>
                  </div>

                  <div className="flex items-center gap-8">

                    <OcticonMail24 className="text-foreground size-[2.2rem] md:size-[3rem] duration-500"/>
                    <div>
                      <a href={`mailto:${generalInfo.email}`} className="text-foreground text-[1.2rem] md:text-[1.5rem] font-[600] duration-500 break-all">
                        {generalInfo.email}
                      </a>
                    </div>


                  </div>

                </div>

                {/* Мессенджеры */}
                <div className="mb-[2rem] w-full md:w-[calc(50%-0.75rem)]">
                  <div className="flex items-center gap-8 mb-[1rem]">
                    <BiDashLg className="text-muted size-[2rem] md:size-[3rem] duration-500"/>
                    <p className="font-semibold mb-2 text-[1.5rem] md:text-[2rem]">{t("contact.write")}</p>
                  </div>

                  <div className="flex items-center gap-4">
                    {/* Telegram */}
                    {generalInfo.messengers.telegram && (
                        <a
                            href={generalInfo.messengers.telegram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition-transform duration-200 hover:scale-110 inline-block"
                        >
                          <UilTelegramAlt className="text-foreground size-[2.2rem] md:size-[3rem] duration-500" />
                        </a>
                    )}

                    {/* Viber */}
                    {generalInfo.messengers.viber && (
                        <a
                            href={generalInfo.messengers.viber}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition-transform duration-200 hover:scale-110 inline-block"
                        >
                          <SimpleIconsViber className="text-foreground size-[2.2rem] md:size-[3rem] duration-500" />
                        </a>
                    )}

                    {/* WhatsApp */}
                    {generalInfo.messengers.whatsapp && (
                        <a
                            href={generalInfo.messengers.whatsapp}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition-transform duration-200 hover:scale-110 inline-block"
                        >
                          <IcBaselineWhatsapp className="text-foreground size-[2.5rem] md:size-[3.3rem] duration-500" />
                        </a>
                    )}
                  </div>
                </div>

                {/* Социальные сети */}
                <div className="mb-[2rem] w-full md:w-[calc(50%-0.75rem)]">
                  <div className="flex items-center gap-8 mb-[1rem]">
                    <BiDashLg className="text-muted size-[2rem] md:size-[3rem] duration-500"/>
                    <p className="font-semibold mb-2 text-[1.5rem] md:text-[2rem]">{t("contact.subscribe")}</p>
                  </div>

                  <div className="flex items-center gap-4">
                    {/* Instagram */}
                    {generalInfo.socials.instagram && (
                        <a
                            href={generalInfo.socials.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition-transform duration-200 hover:scale-110 inline-block"
                        >
                          <StreamlineInstagram className="text-foreground size-[2.2rem] md:size-[3rem] duration-500" />
                        </a>
                    )}

                    {/* Facebook */}
                    {generalInfo.socials.facebook && (
                        <a
                            href={generalInfo.socials.facebook}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition-transform duration-200 hover:scale-110 inline-block"
                        >
                          <F7LogoFacebook className="text-foreground size-[2.2rem] md:size-[3rem] duration-500" />
                        </a>
                    )}
                  </div>
                </div>


              </div>

              {/* Правая колонка: карта */}
              <div className="flex-1 h-[400px] lg:w-1/2 lg:h-auto">
                <div
                    className="w-full h-full"
                    dangerouslySetInnerHTML={{ __html: generalInfo.map }}
                />
              </div>
            </div>
          </div>
        </div>
  );
}
