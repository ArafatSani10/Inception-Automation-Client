import React, { useState } from "react";

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAnswer = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqData = [
        {
            question: "Who is  this course for?",
            answer: "Beginners and professionals interested in generative AI.",
        },
        {
            question: "What is tools will i  learn?",
            answer: "LLMs, GANs, TensorFlow, PyTorch, and AI frameworks.",
        },
        {
            question: "Don i need prior AI experience?",
            answer: "Basic AI and Python Knowledge is recommended.",
        },
        {
            question: "What Project will i build?",
            answer: "Chatbots,  images generators,and creative AI applications.",
        },
        {
            question: "Will i work in real-world data?",
            answer: "Yes practical dataset are provides for hands-on learning.",
        },
        {
            question: "What is the course outcome?",
            answer: "Skills to build, train, and deploy generative AI models.",
        }
    ];

    return (
        <div className="mt-5 mr-6">
            <div className="space-y-6 ">
                {faqData.map((faq, index) => (
                    <div
                        key={index}
                        className="bg-base-200 p-4  rounded-xl shadow-xl transition-all ease-in-out duration-1000 hover:shadow-2xl hover:bg-gray-50"
                    >
                        <div
                            className="flex justify-between items-center cursor-pointer text-[16px] font-bold opacity-80 text-gray-800"
                            onClick={() => toggleAnswer(index)}
                        >
                            <span className="group relative">
                                {faq.question}
                                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-800 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
                            </span>
                            <span className={`transform transition-transform duration-1000 ${activeIndex === index ? 'rotate-180' : ''}`}>
                                {/* This icon rotates on open/close */}
                                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </span>
                        </div>
                        <div
                            className={`mt-2 text-gray-600 ${activeIndex === index ? 'max-h-screen' : 'max-h-0 overflow-hidden'} transition-all duration-1000 ease-in-out`}
                        >
                            {faq.answer}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;
