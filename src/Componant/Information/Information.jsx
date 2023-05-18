import style from '../Information/infromation.module.css';
const Information = () => {
  const {round,leftInfo}=style;
  return (
    <ul className={leftInfo}>
    <li>
      <img
        src="https://www.kindpng.com/picc/m/207-2074624_white-gray-circle-avatar-png-transparent-png.png"
        className={round}
      />
    </li>
    <li>User Name</li>
    <li>
      <a href="#">Course Name</a>
    </li>
    <li>
      <a href="#">info@gmail.com</a>
    </li>
    <li>
      <a href="tel:0599495225">+00398349348</a>
    </li>
  </ul>
  )
}
export default Information;
