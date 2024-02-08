import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faEnvelope, faHeart, faMagnifyingGlass, faPhone, faUser } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <main>
      <header>
        <div>
          <div>
            <FontAwesomeIcon icon={faPhone} />
            <p>(225) 555-0118</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faEnvelope} />
            <p>michelle.rivera@example.com</p>
          </div>
          <div>
            <p>Follow Us and get a chance to win 80% off</p>
          </div>
        </div>
        <div>
          <p>Follow Us</p>
          <p>:</p>
          <a href="https://www.instagram.com/" target="_blank">
            <FontAwesomeIcon icon={faInstagram} />
          </a>

          <a href="https://www.youtube.com/" target="_blank">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
          <a href="https://www.facebook.com/" target="_blank">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://twitter.com" target="_blank">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div>
      </header>
      <nav>
        <div>
          <h3>BrandName</h3>
        </div>
        <div>
          <div>
            <Link to="/">Home</Link>
          </div>
          <div>
            <Link to="/shop">Shop</Link>
          </div>
          <div>
            <Link to="/about">About</Link>
          </div>
          <div>
            <Link to="/blog">Blog</Link>
          </div>
          <div>
            <Link to="/contact">Contact</Link>
          </div>
          <div>
            <Link to="/pages">Pages</Link>
          </div>
        </div>

        <div>
          <div>
            <Link to="/profile">
              <FontAwesomeIcon icon={faUser} />
            </Link>
            <Link to="/sign-ip">Login</Link>
            <p>/</p>
            <Link to="/sign-up">Register</Link>
          </div>
          <div>
            <Link to="/search">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </Link>
            <div>
              <Link to="/basket">
                <FontAwesomeIcon icon={faCartShopping} />
              </Link>
              <p>1</p>
            </div>
            <div>
              <Link to="/favorites">
                <FontAwesomeIcon icon={faHeart} />
              </Link>
              <p>1</p>
            </div>
          </div>
        </div>
      </nav>
    </main>
  );
}
