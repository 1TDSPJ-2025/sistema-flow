import db from '../../../db.json';

// Tipos
interface Cupom {
  codigo: string;
  valor: number | string;
}

interface VerifyResult {
  valid: boolean;
  cupom: Cupom | null;
  discountAmount: number;
  newTotal: number;
  message: string;
}

const database = db as { cupons?: Cupom[] };

export function verifycupom(codigo?: string | null, total = 0): VerifyResult {
  if (!codigo || typeof codigo !== 'string') {
    return {
      valid: false,
      cupom: null,
      discountAmount: 0,
      newTotal: total,
      message: 'Código de cupom inválido.'
    };
  }

  const code = codigo.trim().toLowerCase();
  const cupom = (database.cupons || []).find(c => String(c.codigo).toLowerCase() === code) || null;

  if (!cupom) {
    return {
      valid: false,
      cupom: null,
      discountAmount: 0,
      newTotal: total,
      message: 'Cupom não encontrado.'
    };
  }

  const percent = Number(cupom.valor) || 0;
  const discountAmount = Math.max(0, (total * percent) / 100);
  const newTotal = Math.max(0, total - discountAmount);

  return {
    valid: true,
    cupom,
    discountAmount: Number(discountAmount.toFixed(2)),
    newTotal: Number(newTotal.toFixed(2)),
    message: `Cupom aplicado: ${cupom.codigo} - ${percent}% de desconto.`
  };
}

export function isFreeShipping(codigo?: string | null): boolean {
  if (!codigo || typeof codigo !== 'string') return false;
  const code = codigo.trim().toLowerCase();
  const cupom = (database.cupons || []).find(c => String(c.codigo).toLowerCase() === code);
  if (!cupom) return false;
  const valor = Number(cupom.valor) || 0;
  return valor === 0 || code.includes('frete');
}
