# Notes

[Pure CSS Card Flip](https://codepen.io/edeesims/pen/wvpYWW)

[Fisher–Yates shuffle Function](https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle)

# Remounting a Component

Resetting a React child component from a parent component typically means you want to force the child component to re-mount. When a component re-mounts, its internal state is completely reinitialized, and all its lifecycle methods (like `useEffect` with an empty dependency array for functional components, or `componentDidMount` for class components) run again.

The most common and effective way to achieve this is by changing the `key` prop of the child component.

### How the `key` prop works for remounting:

React uses the `key` prop to identify elements in a list, but it also uses it internally to determine if a component should be preserved or recreated. If React sees a component at the same position in the tree but with a _different_ `key`, it will:

1.  **Unmount** the old instance of the component (destroying its internal state).
2.  **Mount** a brand new instance of the component (with its initial state).

This effectively "resets" the child component.

### Example: Resetting a Child Component with `key`

Let's say you have a `Timer` child component that maintains its own `count` state, and you want to reset it from a parent component.

**1. Child Component (`Timer.jsx`)**

```jsx
import React, { useState, useEffect } from 'react';

function Timer() {
	const [count, setCount] = useState(0);

	useEffect(() => {
		console.log('Timer mounted/re-mounted. Initial count:', count);
		const interval = setInterval(() => {
			setCount((prevCount) => prevCount + 1);
		}, 1000);

		return () => {
			console.log('Timer unmounting/re-mounting cleanup.');
			clearInterval(interval);
		};
	}, []); // Empty dependency array means this runs only on mount/unmount

	return (
		<div style={{ border: '1px solid blue', padding: '10px', margin: '10px' }}>
			<h3>Timer Component</h3>
			<p>Count: {count}</p>
		</div>
	);
}

export default Timer;
```

**2. Parent Component (`App.jsx`)**

```jsx
import React, { useState } from 'react';
import Timer from './Timer';

function App() {
	const [resetKey, setResetKey] = useState(0); // A state variable to change the key

	const handleResetTimer = () => {
		// Increment the key to force the Timer component to remount
		setResetKey((prevKey) => prevKey + 1);
	};

	return (
		<div>
			<h1>Parent Component</h1>
			<button onClick={handleResetTimer}>Reset Timer</button>

			{/* Pass the resetKey as the key prop to the child component */}
			<Timer key={resetKey} />
		</div>
	);
}

export default App;
```

**How it works:**

1.  **`resetKey` state in Parent:** The `App` component holds a `resetKey` in its state, initialized to `0`.
2.  **`key={resetKey}` on Child:** The `Timer` component is rendered with `key={resetKey}`.
3.  **Button Click (`handleResetTimer`):** When the "Reset Timer" button is clicked, `setResetKey` is called, incrementing `resetKey` (e.g., from `0` to `1`, then to `2`, etc.).
4.  **React Detects Key Change:** Because the `key` prop of the `Timer` component has changed, React sees it as a _different_ component instance at that position in the DOM tree.
5.  **Unmount and Remount:** React unmounts the old `Timer` component (running its `useEffect` cleanup function) and then mounts a brand new `Timer` component.
6.  **State Reset:** The new `Timer` instance starts with its `useState(0)` initialized to `0`, effectively resetting its internal `count` state.

### When to use this approach:

-   When the child component has complex internal state that you want to completely discard and reinitialize.
-   When the child component performs side effects on mount (e.g., fetching data, setting up event listeners, timers) that need to be re-run from scratch.
-   When a "hard reset" is desired, rather than just updating props.

### Alternatives (and why `key` is often preferred for a _full reset_):

1.  **Passing props to reset:**

    -   You could pass a prop (e.g., `shouldReset: boolean`) from the parent to the child.
    -   The child component would then use a `useEffect` (or `componentDidUpdate` in class components) to watch for changes in this prop and manually reset its own state.
    -   **Downside:** This requires the child component to implement the reset logic, making it less truly "reset" from the parent's perspective. It also might not clear all internal state like `key` does, especially if the child component has complex state managed by multiple `useState` calls or if it involves side effects that need full re-initialization.

    ```jsx
    // Child component (less effective for full reset)
    function Timer({ triggerReset }) {
    	const [count, setCount] = useState(0);

    	useEffect(() => {
    		// This watches for the triggerReset prop to change
    		// and manually resets the count
    		setCount(0);
    		console.log('Timer state reset via prop.');
    	}, [triggerReset]); // Dependency on triggerReset

    	// ... rest of Timer component
    }

    // Parent component
    function App() {
    	const [resetTrigger, setResetTrigger] = useState(false);

    	const handleResetTimer = () => {
    		setResetTrigger((prev) => !prev); // Toggle the prop to trigger effect
    	};

    	return (
    		<div>
    			<button onClick={handleResetTimer}>Reset Timer (Prop)</button>
    			<Timer triggerReset={resetTrigger} />
    		</div>
    	);
    }
    ```

    While this works for simple state, it doesn't cause a full unmount/mount cycle, meaning `useEffect` with an empty dependency array (or `componentDidMount`) won't fire again.

2.  **Lifting State Up:**
    -   If the state truly belongs to the parent and the child is merely displaying it, then move the state from the child to the parent. The parent can then manipulate the state directly.
    -   **Downside:** This changes the architectural design. If the child genuinely has its own independent, encapsulated state that you just occasionally want to blast away, `key` is more appropriate than forcing the parent to manage all that state.

For a true "reset" that reinitializes the child component as if it were rendered for the first time, changing the `key` prop is the most direct and idiomatic React approach.
