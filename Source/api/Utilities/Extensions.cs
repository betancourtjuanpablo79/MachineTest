using System.Data;

namespace MachineTestAPI.Utilities
{
    public static class Extensions
    {
        public static List<T> dttoObject<T>(this DataTable dt)
        {
            List<T> objectResult = new List<T>();

            var json = Newtonsoft.Json.JsonConvert.SerializeObject(dt);
            objectResult = Newtonsoft.Json.JsonConvert.DeserializeObject<List<T>>(json);

            return objectResult;

        }
    }
}
