// Logs when the client route changes
module.exports.onRouteUpdate = ({ location, prevLocation }) => {
  console.log('location', location);
  console.log("new pathname", location.pathname);
  console.log("old pathname", prevLocation ? prevLocation.pathname : null);

  function runHomePageAnimation() {
    // if (prevLocation && prevLocation.hostname === 'localhost') {
    //   console.log('It came from inside!');
    //   return;
    // }
    // document.querySelector('body').style.overflow = 'hidden';

    var body = document.querySelector('body');
    var overlay = document.querySelector('.o-home-intro');

    if (!prevLocation) {
      body.style.overflow = 'hidden';
      overlay.style.display = 'block';
      console.log('new!');
      // setTimeout(function() {
      //   body.style.overflow = 'visible';
      //   overlay.style.display = 'none';
      // }, 1000);
      return;
    }
  }

  if (location.pathname === '/') {
    runHomePageAnimation();
  }
}
