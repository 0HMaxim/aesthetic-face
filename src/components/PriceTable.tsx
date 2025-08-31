import React, { useState } from "react";
import type { PriceModel } from "../models/Price";
import { useTranslation } from "react-i18next";
import SolarPowerBold from "~icons/solar/power-bold";

type Props = {
  data: PriceModel;
  defaultOpen?: boolean;
};

const PriceTable: React.FC<Props> = ({ data, defaultOpen = false }) => {
  const { i18n } = useTranslation();
  const lang = i18n.language as "uk" | "ru" | "en" | "de";

  const [open, setOpen] = useState(defaultOpen);

  return (
      <div className="w-full border-b border-muted  w-fix">
        <button
            onClick={() => setOpen(!open)}
            className="w-full text-left flex justify-between items-center relative"
        >
          <h2 className="font-[800] text-[2rem] py-[1.5rem]">
            {data.category[lang]}
          </h2>
          <span
              className={`text-[2rem] transform transition-transform duration-500 absolute right-[2.5rem] ${
                  open ? "rotate-180" : "rotate-0"
              }`}
          >
          +
        </span>
        </button>

        <div
            className={`overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out${
                open ? "max-h-[1000px] opacity-100" : " max-h-0 opacity-0 duration-0"
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
                    const [active, setActive] = useState(false);

                    return (
                        <tr
                            key={iIndex}
                            className={`border-b border-muted duration-300 text-foreground ${
                                active ? "bg-[var(--primary)] max-h-0" : ""
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
                                onClick={() => setActive(!active)}
                                className="ml-2"
                            >
                              <SolarPowerBold className="size-[1.5rem] " />
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
  );
};

export default PriceTable;
