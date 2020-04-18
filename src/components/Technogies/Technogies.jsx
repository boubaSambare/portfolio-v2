import React from 'react'
import PropTypes from 'prop-types'

const Technogies = ({stacks}) => {
    const styles = {
        backgroundImage:'linear-gradient( 135deg, #348F50 0%, #56B4D3 100% )',
        color:'#fff',
        fontSize:'1.5rem'
    }
  return (
    <>
      {stacks.length && stacks.map((stack,i) => (
          <span key={i} className="ml-3 px-1" style={styles} >{stack}</span>
      ))}
    </>
  )
}

Technogies.propTypes = {
    stacks: PropTypes.array
}

export default Technogies
