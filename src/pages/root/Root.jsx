import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/hero/Hero";
function Root() {
    return (
        <>
            <header>
                <Header />
            </header>
            <main>
                <h1>MAIN</h1>
            </main>
            <footer>
                <p>Copyright © 2025</p>
            </footer>
        </>
    );
}

export default Root;
