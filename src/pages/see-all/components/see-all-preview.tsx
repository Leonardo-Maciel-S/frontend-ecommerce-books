import type { Book } from "@/@types/books";
import PrimaryButton from "@/components/primary-button";
import useAddItemCart from "@/hooks/cart/use-add-item-cart";
import useGetAllItemCart from "@/hooks/cart/use-get-all-item-cart";
import { convertPriceInCentsToReal } from "@/utils/convert-price-in-cent-to-real";
import { StarFilled } from "@ant-design/icons";
import { ShoppingBag } from "lucide-react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "@/context/auth";

interface SeeAllPreviewProps {
  book: Book;
}

const SeeAllPreview = ({ book }: SeeAllPreviewProps) => {
  const primaryColor = "#ec6d13";
  const navigate = useNavigate();
  const context = useContext(AuthContext);
  const { data: cartData } = useGetAllItemCart();
  const { mutateAsync: addItemAsync } = useAddItemCart(book.id);

  const handleBuyNow = async () => {
    if (!context?.user) {
      return navigate("/login");
    }

    const hasBookInCart = cartData?.cartItems?.some(
      (item) => item.book.id === book.id,
    );

    if (!hasBookInCart) {
      await addItemAsync();
    }

    navigate("/checkout");
  };

  return (
    <div className="flex flex-col relative gap-2">
      <div className="group relative overflow-hidden hover:shadow-lg shadow-black/30 hover:-translate-y-2 transition-all duration-200 ease-in rounded-sm">
        <Link to={`/book-details/${book.id}`}>
          <img
            src={book.coverImg}
            alt=""
            className=" h-[400px] md:h-[500px] w-full object-fill "
          />
        </Link>
        <PrimaryButton
          onClick={handleBuyNow}
          className="text-primary hover:bg-primary hover:text-white bg-white absolute -bottom-11 group-hover:bottom-3 right-3 p-3 transition-all duration-150 ease-in"
        >
          <ShoppingBag strokeWidth={2} />
        </PrimaryButton>
      </div>

      <div className="">
        <h2 className="md:text-2xl font-primary font-semibold">{book.title}</h2>
        <p className="font-primary italic text-md font-medium text-zinc-500">
          {book.author}
        </p>
      </div>

      <div className="flex justify-between">
        <span className="flex gap-2">
          <StarFilled style={{ color: primaryColor }} />
          <p className="font-primary text-primary font-bold">{4.2}</p>
        </span>

        <p className="lg:text-xl font-semibold lg:font-light tracking-tighter">
          {convertPriceInCentsToReal(book.priceInCents)}
        </p>
      </div>
    </div>
  );
};

export default SeeAllPreview;
