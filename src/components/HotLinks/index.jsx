import React from 'react'
import { BiPhone } from 'react-icons/bi'

const HotLinks = () => {
  return (
    <div className="navbar bg-base px-20">
        <div className="navbar-start">
            <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
            </div>
            <ul
                tabIndex={0}
                className="menu bg-warning menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                <li><a>Item 1</a></li>
                <li>
                <a>Parent</a>
                <ul className="p-2">
                    <li><a>Submenu 1</a></li>
                    <li><a>Submenu 2</a></li>
                </ul>
                </li>
                <li><a>Item 3</a></li>
            </ul>
            </div>
            <button className="btn btn-ghost text-grey-200">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                Shop By Category
            </button>
        </div>
        <div className="navbar-center hidden lg:flex text-grey-200">
            <ul className="menu menu-horizontal px-1">
            <li><a>Home</a></li>
            <li>
                <details>
                <summary>Shop</summary>
                <ul className="p-2 text-grey-200">
                    <li><a>Submenu 1</a></li>
                    <li><a>Submenu 2</a></li>
                </ul>
                </details>
            </li>
            <li>
                <details>
                <summary>Blog</summary>
                <ul className="p-2 text-grey-200">
                    <li><a>Submenu 1</a></li>
                    <li><a>Submenu 2</a></li>
                </ul>
                </details>
            </li>
            <li><a>Contact</a></li>
            </ul>
        </div>
        <div className="navbar-end text-grey-200 flex space-x-2">
            <BiPhone />
            <a className="link flex align-middle">
                +91 00 00 000 000
            </a>
        </div>
        </div>
  )
}

export default HotLinks