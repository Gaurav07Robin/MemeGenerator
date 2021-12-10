import react from "react";
import Cards from "./Cards";
import Aefarr from "./Aefarr";
const Kol = () => {
    return(
        <>
        <div className="container-lg-12">
            <div className="row">
            <div className="col-lg-3">
                <Cards
                imgsrc={Aefarr[0].imgsrc}
                cardtitle={Aefarr[0].cardtitle}
                cardtext = {Aefarr[0].cardtext}
                />
                </div>
                <div className="col-lg-3">
                <Cards/>
                </div>
                <div className="col-lg-3">
                    <Cards/>
                </div>

                <div className="col-lg-3">
                    <Cards/>
                </div>
                
                </div>
           

        </div>
            
        </>
    );
};

export default Kol;