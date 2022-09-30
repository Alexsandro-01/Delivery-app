import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import myContext from '../context/myContext';
import { logout } from '../services/localStorage';

function Header() {
  const navigate = useNavigate();
  const { userData } = useContext(myContext);

  return (
    <header className="flex justify-between bg-teal-900 h-16">
      <nav className="flex">
        <Link
          to="/"
          className="hover:bg-teal-600 hover:rounded-md m-4 ml-20 px-4 text-white"
          data-testid="customer_products__element-navbar-link-products"
        >
          GERENCIAR USUÁRIOS
        </Link>
      </nav>
      <section className="flex">
        <p
          className="bg-teal-500 py-5 px-4 text-white"
          data-testid="customer_products__element-navbar-user-full-name"
        >
          {userData.name}
        </p>
        <button
          type="button"
          onClick={ () => {
            navigate('/');
            logout();
          } }
          className="bg-red-800 text-white w-20"
          data-testid="customer_products__element-navbar-link-logout"
        >
          Sair
        </button>
      </section>
    </header>
  );
}

export default Header;
