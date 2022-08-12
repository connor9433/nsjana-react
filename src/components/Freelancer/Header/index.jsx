/* eslint-disable @next/next/no-img-element */
import headerData from '../../../data/freelancer/header.json';

const Header = () => {
  return (
    <header className="home-freelancer valign bg-img" style={{ backgroundImage: "url('freelancer/img/lines.svg')" }} data-scroll-index="0">
      <div className="container mt-50">
        <div className="row">
          <div className="col-lg-6 valign">
            <div className="cont">
              <h6 className="sub-title">Hello, I am Nitya</h6>
              <h1 className="mb-10">{ headerData.title }</h1>
              <p className="fz-20">{ headerData.brief }</p>
              <a href="https://www.gizdev.com/wp-content/uploads/2022/06/cv-nitya.pdf" className="butn butn-underline mt-20">
                <span className="text">Download C.V</span>
                <span className="underline-gr"></span>
              </a>
            </div>
          </div>
          <div className="col-lg-6 d-flex justify-content-end">
            <div className="img">
              <img src={headerData.picture} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="social">
        <div className="container">
          <div>
            <a href="https://www.linkedin.com/in/nsjana/" className="icon circle-60 fz-14 mr-15"><i className="fab fa-linkedin"></i></a>
            <a href="https://www.facebook.com/connorco00/" className="icon circle-60 fz-14 mr-15"><i className="fab fa-facebook"></i></a>
            <a href="https://www.instagram.com/nsjana_official/" className="icon circle-60 fz-14 mr-15"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>

      <div className="arrow-down">
        <span className="icon pe-7s-angle-down"></span>
      </div>
    </header>
  )
}

export default Header