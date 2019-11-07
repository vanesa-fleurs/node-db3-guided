Joing Employee & Order Table:
```
SELECT Employee.FirstName, [Order].OrderDate, [Order].ShipName 
FROM [Order]
JOIN Employee ON Employee.Id = [Order].EmployeeId;
```

****************************************************
name for a saved query: VIEW
```
CREATE VIEW vSales as
SELECT Employee.FirstName, [Order].ShipName
FROM [Order]
JOIN Employee ON Employee.Id = [Order].EmployeeId;

SELECT * FROM vSales
``
****************************************************
JOIN Category name and Product name (using Alias)
```
SELECT c.CategoryName as Category, p.ProductName as Product
from [Product] as p 
JOIN Category as C on p.CategoryId = c.Id;
```
****************************************************
JOIN Order and Customer (via cust. ID)
```
SELECT * FROM Customer as c
JOIN [Order] as o ON c.Id = o.CustomerId;
```


****************************************************
List of Customers who have no Orders --> LEFT JOIN
Bring me all record from table on left (even if you don't find records for the order information)

********************AGGREGATE FUNCTIONS*******************************

Querie To count how many orders came from all the differnt types of cities
```
SELECT COUNT(ShipCity) AS Cities, o.ShipCity
FROM [Order] as o
GROUP BY ShipCity
ORDER BY ASC;
```
****************************************************
Get the Category and the number of products within the category
```
SELECT c.CategoryName as Category, count(*) as Products
FROM [Product] as p
JOIN Category as c ON p.CategoryId = c.Id
GROUP BY c.CategoryName
ORDER BY c.CategoryName;
```
****************************************************
Cheapest product by category
```
SELECT c.CategoryName as Category, min(p.UnitPrice) as Cheapest
FROM [Product] as p
JOIN Category as c ON p.CategoryId = c.Id
GROUP BY c.CategoryName
ORDER BY c.CategoryName;
```
****************************************************
List Customers and the numbe of orders they have placed
```
```

****************************************************
