function Car(props){
    // const {brand, color} = props;

    const {carInfo} = props;
    
    const text = `Hi, I'm a ${carInfo.brand} Car, And Car color ${carInfo.color}`
    return (
        <h2>${text}</h2>
    );
}

export default Car;