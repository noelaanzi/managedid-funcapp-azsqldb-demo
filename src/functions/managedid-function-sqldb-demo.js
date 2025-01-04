const { app } = require('@azure/functions');
const { DefaultAzureCredential } = require("@azure/identity");
const sql = require("mssql");

async function getData(request, context) {
    const config = {
        server: process.env.DB_SERVER_NAME, // Azure SQL Database Server name
        database: process.env.DB_NAME, // Azure SQL Database name
        options: {
            encrypt: true, // Required for Azure SQL Database
            trustServerCertificate: false,
        },
        authentication: {
            type: "azure-active-directory-msi-vm", // Use one of the Managed Identity authentication type
            options: {
                credential: new DefaultAzureCredential(),
            },
        },
    };

    // Read the query parameter
    const customerId = request.query.get('id');

    // customerId existence and number value check
    if (!customerId || isNaN(customerId)) {
        const responseData = {
            message: "<id> query parameter Missing"

        };
        return {
            status: 400,
            jsonBody: responseData,
            headers: {
                "Content-Type": "application/json" // Send response as JSON content type
            }
        };
    }

    try {

        // Connect to Azure SQL
        const sqlConnection = await sql.connect(config);

        // Execute SELECT query
        const resultSet = await sqlConnection
            .request()
            .input("id", sql.Int, customerId) // Pass the "id" parameter as an integer
            .query("SELECT * FROM Customers WHERE CustomerId = @id");

        const responseData = {
            message: resultSet.recordset
        };

        return {
            status: 200,
            jsonBody: responseData,
            headers: {
                "Content-Type": "application/json" // Send response as JSON content type
            }
        };

    } catch (error) {
        context.log("Error: ", error);
        const responseData = {
            message: error
        };

        return {
            status: 500,
            jsonBody: responseData,
            headers: {
                "Content-Type": "application/json" // Send response as JSON content type
            }
        };

    } finally {
        sql.close();
    }

};

// Replace [managedid-function-sqldb-demo] with your azure function name
app.http('managedid-function-sqldb-demo', {
    route: "managedid-function-sqldb-demo",
    methods: ['GET'],
    authLevel: 'anonymous',
    handler: getData
});

module.exports = getData
