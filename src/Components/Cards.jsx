

import { Component } from "react";

export default class Cards extends Component{
    render(){
        return(
            <>
           {/* <div  
           style={{
            display:"flex",
            flexWrap:"wrap",
            justifyContent:"space-around"
           }}> */}
           <div id="sec6"  key={this.props.id}>
             <div id="sec61">
                <img src={this.props.bsrc} alt={this.props.balt}></img>
                <div id="text">
                    <h1><b>{this.props.bHead}</b></h1>
                    <p>{this.props.bcon}</p>
                    <h5 style={{textDecoration:"underline"}}>"{this.props.bterm}</h5>
                    <button>{this.props.bbtn}</button>
                </div>
             </div>
             </div>
           {/* </div> */}

            </>
        )
    }
}
