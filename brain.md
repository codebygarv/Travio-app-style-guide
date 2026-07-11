# Travio App Context & Specifications (Brain)

## 1. App Overview
**Name**: Travio
**Core Concept**: An AI-powered travel suggestion and companion application.
**Design Language**: Soothing Sage Green palette paired with crisp slate typography, matching the provided visual reference images.

## 2. Core Features
- **Authentication**: Direct login/signup using Google, Facebook, or traditional Email/Password.
- **Location Awareness**: Fetches the user's current location to instantly provide nearby famous attractions.
- **AI-Driven Suggestions**: The app's primary value proposition is totally AI-driven travel suggestions, helping users find the best places tailored to their preferences.

## 3. App Architecture & Navigation
The app utilizes a standard 5-tab bottom navigation bar for intuitive mobile traversal:

1. **Home Tab**
   - Automatically fetches the user's location.
   - Displays famous locations, top recommendations, and nearby attractions.
2. **Explore / Discover Tab**
   - Related to Home but focused on broader search, categories, and deep-diving into specific destinations (like the "Explore Sentosa" screen in the reference).
3. **AI Chat Tab** (Center Tab)
   - The core conversational interface where users chat with the AI to get customized travel itineraries and suggestions.
4. **Favorites Tab**
   - A grid or list of "Best Places" and locations the user has saved or liked (matching the "Reviews" / "Best Places" screens).
5. **Profile Tab**
   - User management, showing following/followers (if social), edit profile, settings, and logout options.

## 4. Visual Reference Guidelines
- **Cards & Layouts**: Use rounded, elevated cards for locations with overlapping images and text (as seen in the reference).
- **Buttons**: The main action button is the `brand-action` (Sage Green) with full border radius (`rounded-full`).
- **Inputs**: Clean, outlined inputs with the green border on focus (for the Edit Profile and Auth screens).
- **Badges**: Use pill-shaped badges for tags, categories, or notifications.
