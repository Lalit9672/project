import React from "react";
import "./Contact.css";
// import { GoogleApiWrapper } from "google-map-react"
// import { Wrapper, Status } from "@googlemaps/react-wrapper";

const Contact = () => {
    return (
        <div className="body">
            <article className="col-md">
            <div className="contact-body-page">
            <div className="main-content-page">
            <header>
            <h1 className="contact-title">Contact Us</h1>
            </header>
            <div className="entry-content">
            <figure className="block-table">
            <table>
            <tbody>
            <tr>
            <td>
            <strong>
            <span className="name-head">
            Editor, Journal of Indian Research</span>
            </strong>
            <br />
            <strong>Office Address: </strong>
            Sector-4C, vasundhara
            <br/>
            Delhi-Ghaziabad Link Road, Ghaziabad-201012
            <br/>
            Phone: 01220-4758300
            <br/>
            Email: jir@mewaruniversity.org
            <br/>
            Website: https://jir.mewaruniversity.org
            </td>
            <td>
            <strong>
            <span className="name-head">
            Contact Number of Mewar University
            </span>
            </strong>
            <br/>
            Phone: 01471-285451/52
            <br/>
            Fax: 01471-285451/52
            <br/>
            Toll-Free No.: 
            <strong>180030707373</strong>
            <br/>
            </td>
            </tr>
            <tr>
            <td>
            <strong>
            <span className="name-head">
            Mr. Shashank Kumar Dwivedi
            </span>
            </strong>
            <br/>
            Director (Publication)
            <br/>
            Journal of Indian Research (JIR)
            <br/>
            Mewar University, NH-79, Gangrar, Chittorgarh
            <br/>
            Rajasthan, INDIA
            <br/>
            Mobile: 
            <strong>+91 900 143 3127</strong>
            <br/>
            Toll-Free No,: 
            <strong>180030707373</strong>
            </td>
            <td>
            <strong>
            <span className="name-head">
            Mr. Sayad Nasir Hasan
            </span>
            </strong>
            <br />
            Coordinator
            <br />
            Journal of Indian Research (JIR)
            <br />
            Mewar University, NH-79, Gangrar, Chittorgarh
            <br />
            Rajasthan, INDIA
            <br />
            Mobile: +91 982 941 5959
            <br/>
            Email : 
            <strong>sayednasir@mewaruniversity.co.in</strong>
            </td>
            </tr>
            </tbody>    
            </table>
            </figure>
            <h1 class="srm_gmap_heading_1 ">Mewar University Chittorgarh</h1>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/F18Rxw6ftcM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            {/* <map>
                google ={this.props.google}
                style = {{width:"20%", height:"20%"}}
                zoom = {10}
                initialCenter = {
                    {
                        lat: 24.585445,
                        lng : 73.712479
                    }
                }
            </map> */}
            </div>
            </div>
            </div>
            </article>
            </div>
        )
}

// export default GoogleApiWrapper(
//     {
//         apikey : "AIzaSyAeWUvA_sXWUL6ps7QIjF55-BZHG--qg8w"
//     }
// )(Contact)

// export default Contact({
//     apikey : "AIzaSyAeWUvA_sXWUL6ps7QIjF55-BZHG--qg8w"
// });

export default Contact;

