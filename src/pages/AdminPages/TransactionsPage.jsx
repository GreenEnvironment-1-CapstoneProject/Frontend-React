import { Link } from "react-router";
import AdminLayout from "./AdminLayout";
import arrow from "../../assets/svg/admin-icon/arrow-right.svg";
import arrowUpDown from "../../assets/svg/admin-icon/arrows-up-down.svg";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import api from "../../services/api";
import { truncateText } from "../../utils/function/truncateText";
import useUserStore, { loadUserData } from "../../stores/useUserStore";
import ModalTransaction from "../../components/Admin/TransactionsPage/ModalTransaction";
import { formatToIDR } from "../../utils/function/formatToIdr";

const TransactionsPage = () => {
    const [transactions, setTransactions] = useState([]);

    const [selectedTransaction, setSelectedTransaction] = useState([]);

    const user = useUserStore((state) => state.user);

    const fetchTransactions = async () => {
        try {
            const response = await api.get("/admin/transactions");
            setTransactions(response.data.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        loadUserData();
        fetchTransactions();
    }, []);

    const handleDetail = (transaction) => {
        document.getElementById("my_modal_15").showModal();
        setSelectedTransaction(transaction);
    };

    return (
        <AdminLayout active="Pesanan">
            <div className="max-w-[100rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="font-bold text-2xl text-[#4B5563] mb-4">Pesanan</h1>
                        <p className="text-base mb-8 text-[#4B5563]">
                            <Link to="/admin/dashboard" className="cursor-pointer">
                                Dashboard
                            </Link>
                            <img src={arrow} alt="Arrow Right" className="inline-block w-1 h-3 mx-2 " /> <strong className="cursor-pointer">Pesanan</strong>
                        </p>
                    </div>
                </div>
                {/* Card */}
                <div className="p-3 rounded-lg bg-white border border-[#E5E7EB]">
                    <div className="pb-3">
                        <div className="relative w-[372px]">
                            <input type="text" placeholder="Cari Pesanan" className="border ps-11 border-gray-300 rounded-lg h-[40px] px-4 w-full focus:outline-none focus:ring-2 focus:ring-primary" />
                            <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                                <Search className="w-6 h-6 text-gray-400" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="-m-1.5 overflow-x-auto">
                            <div className="p-1.5 min-w-full inline-block align-middle">
                                <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
                                    {/* Table */}
                                    <table className="w-full divide-y divide-[#E5E7EB] rounded-xl">
                                        <thead className="bg-[#ECF8ED]">
                                            <tr>
                                                <th scope="col" className="ps-6 py-3 text-start">
                                                    <label htmlFor="hs-at-with-checkboxes-main" className="flex">
                                                        <input
                                                            type="checkbox"
                                                            className="shrink-0 border-gray-300 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                                                            id="hs-at-with-checkboxes-main"
                                                        />
                                                        <span className="sr-only">Checkbox</span>
                                                    </label>
                                                </th>

                                                {["Invoice", "Produk", "Tanggal", "Pelanggan", "Total", "Pembayaran", "Status", "Aksi"].map((title, index) => (
                                                    <th scope="col" className={`${index === 0 ? "pe-6" : "px-6"} py-3 text-start`} key={index}>
                                                        <div className="flex items-center justify-between">
                                                            <span className="text-xs font-bold uppercase tracking-wide text-[#2E7D32]">{title}</span>
                                                            {index > 0 && index < 6 && (
                                                                <button>
                                                                    <img src={arrowUpDown} alt="arrow-filter-icon" />
                                                                </button>
                                                            )}
                                                        </div>
                                                    </th>
                                                ))}
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            {transactions?.map((transaction) => (
                                                <tr key={transaction.id}>
                                                    <td className="size-px whitespace-nowrap">
                                                        <div className="ps-6 py-2">
                                                            <label htmlFor="hs-at-with-checkboxes-1" className="flex">
                                                                <input
                                                                    type="checkbox"
                                                                    className="shrink-0 border-gray-300 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                                                                    id="hs-at-with-checkboxes-1"
                                                                />
                                                                <span className="sr-only">Checkbox</span>
                                                            </label>
                                                        </div>
                                                    </td>
                                                    <td className="size-px whitespace-nowrap">
                                                        <div className="pe-6 py-2">
                                                            <p className="text-sm font-medium text-[#1F2937] cursor-pointer" title={transaction.id}>
                                                                {truncateText(transaction.id, 5)}
                                                            </p>
                                                        </div>
                                                    </td>
                                                    <td className="size-px whitespace-nowrap">
                                                        <div className="px-6 py-2 flex flex-col">
                                                            <span className="text-sm font-medium text-[#1F2937] decoration-2 mb-1">{transaction?.details[0].product_name}</span>
                                                            {transaction?.details.length > 1 && (
                                                                <span className="text-xs font-medium text-[#6B7280] decoration-2">+ {transaction?.details.length - 1} Produk lainnya</span>
                                                            )}
                                                        </div>
                                                    </td>
                                                    <td className="size-px whitespace-nowrap">
                                                        <div className="px-6 py-2">
                                                            <span className="text-sm font-medium text-[#1F2937]">{transaction?.created_at.split(" ")[0]}</span>
                                                        </div>
                                                    </td>
                                                    <td className="size-px whitespace-nowrap">
                                                        <div className="px-6 py-2">
                                                            <p className="text-sm font-medium text-[#1F2937]">{transaction?.username}</p>
                                                        </div>
                                                    </td>
                                                    <td className="size-px whitespace-nowrap">
                                                        <div className="px-6 py-2">
                                                            <p className="text-sm font-medium text-[#1F2937]">{formatToIDR(transaction?.total_transaction)}</p>
                                                        </div>
                                                    </td>
                                                    <td className="size-px whitespace-nowrap">
                                                        <div className="px-6 py-2">
                                                            <p className="text-sm font-medium text-[#1F2937]">Transfer Bank</p>
                                                        </div>
                                                    </td>
                                                    <td className="size-px whitespace-nowrap">
                                                        <div className="px-6 py-2">
                                                            <p
                                                                className={`text-sm font-medium w-fit py-1 px-2 rounded-[100px] ${
                                                                    transaction.status === "pending"
                                                                        ? "text-[#019BF4] bg-[#E6F5FE] border-2 border-[#B0E0FC]"
                                                                        : transaction.status === "expire"
                                                                        ? "text-[#F05D3D] bg-[#feefec] border-2 border-[#FACDC3]"
                                                                        : "text-[#009499] bg-[#e5f4f5] border-2 border-[#B0DEDF]"
                                                                }`}
                                                            >
                                                                {transaction?.status ? transaction.status.charAt(0).toUpperCase() + transaction.status.slice(1) : "Unknown"}
                                                            </p>
                                                        </div>
                                                    </td>
                                                    <td className="size-px whitespace-nowrap cursor-pointer" onClick={() => handleDetail(transaction)}>
                                                        <div className="px-6 py-2">
                                                            <div className="flex items-center gap-x-2">
                                                                <p className="font-bold text-sm text-[#2E7D32]">Detail</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>

                                    {/* End Table */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <ModalTransaction transaction={selectedTransaction} />

                    {/* <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center">
                        <div className="max-w-sm space-y-3">
                            <select
                                value={selectedPage}
                                onChange={handlePageChange}
                                className="py-2 px-3 pe-9 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500"
                            >
                                {pages.map((page) => (
                                    <option value={page} key={page}>
                                        {page}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <div className="inline-flex gap-x-2">
                                <button
                                    type="button"
                                    className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                                    onClick={handlePrevPage}
                                    disabled={selectedPage === 1}
                                >
                                    <svg
                                        className="shrink-0 size-4"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="m15 18-6-6 6-6" />
                                    </svg>
                                    Prev
                                </button>
                                <button
                                    type="button"
                                    className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                                    onClick={handleNextPage}
                                    disabled={selectedPage === metadata?.TotalPage}
                                >
                                    Next
                                    <svg
                                        className="shrink-0 size-4"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="m9 18 6-6-6-6" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div> */}
                </div>
                {/* End Card */}
            </div>
        </AdminLayout>
    );
};

export default TransactionsPage;