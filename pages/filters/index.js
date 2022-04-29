import React, {useState} from "react";

const Filters = () => {

    const [dropdwn, setDropDown] = useState(false);    
    const handleCLick = () => {
        setDropDown(!dropdwn);
    }
    return <div className="bg-white max-h-screen overflow-y-auto ml-20 mt-20 shadow-md rounded-lg p-8">
        <h1 className="text-center text-lg font-semibold">Filters</h1>
        <div className="mt-8">
        <div className="flex">
            <div>
                <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" />
            </div>
            <div className="justify-self-end">
                <label className="form-check-label font-semibold inline-block text-gray-800" htmlFor="flexCheckDefault">
                As per my <span className="text-blue-600 font-semibold"><a href="">preferences</a></span>
                </label>
            </div>
        </div>
        <div className="mt-8 font-semibold">
            <label htmlFor="categories">Categories</label>
            <br />
            <select className="border-solid pl-3 pr-3 pt-2 pb-2 cursor-pointer border-2 border-black-400">
            <option className="w-10" disabled selected>eg: Marketing</option>
            <option className="filter-items">.NET Development</option>
            <option className="filter-items">3D Printings</option>
            <option className="filter-items">Accounts</option>
            <option className="filter-items">Acting</option>
            <option className="filter-items">Anchoring</option>
            </select>
        </div>
        <div className="mt-8 font-semibold">
            <label htmlFor="Location">Location</label>
            <br />
            <select className="border-solid pl-3 pr-3 pt-2 pb-2 cursor-pointer border-2 border-black-400">
            <option className="w-10" disabled selected>eg: Delhi</option>
            <option className="filter-items">Bihar</option>
            <option className="filter-items">Chandigrah</option>
            <option className="filter-items">Himachal radesh</option>
            <option className="filter-items">Tamil Nadu</option>
            <option className="filter-items">Vishakhapatnam</option>
            </select>
        </div>
        <div className="mt-8 font-semibold">
            <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" />
            <label className="form-check-label inline-block text-gray-800" htmlFor="flexCheckDefault">
                Work from home
            </label>
        </div>
        <div className="mt-4 font-semibold">
            <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" />
            <label className="form-check-label inline-block text-gray-800" htmlFor="flexCheckDefault">
                Part Time
            </label>
        </div>
        <div>
            <button id="btn" className="mt-8 mb-6 font-bold text-blue-700" onClick={handleCLick}>{!dropdwn ? "View More Filters":"View Less Filters"}</button>
            <div className={dropdwn?`dropdown`:`dropdown hidden`}>
                <div>
                <label className="font-semibold" htmlFor="start date">Starting from (or after)</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path>
                            </svg>
                        </div>
                        <input datepicker type="text" className="border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date" />
                    </div>
                </div>
                <div className="mt-6 font-semibold">
                    <label htmlFor="start date">Max duration (months)</label>
                    <br />
                    <select className="border-solid pl-3 pr-3 pt-2 pb-2 cursor-pointer border-2 border-black-400">
                    <option className="w-10" disabled selected>eg: Choose Duration</option>
                    <option className="filter-items">1 month</option>
                    <option className="filter-items">2 month</option>
                    <option className="filter-items">3 month</option>
                    <option className="filter-items">4 month</option>
                    <option className="filter-items">5 month</option>
                    <option className="filter-items">6 month</option>
                    <option className="filter-items">full time</option>
                    </select>
                </div>
                <div className="mt-8 font-semibold">
                    <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" />
                    <label className="form-check-label inline-block text-gray-800" htmlFor="flexCheckDefault">
                        Internship for women
                    </label>
                </div>
                <div className="mt-4 font-semibold">
                <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" />
                    <label className="form-check-label inline-block text-gray-800" htmlFor="flexCheckDefault">
                        Internships with job offer
                    </label>
                </div>
            </div>
            <div className={!dropdwn?`mt-6`:`hidden`}>
                <p className="text-center mt-8 font-semibold">Premium filters</p>
                <div>
                    <p className="text-md opacity-30 mt-6">Desired minimum monthly stipend ($)</p>
                    <div className="mt-8 opacity-30 font-semibold">
                        <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" />
                        <label className="form-check-label inline-block text-gray-800" htmlFor="flexCheckDefault">
                            Fast response
                        </label>
                        </div>
                    <div className="mt-4 opacity-30 font-semibold">
                        <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" />
                        <label className="form-check-label inline-block text-gray-800" htmlFor="flexCheckDefault">
                            Early Applicants
                        </label>
                    </div>
                    <button className="bg-blue-600 hover:bg-blue-500 mt-8 w-full text-center text-white font-semibold rounded pt-2 pb-2 pr-5 pl-5">Unlock filters</button>
                </div>
            </div>
        </div>
        </div>
        <p className="mt-8 font-bold">Keyword Search</p>
        <div className="flex mt-2">
        <input className="border-solid border-2 pt-2 pb-2 pr-3 pl-3" placeholder="Design, Mumbai, Infosys"/>
        <button className="bg-blue-600 text-white font-semibold pl-2 pr-2 pt-2 pb-2 hover:bg-blue-500">Search</button>
        </div>
    </div>
}
export default Filters;