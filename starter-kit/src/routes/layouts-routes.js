import React from "react";

import Default from '../component/default/default'
import Samplepage from '../component/starterkits/samplepage'
import Support from "../component/support/Support";

export const routes = [
    { path:`${process.env.PUBLIC_URL}/default/sample-page`, Component: <Default/> },    
    { path:`${process.env.PUBLIC_URL}/starter-kit/sample-page`, Component: <Samplepage/> }, 
    { path:`${process.env.PUBLIC_URL}/support/raise-ticket`, Component: <Support/> }, 
    
]

