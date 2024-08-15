import styles from './Footer.module.scss';
import PropTypes from 'prop-types';

const Footer = () => {

    const sections = [
        {
            header: "Addresse",
            subheader: "Intet ny - Godt nyt ApS",
            links: [
                { text: "Tulipanvej 232" },
                { text: "7320" },
                { text: "Valby Øster" },


            ]
        },
        {
            header: "Links",
            links: [
                { text: "vikanweb.dk" },
                { text: "overpådenandenside.dk" },
                { text: "retsinformation.dk" },
                { text: "nogetmednews.dk" },
            ],
        },

        {
            header: "Politik",
            links: [
                { text: "Privatpolitik" },
                { text: "Cookiepolitik" },
                { text: "Købsinformation" },
                { text: "Delingspolitik" },
            ],
        },
        {
            header: "Kontakt",

            links: [
                { text: "ingn@nyhed.dk" },
                { text: "telefon: 23 23 23 23" },
                { text: "fax: 123123-333" },

            ],
        },


    ];
    return (
        <footer className={styles.footer}>
            <div className={styles.contentWrapper}>
                {sections.map((section, index) => (
                    <div key={index}>
                        <h3>{section.header}</h3>
                        {section.subheader && <h4>{section.subheader}</h4>}
                        {section.links && section.links.map((link, linkIndex) => (
                            <p key={linkIndex}>{link.text}</p>
                        ))}

                    </div>
                ))}
            </div>
        </footer>
    );
}

Footer.propTypes = {
    sections: PropTypes.arrayOf(PropTypes.shape({
        header: PropTypes.string.isRequired,
        subheader: PropTypes.string,
        links: PropTypes.arrayOf(PropTypes.shape({
            url: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
        })),
        icons: PropTypes.arrayOf(PropTypes.shape({
            src: PropTypes.string.isRequired,
            alt: PropTypes.string.isRequired,
        })),
    })).isRequired,
};

export default Footer;