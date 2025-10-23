export default function Ruler() {
    const markers = Array.from({ length: 83 }, (_, i) => i);

    return (
        <div className="h-6 border-b border-gray-300 flex flex-items relative select-none print:hidden">
            <div
                id="ruler-container"
                className="maw-w-[816px] mx-auto w-full h-full relative"
            >
                <div className="absolute inset-x-0 bottom-0 h-full">
                    <div className="relative h-full w-[816px]">
                        {
                            markers.map((marker) => {
                                const position = (marker * 816) / 82;

                                return (
                                    <div
                                        key={marker}
                                        className="absolute bottom-0 left-[${position}]"
                                        style={{ left: `${position}px` }}
                                    >
                                        {
                                            marker % 10 === 0 && (
                                                <>
                                                    <div className="absolute bottom-0 w-[1px] h-2 bg-neutral-500"></div>
                                                    <span className="absolute bottom-0 text-[10px] text-neutral-500 transform -translate-x-1/2">{marker /10 +1}</span>
                                                </>
                                            )
                                        }
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}