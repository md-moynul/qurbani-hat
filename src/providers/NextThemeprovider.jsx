"use client";

import { ThemeProvider } from "next-themes";

export const NextThemeprovider = ({ children }) => {
    return (
        <ThemeProvider attribute="class" defaultTheme="light">
            {children}
        </ThemeProvider>
    )
};

export default NextThemeprovider;