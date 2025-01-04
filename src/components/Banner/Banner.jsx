import Chef from '../../assets/Images/Chef Photo.jpg'

const Banner = () => {
    return (
        <div>
            <img src={Chef} style={{borderRadius: '20px'}} alt="Chef Background Image" title='Chef Background Image' />
        </div>
    );
};

export default Banner;