import React, { Component } from 'react';

class Pdf4 extends Component {
    render() {
        return (
            <div style={{position:"absolute", width:"100%", height:"100%"}}>
                <object
                data={require("../docs/Resolucion_5300.pdf")}
                type="application/pdf"
                width="100%"
                height="100%">
                    
                </object>
                
            </div>
        );

    }
    
}



export default Pdf4;
