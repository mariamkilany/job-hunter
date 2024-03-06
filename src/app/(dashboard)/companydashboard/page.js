import HeaderCompany from '@/components/headerCompany';
import React from 'react';

const CompanyDashboardHome = () => {
    return (
        <div className='flex gap-2'>
            <img src='Images/Company Logo.png' width="100px"/>
            <HeaderCompany/>
        </div>
    );
}

export default CompanyDashboardHome;
