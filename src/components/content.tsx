import { Grid, Typography, Link } from "@mui/material"
import { createTheme, Theme, useTheme, ThemeProvider } from "@mui/material/styles"
import "./content.css"

function ContentComponent() {
  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920,
      },
    },
    // margin: {
    //   xs: "20px",
    //   sm: "30px",
    //   md: "40px",
    //   lg: "50px",
    //   xl: "60px",
    // },
  })

  const styles = (theme: Theme) => ({
    root: {
      [theme.breakpoints.up('md')]: {
        margin: "10px",
      },
    },
  })


  return (
    // <ThemeProvider styles={styles}>
      <div className="bio-container">
        <Typography className="bio-text" variant="h6">
          My name is Tom Craig, and I build things.
        </Typography>
        <Typography className="bio-text" variant="h6">
          I do{" "}
          <Link href="https://www.upwork.com/freelancers/~017287fbe859ac7cbc?viewMode=1">
            {" "}
            freelance web development.
          </Link>
        </Typography>
        <Typography className="bio-text" variant="h6">
          I build and operate 3D printers.
        </Typography>
        <Typography className="bio-text" variant="h6">
          I have done front and back end software engineering for Pandora Media,
          Welkin Health Ceres Imaging, and Coread Health, and I have been a
          research fellow at NASA's Jet Propulsion Laboratory for the Juno
          Mission.
        </Typography>
        <Typography className="bio-text" variant="h6">
          I make software in my free time, too.{" "}
          <Link href="https://github.com/thetomcraig/chit">
            Here's one project.
          </Link>
        </Typography>
      </div>
    // </ThemeProvider>
  )
}
// (You can see my profile{" "}
// <a href="https://www.upwork.com/freelancers/~017287fbe859ac7cbc?viewMode=1">
//   here!
// </a>
// )
// I make software in my free time, too. (
// <a href="https://github.com/thetomcraig/chit">Here's one project</a>)

export default ContentComponent
