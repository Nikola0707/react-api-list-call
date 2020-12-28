import React, { useState, useEffect } from 'react'
// import Card from './Card'
import ModalShow from './ModalShow'


const Title = (props) => {

    const [isClicked, setIsClicked] = useState(false)
    const [renderContent, setContent] = useState(null)

    const handleCLick = () => {
        setIsClicked(true)
    }

    useEffect(() => {
        if (isClicked) {
            setContent(<ModalShow title={props.title} body={props.body} />)
        }
    }, [isClicked])

    return (

        <div onClick={handleCLick}>
            {props.title}
            {renderContent}
        </div>
    )
}

export default Title    