using Newtonsoft.Json;

namespace MachineTestAPI.Utilities
{
    public class Conversion
    {
        public class DoubleToIntConverter : JsonConverter<int>
        {
            public override void WriteJson(JsonWriter writer, int value, JsonSerializer serializer)
            {
                writer.WriteValue(value);
            }

            public override int ReadJson(JsonReader reader, Type objectType, int existingValue, bool hasExistingValue, JsonSerializer serializer)
            {
                return Convert.ToInt32(reader.Value);
            }
        }
    }
}
