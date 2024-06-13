import React from "react";
import InputBox from "./InputBox";
import OutputBox from "./OutputBox";

interface BoxesProps {
    handleInputChange: (input: string) => void;
    chatGPTResponse: string | null;
    uploadText?: string;
    isLoading: boolean;
};

const Boxes: React.FC<BoxesProps> = ({ handleInputChange, uploadText, chatGPTResponse, isLoading }) => {
    return (
        <div className="flex flex-col md:flex-row items-center gap-y-10 lg:gap-y-0 h-[90%] w-full">
            <InputBox handleInputChange={handleInputChange} uploadText={uploadText} />
            <OutputBox chatGPTResponse={chatGPTResponse} isLoading={isLoading} />
        </div>
    );
};

export default Boxes;
