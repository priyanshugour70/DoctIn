import React from "react";

const DiscountBanner = () => {
    return (
        <div className="py-8">
            <div className="rounded-xl p-3 py-2 bg-cyan-300 dark:text-gray-300">
                <div className="container mx-auto">
                    <div className="flex flex-col lg:flex-row items-center justify-between">
                        <h2 className="text-center text-4xl tracking-tighter font-bold">
                            Up to 50% Off
                        </h2>
                        <div className="space-x-2 text-center py-2 lg:py-0">
                            <span>50 of on the first treatment on : </span>
                            <span className="font-bold text-lg">DoctIn</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DiscountBanner;
