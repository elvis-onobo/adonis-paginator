## Adonis Paginator

Add simple and straightforward pagination to your Adonis JS projects with just one line of code

### Installation

`npm i adonis-paginator`

### Usage

`{{ paginate(paginatedData, 'namedRoute') }}`

### Example

Your controller:

```js
const pageNumber = page || 1;

const articlesData = await Article.query()
  .orderBy("id", "desc")
  .paginate(pageNumber, 8);

return view.render("welcome", {
  articlesData: articlesData.toJSON(),
});
```

Your route. Page is an optional parameter, please do not forget that.

`Route.get("/:page?", "ArticleController.getAllArticles").as("articles");`

Now you can paginate in your edge(view) file:

`{{ paginate(articlesData, 'articles') }}`

(Read this article for more understanding)[]

### Styling

You can reference the following classes to style your pagination:

The outer `div` has a `pagination-div` class

The text `page of total-pages` has a `pagination-text` class

The links `Previous/Next` have a `pagination-btn` class

### License

MIT
