import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'
import { ReactNode } from 'react'
import { mainTheme } from './mainTheme'

export const AppTheme = ({children}:{children: ReactNode}) => {

  return (
    <ThemeProvider theme={mainTheme}>
        <CssBaseline/>
        {children}
    </ThemeProvider>
  )
}