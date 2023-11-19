const moviesRouter = require('./routes/moviesRouter');

const PORT = process.env.PORT || 5000;

moviesRouter.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
});
