import React from 'react';
import { BsLinkedin, BsGithub, BsFacebook } from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div>
        <div className="header__socials">
            <a href="https://www.linkedin.com/in/ayoub-zouine-013669199/" target='_blank' rel="noreferrer"> <BsLinkedin /></a>
            <a href="https://github.com/ayoubzouine94" target='_blank' rel="noreferrer"> <BsGithub /></a>
            <a href="https://github.com/ayoubzouine94" target='_blank' rel="noreferrer"> <BsFacebook /></a>

        </div>
    </div>
  )
}

export default HeaderSocials