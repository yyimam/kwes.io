import './style.css';
import kwesforms from 'kwesforms';
import { useDebugValue, useEffect } from 'react';

const Modal = () => {

    useEffect(() => {
        kwesforms.init();

    }, [])
    return (

        <div>
            {/* <form className="kwes-form" action="https://kwes.io/api/foreign/forms/qJGE1LxJ6QEnddbndelS">
                <label htmlFor="name">Your Name</label>
                <input type="text" name="name"  />

                <button type="submit">Submit</button>
            </form> */}
            <form className="kwes-form" action="https://kwes.io/api/foreign/forms/qJGE1LxJ6QEnddbndelS">
            <div className="main-div">
                <div className="header-div">
                    <div className="header-subDiv_1">
                        <div style={{ marginBottom: "-15px" }}>
                            <h1>Mrs Michelle Makeba</h1>
                        </div>
                        <div>
                            <span style={{ color: "gray" }}>at <span style={{ color: "rgb(5, 158, 158)" }}>American University in Cairo</span></span>
                        </div>
                    </div>
                    <div className="header-subDiv_2">
                        <p>X</p>
                    </div>
                </div>


                <div className="body-div">
                    <div className="body-subDiv">
                        <div>
                            <label htmlFor="firstname">First name</label>
                            <input type="text" name="firstname"/>
                        </div>
                        <div>
                            <label htmlFor="lasttname">Last name</label>
                            <input type="text" name="lastname"/>
                        </div>
                    </div>

                    <div className="body-subDiv">
                        <div>
                            <label htmlFor="nationality">Nationality</label>
                            <input type="text" name="nationality"/>
                        </div>
                        <div>
                            <label htmlFor="cityres">City of Residence</label>
                            <input type="text" name="city" />
                        </div>
                    </div>

                    <div className="body-subDiv">
                        <div>
                            <label htmlFor="phone Number">Phone Number</label>
                            <select name="numberCode" id="" value="123">
                                <option value="">+92</option>
                            </select>
                            <input type="number" name="number" />
                        </div>
                    </div>

                    <div className="body-subDiv">
                        <div>
                            <label htmlFor="email">Email address</label>
                            <input type="email" name="email" />
                        </div>
                    </div>
                </div>

                <div className="footer-div">
                    <button type="submit">Send Message Now</button>
                </div>

            </div>
        </form>
        </div>
    );
}

export default Modal;