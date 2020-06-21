import React from 'react'

export const Transac = ({transaction}) => {
    return (
        <li>
            <span>{transaction.text}</span>
    <span>${transaction.amount}</span>
        </li>
    )
}
