import React, { useState } from 'react';

const Feedback = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        feedback: '',
        rating: 0,
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Feedback submitted:', formData);
        setSubmitted(true);

        setFormData({
            name: '',
            email: '',
            feedback: '',
            rating: 0,
        });
    };

    return (
        <div className="max-w-3xl mx-auto py-10 px-6">
            <h1 className="text-2xl font-bold mb-6 text-center">Feedback</h1>

            {submitted && (
                <div className="mb-6 p-4 bg-green-200 text-green-800 rounded">
                    Thank you for your feedback!
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-lg font-medium mb-2" htmlFor="name">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        placeholder="Your Name"
                        required
                    />
                </div>

                <div>
                    <label className="block text-lg font-medium mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        placeholder="Your Email"
                        required
                    />
                </div>

                <div>
                    <label className="block text-lg font-medium mb-2" htmlFor="feedback">
                        Feedback
                    </label>
                    <textarea
                        id="feedback"
                        name="feedback"
                        value={formData.feedback}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        placeholder="Share your feedback about the platform or events..."
                        required
                        rows="5"
                    ></textarea>
                </div>

                <div>
                    <label className="block text-lg font-medium mb-2">Rate Your Experience</label>
                    <div className="flex space-x-2">
                        {[1, 2, 3, 4, 5].map((value) => (
                            <label key={value} className="cursor-pointer">
                                <input
                                    type="radio"
                                    name="rating"
                                    value={value}
                                    checked={formData.rating === value}
                                    onChange={handleChange}
                                    className="hidden"
                                />
                                <span
                                    className={`px-3 py-1 border rounded ${formData.rating === value
                                            ? 'bg-blue-500 text-white'
                                            : 'bg-gray-200'
                                        }`}
                                >
                                    {value}
                                </span>
                            </label>
                        ))}
                    </div>
                </div>

                <div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
                    >
                        Submit Feedback
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Feedback;
