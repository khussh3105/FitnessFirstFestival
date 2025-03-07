import React, { useEffect } from 'react';
import trek from '../Images/trekking.jpg';
import food from '../Images/food.jpg';
import walk from '../Images/marathon.jpg';
import { Offcanvas, Ripple, initTE } from 'tw-elements';

function Announcement() {
    const [numOfAnn, setNumOfAnn] = React.useState(0)
    const announcements = [
        {
            title: 'Trek & Plant',
            description: 'Trekking with Tree Plantation" combines outdoor adventure with environmental conservation. Participants enjoy scenic hikes while actively contributing to reforestation efforts, fostering a deeper connection with nature',
            img:trek,
            link: '#',
        },
        {
            title: 'Walk-a-thon',
            description: '"Walkathons" are community events promoting physical fitness and social awareness. Participants walk for charitable causes, raising funds and fostering a sense of community while supporting important initiatives',
            img:food,
            link: '#',
        },
        {
            title: 'Cyclothon',
            description: 'A "Healthy Food Fair" showcases nutritious and delicious culinary options, encouraging informed dietary choices. Attendees can explore diverse flavors and gain nutritional insights, promoting a healthier lifestyle.',
            img:walk,
            link: '#',
        }
        

        
    ];
    useEffect(() => {
        initTE({ Offcanvas, Ripple });
        setNumOfAnn(announcements.length)

    }, [announcements.length]);

    return (
        <div id='announcement' className="bottom-3 right-4 2xl:bottom-6 lg:bottom-4 2xl:right-14 lg:right-6 fixed z-[100000000]">
            <button id='annbtn'
                className="mr-1.5 inline-block rounded bg-primary p-2 lg:px-4 lg:pb-2 lg:pt-2 2xl:px-6 2xl:pb-2 2xl:pt-2.5 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] py-4 bg-[#ff0054]"
                type="button"
                data-te-offcanvas-toggle
                data-te-target="#offcanvasRight"
                aria-controls="offcanvasRight"
                data-te-ripple-init
                data-te-ripple-color="light"
            >
                <div   className='flex z-50 items-center justify-center'>
                    <h1 className="text-xs 2xl:text-lg">📢</h1>
                    <h1 className="text-xs 2xl:text-lg">Announcement</h1>
                </div>
                <div className="btn-badge z-40 absolute rounded-full bg-white text-black py-0 px-2 -right-1 -top-2 border-white">{numOfAnn}</div>
            </button>

            <div
                className=" w-full invisible fixed bottom-0 right-0 top-0 z-[100000004] flex lg:w-96 max-w-full translate-x-full flex-col border-none bg-gray-900 bg-clip-padding text-neutral-700 shadow-sm outline-none transition duration-300 ease-in-out dark:bg-neutral-800 dark:text-neutral-200 [&[data-te-offcanvas-show]]:transform-none "
                tabIndex="-1"
                id="offcanvasRight"
                aria-labelledby="offcanvasRightLabel"
                data-te-offcanvas-init
            >
                <div className=" flex items-center justify-between p-4 z-[100000004]">
                    <h5
                        className="mb-0 font-bold text-lg leading-normal text-orange-600"
                        id="offcanvasRightLabel"
                    >
                        WHAT'S UPCOMING!
                    </h5>
                    <button
                        type="button"
                        className="box-content rounded-none border-none opacity-50 hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                        data-te-offcanvas-dismiss
                    >
                        <span
                            className="w-[1em] focus:opacity-100 disabled:pointer-events-none disabled:select-none disabled:opacity-25 [&.disabled]:pointer-events-none [&.disabled]:select-none [&.disabled]:opacity-25"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-8 w-8 text-orange-500"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </span>
                    </button>
                </div>
                <div className="offcanvas-body z-[100000005] flex-grow overflow-y-auto p-8">
                    {announcements.map((announcement, index) => (
                        <div
                            key={index}
                            className="max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 mb-8"
                        >
                            <a href={announcement.link}>
                                <img
                                    className="rounded-t-lg"
                                    src={announcement.img}
                                    alt=""
                                />
                            </a>
                            <div className="p-5">
                                <a href={announcement.link}>
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                        {announcement.title}
                                    </h5>
                                </a>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                    {announcement.description}
                                </p>
                                <a
                                    href={announcement.link}
                                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-pink-600 rounded-lg hover:bg-purple-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    Read more
                                    <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                    </svg>

                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Announcement;
