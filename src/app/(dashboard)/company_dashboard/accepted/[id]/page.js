"use client"
import ApplicantsTable from '@/components/applicants_table';
import { useRouter } from 'next/navigation';

import React from 'react';
// import Matchers from '../../company_applicants/page';

const Page = () => {
    const router=useRouter()
    const {id}=router.query||[]
    console.log(id)
    return (
        <div>
          {/* <Matchers/> */}
        </div>
    );
}

export default Page;
