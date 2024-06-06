import { RatingBar, Text } from "components";
import React from "react";


export const CardFeedback = ({ feedback }) => {

    return (
        <div className="border h-[230px] border-black-900_19 border-solid flex flex-1 flex-col items-center justify-start p-[22px] sm:px-5 rounded-[10px] w-full">
            <div className="flex flex-col gap-1.5 items-start justify-start w-[95%] md:w-full">
                <div className="flex flex-row font-cormorant gap-[7px] items-end justify-start w-[47%] md:w-full">
                    <Text
                        className="text-black-900 text-xl"
                        size="txtCormorantBold20"
                    >
                        {feedback.owner.name}
                    </Text>
                    <RatingBar
                        className="flex justify-between mb-[3px] mt-2 w-[78px]"
                        value={feedback.note}
                        starCount={5}
                        activeColor="#a57761"
                        size={13}
                    ></RatingBar>
                </div>
                <div style={{ overflowY: "scroll", height: "220px" }}>

                    <Text
                        className="leading-[22.00px] text-base text-black-900 w-full"
                        size="txtMontserratRegular16"
                    >
                        {feedback.text}
                    </Text>
                </div>
            </div>
        </div>
    )
}