import { useContext, useEffect, useState } from "react"
import FeedbackContext from "../context/FeedbackContext";
import RatingSelect from "./RatingSelect";
import Button from "./shared/Button"
import Card from "./shared/Card"


function FeedbackForm() {
    const [text, setText] = useState('');
    const [rating, setRating] = useState(10);
    const [isDisabled, setDisabled] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');

    const { addFeedback, updateFeedback, feedbackEdit } = useContext(FeedbackContext);


    useEffect(() => {
        if (feedbackEdit.edit) {
            setDisabled(false);
            setText(feedbackEdit.item.text);
            setRating(feedbackEdit.item.rating)
        }

    }, [feedbackEdit])

    const handleTextCahnge = (e) => {

        if (text === '') {
            setDisabled(true);
            setErrorMessage(null);
        } else if (text !== '' && text.trim().length <= 10) {
            setDisabled(true);
            setErrorMessage('Review must be at least 10 characters')
        } else {
            setDisabled(false);
            setErrorMessage(null);
        }
        setText(e.target.value)
    }

    const handleAddFeedback = (e) => {
        e.preventDefault();

        if (feedbackEdit.edit) {
            updateFeedback(feedbackEdit.item.id, { text, rating });
        } else {
            addFeedback({ text, rating });
        }

    }



    return (
        <Card>
            <form>
                <h2>How would you rate your service with us!</h2>
                <RatingSelect select={(rating) => setRating(rating)} selected={rating} />
                <div className="input-group">
                    <input onChange={(e) => handleTextCahnge(e)} type="text" value={text} placeholder="Type your review" />
                    <Button type='submit' isDisabled={isDisabled} handleClick={(e) => handleAddFeedback(e)} >
                        Send
                    </Button>
                </div>
                <p>{errorMessage}</p>
            </form>
        </Card>
    )
}

export default FeedbackForm
