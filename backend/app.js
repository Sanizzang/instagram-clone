import express from 'express';
import 'express-async-errors';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import feedRouter from './router/feed.js';
import authRouter from './router/auth.js';
import friendshipRouter from './router/friendship.js';
import commentRouter from './router/comment.js';
import likeRouter from './router/like.js';
import { config } from './config.js';

const app = express();

app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(morgan('tiny'));

app.use('/feed', feedRouter);
app.use('/auth', authRouter);
app.use('/friendship', friendshipRouter);
app.use('/comment', commentRouter);
app.use('/like', likeRouter);

app.use((req, res, next) => {
    res.sendStatus(404);
});

app.use((error, req, res, next) => {
    console.error(error);
    res.sendStatus(500);
});

app.listen(config.port);