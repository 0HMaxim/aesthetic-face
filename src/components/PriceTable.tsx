import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import SolarPowerBold from "~icons/solar/power-bold";
import { prices } from "../data/services.ts";

type Props = {
  serviceId?: string;
  subserviceId?: string;
  defaultOpen?: boolean;
};

const PriceTable: React.FC<Props> = ({ serviceId, subserviceId, defaultOpen = false }) => {
  const { i18n } = useTranslation();
  const lang = i18n.language as "uk" | "ru" | "en" | "de";

  // Фильтруем массив цен
  const filteredPrices = prices.filter(price => {
    if (subserviceId) return price.subserviceId === subserviceId;
    if (serviceId) return price.serviceId === serviceId;
    return true;
  });

  // Состояния
  const [openSections, setOpenSections] = useState<boolean[]>(() =>
      filteredPrices.map(() => defaultOpen)
  );
  const [activeItems, setActiveItems] = useState<{ [key: string]: boolean }>({});

  // Сброс состояния при смене сервиса/подуслуги
  useEffect(() => {
    setOpenSections(filteredPrices.map(() => defaultOpen));
    setActiveItems({});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [serviceId, subserviceId]); // <-- зависим только от id, не от массива

  const toggleSection = (index: number) => {
    setOpenSections(prev =>
        prev.map((isOpen, i) => (i === index ? !isOpen : isOpen))
    );
  };

  const toggleItem = (sectionIdx: number, subIdx: number, itemIdx: number) => {
    const key = `${sectionIdx}-${subIdx}-${itemIdx}`;
    setActiveItems(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
      <div className="w-full">
        {filteredPrices.map((data, idx) => (
            <div key={idx} className="w-full border-b border-muted">
              <button
                  onClick={() => toggleSection(idx)}
                  className="w-full text-left flex justify-between items-center relative"
              >
                <h2 className="font-[800] text-[2rem] py-[1.5rem]">
                  {data.category[lang]}
                </h2>
                <span
                    className={`text-[2rem] transform transition-transform duration-500 absolute right-[2.5rem] ${
                        openSections[idx] ? "rotate-180" : "rotate-0"
                    }`}
                >
              +
            </span>
              </button>

              <div
                  className={`overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out ${
                      openSections[idx] ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0 duration-0"
                  }`}
              >
                <table className="w-full text-left border-collapse table-fixed">
                  <colgroup>
                    <col className="w-[10%]" />
                    <col className="w-[70%]" />
                    <col className="w-[20%]" />
                  </colgroup>

                  <thead>
                  <tr className="border-b-2 border-muted text-[1.5rem]">
                    <th className="px-[3rem] py-[1.5rem] font-[700]">
                      {data.columns.duration[lang]}
                    </th>
                    <th className="px-[3rem] py-[1.5rem] font-[700]">
                      {data.columns.procedure[lang]}
                    </th>
                    <th className="px-[3rem] py-[1.5rem] font-[700]">
                      {data.columns.price[lang]}
                    </th>
                  </tr>
                  </thead>

                  <tbody className="text-[1.25rem]">
                  {data.sections.map((section, sIndex) => (
                      <React.Fragment key={sIndex}>
                        <tr>
                          <td
                              colSpan={3}
                              className="uppercase font-bold px-[3rem] py-[1.5rem] border-b border-muted"
                          >
                            {section.subtitle[lang]}
                          </td>
                        </tr>
                        {section.items.map((item, iIndex) => {
                          const key = `${idx}-${sIndex}-${iIndex}`;
                          const active = activeItems[key] || false;

                          return (
                              <tr
                                  key={iIndex}
                                  className={`border-b border-muted duration-300 text-foreground ${
                                      active ? "bg-[var(--primary)]" : ""
                                  }`}
                                  style={{ height: "50px" }}
                              >
                                <td className="px-[3rem] py-[1.5rem] border-r border-muted">
                                  {item.duration}
                                </td>
                                <td className="px-[3rem] py-[1.5rem]">
                                  {item.procedure[lang]}
                                </td>
                                <td className="px-[3rem] py-[1.5rem] border-l border-muted flex items-center justify-between">
                                  {item.price}
                                  <button
                                      onClick={() => toggleItem(idx, sIndex, iIndex)}
                                      className="ml-2"
                                  >
                                    <SolarPowerBold className="size-[1.5rem]" />
                                  </button>
                                </td>
                              </tr>
                          );
                        })}
                      </React.Fragment>
                  ))}
                  </tbody>
                </table>
              </div>
            </div>
        ))}
      </div>
  );
};

export default PriceTable;
