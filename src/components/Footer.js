const currYear = new Date().getFullYear();

const Footer = () => {
    return (
        <footer>
            <div className="footerSection text-blue-500 font-medium align-middle p-7 text-center">&copy; {currYear}, Made by <b>Neelakshi</b>
            </div>
        </footer>
    );
};

export default Footer;