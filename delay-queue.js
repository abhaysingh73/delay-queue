class DelayQueue {
    constructor() {
        this.taskQueue = [];
        this.running = false;
    }

    // Add task with delay
    add(task, delay) {
        this.taskQueue.push({ task, delay });
    }

    // Execute the tasks with delay
    async run() {
        if (this.running) {
            console.log('Queue is already running');
            return;
        }

        this.running = true;
        console.log('Execution started');

        for (let i = 0; i < this.taskQueue.length; i++) {
            const { task, delay } = this.taskQueue[i];
            
            try {
                console.log(`Running task ${i + 1} with ${delay}ms delay`);
                await new Promise(resolve => setTimeout(resolve, delay));
                task();
            } catch (error) {
                console.error(`Error in task ${i + 1}:`, error);
            }
        }

        // Optional: clear the queue after execution or keep tasks for future runs
        this.taskQueue = [];

        console.log('Execution ended');
        this.running = false;
    }
}
