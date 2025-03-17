import ArticleList from "./article_list";
import AddArticle from "./add_Articles";
import MyFeature from "./myfeature";

export default function MyExtraFunction() {
    return (
    <>
        <MyFeature AddArticle = {({ title,
            summary,
            onChangeSummary,
            onChangeTitle,
            onClickAdd,
        }) => (
            <AddArticle
                title={title}
                summary={summary}
                onChangeTitle={onChangeTitle}
                onChangeSummary={onChangeSummary}
                onClickAdd={onClickAdd}
            />
        )}
            ArticleList = {({ articles, onClickRemove, onClickToggle }) => (
                <ArticleList
                    articles={articles}
                    onClickToggle={onClickToggle}
                    onClickRemove={onClickRemove}
                />
            )}
        />
    </>
);
}