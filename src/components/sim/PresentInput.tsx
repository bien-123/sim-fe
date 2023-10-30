const PresentInput = () => {
    return (
        <div className="block">
            <div className="w-[450px] p-3 rounded-xl flex items-center bg-white gap-1 box-shadow-present h-[45px] relative">
                <input className=" w-full mx-3 out-line-none" type="tel" placeholder="Tìm sim ngay" />
                <div className="flex items-center justify-center bg-[#FC553D] rounded-[10px] w-12 h-10 absolute right-1">
                    <svg width="26" height="26" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="Live area" clipPath="url(#clip0_952_2089)">
                            <path
                                id="Vector"
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M10.8332 0.666504C4.94213 0.666504 0.166504 5.44213 0.166504 11.3332C0.166504 17.2242 4.94213 21.9998 10.8332 21.9998C13.2981 21.9998 15.5678 21.1637 17.374 19.7596L24.557 26.9426C25.0777 27.4633 25.9219 27.4633 26.4426 26.9426C26.9633 26.4219 26.9633 25.5777 26.4426 25.057L19.2596 17.874C20.6637 16.0678 21.4998 13.7981 21.4998 11.3332C21.4998 5.44213 16.7242 0.666504 10.8332 0.666504ZM2.83317 11.3332C2.83317 6.91489 6.41489 3.33317 10.8332 3.33317C15.2514 3.33317 18.8332 6.91489 18.8332 11.3332C18.8332 15.7514 15.2514 19.3332 10.8332 19.3332C6.41489 19.3332 2.83317 15.7514 2.83317 11.3332Z"
                                fill="white"
                            />
                        </g>
                        <defs>
                            <clipPath id="clip0_952_2089">
                                <rect
                                    width="26.6667"
                                    height="26.6667"
                                    fill="white"
                                    transform="translate(0.166504 0.666504)"
                                />
                            </clipPath>
                        </defs>
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default PresentInput;
