export function Footer() {
    return (
        <footer id="footer" className="mx-4 d-flex flex-wrap justify-content-between align-items-center py-3 my-4">
            <div className="col-md-4 d-flex align-items-center">
                <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                    <svg className="bi" width="30" height="24">
                    </svg>
                </a>
                <span className="mb-3 mb-md-0 text-muted">&copy; 2024. All Rights Reserved.</span>
            </div>

            <ul className="mx-4 nav col-md-4 justify-content-end list-unstyled d-flex margin-right">
                <li className="ms-3">
                    <a className="text-muted" href="#">
                        <img src="imgs/twitter.png" width="24" height="24" alt="Twitter" />
                    </a>
                </li>
                <li className="ms-3">
                    <a className="text-muted" href="#">
                        <img src="imgs/github.png" width="24" height="24" alt="Github" />
                    </a>
                </li>
                <li className="ms-3">
                    <a className="text-muted" href="#">
                        <img src="imgs/discord.png" width="24" height="24" alt="Discord" />
                    </a>
                </li>
            </ul>
        </footer>
    )
}