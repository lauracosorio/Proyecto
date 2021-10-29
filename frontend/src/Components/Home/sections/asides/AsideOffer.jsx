import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const AsideOffer = () => {
    return(
        <aside id="aside_offer" className="padding_top_box padding_bottom_box">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-6">
                        <h2>Consectetur adipisicing elit</h2>
                        <p>Culpa cumque impedit ea molestiae voluptates commodi magnam rerum facilis eius voluptatibus at harum, architecto aliquam dicta sit</p>
                    </div>
                    <div className="col-12 col-sm-6">
                        <a href="/" className="button">Ver Oferta</a>
                    </div>
                </div>
            </div>
        </aside>
    );
}

export default AsideOffer