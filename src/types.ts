// This file contains the TypeScript type definitions for every task.

// The Task interface defines the structure of a task object.
export interface Task {
    // ID of the task
    id: number

    // Name of the task
    title: string

    // Boolean representing the task state: true  → completed, false → pending
    state: boolean
}