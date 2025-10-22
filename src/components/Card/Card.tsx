interface CardProps {
  nome: string;
  nomeUser: string;
  email: string;
  avatar: string;
}

export default function Card({ nome, nomeUser, email, avatar}: CardProps) {
    return (
        <div className="bg-gray-950 text-rose-600 m-2 border-6 border-gray-950 border-b-rose-700 ml-320 mr-5">
           <p>{nome}</p>
           <p>{nomeUser}</p>
           <p>{email}</p>
           <img src={avatar} alt="noticia aqui" />
        </div>
    );
}
import { useState } from 'react';

interface DiscountCouponProps {
  originalPrice: number;
  onDiscountApplied?: (newPrice: number, discountPercent: number) => void;
}

export default function DiscountCoupon({ originalPrice, onDiscountApplied }: DiscountCouponProps) {
  const [couponCode, setCouponCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState<number | null>(null);
  const [message, setMessage] = useState('');

  
  async function fetchCouponDiscount(code: string) {
    // colocar api aqui antes que esqueça 
    return new Promise<{ valid: boolean; discountPercent?: number }>((resolve) => {
      setTimeout(() => {
        resolve({ valid: false }); 
      }, 300);
    });
  }

  async function applyCoupon() {
    const code = couponCode.trim().toUpperCase();

    if (!code) {
      setMessage('Por favor, insira um código de cupom.');
      setDiscountPercent(null);
      return;
    }

    const response = await fetchCouponDiscount(code);
    if (response.valid && response.discountPercent !== undefined) {
      setDiscountPercent(response.discountPercent);
      setMessage(`Desconto de ${response.discountPercent}% aplicado!`);
      const newPrice = (originalPrice * (100 - response.discountPercent)) / 100;
      if (onDiscountApplied) onDiscountApplied(newPrice, response.discountPercent);
    } else {
      setMessage('Cupom inválido ou expirado.');
      setDiscountPercent(null);
      if (onDiscountApplied) onDiscountApplied(originalPrice, 0);
    }
  }

  const finalPrice =
    discountPercent !== null ? (originalPrice * (100 - discountPercent)) / 100 : originalPrice;

  return (
    <div style={{ marginTop: 20 }}>
      <p>Preço: R$ {finalPrice.toFixed(2)}</p>
      <input
        type="text"
        placeholder="Digite seu cupom"
        value={couponCode}
        onChange={(e) => setCouponCode(e.target.value)}
      />
      <button onClick={applyCoupon}>Aplicar Cupom</button>
      <p>{message}</p>
    </div>
  );
}
