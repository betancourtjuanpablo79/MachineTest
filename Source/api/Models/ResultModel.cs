namespace MachineTestAPI.Models
{
    public class ResultModel
    {
        public bool isSuccess { get; set; }
        public string message { get; set; }
        public LibraryModel library { get; set; }
    }
}
