import Sidebar from '@/components/sidebar';
import React from 'react';

const DashboardLayout = ({children}) => {
    return (
        <div className=''>
            <Sidebar/>
           <section className='p-4 md:ml-64 mt-20 '>{children}</section>
        </div>
    );
}

export default DashboardLayout;
