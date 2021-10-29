import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const AsideSuscribe = () => {
  
    return(
        <aside id="aside_suscribe" className="padding_top_box padding_bottom_box">
            <div className="container">
                <div className="row">
                    <form className="col-12 col-md-6 col-lg-4">
                        <label for="email" class="form-label"></label>
                        <input type="email" id="email" name="email" aria-describedby="emailHelp" maxLength="40" placeholder="email@domain.com"/>
                        <button type="submit" class="button_secundary">Submit</button>
                    </form>
                    <p className="col-12 col-md-6 col-lg-8">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque fugit adipisci ipsum accusamus earum aliquam ducimus recusandae veritatis ut ratione debitis, distinctio!
                    </p>
                </div>
            </div>
        </aside>
    );
}

export default AsideSuscribe;