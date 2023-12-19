import './navbar.scss'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="logo">
            <img src="logo.svg" alt="logo" />
            <span>Admin</span>
        </div>
        <div className="icons">
            <img src="/search.svg" alt="" className="icon" />
            <img src="/app.svg" alt="" className="icon" />
            <img src="/expand.svg" alt="" className="icon" />
            <div className="notification">
                <img src="/notifications.svg" alt="" />
                <span>1</span>
            </div>
            <div className="user">
                <img src="https://scontent.fsgn5-12.fna.fbcdn.net/v/t1.18169-1/10704135_375879162561828_5136028108041866565_n.jpg?stp=dst-jpg_p320x320&_nc_cat=103&ccb=1-7&_nc_sid=2b6aad&_nc_ohc=MmpcEOY7v3MAX8lJaUO&_nc_ht=scontent.fsgn5-12.fna&oh=00_AfBrwCojfbegRoBKcI1izZWwVO6j31JqgiAtiK_Olypxeg&oe=65A86D53" alt="" />
                <span>Jane</span>
            </div>
            <img src="/settings.svg" alt="" className="icon" />
        </div>
    </div>
  )
}

export default Navbar