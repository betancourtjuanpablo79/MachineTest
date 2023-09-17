
The solution is able to upload the excel with 3 sheets (Books, Author and BookAuthorAssociation),
the name of the are expected as the example (the id column can be called id(PK) or id, both are column name. 
Same case in BookAuthorAssociation where we have id(PK), BookId(PK) and AuthorId(PK) also are valid column names Id, BookId, AuthorId without the "(PK)".



API 
It is working in port 5000 if you execute directly in MachineTestAPI.exe

Front-end 
It is configured to consume port 5000, but can be configured in the assets/appconfig variable "base_url".
the production version was generated to be installed in subfolder MachineTest

 