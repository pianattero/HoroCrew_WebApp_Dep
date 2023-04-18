import React, { Component } from 'react'


import StarfieldAnimation from 'react-starfield-animation'

class Galaxy extends Component {
    render() {
        return (
            <StarfieldAnimation
                style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    backgroundImage: "url(https://c1.wallpaperflare.com/preview/766/728/849/black-blue-gray-night.jpg)",
                    backgroundSize: "cover"
                }}
            />
        )
    }
}
export default Galaxy;