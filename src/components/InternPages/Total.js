import styled from 'styled-components';

export default function Total({transactions}) {
    let total = 0;
    const value = transactions.map(t => t.value);

    for (let i = 0; i < value.length; i++ ) {
        total += value[i];
    }

    total = (total / 100);

    return(
        <Balance>
            <Title>SALDO</Title>
            <TotalValue negative={total < 0}>
                {total < 0 ? (total * -1).toFixed(2).replace(".",",") : (total).toFixed(2).replace(".",",")}
            </TotalValue>
        </Balance>

    )
}

const Balance = styled.p`
    position: absolute;
    display: flex;
    bottom: 10px;
    left: 10px;
    width: calc(100% - 20px);
    padding: 10px;
    justify-content: space-between;
    line-height: 20px;
    font-size: 17px;
`

const Title = styled.span`
        color: #000;
        font-weight: bold;
`

const TotalValue = styled.span`
    color: ${props => props.negative ? `#c70000` : `#03AC00`};
`