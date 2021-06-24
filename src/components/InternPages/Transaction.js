import styled from 'styled-components';
import dayjs from "dayjs";

export default function Transaction({t}) {

    const {date, description, value} = t

    const correctedValue = (value / 100);

    const correctedDate = dayjs(date).format('DD/MM');

    console.log(typeof(correctedValue))
    return (
        <Item>
            <Date>{correctedDate}</Date>
            <Description>{description}</Description>
            <Currency negative={correctedValue < 0}>{correctedValue < 0 ? (correctedValue * -1).toFixed(2).replace(".",",") : correctedValue.toFixed(2).replace(".",",")}</Currency>
        </Item>
    )
}

const Item = styled.li`
    display:flex;
    justify-content: space-between;
    padding: 10px;
    font-size: 16px;
`

const Date = styled.span`
    color: #c6c6c6;
`

const Description = styled.span`
    color: #000;
`
const Currency = styled.span`
    color: ${props => props.negative ? `#c70000` : `#03AC00`} ;
`