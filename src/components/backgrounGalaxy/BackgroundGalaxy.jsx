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
                    backgroundImage: "url(https://unblast.com/wp-content/uploads/2021/01/Space-Background-Image-3.jpg)",
                    backgroundSize: "cover"
                }}
            />
        )
    }
}
export default Galaxy;