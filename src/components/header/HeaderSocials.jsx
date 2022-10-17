import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithubSquare} from 'react-icons/fa'
import {SiCodechef} from 'react-icons/si'
import{SiCodeforces} from 'react-icons/si'
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/akshay-jadhav-15466a206/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/akshayjadhav7670" target="_blank"><FaGithubSquare/></a>
        <a href="https://www.codechef.com/users/ajstyles_7670"><SiCodechef/></a>
        <a href="https://codeforces.com/profile/akshayjadhav7670" target="_blank"><SiCodeforces/></a>
    </div>
  )
}

export default HeaderSocials