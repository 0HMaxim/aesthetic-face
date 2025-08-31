  import {photos, services} from "../data/services";
  import {useTranslation} from "react-i18next";
  import {Link} from "react-router-dom";
  import 'photoswipe/dist/photoswipe.css';
  import { Gallery as PhotoSwipeGallery, Item } from "react-photoswipe-gallery";

  export default function Gallery() {

  const { i18n, t } = useTranslation();
  const lang = i18n.language as "uk" | "ru" | "en" | "de";


  const imagee = "s";

    return (
        <div className="w-full items-center justify-center ">


          {imagee && (
              <div className="overflow-hidden w-full h-[22rem] relative p-0 blur-[0.5rem] mb-[3.5rem]"
              >
                <img
                    src={imagee}
                    alt={imagee}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
          )}

          <div className="w-full px-4 md:px-[10rem]">


            <div className="py-8 mb-[3.5rem]">
              <h2 className="text-3xl lg:text-5xl font-[800] mb-[1.5rem]">
                {t("gallery.title")}
              </h2>

              {/*{t("services.subtitle")}*/}
              <span className="block text-lg lg:text-4xl font-semibold mb-[0.5rem]">
              </span>

              <p className="text-base lg:text-2xl font-normal text-foreground duration-500">
                {t("gallery.subtitle")}
              </p>
            </div>



            <div className="flex justify-center items-center flex-wrap">



                  <PhotoSwipeGallery>
                    <div className="flex flex-wrap gap-6">
                      {photos.map((photo) => (
                          <div key={photo.id} className="w-[20rem]">
                            {/* Главное фото */}
                            <Item
                                original={photo.mainImage}
                                thumbnail={photo.mainImage}
                                width="1600"
                                height="900"
                            >
                              {({ ref, open }) => (
                                  <img
                                      ref={ref as React.MutableRefObject<HTMLImageElement>}
                                      onClick={open}
                                      src={photo.mainImage}
                                      alt={`photo-${photo.id}`}
                                      className="w-full h-[15rem] object-cover rounded-lg cursor-pointer hover:scale-105 transition"
                                  />
                              )}
                            </Item>

                            {/* Дополнительные фото */}
                            <div className="flex gap-2 mt-2 flex-wrap">
                              {photo.imgArr?.map((img, idx) => (
                                  <Item
                                      key={idx}
                                      original={img}
                                      thumbnail={img}
                                      width="1600"
                                      height="900"
                                  >
                                    {({ ref, open }) => (
                                        <img
                                            ref={ref as React.MutableRefObject<HTMLImageElement>}
                                            onClick={open}
                                            src={img}
                                            alt={`photo-${photo.id}-${idx}`}
                                            className="w-[6rem] h-[6rem] object-cover rounded-md cursor-pointer hover:scale-110 transition"
                                        />
                                    )}
                                  </Item>
                              ))}
                            </div>
                          </div>
                      ))}
                    </div>
                  </PhotoSwipeGallery>



            </div>



          </div>

        </div>
    );

  }