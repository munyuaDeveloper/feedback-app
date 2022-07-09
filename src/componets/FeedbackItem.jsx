import Card from "./shared/Card"
import PropTypes from 'prop-types'

import { FaTimes, FaEdit } from 'react-icons/fa'
import { useContext } from "react"
import FeedbackContext from "../context/FeedbackContext"

function FeedbackItem({ item }) {

    const { deleteFeedback, editFeedback } = useContext(FeedbackContext);

    return (
        <Card >
            <div className='num-display'>{item.rating}</div>
            <button className="close" onClick={() => deleteFeedback(item.id)}><FaTimes color="puple" /></button>
            <button className="edit" ><FaEdit color="puple" onClick={() => editFeedback(item)} /></button>
            <div className='text-display'>{item.text}</div>
        </Card>
    )
}

FeedbackItem.prototype = {
    item: PropTypes.object.isRequired
}

export default FeedbackItem
