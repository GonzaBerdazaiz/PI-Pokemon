import style from "./About.module.css";

const Contacto = () =>{
    return(
        <div className={style.AboutContainer}>
            <section className={style.TituloAboutContainer}>
                    <img src="https://www.pngall.com/wp-content/uploads/4/Pokeball-PNG-Free-Download.png" id="bola9" alt=""></img>
                    <img src="https://www.pngall.com/wp-content/uploads/4/Pokeball-PNG-Free-Download.png" id="bola10" alt=""></img>
                    <img src="https://www.pngall.com/wp-content/uploads/4/Pokeball-PNG-Free-Download.png" id="bola11" alt=""></img>
                    <img src="https://www.pngall.com/wp-content/uploads/4/Pokeball-PNG-Free-Download.png" id="bola12" alt=""></img>
                <h1 className={style.TituloAbout}>Gonzalo Berdazaiz</h1>
                <br></br>
                <span className={style.IntroAbout}>Industrial Engineer studying to be a full stack developer</span>
            </section>
            <section className={style.descriptionAboutContainer}>
                <h2 className={style.AboutMe}>About me...</h2>
                <p className={style.DescriptionAbout}>Hi! My name is Gonzalo Berdazaiz. I'm an Industrial engineer with 6 years of experience in Management Control. Currently studying to be a Full Stack Developer in Henry.</p>
            </section>
            <section className={style.ContactContainer}>
                <h2 className={style.Contact}>Contact</h2>
                <div className={style.LinkedinContainer}>
                    <a href="https://www.linkedin.com/in/gonzalo-berdazaiz"><img src="https://w7.pngwing.com/pngs/690/244/png-transparent-computer-icons-linkedin-logo-insta-miscellaneous-angle-text-thumbnail.png" alt="Linkedin" className={style.Linkedin}></img></a>
                    <div className={style.PhoneContainer}>
                        <img src="https://www.vhv.rs/dpng/d/1-10942_black-telephone-icon-png-transparent-png.png" alt="phone" className={style.ContactPhone}></img>
                        <span className={style.PhoneNumber}>0221-3642526</span>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contacto;