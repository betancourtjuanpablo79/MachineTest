namespace MachineTestAPI.Models
{
    public class LibraryModel
    {
        public List<BookModel> Books { get; set; }
        public List<AuthorModel> Authors { get; set; }
        public List<BookAuthorAssociationModel> Associations { get; set; }
    }
}
