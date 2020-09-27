const { ServiceProvider } = require("@adonisjs/fold");

class PaginationProvider extends ServiceProvider {
  register() {
    // register bindings
  }

  boot() {
    // optionally do some initial setup
    const View = this.app.use("Adonis/Src/View");
    const Route = this.app.use("Adonis/Src/Route");

    View.global("paginate", function (dataObject, pageRoute) {
      return this.safe(
        `<div class="pagination-div">
                <a href="${
                  dataObject.page == 1
                    ? "#"
                    : Route.url(pageRoute, { page: dataObject.page - 1 })
                }" rel="prev" class="pagination-btn">Previous</a>
                <p class="pagination-text">${dataObject.page} of ${
          dataObject.lastPage
        }</p>
                <a href="${
                  dataObject.lastPage == dataObject.page
                    ? "#"
                    : Route.url(pageRoute, { page: dataObject.page + 1 })
                }" class="pagination-btn">Next</a>
            </div>`
      );
    });

    //   multipaginate
  }
}

module.exports = PaginationProvider;
