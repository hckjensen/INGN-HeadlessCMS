import { useEffect, useState } from 'react';
import { useContentful } from '../../Context/Contentful';
import ArticleList from '../Articles/ArticleList';



const Home = () => {
    const client = useContentful();
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        client.getEntries({
            content_type: 'newsArticle'
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