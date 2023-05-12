import style from "./Form.module.css";

const Form = () =>{
    return(
        <form className={style.Container}>
            <h1 className={style.Title}> Crea tu Pokemon</h1>
            <div>
                <label htmlFor="name">Name</label>
                <input 
                    type="text"
                    name="name"
                    size="25"
                    autoComplete="off"></input>
            </div>
            <div>
                <label htmlFor="imagen">Image</label>
                <input 
                    type="text"
                    name="image"
                    size="25"
                    placeholder="Coloque una url"
                    autoComplete="off"></input>
            </div>
            <div>
                <label htmlFor="hp">Hp</label>
                <input 
                    type="text"
                    name="hp"
                    size="25"
                />
            </div>
            <div>
                <label htmlFor="attack">Attack</label>
                <input 
                    type="text"
                    name="attack"
                    size="25"
                />
            </div>
            <div>
                <label htmlFor="defense">Defense</label>
                <input 
                    type="text"
                    name="defense"
                    size="25"
                />
            </div>
            <div>
                <label htmlFor="speed">Speed</label>
                <input 
                    type="text"
                    name="speed"
                    size="25"
                />
            </div>
            <div>
                <label htmlFor="height">Height</label>
                <input 
                    type="text"
                    name="height"
                    size="25"
                />
            </div>
            <div>
                <label htmlFor="weight">Weight</label>
                <input 
                    type="text"
                    name="weight"
                    size="25"
                />
            </div>
            <button type="submit">CREAR</button>
        </form>
    )
}

export default Form;