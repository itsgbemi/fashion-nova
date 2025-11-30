import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
title: 'Fashion Nova',
description: 'Fashion Nova Ecommerce',
}

export default function RootLayout({ children }) {
return (
<html lang="en" className="h-full">
<body className={`${inter.className} flex flex-col min-h-screen`}>
{children}
</body>
</html>
)
}
