import { Typography, Link } from "@mui/material"
import "./content.css"

function ContentComponent() {
  return (
    <div className="content-container">
      <div className="bio-container">
        <Typography className="bio-text" variant="h6">
          My name is Tom Craig, and I build things.
        </Typography>
        <Typography className="bio-text" variant="h6">
          - I do{" "}
          <Link href="https://www.upwork.com/freelancers/~017287fbe859ac7cbc?viewMode=1">
            freelance web development.
          </Link>
        </Typography>
        <Typography className="bio-text" variant="h6">
          - I build and operate 3D printers.
        </Typography>
        <Typography className="bio-text" variant="h6">
          - I have held front and back end software engineering roles at:
        </Typography>
        <Typography className="bio-text" variant="h6">
          <span>&emsp;&emsp;&emsp;&emsp;</span>
          <Link href="https://www.pandora.com/">- Pandora Media</Link>
        </Typography>
        <Typography className="bio-text" variant="h6">
          <span>&emsp;&emsp;&emsp;&emsp;</span>
          <Link href="https://welkinhealth.com/">- Welkin Health</Link>
        </Typography>
        <Typography className="bio-text" variant="h6">
          <span>&emsp;&emsp;&emsp;&emsp;</span>
          <Link href="https://www.ceresimaging.net/">- Ceres Imaging</Link>
        </Typography>
        <Typography className="bio-text" variant="h6">
          <span>&emsp;&emsp;&emsp;&emsp;</span>
          <Link href="https://www.coread.io/">- Coread AI</Link>
        </Typography>
        <Typography className="bio-text" variant="h6">
          - I worked as a Research Fellow at:{" "}
        </Typography>
        <Typography className="bio-text" variant="h6">
          <span>&emsp;&emsp;&emsp;&emsp;</span>
          <Link href="https://www.jpl.nasa.gov/">
            NASA's Jet Propulsion Laboratory
          </Link>{" "}
          for the
          <Link href="https://www.jpl.nasa.gov/missions/juno">
            {" "}
            Juno Mission.
          </Link>
        </Typography>
        <Typography className="bio-text" variant="h6">
          - I make software in my free time, too.{" "}
          <Link href="https://github.com/thetomcraig/chit">
            Here's one project.
          </Link>
        </Typography>
      </div>
    </div>
  )
}

export default ContentComponent
