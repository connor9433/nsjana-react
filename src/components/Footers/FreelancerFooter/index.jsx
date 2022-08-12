/* eslint-disable @next/next/no-img-element */

const Footer = () => {
  return (
    <footer className="bg-gray">
      <div className="container">
        <div className="sub-f">
          <div className="row">
            <div className="col-md-3">
              <div className="logo">
                <a href="#0">
                  <img src="img/logo-dark.png" alt="" />
                </a>
              </div>
            </div>
            <div className="col-md-9">
              <div className="copyrights d-flex justify-content-end">
                <p className="fz-13">© 2022 <span className="underline"></span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer