window.onscroll = () => {
  const nav = document.querySelector('#navb');
  if(this.scrollY <= 10) nav.className = 'navbar  navbar-expand-lg  before-scroll  fixed-top'; else nav.className = 'navbar  navbar-expand-lg fixed-top scroll';
};