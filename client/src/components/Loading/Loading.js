import React from "react";
import style from './Loading.module.css'

const Loading = () => { 
  return (
    <div className={style.container}>
      {/* <h1>Loading...</h1>  */}
      <div className={style.Loader}></div>
      <img className={style.loading}
        src="https://www.pngmart.com/files/22/Mr.-Rime-Pokemon-PNG.gif" 
        alt="gif"
      ></img>
    </div>
  );
}

export default Loading;