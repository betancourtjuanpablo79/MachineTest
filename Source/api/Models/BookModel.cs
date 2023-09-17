using MachineTestAPI.Utilities;
using Newtonsoft.Json;
using System.Security.Cryptography;

namespace MachineTestAPI.Models
{
    public class BookModel : Conversion
    {
        [JsonConverter(typeof(DoubleToIntConverter))]
        public int Id {
            get {
                return Convert.ToInt32(IdPk);
            }
            set
            {
                IdPk = value;
            } 
        }

        [JsonProperty(PropertyName = "Id(PK)", ItemConverterType = typeof(DoubleToIntConverter))]
        public double IdPk { get; set; }
        public string Name { get; set; }
        public double Price { get; set; }

    }
}
