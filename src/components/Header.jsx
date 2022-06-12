
import CoverImage from '../images/cover-image.jpg';
import ProfileImage from '../images/profile-image.jpg';
import { FaGithub } from 'react-icons/fa';
import { Navbar } from './atoms/Navbar';
import { Center } from '@chakra-ui/react';

export const Header = () => {
  return (
    <>
      <Navbar />
      <header className="main-cover" style={{backgroundImage: `url(${CoverImage})`}}>
        {/* overlayはカバー画像の上に透過して表示される背景要素です */}
        <div className="overlay"></div>
        <div className="container">
          <div className="display-table">
            <div className="display-table-contents">
              <div className="profile-thumb" style={{backgroundImage: `url(${ProfileImage})`}}></div>
              <div className="title-text profile" >profile</div>

              <h1 className="title-text">港 大起</h1>
              <h3 className="title-text">Engineer</h3>
              <ul className="social-icons">
                <li className="icon-link">
                  <a href="https://github.com/">
                    <FaGithub color="white" size="2rem" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
