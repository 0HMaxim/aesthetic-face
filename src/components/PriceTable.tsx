import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import SolarPowerBold from "~icons/solar/power-bold";
import { ref, onValue } from "firebase/database";
import { db } from "../firebase";
import type { PriceModel } from "../models/Price";

type Props = {
  serviceId?: string;
  subserviceId?: string;
  items?: PriceModel[]; // ✅ можно передавать цены извне
};

const PriceTable: React.FC<Props> = ({ serviceId, subserviceId, items }) => {
  const { i18n } = useTranslation();
  const lang = i18n.language as "uk" | "ru" | "en" | "de";

  const [prices, setPrices] = useState<PriceModel[]>(items || []);
  const [loading, setLoading] = useState(!items); // если items переданы — не грузим Firebase
  const [openSections, setOpenSections] = useState<boolean[]>([]);
  const [activeItems, setActiveItems] = useState<{ [key: string]: boolean }>({});

  // ✅ Загружаем цены из Firebase только если items НЕ пришли извне
  useEffect(() => {
    if (items) {
      setPrices(items);
      setOpenSections(items.map((_, i) => i === 0));
      setLoading(false);
      return;
    }

    const priceRef = ref(db, "prices");
    const unsubscribe = onValue(priceRef, (snapshot) => {
      const data = snapshot.val();

      const loadedPrices: PriceModel[] = data ? Object.values(data) as PriceModel[] : [];
      setPrices(loadedPrices);

      setOpenSections(loadedPrices.map((_, i) => i === 0));
      setLoading(false);
    });

    return () => unsubscribe();
  }, [items]);


  const filteredPrices = prices.filter((price) => {
    const targetId = subserviceId || serviceId;
    if (targetId) {
      return price.serviceIds?.includes(targetId);
    }
    return true;
  });

  const toggleSection = (index: number) => {
    setOpenSections((prev) =>
        prev.map((isOpen, i) => (i === index ? !isOpen : isOpen))
    );
  };

  const toggleItem = (sectionIdx: number, subIdx: number, itemIdx: number) => {
    const key = `${sectionIdx}-${subIdx}-${itemIdx}`;
    setActiveItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  if (loading) return <p className="text-center py-8">Loading...</p>;

  if (filteredPrices.length === 0)
    return <p className="text-center py-8">No prices found.</p>;

  return (
      <div className="w-full">
        {filteredPrices.map((data, idx) => (
            <div key={idx} className="w-full border-b border-muted">
              <button
                  onClick={() => toggleSection(idx)}
                  className="w-full text-left flex justify-between items-center relative"
              >
                <h2 className="font-[800] text-[1.2rem] lg:text-[2rem] py-[0.8rem] lg:py-[1.5rem] select-text">
                  {data.category?.[lang] || "No title"}
                </h2>
                <span
                    className={`text-[1.2rem] lg:text-[2rem] transform transition-transform duration-500 absolute right-[1rem] lg:right-[2.5rem] ${
                        openSections[idx] ? "rotate-180" : "rotate-0"
                    }`}
                >
              +
            </span>
              </button>

              <div
                  className={`overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out ${
                      openSections[idx]
                          ? "max-h-[2000px] opacity-100"
                          : "max-h-0 opacity-0 duration-0"
                  }`}
              >
                <table className="w-full text-left border-collapse table-auto">
                  <colgroup>
                    <col className="w-auto" />
                    <col className="w-[9999px]" />
                    <col className="w-[1%]" />
                  </colgroup>

                  <thead>
                  <tr className="border-b-2 border-muted text-[0.9rem] lg:text-[1.5rem]">
                    <th className="px-[0.5rem] lg:px-[3rem] py-[0.5rem] lg:py-[1.5rem] font-[700] whitespace-nowrap">
                      {data.columns.duration?.[lang]}
                    </th>
                    <th className="px-[0.5rem] lg:px-[3rem] py-[0.5rem] lg:py-[1.5rem] font-[700]">
                      {data.columns.procedure?.[lang]}
                    </th>
                    <th className="px-[0.5rem] lg:px-[3rem] py-[0.5rem] lg:py-[1.5rem] font-[700] text-right">
                      {data.columns.price?.[lang]}
                    </th>
                  </tr>
                  </thead>

                  <tbody className="text-[0.875rem] md:text-[1.25rem]">
                  {data.sections.map((section, sIndex) => (
                      <React.Fragment key={sIndex}>
                        <tr>
                          <td
                              colSpan={3}
                              className="uppercase font-bold px-[1rem] md:px-[3rem] py-[1rem] md:py-[1.5rem] border-b border-muted"
                          >
                            {section.subtitle?.[lang]}
                          </td>
                        </tr>

                        {section.items.map((item, iIndex) => {
                          const key = `${idx}-${sIndex}-${iIndex}`;
                          const active = activeItems[key] || false;

                          return (
                              <tr
                                  key={iIndex}
                                  className={`border-b border-muted duration-500 text-foreground ${
                                      active ? "bg-primary" : ""
                                  }`}
                              >
                                <td className="pl-[1rem] md:px-[3rem] py-[1rem] md:py-[1.5rem] border-r border-muted">
                                  {item.duration}
                                </td>
                                <td className="px-[1rem] md:px-[3rem] py-[1rem] md:py-[1.5rem]">
                                  {item.procedure?.[lang]}
                                </td>
                                <td className="px-[1rem] md:px-[3rem] py-[1rem] md:py-[1.5rem] border-l border-muted flex flex-col md:flex-row items-start md:items-center justify-between">
                                  <span className="text-nowrap">{item.price}</span>
                                  <button
                                      onClick={() => toggleItem(idx, sIndex, iIndex)}
                                      className="mt-1 md:mt-0 md:ml-2"
                                  >
                                    <SolarPowerBold className="size-[1rem] md:size-[1.5rem]" />
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
