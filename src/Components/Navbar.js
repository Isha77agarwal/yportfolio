import React from "react";
import { Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import '../Styles/Navbar.css'

const Navbar = () => {
    const linkNotActive = "dark:text-gray-300 dark:hover:bg-gray-700 hover:bg-gray-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
    const linkActive = "dark:hover:bg-gray-700 hover:bg-gray-400 hover:text-white dark:text-white text-gray-600 px-3 py-2 rounded-md text-sm font-medium"
    const [isOpen, setIsOpen] = React.useState(false)
    return (
        <nav className="dark:bg-gray-800 lightNav">
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="logo dark:text-gray-300 p-1 flex-shrink-0 border rounded-full">
                        Yst
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <Link to="/" className={linkActive}>HOME</Link>
                            <Link to="/about" className={linkNotActive}>ABOUT</Link>
                            <Link to="/projects" className={linkNotActive}>PROJECTS</Link>
                            <Link to="/testimonials" className={linkNotActive}>TESTIMONIALS</Link>
                            <Link to="/contact" className={linkNotActive}>CONTACT</Link>
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="dark:bg-gray-900 inline-flex items-center justify-center p-2 rounded-md dark:text-gray-400 text-gray-700 hover:text-white hover:bg-gray-800 hover:bg-gray-700 hover:text-gray-400  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                        >
                            {!isOpen ? (
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                
                                >
                                <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        ) : (
                            <svg
                                className="block h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>
            <Transition
                show={isOpen}
                enter="transition ease-out duration-100 transform"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-75 transform"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95">   
                {(ref) => (
                    <div className="md:hidden" id="mobile-menu">
                        <div ref={ref} className="flex flex-col items-center px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <Link to="/" className={linkActive}>HOME</Link>
                            <Link to="/about" className={linkNotActive}>ABOUT</Link>
                            <Link to="/projects" className={linkNotActive}>PROJECTS</Link>
                            <Link to="/testimonials" className={linkNotActive}>TESTIMONIALS</Link>
                            <Link to="/contact" className={linkNotActive}>CONTACT</Link>
                        </div>
                    </div>
                )}
            </Transition>
        </nav>
    )
}

export default Navbar
