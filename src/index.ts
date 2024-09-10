import app from './app';

const PORT = 8000; // supposed to be in .ENV file with config module to be extensable

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
