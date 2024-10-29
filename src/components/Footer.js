const currYear = new Date().getFullYear();

const Footer = () => {
    return (
        <footer>
            <div class="footerSection">&copy; {currYear}, Made by <b>Neelakshi</b>
            </div>
        </footer>
    );
};

export default Footer;