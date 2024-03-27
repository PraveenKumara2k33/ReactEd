import Carousel from 'react-bootstrap/Carousel';

const Slidingc = () => {
    const logoUrl1='images/j1.jpg';
    const logoUrl2='images/j2.jpg';
    const logoUrl3='images/j3.jpg';
  return (
    <Carousel data-bs-theme="dark" id='Home'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={logoUrl1}
          height="400"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={logoUrl2}
          height="400"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={logoUrl3}
          height="400"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Slidingc