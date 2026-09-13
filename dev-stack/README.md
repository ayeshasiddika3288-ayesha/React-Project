# Dev Stack

Dev Stack is a React-based web application that helps developers explore popular web development technologies and build their own personalized "tech stack." Users can browse frontend, backend, database, and tooling options, add the ones they like to their stack, and remove them anytime — all with a clean, responsive interface and smooth toast notifications.

## Technologies Used

- **React.js** – component-based UI library
- **Vite** – fast build tool and dev server
- **Tailwind CSS** – utility-first styling
- **React-Toastify** – toast notifications for user actions
- **JavaScript (ES6+)**
- **JSON** – local data source for technology listings

## Features

1. **Build Your Own Stack** — Browse 12+ technologies across categories (Frontend, Backend, Database, Language, Styling, DevOps, Tools) and add them to a personal "Your Stack" panel with a single click.
2. **Smart Duplicate Handling** — Each technology can only be added once. Trying to add it again shows a warning toast instead of creating a duplicate entry, and the button visually updates to "✓ Added to Stack."
3. **Fully Responsive Design** — The layout adapts smoothly across mobile, tablet, and desktop, including a dedicated mobile hamburger navbar and a responsive technology grid (1/2/3 columns).

## Live Links

- **GitHub Repository:** [add your repo link here]
- **Live Site:** [add your deployed link here]

---

## React Concepts — My Understanding

**1. What is JSX, and why is it used in React?**
JSX is a syntax extension that lets us write HTML-like code directly inside JavaScript. It's used in React because it makes writing and understanding UI components much easier compared to writing plain JavaScript function calls.

**2. What is the difference between props and state?**
Props are data passed from a parent component to a child component, and the child cannot change them. State is data that a component manages internally and can update on its own, which causes the component to re-render.

**3. What does the `useState` hook do, and where did you use it in this project?**
`useState` lets a component store and update values that can change over time. In this project, I used it to store the list of technologies, the loading status, the user's selected stack, and the mobile navbar's open/close state.

**4. What does the `useEffect` hook do, and why did you need it to load the JSON data?**
`useEffect` runs code after the component renders, often for side effects like fetching data. I used it to fetch the technologies.json file once when the app first loads, so the data is ready before being displayed.

**5. Why does every item in a `.map()` list need a unique `key` prop?**
The `key` prop helps React identify which item in a list changed, was added, or was removed. Without unique keys, React can't efficiently update the list and may re-render items incorrectly.

**6. What is conditional rendering? Show one place you used it.**
Conditional rendering means displaying different UI based on a condition. I used it in the "Your Stack" panel — if the stack is empty, it shows a message saying the stack is empty; otherwise, it renders the list of selected technologies.

**7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?**
A parent passes data to a child using props, for example `<TechnologyCard technology={tech} />`. A child sends data back to the parent by calling a function that was passed to it as a prop, for example calling `onAdd(technology)`, which triggers a function defined in the parent (`App.jsx`).