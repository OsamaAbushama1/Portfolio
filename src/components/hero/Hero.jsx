import style from './HeroStyle.module.css'
import heroImg from '../../assets/osama.jpg'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import twitterLight from '../../assets/twitter-light.svg'
import twiitterDark from '../../assets/twitter-dark.svg'
import githubLight from '../../assets/github-light.svg'
import githubDark from '../../assets/github-dark.svg'
import linkedinLight from '../../assets/linkedin-light.svg'
import linkedinDark from '../../assets/linkedin-dark.svg'
import cv from '../../assets/My_CV.pdf'
import { usetheme } from '../../common/ThemeContext'
function Hero(){
    const {theme , toggleTheme} = usetheme();
    const themeIcon = theme === 'light' ? sun : moon
    const twitterIcon = theme === 'light' ? twitterLight : twiitterDark
    const githubIcon = theme === 'light' ? githubLight : githubDark
    const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark
    return(
        <section id="hero" className={style.container}>
            <div className={style.colorModeContainer}>
                <img className={style.hero} src={heroImg} alt="Profile Picture of Osama" />
                <img className={style.colorMode} src={themeIcon} alt="Color Mode Icon" onClick={toggleTheme}/>
            </div>
            <div className={style.info}>
                <h1>
                    Osama 
                    <br />
                    Abushama
                </h1>
                <h2>Frontend Developer</h2>
                <span>
                    <a href="https://x.com/OsamaAbushama" target='_blank'>
                        <img src={twitterIcon} alt="X Icon" />
                    </a>
                    <a href="https://github.com/OsamaAbushama1" target='_blank'>
                        <img src={githubIcon} alt="Github Icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/osama-abushama-59021921a/" target='_blank'>
                        <img src={linkedinIcon} alt="LinkedIn Icon" />
                    </a>
                </span>
                <p className={style.discription}>
                    With a passion for developing modern React web apps for commercial businesses
                </p>
                <a href={cv} download>
                    <button className='hover'>Resume</button>
                </a>
            </div>
        </section>
    )
}
export default Hero;