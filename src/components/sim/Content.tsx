import SimServer from 'src/services/sim';
import PresentInput from './PresentInput';
import Filter from './Filter';

const dataSim = await SimServer.getDataSim();
const headerTableTitle = ['Số điện thoại', 'Loại số', 'Gói cước', 'Giá tiền', ' '];

const Content = () => {
    return (
        <div className="bg-[#EEEEEE]">
            <div className="flex items-center justify-center">
                <div className="flex flex-col space-y-5 my-5">
                    <p className="text-2xl font-semibold text-black leading-6">Chỉ còn 100 số sim Tặng</p>
                    <div className="flex items-center justify-between ">
                        <PresentInput />
                        <Filter />
                    </div>

                    <div className="w-[1280px]">
                        <table>
                            <thead>
                                <tr className="border-b-[1px] title-present">
                                    {headerTableTitle.map((title, index) => (
                                        <th className="px-8 py-4 w-[200px]" key={index}>
                                            <p className="font-semibold leading-[26px] text-lg">{title}</p>
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {dataSim.map((item: any, index: any) => (
                                    <tr className="w-[200px] text-center mt-10 table-present" key={index}>
                                        <td className="px-8 py-4 sim-present">
                                            <p
                                                dangerouslySetInnerHTML={{
                                                    __html: item.highlight,
                                                }}
                                            />
                                        </td>
                                        <td className="py-4 px-3 w-[300px]">
                                            <div className="flex flex-wrap items-center gap-1 justify-center">
                                                <div className="flex justify-center items-center bg-[#0E6AD21A] px-[6px] py-[2px] text-sm rounded-[4px] text-[#0E6AD2] mr-2 whitespace-nowrap">
                                                    {item?.categoryText}
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-8 py-4">
                                            <div className="flex flex-col w-[300px] items-end">
                                                <span className="text-[#4B5460] text-sm font-bold whitespace-nowrap">
                                                    Cam kết gói SIMTANG 99.000đ trong 36 tháng
                                                </span>
                                                <span>
                                                    Khuyến mại 4GB/ngày, số tiền cam kết được dùng gọi nội mạng, ngoại
                                                    mạng trong tháng
                                                </span>
                                            </div>
                                        </td>
                                        <td className="px-8 py-4">
                                            <div className="flex flex-col">
                                                <span className="text-[#FC553D] text-xl font-bold">0 ₫</span>
                                                <span className="text-[#8E8E93] text-base font-medium line-through">
                                                    {item.priceFormatted}
                                                </span>
                                            </div>
                                        </td>
                                        <td className="px-8 py-4">
                                            <div
                                                // onClick={() => handleSimDetail(item)}
                                                className="flex items-center justify-center cursor-pointer !p-2 rounded-2xl border border-solid border-[#EE6D6B] text-[#FC553D] text-base font-semibold leading-5 w-[100px] whitespace-nowrap hover-button-present"
                                            >
                                                <p>Nhận ngay</p>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Content;
