# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh




<h1> Quick Explanation of what is going on - </h1>
<ol>
    <li>
        All of our main source code lies in the 'src' directory(where we would be spending 99% of out time)
    </li>
    <li>
        React, under the hood, runs and compiles the 'index.html' file(present in the root directory), and the   'index.html' file calls the 'main.jsx' file, and this calls 'app.jsx', so on and so forth, forming a tree like structure, consisting of all our application code, which is written in these 'jsx' files.
    </li>
    <li>
        TailwindCSS would be used as it helps scale our application with ease, and has a negligible learning curve.
    </li>
    <li>
        All commit messages are written in present tense, and not in past tense. (Weird industry standard)
    </li>
</ol>







// How to setup a local clone of this repo, on your local machine -

1) enter this command wherever you want to create this local clone in your disk drive
    'git clone https://github.com/Neel-blvd/cms.git'

2) enter 'npm i' to install all required dependencies to actually make serving this website possible.
These installed dependencies get install in the 'node_modules' directory, which you WOULD NOT FIND on the github repo(remote repo), as this directory takes up a lot of space.




// How to spin up the 'vite' development server to serve the website locally -

-> Run the command 'npm run dev' in the root directory(./cms) and follow the url, outputted on the terminal
    (make sure you've already executed 'npm i').


<h1>HELLo</h1>
