import GitHubIcon from '@/icons/GitHubIcon';
import HeartIcon from '@/icons/HeartIcon';

export default function Footer() {
  return (
    <footer className='no-print' id='body-footer'>
      <div id='footer-container'>
        <div>
          <p>Made with&nbsp;<HeartIcon />&nbsp;by Hector Guerra</p>
        </div>
        {/* <a href='' targ   @include buttons-style;
    &:hover {
      @include buttons-style-hover;
    }et='_blank'>
          Repositorio <GitHubIcon />
        </a> */}
      </div>
    </footer>
  );
}
