import Image from 'next/image'
import React from 'react'

function NavBar() {
    return (
        <div>
            <div>
                <Image 
                    src='/logo1.png' 
                    alt='logo'
                    width={120}
                    height={60}
                />
                <div className='flex'>
                    <h2>Home</h2>
                    <h2>History</h2>
                    <h2>Help</h2>
                </div>
            </div>
        </div>
    )
}

export default NavBar