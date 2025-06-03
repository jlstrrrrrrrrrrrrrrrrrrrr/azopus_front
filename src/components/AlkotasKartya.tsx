import React from "react";
import { Alkotas } from "../types/data";

interface AlkotasKartyaProps {
  alkotas: Alkotas;
}

const AlkotasKartya: React.FC<AlkotasKartyaProps> = ({ alkotas }) => {
  const imageUrl = `https://picsum.photos/seed/${alkotas.id}/400/300`;

  return (
    <div className="bg-white rounded-none shadow-none p-0 m-0 border-b-4 border-[#e0d99a] flex flex-col min-h-[420px] text-left">
      <img
        src={imageUrl}
        alt={alkotas.nev}
        className="w-full h-[260px] object-cover rounded-none mb-4"
      />
      <div className="px-4 pb-4">
        <div className="font-bold text-[28px] mb-2 mt-0 leading-none">
          {alkotas.keletkezesKezdoIdopontjaInt ?? "N/A"}
        </div>
        <div className="font-semibold text-lg mb-1">{alkotas.nev}</div>
        <div className="text-sm text-gray-500 mb-1">
          {alkotas.alkotasAzonosito}
        </div>
        <div className="text-base font-medium mb-1">{alkotas.tipus}</div>
        <div className="font-medium text-base">{alkotas.megjelenitendoNev}</div>
      </div>
    </div>
  );
};

export default AlkotasKartya;
