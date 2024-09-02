# SupperConnectNode

Modified to node module from SuperConnectNode

## How to use 

```
const SupperConnectNode = require('supperconnectnode');

const app = SupperConnectNode();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
```

Send a get request in http://your-ip:3000/ to test the connection 
