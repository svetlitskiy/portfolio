---
title: 'Test Assignment: Thoughts, Approach, and Implementation'
date: '2023-10-01'
---

# Test Assignment: Thoughts, Approach, and Implementation

## The Task and My Thoughts

Recently, I went through an interview at a company, and they sent me a small test assignment. I happened to have a free day, so I decided to approach it seriously—as if it were a real work task.

### About the Assignment

The assignment involved working with a task management application (Task Manager) built with React, TypeScript, and Tailwind CSS. The main requirements included:

- Fixing bugs:

  - The task filter was not working correctly.
  - Deleting a task did not immediately update the interface.
  - There were issues with style consistency and TypeScript errors.

- Code improvements: Refactoring to improve readability and maintainability.

- Additional enhancements: Adding the ability to save tasks to local storage, improving UI/UX, setting up CI/CD, and writing tests.

A detailed description of the assignment can be found in [this repository](https://github.com/svetlitskiy/react-take-home-exercise).

The project itself is very simple: a form for adding tasks, a table with a list and filtering, and a delete button. In such tasks, the focus is more on the style of work, PR formatting, commits, and code organization rather than the complexity of the implementation.

In real work, code is reviewed by other team members, so it's important to format it in a way that minimizes review time. It's also important to maintain a history of changes with links to tasks, so it's always clear why and by whom a particular change was made.

## Solution Plan

I decided to tackle the assignment in several stages, breaking the changes into logical blocks. Each stage was formatted into a separate PR for easier review.

For order and good practice, I created [an issue for each stage in GitHub Issues](https://github.com/svetlitskiy/react-take-home-exercise/issues).

### 1. Organizing the Project

First, I added linters, configured TypeScript, and set up ESLint. These are basic steps that immediately bring the code into order, prevent errors, and simplify further work.

PR: [Setting up Linters and TypeScript](https://github.com/svetlitskiy/react-take-home-exercise/pull/1)

### 2. Setting Up Deployment and CI/CD

The next step was to set up automatic build checks for each PR and deployment to GitHub Pages from the main branch. This is useful both for testing changes and for conveniently viewing the results.

PR: [Setting Up CI/CD and Deployment](https://github.com/svetlitskiy/react-take-home-exercise/pull/4)

### 3. Fixing Bugs

The assigned bugs were not complex. Judging by the code and comments, they were left intentionally (which makes sense for a test assignment). The filter had mixed-up styles, and the functions were working slightly incorrectly.

I fixed:

- The incorrect filter behavior.
- UI updates after task deletion (previously, it happened with a delay).
- Tailwind CSS style inconsistencies.
- TypeScript errors and missing types.

I won't go into too much detail here, as I think the code changes are clearer than a verbal description.

PR: [Fixing Bugs](https://github.com/svetlitskiy/react-take-home-exercise/pull/7)

### 4. Adding Persistent Task Storage

I decided to use IndexedDB instead of LocalStorage, as it is a more suitable solution:

- IndexedDB is asynchronous and does not block the main thread.
- There are no storage size limitations.
- It is better suited for handling large volumes of data.

In my opinion, IndexedDB is undeservedly underused in frontend development. In 2025, we still store data in the store and load it from the API with every request, even though browsers have built-in storage that can be used effectively.

PR: [Adding IndexedDB](https://github.com/svetlitskiy/react-take-home-exercise/pull/9)

### 5. Writing Tests

I usually prefer integration and e2e tests over unit tests for every component. Testing components separately often boils down to checking for class names and button clicks, which has little to do with real business logic. Such tests create maintenance overhead without providing much value.

It's much more important to cover services and complex logic with tests. In this case, I wrote:

- Unit tests for components (to show that I know how to write them—after all, this is a test assignment).
- An integration test for the service that works with IndexedDB. I had to add libraries to emulate the IndexedDB API in tests.

PR: [Adding Tests](https://github.com/svetlitskiy/react-take-home-exercise/pull/11)

## Conclusion

In the end, I approached the task as if I were working on a real project: I structured the changes, formatted a chain of PRs for easy review, fixed bugs, added IndexedDB, and wrote tests. This approach not only helps in understanding the code faster but also makes the development process more transparent.

If you're interested, you can check out the repository with open PRs.
