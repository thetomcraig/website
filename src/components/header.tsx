import { Typography } from "@mui/material"
import "./header.css"

function HeaderComponent() {
  return (
    <div>
      <div className="application-header">
        <Typography className="header-text" variant="h4">
          TomCraig.org
        </Typography>
      </div>
    </div>
  )
}

export default HeaderComponent
