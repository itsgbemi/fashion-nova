import {Inter} from 'next/font/google'
import './globals.css'
const inter=Inter({subsets:['latin']})
export const metadata={
title:'Fashion Nova - Fashion Online Shopping',
description:'Discover the latest fashion trends at Fashion Nova',
}
export default function RootLayout({children}){
return(
<html lang="en">
<body className={inter.className}>{children}</body>
</html>
)
}
