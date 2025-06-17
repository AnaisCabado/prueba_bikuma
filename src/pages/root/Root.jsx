import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/home/header/Header";
import Footer from "../../components/home/footer/Footer";
function Root() {
    return (
        <>
            <header>
                <Header />
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    );
}

export default Root;
