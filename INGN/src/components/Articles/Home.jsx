import { useEffect, useState } from 'react';
import { useContentful } from '../../Context/Contentful';
import ArticleList from '../Articles/ArticleList';



const Home = () => {
    const client = useContentful();
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        client.getEntries({
            content_type: 'newsArticle' // Adjust content type based on your Contentful model
        })
            .then((response) => {
                setArticles(response.items);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [client]);

    return (
        <div>
            <ArticleList articles={articles} />
        </div>
    );
}

export default Home;