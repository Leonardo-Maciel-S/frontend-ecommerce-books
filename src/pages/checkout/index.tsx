import PrimaryButton from "@/components/primary-button";
import useGetAllItemCart from "@/hooks/cart/use-get-all-item-cart";
import { CircleAlert, Lock } from "lucide-react";

import { convertPriceInCentsToReal } from "@/utils/convert-price-in-cent-to-real";
import CartSection from "./components/cart-section";
import AddressSection from "./components/addresses-section";
import PaymentSection from "./components/payment-section";

const Checkout = () => {
  const { data } = useGetAllItemCart();

  const subtotal = data?.subtotal || 0;
  const taxa = 0 * 100; // n * 100 = converte para centavos
  const total = subtotal + taxa;

  return (
    <div className="py-10 flex flex-col md:flex-row gap-20 w-full max-h-full overflow-auto">
      <div className="flex-3">
        <header className="flex flex-col gap-6 mb-10">
          <span className="text-primary tracking-widest text-xs font-medium font-primary">
            CHECKOUT PROCESS
          </span>
          <h1 className="font-primary font-light text-5xl">
            Revisão do Pedido
          </h1>
        </header>

        <section className="">
          <CartSection data={data} />

          <AddressSection />

          <PaymentSection />
        </section>
      </div>

      <aside className="bg-[#EEEBE9] p-8 flex-1 min-w-min h-max space-y-4 shadow-lg shadow-black/20 rounded-sm">
        <h3 className="text-2xl font-primary font-light italic">
          Resumo da Compra
        </h3>

        <hr className="border-primary/20 " />

        <div className="space-y-4 tracking-wide">
          <span className="flex items-center justify-between font-primary font-light">
            <p className="uppercase text-zinc-700 text-xs">Subtotal</p>
            <p className="font-medium text-sm">
              {convertPriceInCentsToReal(subtotal)}
            </p>
          </span>

          <span className="flex items-center justify-between font-primary font-light">
            <p className="uppercase text-zinc-700 text-xs">Frete</p>
            <p className="font-semibold text-sm text-primary">Gratis</p>
          </span>

          <span className="flex items-center justify-between font-primary font-light">
            <p className="uppercase text-zinc-700 text-xs">Taxas</p>
            <p className="font-medium text-sm">
              {convertPriceInCentsToReal(taxa)}
            </p>
          </span>
        </div>

        <hr className="border-primary/20 " />

        <div className="flex items-center justify-between font-primary py-5">
          <p className="uppercase text-xs">Total</p>
          <p className="text-primary text-3xl">
            {convertPriceInCentsToReal(total)}
          </p>
        </div>

        <div className="bg-background p-3 rounded-xs shadow-lg shadow-black/5 flex items-start gap-3">
          <div className="pt-1">
            <CircleAlert size={20} className="text-primary" />
          </div>
          <p className="uppercase text-[12px] font-primary text-zinc-500 font-light tracking-wide">
            Ao finalizar a compra, você concorda com nossos{" "}
            <span className="underline cursor-pointer">
              Termos de Serviço e política
            </span>{" "}
            de curadoria editorial.
          </p>
        </div>

        <PrimaryButton className="mt-8 w-full font-primary py-5 rounded-sm font-medium uppercase tracking-widest text-nowrap">
          Finalizar Compra
        </PrimaryButton>

        <div className=" mx-auto w-max flex items-center text-xs font-primary uppercase text-zinc-500 font-light gap-1">
          <div className="pb-1">
            <Lock size={13} />
          </div>

          <p>Pagamento 100% Seguro</p>
        </div>
      </aside>
    </div>
  );
};

export default Checkout;
