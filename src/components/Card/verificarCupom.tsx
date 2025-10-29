import db from "../../../db.json";


interface Cupom {
  codigo: string;
  valor: number | string; 
  tipo?: "percentual" | "fixo"; 
}

interface VerifyResult {
  valid: boolean;
  cupom: Cupom | null;
  discountAmount: number;
  newTotal: number;
  message: string;
}

const database = db as { cupons?: Cupom[] };

function normalizeCode(codigo: string): string {
  return codigo.trim().toLowerCase();
}

export function verifycupom(codigo?: string | null, total = 0): VerifyResult {
  if (!codigo || typeof codigo !== "string" || isNaN(total)) {
    return {
      valid: false,
      cupom: null,
      discountAmount: 0,
      newTotal: total,
      message: "Código de cupom inválido ou valor total incorreto.",
    };
  }

  const code = normalizeCode(codigo);
  const cupom = (database.cupons || []).find(
    (c) => normalizeCode(c.codigo) === code
  ) || null;

  if (!cupom) {
    return {
      valid: false,
      cupom: null,
      discountAmount: 0,
      newTotal: total,
      message: "Cupom não encontrado.",
    };
  }

  const valor = parseFloat(String(cupom.valor)) || 0;
  let discountAmount = 0;

  
  if (cupom.tipo === "fixo" || (!cupom.tipo && valor > 1)) {
   
    discountAmount = Math.min(valor, total);
  } else {
    
    discountAmount = (total * valor) / 100;
  }

  const newTotal = Math.max(0, total - discountAmount);

  const tipoLabel = cupom.tipo === "fixo" ? "desconto fixo" : "de desconto";
  const valorLabel =
    cupom.tipo === "fixo" ? `R$${valor.toFixed(2)}` : `${valor}%`;

  return {
    valid: true,
    cupom,
    discountAmount: Number(discountAmount.toFixed(2)),
    newTotal: Number(newTotal.toFixed(2)),
    message: `Cupom aplicado: ${cupom.codigo} - ${valorLabel} ${tipoLabel}.`,
  };
}

export function isFreeShipping(codigo?: string | null): boolean {
  if (!codigo || typeof codigo !== "string") return false;

  const code = normalizeCode(codigo);
  const cupom = (database.cupons || []).find(
    (c) => normalizeCode(c.codigo) === code
  );

  if (!cupom) return false;

  const valor = parseFloat(String(cupom.valor)) || 0;
  return valor === 0 || code.includes("frete") || code.includes("gratis");
}
