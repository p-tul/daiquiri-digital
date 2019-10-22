import React from 'react'

const Container = ({children}) => {
    return (
        <div
            style={{
                margin: `0 auto`,
                maxWidth: 1140,
                padding: ` 1.45rem 1.0875rem`,
            }}
        >
        <main>{children}</main>
      </div>
    )
}

export default Container;