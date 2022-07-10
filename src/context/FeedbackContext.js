import { createContext, useEffect, useState } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
    const [isLoading, setIsLoadding] = useState(true);

    const [feedback, setFeedback] = useState([]);

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

    useEffect(() => {
        fetchFeedback();
    }, []);

    // Fetch feedback from json server
    const fetchFeedback = async () => {
        const response = await fetch('/feedback?_sort=id&_order=desc');
        const data = await response.json();

        setFeedback(data);

        setIsLoadding(false)
    }

    // Delete feedback
    const deleteFeedback = async (id) => {

        await fetch(`/feedback/${id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const newList = feedback.filter((item) => item.id !== id)
        setFeedback(newList)
    };

    //Add feedback
    const addFeedback = async (newFeedback) => {

        const response = await fetch('/feedback', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newFeedback)
        })

        const data = await response.json();

        setFeedback([data, ...feedback])
    };

    // Update feedback
    const updateFeedback = async (id, updItem) => {
        const response = await fetch(`/feedback/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updItem)
        })

        const data = await response.json();

        setFeedback(feedback.map((item) => item.id === id ? { ...item, ...data } : item));

    };

    // Object being edited
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })
    }

    return <FeedbackContext.Provider value={{
        feedback,
        feedbackEdit,
        isLoading,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext

