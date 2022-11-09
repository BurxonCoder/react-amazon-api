import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Main from "../components/Main";

const Home = () => {
    return (
        <>
           <Header/>
           <main>
               <Main/>
           </main>
            <Footer/>
        </>
    );
};

export default Home;