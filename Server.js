const App = require('./src/App');
const connectDB = require('./src/db/db');

connectDB();


App.listen(3000, () => {
console.log('Server is running on port 3000');
});

