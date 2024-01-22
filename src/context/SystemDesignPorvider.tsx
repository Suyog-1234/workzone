"use client";

import { FC, ReactNode } from 'react'
import { ThemeProvider } from 'next-themes'

interface SystemDesignPorviderProps {
    children: ReactNode
}

const SystemDesignPorvider: FC<SystemDesignPorviderProps> = ({ children }) => {
    return (
        <ThemeProvider attribute='class' defaultTheme='light' themes={["light", "dark"]}>
            {children}
        </ThemeProvider>
    )
}

export default SystemDesignPorvider