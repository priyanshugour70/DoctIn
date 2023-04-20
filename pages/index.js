import Head from "next/head";
import Image from "next/image";
import Gallery from "./Components/Gallery";
import ConcernCorosole from "./Components/ConcernCorosole";
import ConsultCorosole from "./Components/ConsultCorosole";
import WhyConsult from "./Components/WhyConsult";
import TreatmentLifeCycle from "./Components/TreatmentLifeCycle";
import FAQ from "./Components/FAQ";
import DiscoutBanner from "./Components/DiscountBanner"

export default function Home() {
    return (
        <div className="mx-auto max-w-screen-xl p-2 lg:rounded-full lg:pl-6">
            <Gallery/>
            <ConcernCorosole/>
            <ConsultCorosole/>
            <WhyConsult/>
            <TreatmentLifeCycle/>
            <DiscoutBanner/>
            <FAQ/>
        </div>
    );
}
