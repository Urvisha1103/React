/* eslint-disable react/prop-types*/
import ArticleItem from "./article_Item";
export default function ArticleList ({
    article,
    onClickToggle,
    onClickRemove,
}) {
    return (
        <ul>
            {article.map((article) => (
                <ArticleItem
                    key={article.id}
                    item={article}
                    onClickToggle={() => onClickToggle(article.id)}
                    onClickRemove={() => onClickRemove(article.id)}
                />
            ))}
            <p>Total: {article.length}</p>
        </ul>
    );
}