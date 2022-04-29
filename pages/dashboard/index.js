import React from "react";
import Card from "../card";
import Filters from "../filters";

const Dashboard = () => {
    return <div className="bg-gray-100/50 h-screen">
        <h2 className="text-center font-semibold pt-8 text-2xl">5350 work from home jobs/internships</h2> 
        <div className="md:flex">
            <div className="hidden lg:ml-20 lg:block">
                <Filters />
            </div>
            <div className="lg:w-3/5 md:w-screen mt-20 md:mr-20 max-h-screen overflow-y-auto hide">
                <Card 
                title="Earn your Summer training" 
                company="Gear up"
                location="work from home"
                statringDate="Starts immediately"
                duration="1 Month"
                stipend="$100 - $200/month"
                deadline="8 May' 22"
                />
                <Card 
                title="#SummerWithInternshala" 
                company="Internshala"
                location="work from home"
                statringDate="Starts immediately"
                duration="1 Month"
                stipend="$50 - $100/month"
                deadline="1 May' 22"
                />
                <Card 
                title="Backend developer" 
                company="Axios"
                location="On-Site"
                statringDate="Starts immediately"
                duration="3 Month"
                stipend="$200 - $400/month"
                deadline="25 Apr' 22"
                />
                <Card 
                title="Frontend developer" 
                company="Hirable"
                location="work from home"
                statringDate="Starts immediately"
                duration="3 Month"
                stipend="$100 - $400/month"
                deadline="2 Apr' 22"
                />
                <Card 
                title="Full stack developer" 
                company="Live.Ai"
                location="On-Site"
                statringDate="Starts immediately"
                duration="3 Month"
                stipend="$100 - $400/month"
                deadline="5 May' 22"
                />
            </div>
        </div>
    </div>
}
export default Dashboard;