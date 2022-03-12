import "./Footer.css"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer() { 
  return(
    <footer className="footer-content">
      <div className="Social-icons">
        <GitHubIcon style={{ fontSize: 50}} />
        <LinkedInIcon style={{ fontSize: 50}} />
        <InstagramIcon style={{ fontSize: 50}} />
      </div>
      <address>Nicholas Goes - 2022</address>
      <section>Powered by <a href="https://jikan.moe" target="_blank">Jikan Api</a> & <a href="https://waifu.pics/docs" target="_blank">Waifu Pics</a> Api</section>
    </footer>
  )
}

export default Footer;