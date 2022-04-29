import React,{useState} from "react";

const Navbar = () => {
    const [internship, showInternship] = useState(true);
    const [training, showTraining] = useState(false);
    const [jobs, showJobs] = useState(false);

    return <div className="p-5 flex justify-between shadow-xl">
        <div className='font-bold text-2xl'
        onMouseEnter={()=>{
            showInternship(false);
            showTraining(false);
            showJobs(false);
        }} 
        ><h2>Internshala</h2> </div>
        <div className='flex'>
            {/* Internship Section */}
            <div
            onMouseEnter={()=>{
                showInternship(!internship);
                showTraining(false);
                showJobs(false);
            }} 
            className="hidden group md:mr-8 md:block font-semibold cursor-pointer"><p>Internship</p></div>
            {internship && <div
            onMouseLeave={()=>{
                showInternship(!internship);
            }}  
            className="dropdown-container">
                <div className="mr-5 flex flex-col justify-evenly">
                    <div className="list-items">Location</div>
                    <div className="list-items">Profile</div>
                    <div className="list-items">Category</div>
                    <div className="list-items">Specialization</div>
                </div>
                <div className="flex flex-col justify-around">
                    <div className="list-items">Work from home</div>
                    <div className="list-items">Internship in delhi</div>
                    <div className="list-items">Internship in bangalore</div>
                    <div className="list-items">Internship in bihar</div>
                    <div className="list-items">Internship in hyderabad</div>
                    <div className="list-items">Internship in Mumbai</div>
                    <div className="list-items">Internship in tamilnadu</div>
                    <div className="list-items">Internship in kerala</div>
                    <div className="list-items">Internship in oddisha</div>
                    <div className="hover:bg-blue-500 hover:text-white rounded cursor-pointer p-2">View all internships</div>
                </div>
            </div>
            }

            {/* Online Training Section */}
            <div 
            onMouseEnter={()=>{
                showTraining(true);
                showInternship(false);
                showJobs(false);
            }} 
            className="hidden md:mr-8 md:block font-semibold cursor-pointer"><p>Online Training <span className="bg-orange-500 rounded-xl pl-3 pr-3 font-semibold text-white">Offer</span></p></div>
            {training && <div
            onMouseLeave={()=>{
                showTraining(!training);
            }}  
            className="dropdown-container">
                <div className="mr-5 flex flex-col justify-evenly">
                    <div className="list-items">Recommended for you</div>
                    <div className="list-items">Programming</div>
                    <div className="list-items">Buisness and Management</div>
                    <div className="list-items">Core Engineering</div>
                    <div className="list-items">Data Science</div>
                    <div className="list-items">Design</div>
                </div>
                <div className="flex flex-col justify-around">
                    <div className="list-items">Web Development</div>
                    <div className="list-items">Programming With Python</div>
                    <div className="list-items">Ethical hacking</div>
                    <div className="list-items">React</div>
                </div>
            </div>
            }
            {/* Jobs */}
            <div  onMouseEnter={()=>{
                showTraining(false);
                showInternship(false);
                showJobs(true);
            }} 
            className="hidden md:mr-8 md:block font-semibold cursor-pointer"><p>Jobs</p></div>
            {jobs && <div
            onMouseLeave={()=>{
                showJobs(!jobs);
            }}  
            className="dropdown-container">
                <div className="mr-5 flex flex-col justify-evenly">
                    <div className="list-items">Locatioin</div>
                    <div className="list-items">Category</div>
                </div>
                <div className="flex flex-col justify-around">
                    <div className="list-items">Work From home</div>
                    <div className="list-items">On-site</div>
                    <div className="list-items">Ethical hacking</div>
                    <div className="list-items">React</div>
                </div>
            </div>
            }
            <div className="hidden md:mr-8 md:block font-semibold cursor-pointer"></div>
            <div className="hidden md:mr-8 md:block cursor-pointer"></div>
        </div>
    </div>
}

export default Navbar;