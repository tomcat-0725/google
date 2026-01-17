
# Blueprint: Dopamine Flow

## 1. Overview

**"Dopamine Flow"** is a web application designed to deliver a continuous stream of thought-provoking and curiosity-inducing content. The primary goal is to create a captivating and immersive user experience that encourages exploration and learning through a visually stimulating, infinitely scrolling feed. By presenting users with a series of intriguing questions, scientific oddities, and paradoxical statements, the app aims to trigger a sense of wonder and intellectual curiosity, effectively creating a "dopamine flow."

### Core Features:

*   **Infinite Content Stream:** An endless feed of content cards that dynamically load as the user scrolls.
*   **Intriguing Content:** Each card features a unique, mind-bending question or statement.
*   **Visually Rich:** Abstract, high-quality background images for each card to enhance the aesthetic appeal.
*   **Modern & Immersive UI:** A dark-themed, neon-accented design that creates a focused and engaging atmosphere.
*   **Responsive Design:** A fully responsive layout that ensures a seamless experience across all devices.

## 2. Design & Style

The design of "Dopamine Flow" is modern, minimalist, and immersive, with a strong emphasis on visual storytelling.

*   **Color Palette:**
    *   **Background:** A deep, dark slate grey (`#121212`) to create a sense of depth and focus.
    *   **Text:** A clean, legible white (`#FFFFFF`) for maximum contrast.
    *   **Accents:** Vibrant neon colors (e.g., electric blue `#00FFFF`, magenta `#FF00FF`) for interactive elements and highlights to create a futuristic and energetic feel.
*   **Typography:**
    *   **Headings:** A bold, sans-serif font like **Montserrat** or **Poppins** for a modern and impactful look.
    *   **Body:** A clean, highly readable sans-serif font like **Lato** or **Open Sans**.
*   **Layout:**
    *   A single-column layout for the content stream to keep the user focused.
    *   Content cards will have a subtle "lifted" effect using a soft, multi-layered drop shadow to create a sense of depth.
*   **Imagery:**
    *   Each content card will feature a high-quality, abstract image that is thematically related to the text but open to interpretation. This will be sourced from royalty-free image services like Unsplash or Pexels.

## 3. Technical Implementation

"Dopamine Flow" will be built as a framework-less, modern web application, leveraging the latest web standards for performance and maintainability.

### 3.1. File Structure

```
.
├── index.html
├── style.css
└── main.js
```

### 3.2. HTML (`index.html`)

*   A semantic HTML5 structure.
*   A main container element (`<main>`) to hold the stream of content cards.
*   A `<template>` element for the content card structure, which will be efficiently cloned by JavaScript to create new cards.

### 3.3. CSS (`style.css`)

*   **Modern CSS Features:**
    *   **CSS Variables:** For easy management of the color palette and other themeable properties.
    *   **Flexbox & Grid:** For creating a robust and responsive layout.
    *   **`@container` Queries:** (If applicable) To create components that respond to their container's size.
    *   **`:has()` Selector:** For more advanced styling based on child elements.
*   **Styling Details:**
    *   Dark theme with neon accents.
    *   Smooth scrolling and subtle animations for a polished feel.
    *   Responsive design using media queries to adapt to different screen sizes.

### 3.4. JavaScript (`main.js`)

*   **ES Modules:** The code will be organized into modules for better maintainability.
*   **Infinite Scroll:**
    *   An `IntersectionObserver` will be used to detect when the user has scrolled near the end of the content feed.
    *   When triggered, a function will be called to fetch and render new content cards.
*   **Dynamic Content Loading:**
    *   Content (text and image URLs) will be stored in an array of objects.
    *   A function will dynamically create new card elements from the `<template>`, populate them with content, and append them to the DOM.
*   **Performance:**
    *   Efficiently clone and append elements to minimize DOM manipulation.
    *   Lazy loading of images to improve initial page load time.

## 4. New Features (v2)

To enhance user engagement and modernize the application, the following features will be added:

### 4.1. Interactive Card Types

*   **Poll Cards:** Multiple-choice questions where users can vote and see the results.
*   **"Did You Know?" Cards:** Cards that reveal an interesting fact upon being clicked, using a flip animation.
*   **Quote Cards:** Displaying inspiring quotes with a "copy to clipboard" feature.

### 4.2. Enhanced UI/UX

*   **Card Flip Animation:** A 3D flip animation for the "Did You Know?" cards.
*   **Like & Share Buttons:** Each card will have a like button with a counter and a share button for social media.
*   **Glassmorphism Effect:** A frosted glass effect will be applied to the header and cards for a modern, layered look.

### 4.3. New Content Category

*   **Visual Illusions:** Cards featuring mind-bending optical illusions.
