import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useContentful } from '../../Context/Contentful';
import ArticleList from '../Articles/ArticleList';
import styles from './Articles.module.scss';

function Articles() {
    const { category } = useParams();
    const client = useContentful();
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true); // Add loading state

    useEffect(() => {
        console.log(category);

        client.getEntries({
            content_type: 'newsArticle', // Adjust content type based on your Contentful model
            'fields.category': category // Filter articles based on category
        })
            .then((response) => {
                console.log('Response:', response); // Log the response to inspect the data
                if (response.items.length === 0) {
                    console.warn('No entries found for the given query.');
                }
                setArticles(response.items);
            })
            .catch((error) => {
                console.error(error);
            })
            .finally(() => {
                setLoading(false); // Set loading to false after fetching data
            });
    }, [category, client]);

    return (
        <div>
            {loading ? (
                <p>Loading...</p> // Display loading message while fetching data
            ) : articles.length === 0 ? (
                <p className={styles.articleList}>No articles found for this category.</p> // Display message if no articles are found
            ) : (
                <ArticleList articles={articles} />
            )}
        </div>
    );
}

export default Articles;