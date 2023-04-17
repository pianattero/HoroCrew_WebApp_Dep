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
                    backgroundImage: "url(https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTF8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80)",
                    backgroundSize: "cover"
                }}
            />
        )
    }
}
export default Galaxy;