import express from 'express';
import postRoutes from './routes/posts.js';
import authRoutes from './routes/auth.js'
import usersRoutes from './routes/users.js'

import cors from 'cors'

const app = express();

app.use(express.json());

app.use(cors())


app.use("/api/posts/", postRoutes);
app.use("/api/auth/", authRoutes);
app.use("/api/users/", usersRoutes);



app.listen(4000, () => {
    console.log("Conected!!!!")
});