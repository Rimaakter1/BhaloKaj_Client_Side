import React, { useState } from 'react';
import { FaHandsHelping, FaCreditCard, FaHeart } from 'react-icons/fa';

const Donation = () => {
    const [donationAmount, setDonationAmount] = useState('');
    const [donationSuccess, setDonationSuccess] = useState(null);

    const handleDonationSubmit = (e) => {
        e.preventDefault();
        if (donationAmount > 0) {
            setDonationSuccess(true);
        } else {
            setDonationSuccess(false);
        }
    };

    return (
        <div className="donation-page bg-gray-100 dark:bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 py-20">
            <div className="text-center dark:text-white px-4 md:px-0">
                <h1 className="text-2xl lg:text-4xl font-bold mb-4">Make a Difference Today</h1>
                <p className="text-lg mb-8">Your support helps us create meaningful impact for our volunteers and community!</p>
            </div>

            <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 shadow-xl p-10 rounded-lg">
                <form onSubmit={handleDonationSubmit}>
                    <div className="mb-6">
                        <label htmlFor="donationAmount" className="text-lg font-medium dark:text-gray-300">
                            Enter Donation Amount
                        </label>
                        <div className="mt-2 flex items-center space-x-4">
                            <input
                                type="number"
                                id="donationAmount"
                                className="w-full p-3 bg-white dark:bg-gray-700 dark:text-white border border-gray-500 rounded-lg focus:ring-2 focus:ring-pink-500"
                                value={donationAmount}
                                onChange={(e) => setDonationAmount(e.target.value)}
                                placeholder="Enter amount in USD"
                                min="1"
                                required
                            />
                        </div>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-lg font-medium dark:text-gray-300 mb-4">Choose a Suggested Amount</h2>
                        <div className="flex justify-around space-x-4">
                            {[25, 50, 100, 250].map((amount) => (
                                <button
                                    key={amount}
                                    className="bg-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-700 focus:ring-2 focus:ring-purple-500 transition-all"
                                    onClick={() => setDonationAmount(amount)}
                                >
                                    ${amount}
                                </button>
                            ))}
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full p-4 text-white bg-[#553739] dark:text-white text-xl rounded-lg"
                    >
                        <FaHeart className="inline mr-2" />
                        Donate Now
                    </button>
                </form>

                {donationSuccess !== null && (
                    <div className={`mt-4 text-center ${donationSuccess ? 'text-green-500' : 'text-red-500'}`}>
                        {donationSuccess ? (
                            <>
                                <FaHandsHelping className="inline text-4xl mb-2" />
                                <p className="font-medium text-xl">Thank you for your generous donation!</p>
                            </>
                        ) : (
                            <>
                                <FaCreditCard className="inline text-4xl mb-2" />
                                <p className="font-medium text-xl">Please enter a valid donation amount.</p>
                            </>
                        )}
                    </div>
                )}
            </div>

            <div className="mt-20 text-center dark:text-white">
                <p className="text-lg">Your contributions directly fund the empowerment of our community. Together, we can achieve great things.</p>

            </div>
        </div>
    );
};

export default Donation;
