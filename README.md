# Next.js 15 App Router Unexpected Behavior with Dynamic Routes

This repository demonstrates an unexpected behavior encountered in Next.js 15's App Router when using dynamic routes and data fetching.

## Description

A simple Next.js 15 application using the App Router was created.  The expectation was that the dynamic route `/post/[id]` would correctly fetch and display data based on the `id` parameter. However, the application behaves unexpectedly, possibly failing to fetch data or rendering incorrectly.

## Steps to Reproduce

1. Clone the repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Navigate to `/post/1` (or any other dynamic route). Observe the unexpected behavior.

## Expected Behavior

The application should fetch and display the correct data corresponding to the `id` parameter in the URL.

## Actual Behavior

The application displays an unexpected result, which may include:
* A blank page
* An error message
* Incorrect data display

## Additional Context

Add any other context about the problem here.
