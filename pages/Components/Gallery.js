import React from "react";
import ImageCor, {CorosaleF1,CorosaleF2,CorosaleS1,CorosaleS2,CorosaleS3,CorosaleS4} from "../../public/ImageCor";


const Gallery = () => {
    return (
        <div className="container mx-auto px-2 py-1 lg:px-16 lg:pt-12">
            <div className="-m-1 flex flex-wrap md:-m-2">
                <div className="flex w-1/2 flex-wrap">
                    <div className="w-1/2 p-1 md:p-2">
                        <CorosaleS1 />
                    </div>
                    <div className="w-1/2 p-1 md:p-2">
                        <CorosaleS2 />
                    </div>
                    <div className="w-full p-1 md:p-2">
                        <CorosaleF1 />
                    </div>
                </div>
                <div className="flex w-1/2 flex-wrap">
                    <div className="w-full p-1 md:p-2">
                        <CorosaleF2 />
                    </div>
                    <div className="w-1/2 p-1 md:p-2">
                        <CorosaleS3 />
                    </div>
                    <div className="w-1/2 p-1 md:p-2">
                        <CorosaleS4 />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;
