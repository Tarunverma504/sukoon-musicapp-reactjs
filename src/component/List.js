import React from "react";

export default class List extends React.Component{
    render(){
        return(
            <tbody>
                        <tr>
                            <td style={{width:"20px"}} ><img src={this.props.image} width={"50px"} height={"45px"}  /></td>
                            <td>{this.props.name}<br/> <p>{this.props.des}</p></td>
                            <td className="hide">2019-12-02</td>
                            <td>{this.props.duration}</td>
                        </tr>
                       
                        </tbody>
        )
    }
}