import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'

const Header: React.FC<{}> = (props) => {

  console.log(props)
  
  return (
    <AppBar>
      <Toolbar>
        <Typography>
          Title
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header