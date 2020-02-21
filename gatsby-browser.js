// Logs when the client route changes
module.exports.onRouteUpdate = ({ location, prevLocation }) => {
  function runHomePageAnimation() {
    const body = document.querySelector('body');
    const overlay = document.querySelector('.o-home-animation');

    // TODO - Change hostname to 'andculture' when deployed.
    if (!prevLocation || prevLocation && prevLocation.hostname !== 'localhost') {
      body.style.overflow = 'hidden';
      overlay.style.display = 'block';
    }
  }

  if (location.pathname === '/') {
    // runHomePageAnimation();
  }
}
