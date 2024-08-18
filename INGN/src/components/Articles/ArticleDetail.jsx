import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useContentful } from "../../Context/Contentful";
import styles from "./Articles.module.scss";

const ArticleDetail = () => {


    const { id } = useParams();
    const client = useContentful();
    const [article, setArticle] = useState({});

    useEffect(() => {



        client.getEntry(id)
            .then((response) => {
                console.log(response);

                setArticle(response);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [id, client]);

    return (

        <div className={styles.articleDetail}>
            <img src={article.fields?.image?.fields.file.url} alt={article.fields?.image?.fields.title} />
            <div className={styles.content}>
                <h1>{article.fields?.title}</h1>
                <p className={styles.published}>{article.fields?.publishDate} - af {article.fields?.author}</p>

                <div className={styles.bodyText}>

                    {article.fields?.body.content.map((paragraph, index) => (
                        <p key={index} className={styles.paragraph}>{paragraph.content[0].value}</p>
                    ))}
                </div>

            </div>


        </div>


    );


}

export default ArticleDetail;