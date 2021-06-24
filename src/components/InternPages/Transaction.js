import styled from 'styled-components';
import dayjs from "dayjs";

export default function Transaction({t}) {

    const {id, date, description, value} = t

    const correctedValue = (value / 100);

    const correctedDate = dayjs(date).format('DD/MM');

    return (
        <Item key={id}>
            <Date>{correctedDate}</Date>
            <Infos>
                <Description>{description}</Description>
                <Currency negative={correctedValue < 0}>{correctedValue < 0 ? (correctedValue * -1).toFixed(2).replace(".",",") : correctedValue.toFixed(2).replace(".",",")}</Currency>
            </Infos>
        </Item>
    )
}

const Item = styled.li`
    display:flex;
    justify-content: space-between;
    padding: 10px;
    font-size: 16px;
    text-overflow: ellipsis;
`

const Date = styled.span`
    color: #c6c6c6;
    width: 20%;
`

const Infos = styled.div`
    display: flex;
    justify-content: space-between;
    width: 78%;
`

const Description = styled.span`
    color: #000;
`
const Currency = styled.span`
    color: ${props => props.negative ? `#c70000` : `#03AC00`} ;
`