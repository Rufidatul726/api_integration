import React from 'react'
import { Autocomplete } from '@react-google-maps/api'
import { AppBar, Toolbar, Typography, InputBase, Box } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

import useStyles from './styles'

const Header = () => {
  const classes = useStyles()
  return (
    <AppBar position="static">
      <Toolbar className="header">
        <Typography variant="h5" className="header-title">
          Travel Guide
        </Typography>
        <Box display="flex">
          <Typography variant="h6" className="header-title">
            Explore new places
          </Typography>
          <Autocomplete>
            <div className={classes.search}>
              <SearchIcon />
            </div>
            <InputBase placeholder="Search..." classes={{ root: classes.inputRoot, input: classes.inputInput }} />
          </Autocomplete>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header
