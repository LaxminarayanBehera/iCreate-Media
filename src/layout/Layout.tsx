import { Outlet } from "react-router";
import useSmoothScroll from "../hooks/useSmoothScroll";
import Footer from "../ui/Footer";
import NavBar from "../ui/Navbar";
import ScrollIndicator from "../components/animation/ScrollIndicator";

const Layout = () => {
    useSmoothScroll({ autoInit: true });

    return (
        <>
            <div className="fixed top-0 z-[1600] w-full h-fit">
                <ScrollIndicator />
            </div>

            <header
                style={{ paddingTop: "env(safe-area-inset-top)" }}
                className="w-full bg-transparent min-h-[72px] fixed top-0 left-0 z-[999] flex items-start justify-center"
            >
                <NavBar />
            </header>

            <main className="w-full h-auto relative z-10">
                <Outlet />
            </main>

            <footer>
                <Footer />
            </footer>
        </>
    );
};

export default Layout;
