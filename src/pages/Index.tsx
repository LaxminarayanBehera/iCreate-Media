import Banner from "../components/Banner";
import CheckScore from "../components/CheckScore";
import Client from "../components/Client";
import GridPart from "../components/GridPart";
import OurOffer from "../components/OurOffer";
import ShowCounter from "../components/ShowCounter";
import VideoPart from "../components/VideoPart";
import About from "../components/About";
import ClientReview from "../components/ClientReview";



const Index = () => {
    return (
        <div className="flex flex-col w-full h-auto min-h-fit sm:text-lnb-white ">
            <Banner />
            {/* <DropDown /> */}
            <GridPart />
            <CheckScore />
            <OurOffer />
            <VideoPart />
            <Client />
            <ShowCounter />
            <About />
            <ClientReview />

        </div>
    );
};

export default Index;
