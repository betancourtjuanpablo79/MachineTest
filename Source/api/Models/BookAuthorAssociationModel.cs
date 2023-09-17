using MachineTestAPI.Utilities;
using Newtonsoft.Json;
using System.Security.Cryptography;

namespace MachineTestAPI.Models
{
    public class BookAuthorAssociationModel : Conversion
    {
        [JsonConverter(typeof(DoubleToIntConverter))]
        public int Id
        {
            get
            {
                return Convert.ToInt32(IdPk);
            }
            set
            {
                IdPk = value;
            }
        }

        [JsonProperty(PropertyName = "Id(PK)", ItemConverterType = typeof(DoubleToIntConverter))]
        public double IdPk { get; set; }

        [JsonProperty(PropertyName = "BookId(FK)",ItemConverterType = typeof(DoubleToIntConverter))]
        public double BookIdFK { get; set; }

        [JsonConverter(typeof(DoubleToIntConverter))]
        public int BookId
        {
            get
            {
                return Convert.ToInt32(BookIdFK);
            }
            set
            {
                BookIdFK = value;
            }
        }

        [JsonProperty(PropertyName = "AuthorId(FK)", ItemConverterType = typeof(DoubleToIntConverter))]
        public double AuthorIdFK { get; set; }

        [JsonConverter(typeof(DoubleToIntConverter))]
        public int AuthorId
        {
            get
            {
                return Convert.ToInt32(AuthorIdFK);
            }
            set
            {
                AuthorIdFK = value;
            }
        }




    }
}
