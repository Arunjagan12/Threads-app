import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import React from "react";
import '../globals.css';

export const metadata = {
    title: 'Threads',
    description: 'A Next.js 14 Meta Threads Application'
}
const inter = Inter({subsets: ["latin"]})  //rendering the fonts in nextJS
export default function RootLayout(
    { children }: //Props
     {children: React.ReactNode})  //Type of the Props
      {                     
        return (
            //This tag allows us to use clerk functionalities
        <ClerkProvider> 
            <html lang="en">
                <body className={'${inter.className} bg-dark-1'}>
                      {children}
                </body>
            </html>

        </ClerkProvider>
        )

    }