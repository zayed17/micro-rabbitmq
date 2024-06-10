import { useState } from 'react';
import axios from 'axios';

const Home = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        console.log('Form submitted');

        const formData = new FormData(e.target);
        const eventData = {
            title: formData.get('title'),
            date: formData.get('date'),
            location: formData.get('location'),
            description: formData.get('description'),
        };

        console.log(eventData, "is getting or not")
        try {
            const response = await axios.post('http://localhost:3001/event/created', eventData);
            console.log('Event created:', response.data);
            setIsModalOpen(false);
        } catch (error) {
            console.error('Error creating event:', error);
        }
    };

    return (
        <section className="bg-gray-50 dark:bg-gray-900 min-h-screen flex items-center justify-center">
            <div className="max-w-3xl mx-auto px-4">
                <div className="flex justify-between items-center mb-8">
                    <button
                        onClick={toggleModal}
                        className="bg-blue-600 text-white font-semibold py-2 px-4 rounded lg:absolute lg:top-4 lg:right-4"
                    >
                        Add Event
                    </button>
                </div>
            </div>

            {isModalOpen && (
                <div className="fixed top-0 left-0 z-50 w-full h-full bg-gray-800 bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white dark:bg-gray-700 rounded-lg p-8 max-w-md w-full">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                Create New Event
                            </h3>
                            <button
                                onClick={toggleModal}
                                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 flex justify-center items-center"
                            >
                                <svg
                                    className="w-3 h-3"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill="currentColor"
                                        fillRule="evenodd"
                                        d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>
                        </div>
                        <form className="p-4 md:p-5" onSubmit={handleSubmit}>
                            <div className="grid gap-4 mb-4 grid-cols-2">
                                <div className="col-span-2">
                                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                                    <input type="text" name="title" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type product name" required />
                                </div>
                                <div className="col-span-2 sm:col-span-1">
                                    <label htmlFor="date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date</label>
                                    <input type="date" name="date" id="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="$2999" required />
                                </div>
                                <div className="col-span-2 sm:col-span-1">
                                    <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Location</label>
                                    <select id="category" name='location' defaultValue="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                        <option disabled value="">Select Location</option>
                                        <option value="TV">Kerala</option>
                                        <option value="PC">Tamil Nadu</option>
                                        <option value="GA">Hydrabad</option>
                                        <option value="PH">Delhi</option>
                                    </select>
                                </div>
                                <div className="col-span-2">
                                    <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                                    <textarea name='description' id="description" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write product description here" />
                                </div>
                            </div>
                            <button type="submit" className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                <svg className="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd"></path></svg>
                                Add new product
                            </button>
                        </form>

                    </div>
                </div>
            )}
        </section>
    );
};

export default Home;