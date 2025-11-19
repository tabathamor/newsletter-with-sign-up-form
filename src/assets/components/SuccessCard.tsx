import React from "react";
import iconSuccess from "../images/icon-success.svg";

interface SuccessCardProps {
    email: string;
    onDismiss: () => void;
}

const SuccessCard: React.FC<SuccessCardProps> = ({ email, onDismiss }) => {
    return (
        <div className=" min-h-screen max-w-[327px] flex h-full items-center justify-center flex-col md:px-800 lg:py-800 lg:px-800 md:max-w-none lg:w-full">
            <div className="h-[623px] md:h-[400px] lg:h-[400px] lg:w-full flex flex-col justify-between">

                <div className="">
                    <img
                        src={iconSuccess}
                        alt="Success"
                        className="mb-300"
                    />

                    <p className="text-preset-1-mobile my-400  md:text-preset-1 text-blue-800 ">
                        Thanks for subscribing!
                    </p>

                    <p className="text-preset-2 text-blue-800">
                        A confirmation email has been sent to{" "}
                        <span className="text-preset-2-bold">{email}</span>. Please open it
                        and click the button inside to confirm your subscription.
                    </p>
                </div>

                <button
                    onClick={onDismiss}
                    type="button"
                    className="w-full mt-400 py-200 px-600 bg-blue-800 text-white text-preset-2-bold rounded-lg lg:active:bg-gradient"
                >
                    Dismiss message
                </button>
            </div>
        </div>
    );
};

export default SuccessCard;
