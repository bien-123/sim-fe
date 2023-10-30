import { listPresentFilter } from 'src/constant/storage';
import { useState } from 'react';

const Filter = () => {
    const [isActiveAll, setIsActiveAll] = useState(true);
    // const $dataSearch = useStore(dataSearch);
    return (
        <div className="flex items-center space-x-1 font-semibold h-full">
            <div
                className={`${
                    isActiveAll ? 'bg-[#FC553D] text-white' : 'bg-white text-[#FC553D]'
                } flex items-center justify-center text-sm font-semibold hover-button-present border border-solid border-[#FC553D] rounded-[10px] px-3 py-[20px] text-white cursor-pointer h-8`}
                // onClick={() => handleChangeFilter(true)}
            >
                Tất cả
            </div>

            {listPresentFilter.map((item: any, index: any) => (
                <div
                    key={index}
                    className={`${
                        !isActiveAll && item.title ? 'bg-[#FC553D] text-white' : 'bg-white text-[#FC553D]'
                    } flex items-center justify-center text-sm font-semibold hover-button-present cursor-pointer rounded-[10px] px-3 py-[20px] border border-solid border-[#FC553D] h-8`}
                >
                    <div
                    // onClick={() => handleChangeFilter(false, item)}
                    >
                        {item.title}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Filter;
