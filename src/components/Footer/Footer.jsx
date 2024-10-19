import style from './FooterStyle.module.css'

function Footer(){
    return(
        <section id='footer' className={style.container}>
            <p>&copy; 2024 Osama Abushama. <br />
            All right reserved</p>
        </section>
    )   
}
export default Footer;