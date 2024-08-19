# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


// Quick Explanation of what is going on -

1) All of our main source code lies in the 'src' directory(where we would be spending 99% of out time)

2) React, under the hood, runs and compiles the 'index.html' file(present in the root directory), and the   'index.html' file calls the 'main.jsx' file, and this calls 'app.jsx', so on and so forth, forming a tree like structure, consisting of all our application code, which is written in these 'jsx' files.

3) TailwindCSS would be used as it helps scale our application with ease, and has a negligible learning curve.


// How to spin up the 'vite' development server to serve the website locally -

-> Run the command 'npm run dev' in the root directory(./cms) and follow the url, outputted on the terminal.
