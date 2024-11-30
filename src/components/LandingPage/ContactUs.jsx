import React from "react";


const ContactUs = () => {
    return (
        <div className="flex flex-col justify-center items-center bg-secondary">
            <div>
                <h1 className="font-bold sm:text-[48px] text-[20px] text-center pt-[24px] sm:pt-[80px] ">Hubungi Kami</h1>
                <div className="flex flex-col bg-red sm:flex-row items-center justify:center sm:justify-space-between px-[24px] sm:px-[80px] pt-[24px] sm:pt-[72px] sm:gap-[121px] gap-[40px] ">
                    <div>
                        <img src="assets/png/women.png" alt="women" className="sm:h-[593px] sm:w-[621px] h-[296px] w-[382px] rounded-[50px] "/>
                    </div>
                    <div className="pt-[0px] sm:pt-[57px] sm:pb-[57px] ">
                        <div className="sm:pb-[137px] pb-[24px] ">
                            <p className="sm:text-[36px] text-[20px] sm:text-4xl font-bold sm:pb-[36px] pb-[24px] ">Alamat Kami</p>
                            <div className="flex flex-row gap-[12px] ">
                                <img src="assets/png/map.png" alt="Map Icon" className="h-[46px] w-[46px]  " />
                                <div>
                                    <p className="text-[16px] sm:text-[24px] ">Indonesia</p>
                                    <p className="text-[14px] sm:text-[24px] " >Rungkut Kidul VI No 8, Rungkut Kidul,<br /> Rungkut, Surabaya</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className="text-[20px] sm:text-[36px] text-4xl font-bold sm:pb-[36px] pb-[24px] ">Kontak Kami</p>
                            <div className="flex sm:flex-row flex-col sm:gap-[56px] gap-[24px] ">
                                    <div className="flex flex-row gap-[12px] ">
                                    <img src="assets/png/envelope.png" alt="Envelope" className="h-[46px] w-[46px] " />
                                    <div>
                                        <p className="text-[16px] sm:text-[24px]">Email</p>
                                        <p className="text-[14px] sm:text-[24px] ">example@mail.com</p>
                                    </div>
                                </div>
                                <div className="flex flex-row gap-[12px] ">
                                    <img src="assets/png/phone.png" alt="Phone" className="h-[46px] w-[46px] " />
                                    <div>
                                        <p className="text-[16px] sm:text-[24px]">Telepon</p>
                                        <p className="text-[14px] sm:text-[24px]">+62 85745104969</p>

                                    </div>
                                </div>                            
                            </div>

                        </div>                    
                    </div>

                </div>
            </div>
                <div className="flex sm:flex-row flex-col justify-center item-center sm:h-[333px]  sm:w-[1280px] h-[164px] w-[382px] px-[0px] m-[80px] py-[80px] bg-primary sm:rounded-[50px] rounded-[24px] items-center ">
                    <div className="text-white sm:pr-[54px] pr-[0px] flex flex-col gap-[16px]">
                        <h1 className=" text-center sm:text-left text-xl text-[20px] font-bold pb-[24px]  sm:text-5xl sm:text-[48px] sm:font-semibold sm:pb-[16px] ">
                            Cara Anda Berkontribusi untuk <br /> Lingkungan
                        </h1>
                        <p className="text-20px text-xl font-medium hidden sm:block ">
                            Bergabunglah mendukung keberlanjutan dengan produk ramah lingkungan dan edukasi.
                        </p>
                    </div>

                    <div>
                        <button className="w-[238px] h-[38px] sm:w-[254px] sm:h-[62px] bg-white text-[15px] font-medium text-primary rounded-[10px]">Yuk Bantu Selamatkan Bumi !</button>
                    </div>
                </div>
        </div>

    );
};
export default ContactUs;