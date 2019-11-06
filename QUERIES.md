Joing Employee & Order Table:
```
SELECT Employee.FirstName, [Order].OrderDate, [Order].ShipName 
FROM [Order]
JOIN Employee ON Employee.Id = [Order].EmployeeId;
```


