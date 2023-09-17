using MachineTestAPI.Models;
using Microsoft.AspNetCore.Http;
using System.Data;
using System.Data.OleDb;
using Newtonsoft;
using System.IO;
using MachineTestAPI.Utilities;
using System;
using System.Linq;
using DocumentFormat.OpenXml;
using DocumentFormat.OpenXml.Packaging;
using DocumentFormat.OpenXml.Spreadsheet;

namespace MachineTestAPI.Business
{
    public class MachineTestBusiness
    {
        private string _pathString = @"Files\";
        
        public ResultModel UploadFile(IFormFile file)
        {
            if (file.Length > 0)
            {

                if (!Directory.Exists(_pathString))
                {
                    DirectoryInfo di = Directory.CreateDirectory(_pathString);
                }

                string filePath = Path.Combine(_pathString, file.FileName);
                using (Stream fileStream = new FileStream(filePath, FileMode.Create))
                {
                    file.CopyTo(fileStream);
                }

                return readFile(file.FileName);
            }

            return null;
        }

        public ResultModel readFile(string fileName)
        {
            string filePath = Path.Combine(_pathString, fileName);

            ResultModel result = new ResultModel();
            DataTable dtBooks = new DataTable();
            DataTable dtAuthors = new DataTable();
            DataTable dtRelations = new DataTable();
            LibraryModel library = new LibraryModel();

            using (SpreadsheetDocument spreadsheetDocument =
                        SpreadsheetDocument.Open(filePath, false))
            {
                WorkbookPart workbookPart = spreadsheetDocument.WorkbookPart;


                try
                {    //Books
                    dtBooks = SpreadsheetUtility.GetDataTable(spreadsheetDocument,  "Books");
                }
                catch
                {
                    result.isSuccess = false;
                    result.message = "Books Worksheet doesn't exist or is corrupted.";
                    return result;
                }
                try { 
                    dtAuthors = SpreadsheetUtility.GetDataTable(spreadsheetDocument, "Authors");
                }
                catch
                {
                    result.isSuccess = false;
                    result.message = "Authors Worksheet doesn't exist or is corrupted.";
                    return result;
                }

                try
                {
                    dtRelations = SpreadsheetUtility.GetDataTable(spreadsheetDocument, "BookAuthorAssociation");
                }
                catch
                {
                    result.isSuccess = false;
                    result.message = "BookAuthorAssociation Worksheet doesn't exist or is corrupted.";
                    return result;
                }
            }


            try
            {
                List<BookModel> bookList = dtBooks.dttoObject<BookModel>();

                if (bookList.Where(book => book.Id == 0 || book.Name == null).Count() > 0)
                {
                    result.isSuccess = false;
                    result.message = "Columns in Book worksheet are incorrect";
                    return result;
                }

                List<AuthorModel> authorList = dtAuthors.dttoObject<AuthorModel>();
                if (authorList.Where(author => author.Id == 0 || author.Name == null).Count() > 0)
                {
                    result.isSuccess = false;
                    result.message = "Columns in Author worksheet are incorrect";
                    return result;
                }

                List<BookAuthorAssociationModel> associtionList = dtRelations.dttoObject<BookAuthorAssociationModel>();
                if (associtionList.Where(ass => ass.Id == 0 || ass.BookId == 0 || ass.AuthorId == 0).Count() > 0)
                {
                    result.isSuccess = false;
                    result.message = "Columns in BookAuthorAssociation worksheet are incorrect";
                    return result;
                }

                library.Books = bookList;
                library.Authors = authorList;
                library.Associations = associtionList;
            }
            catch (Exception ex)
            {
                result.isSuccess = false;
                result.message = "Error reading data.";
                return result;
            }

            result.isSuccess = true;
            result.message = "";
            result.library = library;
            return result;

        }

  

    }
}
