SELECT *
FROM [dbo].[events]
WHERE [userID] = @userId
ORDER BY [startDate], [startTime]