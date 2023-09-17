using DocumentFormat.OpenXml.Packaging;
using DocumentFormat.OpenXml.Spreadsheet;
using System.Data;

namespace MachineTestAPI.Utilities
{
    public static class SpreadsheetUtility
    {
        public static DataTable GetDataTable(SpreadsheetDocument spreadsheetDocument, String sheetName)
        {
            DataTable dt = new DataTable();

            WorksheetPart worksheetPart = GetWorksheetPartByName(spreadsheetDocument, sheetName);

            SheetData sheetData = worksheetPart.Worksheet.Elements<SheetData>().First();
            IEnumerable<Row> rows = sheetData.Descendants<Row>();

            foreach (Cell cell in rows.ElementAt(0))
            {
                dt.Columns.Add(GetCellValue(spreadsheetDocument, cell));
            }

            foreach (Row row in rows)
            {
                try
                {
                    DataRow tempRow = dt.NewRow();

                    for (int i = 0; i < dt.Columns.Count; i++)
                    {
                        Cell cell = row.Descendants<Cell>().ElementAt(i);
                        int index = CellReferenceToIndex(cell);
                        tempRow[index] = GetCellValue(spreadsheetDocument, cell);

                    }

                    dt.Rows.Add(tempRow);
                }
                catch
                {
                    
                }
            }
            dt.Rows.RemoveAt(0);

            return dt;
        }

        public static WorksheetPart GetWorksheetPartByName(SpreadsheetDocument document, string sheetName)
        {
            IEnumerable<Sheet> sheets = document.WorkbookPart.Workbook.GetFirstChild<Sheets>().Elements<Sheet>().Where(s => s.Name == sheetName);

            if (sheets.Count() == 0)
            {
                // The specified worksheet does not exist.
                return null;
            }

            string relationshipId = sheets.First().Id.Value;
            WorksheetPart worksheetPart = (WorksheetPart)document.WorkbookPart.GetPartById(relationshipId);

            return worksheetPart;
        }
        public static string GetCellValue(SpreadsheetDocument document, Cell cell)
        {
            SharedStringTablePart stringTablePart = document.WorkbookPart.SharedStringTablePart;
            string value = string.Empty;
            if (cell.CellValue != null)
            {
                value = cell.CellValue.InnerXml;
            }
            else
            {
                value = "";
            }


            if (cell.DataType != null && cell.DataType.Value == CellValues.SharedString && value != null)
            {
                return stringTablePart.SharedStringTable.ChildElements[Int32.Parse(value)].InnerText;
            }
            else
            {
                return value;
            }
        }

        private static int CellReferenceToIndex(Cell cell)
        {
            int index = -1;
            string reference = cell.CellReference.ToString().ToUpper();
            foreach (char ch in reference)
            {
                if (Char.IsLetter(ch))
                {
                    int value = (int)ch - (int)'A';
                    index = (index + 1) * 26 + value;
                }
                else
                    return index;
            }
            return index;
        }
    }
}
