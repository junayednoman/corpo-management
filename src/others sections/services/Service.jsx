const Service = ({service}) => {
    const {image, name, price, short_description} = service;
    return (
        <div>
            <img src={image} alt="" />
        </div>
    );
};

export default Service;