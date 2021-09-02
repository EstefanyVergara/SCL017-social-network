export const profile = () => {
  const profileUser = document.createElement("div");
  const viewProfile = /*html*/ `

  <h3 > No soy un perfil, soy un mounstruo...por ahora
    </h3>
    <a  href="#/feed" id="toHome"><i class="fas fa-home"></i><br></a>
    <footer class="footer">
    <a  id="toProfile" href="#/feed"><i class="fas fa-home"> </i><br></a>
    <a  id="closeSesion"><i class="fa fa-power-off"> </i><br></a>
  </footer>

`;

profileUser.innerHTML = viewProfile;

return profileUser;
}