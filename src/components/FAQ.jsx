import "../css/FAQ.css";
import { useState } from "react";
import plusIcon from "../assets/plusIcon.jpg";
import closeIcon from "../assets/closeIcon.jpg";

const faqData = [
    {
        id: 1,
        question: "What is Keble?",
        answer: "Keble makes investing in real estate easy. You can either buy your own property and pay over time, or invest in a project and earn high-yield returns."
    },
    {
        id: 2,
        question: "What Can I Invest In?",
        answer: "You can invest in residential properties, land, or fractional shares of high-yield real estate projects."
    },
    {
        id: 3,
        question: "How Safe is My Investment with Keble?",
        answer: "Every property is verified and comes with proper legal documentation to protect your investment."
    },
    {
        id: 4,
        question: "How Are the Investment Options on Keble Structured?",
        answer: "Investment options are structured as either direct ownership, land purchase plans, or fractional shares with fixed return periods."
    },
    {
        id: 5,
        question: "How Are the Investment Options on Keble Structured?",
        answer: "Investment options are structured as either direct ownership, land purchase plans, or fractional shares with fixed return periods."
    },
    {
        id: 6,
        question: "How Are the Investment Options on Keble Structured?",
        answer: "Investment options are structured as either direct ownership, land purchase plans, or fractional shares with fixed return periods."
    },
];

function FAQ() {
    const [openId, setOpenId] = useState(null);

    function handleToggle(id) {
        if (openId === id) {
            setOpenId(null);
        } else {
            setOpenId(id);
        }
    }

    return (
        <div className="FAQ-card">
            <h2 className="wrapheader">Frequently Asked Questions</h2>
            <div className="property-options">
                <button type="button" className="option">Home Ownership</button>
                <button type="button" className="option">Land Ownership</button>
                <button type="button" className="active option">Fractional Investment</button>
            </div>

            <div className="FAQ-content">
                {faqData.map((item) => {
                    const isOpen = openId === item.id;

                    return (
                        <div
                            key={item.id}
                            className={isOpen ? "faq active-faq" : "faq"}
                        >
                            <div className="question" onClick={() => handleToggle(item.id)}>
                                <p className="first-question">{item.question}</p>
                                <span>
                                    <img
                                        src={isOpen ? closeIcon : plusIcon}
                                        alt={isOpen ? "close" : "extend"}
                                    />
                                </span>
                            </div>

                            {isOpen && (
                                <>
                                    <hr />
                                    <p className="answer">{item.answer}</p>
                                </>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default FAQ;