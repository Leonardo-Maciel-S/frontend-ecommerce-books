import { CreditCard, QrCode } from "lucide-react";
import PaymentSectionCard from "./payment-section-card";
import { useState } from "react";

const PaymentSection = () => {
  const [defaultPaymentMethod, setDefaultPaymentMethod] =
    useState("Cartão de Crédito");

  const paymentTypes = [
    {
      title: "Cartão de Crédito",
      paragraph: "Final 4492 • Visa Platinum",
      icon: CreditCard,
    },

    {
      title: "Pagamento via Pix",
      paragraph: "Aprovação instantânea",
      icon: QrCode,
    },
  ];

  return (
    <div className="space-y-8">
      <header className="font-primary flex items-center justify-between pb-3 border-b border-primary/10">
        <h2 className="font-medium text-xl">Método de Pagamento</h2>
      </header>

      <section className="flex gap-8 flex-wrap">
        {paymentTypes.map((paymentType, index) => (
          <PaymentSectionCard
            key={index}
            icon={paymentType.icon}
            isSelect={paymentType.title === defaultPaymentMethod}
            setIsSelect={() => setDefaultPaymentMethod(paymentType.title)}
            title={paymentType.title}
            paragraph={paymentType.paragraph}
          />
        ))}
      </section>
    </div>
  );
};

export default PaymentSection;
