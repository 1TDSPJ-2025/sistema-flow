import db from './db.json';

export function verifycupom(codigo, total = 0) {
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
  const cupom = (db.cupons || []).find(c => String(c.codigo).toLowerCase() === code);
  
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

export function isFreeShipping(codigo) {
  if (!codigo) return false;
  const code = codigo.trim().toLowerCase();
  const cupom = (db.cupons || []).find(c => String(c.codigo).toLowerCase() === code);
  if (!cupom) return false;
  const valor = Number(cupom.valor) || 0;
  return valor === 0 || code.includes('frete');
}
