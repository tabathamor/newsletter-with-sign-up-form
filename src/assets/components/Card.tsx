import { useState } from "react";
import mobileIllustration from "../images/illustration-sign-up-mobile.svg";
import desktopIllustration from "../images/illustration-sign-up-desktop.svg";
import tabletIllustration from "../images/illustration-sign-up-tablet.svg";
import CardContent from './CardContent';
import SuccessCard from './SuccessCard';

const Card = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [email, setEmail] = useState("");

    return (
        <div className="md:min-h-dvh md:flex md:justify-center md:items-center">
            <div
                className={
                    `bg-white rounded-3xl flex items-center justify-center
                    ${isSubmitted
                        ? "flex-col w-full max-w-[504px] md:h-[520px] lg:h-[520px]"
                        : "flex-col md:flex-col lg:flex-row-reverse lg:w-[904px] lg:h-[641px] md:w-[608px] md:h-[878px]"
                    }`
                }
            >
                {/* only show the illustrations when the form is not submitted */}
                {!isSubmitted && (
                    <>
                        <img
                            src={mobileIllustration}
                            alt="Mobile"
                            className="block md:hidden w-full"
                        />

                        <img
                            src={tabletIllustration}
                            alt="Tablet"
                            className="lg:hidden md:block hidden md:m-500"
                        />

                        <img
                            src={desktopIllustration}
                            alt="Desktop"
                            className="hidden md:hidden lg:block lg:m-400"
                        />
                    </>
                )}

                {/* MAIN CONTENT */}
                {!isSubmitted ? (
                    <CardContent
                        onSuccess={(value: string) => {
                            setEmail(value);
                            setIsSubmitted(true);
                        }}
                    />
                ) : (
                    <SuccessCard
                        email={email}
                        onDismiss={() => {
                            setIsSubmitted(false);
                            setEmail("");
                        }}
                    />
                )}
            </div>
        </div>
    )
}

export default Card;
