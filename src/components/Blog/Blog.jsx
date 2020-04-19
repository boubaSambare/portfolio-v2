import React from 'react'
import notfound from '../../images/notfound.svg'

const Blog = () => {
    const styles = {
        minHeight: '60vh',
        background: `url('${notfound}')`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    }

    return (
        <>
            <div style={styles} >
                <h1>No Blog post yet</h1>
            </div>
        </>
    )
}


export default Blog
