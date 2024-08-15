import PropTypes from 'prop-types';
import styles from './Articles.module.scss';
import { Link } from 'react-router-dom';


const ArticleList = ({ articles }) => {

    console.log(articles);


    return (
        <div className={styles.articleList}> {
            articles.map(article => (
                <div key={article.sys.id} className={styles.articleCard}>
                    <div className={styles.cardText}>
                        <h3>{article.fields.title}</h3>
                        <p className={styles.preview}>{article.fields.body.content[0].content[0].value}</p>
                        <p className={styles.published}>{article.fields.publishDate} - af {article.fields.author}</p>
                        <Link to={`/article/${article.sys.id}`}>Læs mere</Link>
                    </div>
                    <img src={article.fields.image.fields.file.url} alt={article.fields.image.fields.title} />

                </div>
            ))
        } </div>

    );
}

ArticleList.propTypes = {
    articles: PropTypes.arrayOf(
        PropTypes.shape({
            sys: PropTypes.shape({
                id: PropTypes.string.isRequired
            }).isRequired,
            fields: PropTypes.shape({
                title: PropTypes.string.isRequired,
                body: PropTypes.object.isRequired,
                publishDate: PropTypes.string.isRequired,
                image: PropTypes.shape({
                    fields: PropTypes.shape({
                        file: PropTypes.shape({
                            url: PropTypes.string.isRequired
                        }).isRequired,
                        title: PropTypes.string.isRequired
                    }).isRequired
                }).isRequired
            }).isRequired
        })
    ).isRequired
};
export default ArticleList;