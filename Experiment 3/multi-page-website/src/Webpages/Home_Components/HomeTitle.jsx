import PropTypes from 'prop-types';

const HomeTitle = ({ message }) => {

    return (
        <>
            <h1>
                {message}
            </h1>
        </>
    );
};

HomeTitle.propTypes = {
    message: PropTypes.string
}

export default HomeTitle;