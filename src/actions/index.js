export const loginUser = (user) => {
    return user;
};

export const watchPosition = () => (dispatch) => {

    navigator.geolocation.watchPosition(
        (lastPosition) => {
            dispatch(updateUserLocation(lastPosition));
            console.log(lastPosition);
        },
        (error) => {
            console.log(error)
        },
        {enableHighAccuracy: true, timeout: 20000, maximumAge: 0}
    );
};

export const updateUserLocation = (location) => ({
    type: 'UPDATE_POSITION',
    location
});