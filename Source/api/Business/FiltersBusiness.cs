using MachineTestAPI.Models;
using MachineTestAPI.Models.Parameters;

namespace MachineTestAPI.Business
{
    public class FiltersBusiness
    {
        private MachineTestBusiness _machineTestBusiness;
        public FiltersBusiness (MachineTestBusiness machineTestBusiness)
        {
            _machineTestBusiness = machineTestBusiness;
        }
        public List<BookModel> FilterBooksByAuthor(RequestParameter request)
        {
            List<BookModel> books= new List<BookModel>();

            ResultModel result = _machineTestBusiness.readFile(request.FileName);

            var author = result.library.Authors.First(author => author.Name == request.AuthorName);

            if (author != null)
            {
                var authorId = author.Id;
                books = result.library.Books.Where(book => result.library.Associations.Any(ass => ass.BookId == book.Id && ass.AuthorId == authorId)).ToList();
            }


            return books;
        }

        public List<AuthorModel> FilterAuthorWhoWrote(RequestParameter request)
        {
            List<AuthorModel> authors = new List<AuthorModel>();

            ResultModel result = _machineTestBusiness.readFile(request.FileName);

            var book = result.library.Books.First(book => book.Name == request.BookName);

            if (book != null)
            {
                var bookId = book.Id;
                authors = result.library.Authors.Where(author => result.library.Associations.Any(ass => ass.AuthorId == author.Id && ass.BookId == bookId)).ToList();
            }


            return authors;
        }

        public List<AuthorModel> FilterAuthorWhoHaveNotWrote(RequestParameter request)
        {
            List<AuthorModel> authors = new List<AuthorModel>();

            ResultModel result = _machineTestBusiness.readFile(request.FileName);

            authors = result.library.Authors.Where(author => result.library.Associations.Where(ass => ass.AuthorId == author.Id).Count() == 0).ToList();

            return authors;
        }

        public List<AuthorModel> FilterAuthorVsBooks(RequestParameter request)
        {
            List<AuthorModel> authors = new List<AuthorModel>();

            ResultModel result = _machineTestBusiness.readFile(request.FileName);

            authors = result.library.Authors; ;

            return authors;
        }

        public List<BookModel> FilterByValue(RequestParameter request)
        {
            List<BookModel> books = new List<BookModel>();

            ResultModel result = _machineTestBusiness.readFile(request.FileName);

            books = result.library.Books.Where(book => book.Price > request.Price).ToList();

            return books;
        }
    }
}
