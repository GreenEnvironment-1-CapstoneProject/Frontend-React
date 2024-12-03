import { formatToIDR } from "../../utils/function/formatToIdr";

const CartFooter = ({ products, totalPrice, selectAll, checkedProducts, handleSelectAll }) => {
    return (
        <div className="mt-[43px] mb-[68px] md:mb-[100px] md:mt-[140px] bg-[#FAFAFA] mx-10 min-[768px]:mx-4 xl:mx-5 xxl:mx-0 rounded border border-[#E5E7EB] shadow-[0px_0.5px_1px_0px_rgba(0,0,0,0.05)]">
            <div className="flex flex-row items-center px-3 py-[10px] min-[1024px]:px-6 min-[1200px]:py-5 w-full justify-between max-[570px]:flex-col max-[570px]:justify-normal max-[570px]:items-baseline">
                <div className="flex flex-row gap-3 items-center">
                    <input
                        type="checkbox"
                        checked={selectAll}
                        className="checkbox w-[16px] h-[16px] min-[1024px]:w-[24px] min-[1024px]:h-[24px] rounded-[3px] border-2 border-[#2E7D32] [--chkbg:#2E7D32] [--chkfg:white] checked:border-[#2E7D32]"
                        onChange={(e) => handleSelectAll(e.target.checked)}
                    />
                    <p className="text-sm font-semibold text-[#262626] sm:text-base min-[1024px]:text-[20px] min-[1200px]:text-[24px]">Plih semua ({products.length})</p>
                </div>
                <div className="flex flex-row items-center gap-6 max-[570px]:w-full max-[570px]:justify-between">
                    <p className="text-sm font-semibold text-[#262626] sm:text-base min-[1024px]:text-[20px] min-[1200px]:text-[24px]">Total ({checkedProducts.length} Produk) :</p>
                    <div className="flex flex-row gap-6 items-center">
                        <p className="text-sm font-semibold text-[#262626] sm:text-base min-[1024px]:text-[20px] min-[1200px]:text-[24px] min-[1300px]:text-[30px]">{formatToIDR(totalPrice)}</p>
                        <button className="btn btn-success bg-[#3a7d2d] border-[#3a7d2d] !text-white max-[570px]:text-[12px] max-[570px]:p-[10px]">Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartFooter;
