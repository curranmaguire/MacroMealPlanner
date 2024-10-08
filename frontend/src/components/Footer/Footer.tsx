import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <>
    <footer className="container py-5">
      <div className="row">
        <div className="col-12 col-md">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="d-block mb-2"><circle cx="12" cy="12" r="10"></circle><line x1="14.31" y1="8" x2="20.05" y2="17.94"></line><line x1="9.69" y1="8" x2="21.17" y2="8"></line><line x1="7.38" y1="12" x2="13.12" y2="2.06"></line><line x1="9.69" y1="16" x2="3.95" y2="6.06"></line><line x1="14.31" y1="16" x2="2.83" y2="16"></line><line x1="16.62" y1="12" x2="10.88" y2="21.94"></line></svg>
          <small className="d-block mb-3 text-secondary fw-light">© 2017-2018</small>
        </div>
        <div className="col-6 col-md">
          <h5>Features</h5>
          <ul className="list-unstyled text-small text-secondary">
            <li><a className="text-secondary fw-light" href="#">Cool stuff</a></li>
            <li><a className="text-secondary fw-light" href="#">Random feature</a></li>
            <li><a className="text-secondary fw-light" href="#">Team feature</a></li>
            <li><a className="text-secondary fw-light" href="#">Stuff for developers</a></li>
            <li><a className="text-secondary fw-light" href="#">Another one</a></li>
            <li><a className="text-secondary fw-light" href="#">Last time</a></li>
          </ul>
        </div>
        <div className="col-6 col-md">
          <h5>Resources</h5>
          <ul className="list-unstyled text-small text-secondary">
            <li><a className="text-secondary fw-light" href="#">Resource</a></li>
            <li><a className="text-secondary fw-light" href="#">Resource name</a></li>
            <li><a className="text-secondary fw-light" href="#">Another resource</a></li>
            <li><a className="text-secondary fw-light" href="#">Final resource</a></li>
          </ul>
        </div>
        <div className="col-6 col-md">
          <h5>Resources</h5>
          <ul className="list-unstyled text-small text-secondary">
            <li><a className="text-secondary fw-light" href="#">Business</a></li>
            <li><a className="text-secondary fw-light" href="#">Education</a></li>
            <li><a className="text-secondary fw-light" href="#">Government</a></li>
            <li><a className="text-secondary fw-light" href="#">Gaming</a></li>
          </ul>
        </div>
        <div className="col-6 col-md">
          <h5>About</h5>
          <ul className="list-unstyled text-small text-secondary">
            <li><a className="text-secondary fw-light" href="#">Team</a></li>
            <li><a className="text-secondary fw-light" href="#">Locations</a></li>
            <li><a className="text-secondary fw-light" href="#">Privacy</a></li>
            <li><a className="text-secondary fw-light" href="#">Terms</a></li>
          </ul>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer