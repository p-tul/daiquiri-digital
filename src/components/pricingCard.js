import React from 'react'
import styled from 'styled-components'

// STYLED COMPONENTS
const Card = styled.ul`
    margin: 0 0.5rem;
    text-align: center;
    border: 1px solid rgba(0, 0, 0, 0.125);
    border-radius: 0.25rem;
    flex-grow: 1;
    li{
        list-style: none;
        margin: 0;
        padding: 1rem;
    }
    li:nth-last-of-type(even) {
        background: #e9e9e9;
    }
    .sub-header {
        font-size: 0.7rem;
    }
    .currency {
        font-size: 0.9rem;
        vertical-align: top;
        opacity: 0.75;
        line-height: 4rem;
    }
    .price {
        font-size: 4rem;
        line-height: 4rem;
    }
    -webkit-box-shadow: 0px 7px 11px 4px rgba(189,189,189,0.3);
    -moz-box-shadow: 0px 7px 11px 4px rgba(189,189,189,0.3);
    box-shadow: 0px 7px 11px 4px rgba(189,189,189,0.3);

    @media (max-width: 1140px) {
        li {
            padding: 1rem 0.5rem;
        }
    }
`

const pricingCard = ({children, title, price}) => {
    return (
        <Card>
            <li>
                <h2>{title}</h2>
                <span className="sub-header">Starting from</span>
                <div>
                    <span className="currency">$</span>
                    <span className="price">{price}</span>
                </div>
            </li>
            {children}
        </Card>
    )
}

export default pricingCard