import style from "./Form.module.css";

const Form = () =>{
    return(
        <div className={style.PageContainer}>
            <h1 className={style.Title}> Hola! En esta seccion podremos crear un nuevo Pokemon. Por favor, ingresa los datos requeridos en la Pokedex</h1>
            <img src="https://www.safarizone.sqwordle.io/static/media/prof-oak-3.a83cb5bb65a9b3d1b537.png" alt=""></img>
            <img src="https://www.pngall.com/wp-content/uploads/4/Pokeball-PNG-Free-Download.png" id="bola1" alt=""></img>
            <img src="https://www.pngall.com/wp-content/uploads/4/Pokeball-PNG-Free-Download.png" id="bola2" alt=""></img>
            <img src="https://www.pngall.com/wp-content/uploads/4/Pokeball-PNG-Free-Download.png" id="bola3" alt=""></img>
            <img src="https://www.pngall.com/wp-content/uploads/4/Pokeball-PNG-Free-Download.png" id="bola4" alt=""></img>
            <form className={style.Container}>
                <div className={style.NameTextContainer}>
                    <label htmlFor="name">Name</label>
                    <input 
                        type="text"
                        name="name"
                        size="25"
                        autoComplete="off"></input>
                </div>
                <div className={style.StatsContainer}>
                    <div>
                        <label htmlFor="hp">Hp</label>
                        <input 
                            type="integer"
                            min="1"
                            max="255"
                            name="hp"
                            size="25"
                        />
                    </div>
                    <div>
                        <label htmlFor="attack">Attack</label>
                        <input 
                            type="integer"
                            min="1"
                            max="190"
                            name="attack"
                            size="25"
                        />
                    </div>
                    <div>
                        <label htmlFor="defense">Defense</label>
                        <input 
                            type="integer"
                            min="1"
                            max="250"
                            name="defense"
                            size="25"
                        />
                    </div>
                    <div>
                        <label htmlFor="speed">Speed</label>
                        <input 
                            type="integer"
                            min="1"
                            max="200"
                            name="speed"
                            size="25"
                        />
                    </div>
                    <div>
                        <label htmlFor="height">Height</label>
                        <input 
                            type="integer"
                            min="1"
                            max="200"
                            name="height"
                            size="25"
                        />
                    </div>
                    <div>
                        <label htmlFor="weight">Weight</label>
                        <input 
                            type="integer"
                            min="1"
                            max="9999"
                            name="weight"
                            size="25"
                        />
                    </div>
                </div>
                <div className={style.ImageTextContainer}>
                        <label htmlFor="imagen">Image</label>
                        <input 
                            type="text"
                            name="image"
                            size="25"
                            placeholder="Coloque una url"
                            autoComplete="off"></input>
                    </div>
                <div className={style.Type}>
                        <label htmlFor="type">Type</label>
                        <input 
                            type="number"
                            min="1"
                            max=""
                            name="type"
                            size="25"
                        />
                    </div>
                <button type="submit">CREAR</button>
            </form>
        </div>
    )
}

export default Form;