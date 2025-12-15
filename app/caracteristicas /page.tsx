

import { useState } from "react";

const caracteristicas = [
  "JSX, sintaxe que mistura HTML e JS.",
  "Componentes, funções que retornam JSX.",
  "Componentes Reutilizáveis e Modulares.",
  "Roteamento Automático e APIs.",
  "Hooks: useState, useEffect e useSWR.",
  "Renderização Rápida e SEO Friendly.",
  "TypeScript Seguro e Escalável.",
  "Comunidade Ativa e Popularidade.",
];

export default function CaracteristicasPage() {
  const [contador, setContador] = useState(0);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Características do React e Next.js</h2>

      <ul>
        {caracteristicas.map((caracteristica, i) => (
          <li key={i}>{caracteristica}</li>
        ))}
      </ul>

      <hr />

      
      <button onClick={() => setContador(contador + 1)}>
        Clicaste {contador} vezes
      </button>
    </div>
  );
}
