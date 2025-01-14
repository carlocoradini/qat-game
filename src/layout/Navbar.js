import logo from "../assets/download.png"

export function Navbar() {

  return (
    <header className="mx-4 d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      
        <a
          href="/home"
          className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
        >
          <img src={logo} className='w-25 h-25 mx-auto d-block' alt="Logo"/>
          <h1>QAT - The game</h1>
        </a>

        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li>
            <a href="/home" className="nav-link px-2 link-white">
              INÍCIO
            </a>
          </li>
          <li>
            <a href="/detail" className="nav-link px-2 link-white">
              SOBRE
            </a>
          </li>
          <li>
            <a href="/login" className="nav-link px-2 link-white">
              LOGIN
            </a>
          </li>
        </ul>
      
    </header>
  );
}
