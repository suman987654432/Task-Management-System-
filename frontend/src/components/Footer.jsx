
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer style={styles.footer}>
            <div style={styles.section}>
                <h4 style={styles.title}>INFO</h4>
                <ul style={styles.list}>
                    <li>Formats</li>
                    <li>Compression</li>
                    <li>Pricing</li>
                    <li>FAQ</li>
                    <li>Status</li>
                </ul>
            </div>
            <div style={styles.section}>
                <h4 style={styles.title}>RESOURCES</h4>
                <ul style={styles.list}>
                    <li>Developer API</li>
                    <li>Tools</li>
                    <li>Blog</li>
                </ul>
            </div>
            <div style={styles.section}>
                <h4 style={styles.title}>COMPANY</h4>
                <ul style={styles.list}>
                    <li>About Us</li>
                    <li>Sustainability</li>
                    <li>Terms of Service</li>
                    <li>Privacy</li>
                </ul>
            </div>
            <div style={styles.newsletter}>
                <h4 style={styles.title}>Subscribe to our email newsletter</h4>
                <div style={styles.subscribe}>
                    <input type="email" placeholder="Your email" style={styles.input} />
                    <button style={styles.button}>SUBSCRIBE</button>
                </div>
                <h4 style={styles.title}>Follow us</h4>
                <div style={styles.icons}>
                    <FaFacebook style={styles.icon} />
                    <FaTwitter style={styles.icon} />
                    <FaInstagram style={styles.icon} />
                </div>
            </div>
        </footer>
    );
};

const styles = {
    footer: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        backgroundColor: '#1a1a3c',
        color: '#fff',
        padding: '40px',
        flexWrap: 'wrap',
        borderTopLeftRadius: '20px',
        borderTopRightRadius: '20px',
        marginTop: "30px"
    },
    section: {
        flex: '1',
        margin: '10px',
        minWidth: '150px',
    },
    title: {
        fontWeight: 'bold',
        marginBottom: '10px',
    },
    list: {
        listStyle: 'none',
        padding: '0',
    },
    newsletter: {
        flex: '2',
        margin: '10px',
        minWidth: '300px',
    },
    subscribe: {
        display: 'flex',
        gap: '10px',
        marginBottom: '20px',
    },
    input: {
        padding: '10px',
        borderRadius: '5px',
        border: '1px solid #ccc',
        flex: '1',
    },
    button: {
        padding: '10px 20px',
        borderRadius: '5px',
        backgroundColor: '#fff',
        color: '#1a1a3c',
        border: 'none',
        cursor: 'pointer',
    },
    icons: {
        display: 'flex',
        gap: '15px',
        marginTop: '10px',
    },
    icon: {
        fontSize: '24px',
        cursor: 'pointer',
        transition: 'color 0.3s',
    },
};

export default Footer;
