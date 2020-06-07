import React from 'react'

const Container = ({children}) => {
    return (
        <div
            style={{
                margin: `0 auto`,
                maxWidth: 1240,
                padding: ` 1.45rem 1.0875rem`,
            }}
        >
        {children}
      </div>
    )
}

export default Container;