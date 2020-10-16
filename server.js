const express = require("express");
const axios = require("axios");

const app = express();
const PORT = process.env.PORT || 5000;

const handleProductsRequest = async (req, res) => {
    const response = await axios({
        method: "GET",
        url: "https://services.odata.org/V2/Northwind/Northwind.svc/Products",
        params: {
            $format: "json"
        },
        headers: {
            accept: "application/json"
        }
    });
    res.send(response.data.d.results);
}

app.get("/products", handleProductsRequest);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});


