import React, { useRef } from "react";
import "./Contact.css";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
const Contact = ({ google, onMarkerClick }) => {
  return (
    <>
      <div className="contact-main">
        <div className="contact">
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
                                Editor, Journal of Indian Research
                              </span>
                            </strong>
                            <br />
                            <strong>Office Address: </strong>
                            Sector-4C, vasundhara
                            <br />
                            Delhi-Ghaziabad Link Road, Ghaziabad-201012
                            <br />
                            Phone: 01220-4758300
                            <br />
                            Email: jir@mewaruniversity.org
                            <br />
                            Website: https://jir.mewaruniversity.org
                          </td>
                          <td>
                            <strong>
                              <span className="name-head">
                                Contact Number of Aravali college
                              </span>
                            </strong>
                            <br />
                            Phone: 9513105532
                            <br />
                            Fax: 01471-285451/52
                            <br />
                            Toll-Free No.:
                            <strong>180030707373</strong>
                            <br />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <strong>
                              <span className="name-head">
                                Mr. Hemant Dhabhai
                              </span>
                            </strong>
                            <br />
                            Director
                            <br />
                            Journal of Indian Research (JIR)
                            <br />
                            Aravali Institue of technical studies
                            <br />
                            Rajasthan, INDIA
                            <br />
                            Mobile:
                            <strong>+91 900 143 3127</strong>
                            <br />
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
                            <br />
                            Email :
                            <strong>sayednasir@mewaruniversity.co.in</strong>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </figure>
                  <h1 class="srm_gmap_heading_1 ">
                    Aravali Institute of Technical Studies
                  </h1>
                  <div className="google-map">
                    <Map
                      google={google}
                      zoom={14}
                      style={{ width: "100%", height: "400px" }}
                      center={{
                        lat: 24.524552,
                        lng: 73.770393,
                      }}
                      initialCenter={{
                        lat: 24.524552,
                        lng: 73.770393,
                      }}
                    >
                      <Marker
                        onClick={onMarkerClick}
                        title="Aravali Institute of Technical Studies"
                        name={"Udaipur"}
                      />
                    </Map>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyDd9NTutCWp3LlsU8Mw7sRrs_vJUfFzqP0",
})(Contact);
