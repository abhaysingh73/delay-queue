# delay-queue

A small tool simulating a job queue using `setTimeout`, `Promises`, and `async/await` to delay task execution in Node.js.

## Installation

You can include `delay-queue.js` in your project directly by downloading the file, or if you are using npm or yarn, install it as follows:

### Option 1: Install via GitHub (npm or yarn)

You can install it directly from GitHub by using the following command:

**Using npm:**

```bash
npm install github:abhaysingh73/delay-queue
```

**Using yarn:**

```bash
npm install github:abhaysingh73/delay-queue
```
### Option 2: Manual Download
If you prefer, you can also manually download the delay-queue.js file and include it in your project.

## Usage

### Example 1: Basic Usage

```js
const DelayQueue = require('delay-queue');
const delayQueue = new DelayQueue();

// Add tasks with a specified delay
delayQueue.add(() => console.log('Task 1'), 1000);  // Executes after 1 second
delayQueue.add(() => console.log('Task 2'), 2000);  // Executes after 2 seconds
delayQueue.add(() => console.log('Task 3'), 1500);  // Executes after 1.5 seconds

// Run the queue
delayQueue.run();
```
### Example 2: Handling Errors in Tasks
You can catch errors within tasks and ensure that the queue continues running even if one task fails:
```js
const DelayQueue = require('delay-queue');
const delayQueue = new DelayQueue();

// Add tasks with a specified delay
delayQueue.add(() => console.log('Task 1'), 1000);
delayQueue.add(() => { throw new Error('Error in task 2'); }, 1000);  // Will catch error
delayQueue.add(() => console.log('Task 3'), 1000);

delayQueue.run();
```

### Example 3: Preventing Task Queue from Adding New Tasks During Execution
If you want to ensure that tasks cannot be added while the queue is running, you can simply check the running flag or modify the add method to handle this case:
```js
const delayQueue = new DelayQueue();

// Add tasks before running
delayQueue.add(() => console.log('Task 1'), 1000);

// Prevent new tasks from being added while running
if (!delayQueue.running) {
  delayQueue.add(() => console.log('Task 2'), 2000); // Will be ignored if run is called
}

delayQueue.run();
```
## Methods
`add(task, delay)`: Adds a task to the queue. The task is a function, and delay is the time to wait (in milliseconds) before executing the task.
`run()`: Starts executing tasks in the queue. Each task will be executed in the order it was added, with the specified delay between them.

## License
MIT License
