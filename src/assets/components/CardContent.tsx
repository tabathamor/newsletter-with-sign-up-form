import { useState } from "react";
import checkListIcon from "../images/icon-list.svg";
import SuccessCard from "./SuccessCard";

interface CardContentProps {
    onSuccess: (value: string) => void;
}

const CardContent = ({ onSuccess }: CardContentProps) => {
    const [email, setEmail] = useState("");
    const [isValid, setIsValid] = useState(true);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const validateEmail = (value: string) => {
        setEmail(value);

        // only allow valid email characters
        const allowedCharacters = /^[A-Za-z0-9._%+-@]*$/;
        if (!allowedCharacters.test(value)) {
            setIsValid(false);
            return;
        }

        // basic email format validation
        const fullRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        setIsValid(fullRegex.test(value));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!isValid || email.length === 0) {
            setIsValid(false);
            return;
        }

        // notify parent component that the form is valid and submitted
        onSuccess(email);
    };

    // if the form was submitted successfully, show the SuccessCard
    if (isSubmitted) {
        return (
            <div className="px-300 py-500 md:px-500 md:py-0 md:w-full lg:w-full lg:items-center lg:py-400 lg:px-400">
                <SuccessCard
                    email={email}
                    onDismiss={() => {
                        setIsSubmitted(false);
                        setEmail("");
                        setIsValid(true);
                    }}
                />
            </div>
        );
    }

    // if not submitted yet, show the main form
    return (
        <div className="px-300 py-500 md:px-500 md:py-0 md:w-full lg:w-full lg:items-center lg:py-400 lg:px-400">
            <div>
                {/* HEADINGS */}
                <p className="text-preset-1-mobile text-blue-800 md:text-preset-1">
                    Stay updated!
                </p>

                <p className="text-preset-2 py-300 lg:py-400 text-blue-800">
                    Join 60,000+ product managers receiving{" "}
                    <br className="md:hidden" />
                    monthly updates on:
                </p>

                {/* LIST SECTION */}
                <div className="flex items-start pb-100">
                    <img
                        src={checkListIcon}
                        className="pr-200"
                        alt="Checklist icon"
                    />
                    <p className="text-preset-2 text-blue-800">
                        Product discovery and building what matters
                    </p>
                </div>

                <div className="flex items-start pb-100">
                    <img
                        src={checkListIcon}
                        className="pr-200"
                        alt="Checklist icon"
                    />
                    <p className="text-preset-2 text-blue-800">
                        Measuring to ensure updates are a success
                    </p>
                </div>

                <div className="flex items-start pb-100">
                    <img
                        src={checkListIcon}
                        className="pr-200"
                        alt="Checklist icon"
                    />
                    <p className="text-preset-2 text-blue-800">And much more!</p>
                </div>

                {/* FORM */}
                <div className="mt-300 lg:mt-400">
                    <form onSubmit={handleSubmit}>
                        {/* label + error aligned on the right */}
                        <div className="flex items-center justify-between mb-100">
                            <label
                                htmlFor="email"
                                className="block text-preset-3 text-blue-800"
                            >
                                Email address
                            </label>

                            {!isValid && email.length > 0 && (
                                <p className="text-red text-preset-3">
                                    Valid email required
                                </p>
                            )}
                        </div>

                        <input
                            type="email"
                            id="email"
                            name="email"
                            autoComplete="email"
                            placeholder="email@company.com"
                            value={email}
                            onChange={(e) => validateEmail(e.target.value)}
                            className={`
                                mb-300 w-full pl-300 pr-200 py-200 border rounded-lg 
                                focus-visible:ring-1 focus-visible:outline-none
                                ${isValid || email.length === 0
                                    ? "bg-white border-grey text-blue-800 focus-visible:ring-blue-800"
                                    : "bg-red-100 border-red text-red focus-visible:ring-red"
                                }
                            `}
                        />

                        <button
                            type="submit"
                            className="w-full py-200 px-600 bg-blue-800 text-white text-preset-2-bold rounded-lg lg:active:bg-gradient"
                        >
                            Subscribe to monthly newsletter
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CardContent;
