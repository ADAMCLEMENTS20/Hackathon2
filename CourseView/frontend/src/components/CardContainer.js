import * as React from "react"
import Card from './Card.js'

function CardContainer(props) {
    
    console.log(props.data);
    if (props.data.length < 2)
    {
        var backEnd = [props.data[0], [[''], [''], [''], [''], [''], [''], [''], [''], [''], [''], [''], [''], [''], ['']], [[''], [''], [''], [''], [''], [''], [''], [''], [''], [''], [''], [''], [''], ['']]];
    }
    else if (props.data.length < 3)
    {
        var backEnd = [props.data[0], props.data[1],[[''], [''], [''], [''], [''], [''], [''], [''], [''], [''], [''], [''], [''], ['']]];
    }
    else
        var backEnd = props.data

    var prof1 = backEnd[0];
    var prof2 = backEnd[1];
    var prof3 = backEnd[2];
    return (
        <div>
            <Card name = {prof1[0]} body = {prof1[2,3,4,5,6,7,8,9,10]}></Card>
            <Card name = {prof2[0]} body = {prof2[2,3,4,5,6,7,8,9,10]}></Card>
            <Card name = {prof3[0]} body = {prof3[2,3,4,5,6,7,8,9,10]}></Card>
        </div>
    )
}

export default CardContainer