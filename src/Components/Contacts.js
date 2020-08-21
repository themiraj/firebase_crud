import React from 'react';
import ContactFrom from"./ContactForm"

const Contacts  = () => {
    return (
        <>
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4">Strudent from</h1>
            </div>
        </div>
        <div className="row">
            <div className="col-md-5">
                <ContactFrom />
            </div>
            <div className="col-md-7">
                <div>List of contacts</div>
            </div>
        </div>
        </>
     )
}

export default Contacts;