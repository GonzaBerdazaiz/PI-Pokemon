import style from "./Paginacion.module.css";
import React from 'react';

const Pagination = ({
    pokemonsPerPage,
    totalPokemons, 
    currentPage,
    handlePaginate,
  }) => {
    
  const pageNumbers = Math.ceil(totalPokemons / pokemonsPerPage);

  //Esta funcion nos va a permitir generar los botones del paginado. start y end nos permiten que el valor max del rango no supere 1 o el
  //num total de paginas. 
  const renderPageNumbers = () => {
    const buttons = [];
    const start = Math.max(currentPage - 1, 1);
    const end = Math.min(currentPage + 1, pageNumbers);

    for (let i = start; i <= end; i++) {
      buttons.push(
        <li
          key={i}
          className={`${style.paginationItem} ${currentPage === i ? style.active : ''}`}
          onClick={() => handlePaginate(i)}
        >
          {i}
        </li>
      );
    }

    return buttons;
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      handlePaginate(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < pageNumbers) {
      handlePaginate(currentPage + 1);
    }
  };

  const handleFirstPage = () => {
    if (currentPage !== 1) {
      handlePaginate(1);
    }
  };

  const handleLastPage = () => {
    if (currentPage !== pageNumbers) {
      handlePaginate(pageNumbers);
    }
  };

  return (
    <div className={style.PaginationContainer}>
      <ul className={style.PaginationList}>
        <li
          className={`${style.paginationItemFirst} ${currentPage === 1 ? style.disabled : ''}`} 
          onClick={handleFirstPage}
        >
          First
        </li>
        <li
          className={`${style.paginationItem} ${currentPage === 1 ? style.disabled : ''}`} 
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
        <li
          className={`${style.paginationItem} ${currentPage === pageNumbers ? style.disabled : ''}`}
          onClick={handleLastPage}
        >
          Last
        </li>
      </ul>
    </div>
  );
};

export default Pagination;