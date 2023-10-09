import Footer from '@/components/Footer';

import React from 'react';
import Navbar from '../Navbar';


const RootLayout = ({children}) => {
    return (
        <div>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default RootLayout;