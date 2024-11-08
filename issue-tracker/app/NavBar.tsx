// // import React from 'react';
// // import Link from 'next/link'
// // import { IoIosBug } from "react-icons/io";
// // const NavBar = () => {
// //     const links = [
// //         {label: 'Dashboard', href: '/'},
// //         {label: 'Issues', href: '/issues'},
// //     ]
// //   return (
// //     <nav className='flex space-x-6 border-b mb-5 px-5 h-14 items-center'>
// //       <a href="/"><IoIosBug/></a>
// //       <ul className='flex space-x-6'>
// //         {links.map(link => <
// //             Link key={link.href} 
// //             className='text-zinc-500 hover:text-zinc-800 transition-colors')}
// //         // <li><a className='text-zinc-500 hover:text-zinc-800 transition-colors' href="/">Dashboard</a></li>
// //         // <li><a href="/issues">Issues</a></li>
// //       </ul>
// //     </nav>
// //   );
// // };

// // export default NavBar;

// 'use client';

// import React from 'react';
// import Link from 'next/link';
// import { IoIosBug } from "react-icons/io";
// import {usePathname} from 'next/navigation'
// import classnames from 'classnames';
// const NavBar = () => {
//     const currentPath = usePathname();
//     // console.log(currentPath);
//     const links = [
//         { label: 'Dashboard', href: '/' },
//         { label: 'Issues', href: '/issues' },
//     ];

//     return (
//         <nav className='flex space-x-6 border-b mb-5 px-5 h-14 items-center'>
//             <Link href="/"><IoIosBug /></Link>
//             <ul className='flex space-x-6'>
//                 {links.map((link) => (
//                     <li key={link.href}>
//                         <Link href={link.href} 
//                         //className={`${link.href === currentPath ? 'text-zinc-600' : 'text-zinc-400'} hover:text-zinc-800 transition-colors`}>
//                         className = {classnames({
//                             'text-zinc-600': link.href===currentPath,
//                             'text-zinc-400': link.href !==currentPath,
//                             'hover: text-zinc-800 transition-colors': true
//                         })}
//                             {link.label}
//                         </Link>
//                     </li>
//                 ))}
//             </ul>
//         </nav>
//     );
// };

// export default NavBar;

'use client';

import React from 'react';
import Link from 'next/link';
import { IoIosBug } from "react-icons/io";
import { usePathname } from 'next/navigation';
import classnames from 'classnames';

const NavBar = () => {
    const currentPath = usePathname();

    const links = [
        { label: 'Dashboard', href: '/' },
        { label: 'Issues', href: '/issues' },
    ];

    return (
        <nav className='flex space-x-6 border-b mb-5 px-5 h-14 items-center'>
            <Link href="/"><IoIosBug /></Link>
            <ul className='flex space-x-6'>
                {links.map((link) => (
                    <li key={link.href}>
                        <Link 
                            href={link.href} 
                            className={classnames({
                                'text-zinc-600': link.href === currentPath,
                                'text-zinc-400': link.href !== currentPath,
                                'hover:text-zinc-800 transition-colors': true
                            })}
                        >
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default NavBar;

