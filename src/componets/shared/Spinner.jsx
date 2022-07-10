import spinner from '../assets/spinner.gif'

function Spinner() {
    return <img src={spinner} alt="Loading ..." style={{
        width: '100px',
        display: 'block',
        margin: '10px auto'
    }} />
}

export default Spinner
