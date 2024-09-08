import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import LoginButton from './LoginButton';


function Navbar() {

    const location = useLocation();
    const [page, setPage] = useState('/');
    useEffect(() => {
        switch(location.pathname)
        {
            case '/' : {
                setPage('/');
                document.title = 'CMS | Home'
            }
            break;
            case '/manage' : {
                setPage('/manage');
                document.title = 'CMS | Manage'
            }
            break;
            case '/caseAI' : {
                setPage('/caseAI');
                document.title = 'CMS | CaseAI'
            }
            break;
            case '/help' : {
                setPage('/help');
                document.title = 'CMS | Help'
            }
            break;
            default: setPage('/');
        }
    }, [location.pathname])

  return (
    <nav className='flex text-2xl w-full'>
        <ul className='flex p-5 space-x-20 mx-auto'>
            <li className={`${page == '/' ? 'bg-green-300 rounded-xl p-2' : 'p-2'}`}>
                <Link to='/'>
                    CMS
                </Link>
            </li>
            <li className={`${page == '/manage' ? 'bg-green-300 rounded-xl p-2' : 'p-2'}`}>
                <Link to='/manage'>
                    Manage
                </Link>
            </li>
            <li className={`${page == '/caseAI' ? 'bg-green-300 rounded-xl p-2' : 'p-2'}`}>
                <Link to='/caseAI'>
                    CaseAI
                </Link>
            </li>
            <li className={`${page == '/help' ? 'bg-green-300 rounded-xl p-2' : 'p-2'}`}>
                <Link to='/help'>
                    Help
                </Link>
            </li>
        </ul>
        <div className='p-5'>
            <LoginButton/>
        </div>
    </nav>
  )
}

export default Navbar