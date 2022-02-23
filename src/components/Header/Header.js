import React from 'react'
import "./Header.css"

export default function Header({
    title
}) {
    return (
        <div>
            <h1 className="header" data-testid="header-1">{title}</h1>
            <h1 title='cats' className='header'>Cats</h1>
        </div>
    )
}
