import React from "react";
import { Alkotas } from "../types/data";

interface AlkotasKartyaProps {
  alkotas: Alkotas;
}

const AlkotasKartya: React.FC<AlkotasKartyaProps> = ({ alkotas }) => {
  return (
    <div
      className="alkotas-kartya"
      style={{
        border: "1px solid #ccc",
        borderRadius: 8,
        padding: 16,
        margin: 8,
      }}
    >
      <h2>{alkotas.nev}</h2>
      <p>
        <strong>Azonosító:</strong> {alkotas.alkotasAzonosito}
      </p>
      <p>
        <strong>Kezdő időpont (év):</strong>{" "}
        {alkotas.keletkezesKezdoIdopontjaInt ?? "N/A"}
      </p>
      <p>
        <strong>Típus:</strong> {alkotas.tipus}
      </p>
      <p>
        <strong>Megjelenítendő név:</strong> {alkotas.megjelenitendoNev}
      </p>
    </div>
  );
};

export default AlkotasKartya;
