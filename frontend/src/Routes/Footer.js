import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <footer class="footer mt-auto py-3 bg-light">
          <div class="container">
            <div class="row">
              <div class="col-md-6 text-center text-md-start">
                <p>© 2024 Your Website</p>
              </div>
              <div class="col-md-6 text-center text-md-end">
                <ul class="list-inline">
                  <li class="list-inline-item">
                    <Link to="#">Home</Link>
                  </li>
                  <li class="list-inline-item">
                    <Link to="#">About</Link>
                  </li>
                  <li class="list-inline-item">
                    <Link to="#">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
    </>
  );
}

export default Footer;
