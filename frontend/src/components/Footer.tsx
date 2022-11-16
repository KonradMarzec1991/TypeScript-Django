import "./Footer.css"

export const Footer = () => {
    const date = new Date();

    return (
        <footer className="page-footer">
            <p>
                &copy;
                <span> {date.getFullYear()} </span>
                Built by <span className="footer-name">Konrad Marzec</span>
            </p>
        </footer>
    )
}
