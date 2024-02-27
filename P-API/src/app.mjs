import express from "express";
const app = express();
app.use(express.json());
const port = 3000;
app.get("/api/", (req, res) => {
res.redirect(`http://localhost:${port}/`);
});
import { livresRouter } from "./routes/livres.mjs";
app.use("/api/livres", livresRouter);
app.listen(port, () => {
console.log(`Example app listening on port http://localhost:${port}`);
});
