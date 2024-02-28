import React from 'react'

const Text = ({ name, occupation }) => {
    return (
        <div>
            <h3 className='font-sans text-center  text-2xl'>{name}</h3>
            <h2 className='font-mono font-bold text-center text-2xl'>{occupation}</h2>


        </div>
    )
}

export default Text