import React, { Component } from 'react';

class Pdf3 extends Component {
    render() {
        return (
            <div style={{position:"absolute", width:"100%", height:"100%"}}>
                <object
                data={require("../docs/resolucion_5111.pdf")}
                type="application/pdf"
                width="100%"
                height="100%">
                    
                </object>
                
            </div>
        );

    }
    
}



export default Pdf3;
