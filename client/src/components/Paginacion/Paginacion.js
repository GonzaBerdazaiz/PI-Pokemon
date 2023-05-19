import style from "./Paginacion.module.css";
import React from 'react';

const Pagination = ({
    pokemonsPerPage,
    totalPokemons,
    currentPage,
    handlePaginate,
  }) => {
    const pageNumbers = Math.ceil(totalPokemons / pokemonsPerPage);

  const renderPageNumbers = () => {    //genera los elementos de lista (li) que representan los num de pag en el paginado
    const pages = [];

    for (let i = 1; i <= pageNumbers; i++) {    //se itera hasta pageNumbers que tiene el num total de paginas
      pages.push(
        <li
          key={i}   //cuando iteramos, primero generamos los num de las paginas
          className={`${style.paginationItem} ${currentPage === i ? style.active : ''}`}
          onClick={() => handlePaginate(i)} //fn q ejecuta cuando hacemos click en la casilla y ejecuta handlePaginate con el i correspondiente lo que activa la logica pa mostrar los pokemon de esa pag
        >
          {i}
        </li>
      );
    }

    return pages;
  };

  const handlePrevious = () => {    //fn q se activa cuando apretamos PREV para verificar si la pag es mayor a 1, si lo es ejecuta handlePaginate
    if (currentPage > 1) {
      handlePaginate(currentPage - 1);
    }
  };

  const handleNext = () => {    //ambas funciones permiten navegar hacia adelante y hacia atras en el paginado 
    if (currentPage < pageNumbers) {
      handlePaginate(currentPage + 1);
    }
  };

  return (
    <div className={style.PaginationContainer}>
      <ul className={style.PaginationList}>
        <li
          className={`${style.paginationItem} ${currentPage === 1 ? style.disabled : ''}`} //para aplicar el estilo dependiendo si es active o no
          onClick={handlePrevious}
        >
          Prev
        </li>
        {renderPageNumbers()}
        <li
          className={`${style.paginationItem} ${currentPage === pageNumbers ? style.disabled : ''}`}
          onClick={handleNext}
        >
          Next
        </li>
      </ul>
    </div>
  );
};

export default Pagination;