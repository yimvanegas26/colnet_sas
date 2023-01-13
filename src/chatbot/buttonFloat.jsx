import { Fab } from '@mui/material'
import React from 'react'
import MapsUgcRoundedIcon from '@mui/icons-material/MapsUgcRounded';

function buttonFloat() {
  return (
    <div>
      <Fab variant="extended" color="primary" aria-label="add" >
      <MapsUgcRoundedIcon sx={{ mr: 1 }} />
        Extended

      </Fab>
    </div>
  )
}

export default buttonFloat
