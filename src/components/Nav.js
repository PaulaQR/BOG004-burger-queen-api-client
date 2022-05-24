import { NavLink } from "react-router-dom";
import '../components/Nav.css'
export default function Nav() {
		return (
				<div>
					<ul>
						<li>
								<NavLink className={({isActive}) => (isActive ? 'active' : 'neutro' ) } to='/'>Login</NavLink>
						</li>
						<li>
						<NavLink className={({isActive}) => (isActive ? 'active' : 'neutro' ) } to='/Roles'>Roles</NavLink>
						</li>
						<li>
							 <NavLink className={({isActive}) => (isActive ? 'active' : 'neutro' ) } to='/home'>Burger Queen</NavLink>
						</li>
					</ul>
				</div>
		)
}
