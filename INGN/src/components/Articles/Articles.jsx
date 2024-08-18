import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useContentful } from '../../Context/Contentful';
import ArticleList from '../Articles/ArticleList';
import styles from './Articles.module.scss';

const Articles = () => {
    const { category } = useParams();
    const client = useContentful();
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log(category);

        client.getEntries({
            content_type: 'newsArticle',
            'fields.category': category
        })
            .then((response) => {
                console.log('Response:', response);
                if (response.items.length === 0) {
                    console.warn('No entries found for the given query.');
                }
                setArticles(response.items);
            })
            .catch((error) => {
                console.error(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [category, client]);

    return (
        <div>
            {loading ? (
                <p>Loading...</p>
            ) : articles.length === 0 ? (
                <p className={styles.articleList}>No articles found for this category.</p>
            ) : (
                <ArticleList articles={articles} />
            )}
        </div>
    );
}

export default Articles;