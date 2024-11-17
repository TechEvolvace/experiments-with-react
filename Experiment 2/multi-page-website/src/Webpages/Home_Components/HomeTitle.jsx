import PropTypes from 'prop-types';

const HomeTitle = ({ message }) => {

    return (
        <>
            <h2>
                This is the Home Page for real!
            </h2>

            <p>
                Here is the message: {message}
            </p>
        </>
    );
};

HomeTitle.propTypes = {
    message: PropTypes.string
}

export default HomeTitle;