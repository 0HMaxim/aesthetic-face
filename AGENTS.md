# Aesthetic Face — Development Guidelines

## Project

Aesthetic Face Beauty Salon is a modern, multilingual beauty salon website.

The project is built with:

- React
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Firebase
- React Router
- i18next / react-i18next
- Iconify

Supported languages:

- Ukrainian (UA)
- Russian (RU)
- German (DE)
- English (EN)

## Main Goals

- Create a modern, premium and elegant beauty salon website.
- Keep the UI clean, responsive and accessible.
- Use smooth and subtle animations.
- Build a scalable architecture that is easy to maintain.
- Make services and other content dynamic and manageable through Firebase.

## Architecture

Use reusable components instead of duplicating UI code.

Organize the project into clear areas such as:

- components
- pages
- layouts
- hooks
- services
- types
- utils
- firebase
- i18n

Keep business logic separate from UI components whenever possible.

## Services

Services must be dynamic.

Do not hardcode individual services into the application.

Services should be stored in Firebase and loaded dynamically.

Each service should have its own URL based on its slug.

Example:

- /services
- /services/laser-hair-removal
- /services/microneedling
- /services/facial-treatments

Adding a new service should not require changing the source code.

## Firebase

Firebase is used as the backend and content database.

Content should be structured so that it can be extended in the future.

Avoid tightly coupling UI components directly to Firebase queries.

Firebase-related logic should be placed in dedicated services or hooks.

## Internationalization

The website supports:

- UA
- RU
- DE
- EN

Do not hardcode user-facing text directly inside components when it should be translated.

Use i18next for translations.

Dynamic Firebase content should also support all required languages.

## Styling

Use Tailwind CSS for styling.

Prefer reusable Tailwind-based components over large custom CSS files.

Keep spacing, typography, borders, shadows and responsive behavior consistent throughout the application.

The design should feel:

- premium
- elegant
- modern
- minimal
- clean

Avoid excessive visual effects.

## Animations

Use Framer Motion for animations.

Animations should be:

- smooth
- subtle
- purposeful
- performant

Use animations for:

- page transitions
- section reveals
- cards
- images
- buttons
- hover interactions

Do not overuse animations.

Respect `prefers-reduced-motion` where appropriate.

## Icons

Use Iconify for icons.

Do not introduce multiple icon libraries without a clear reason.

Keep icon styles visually consistent.

## TypeScript

Use TypeScript strictly.

Avoid `any` unless there is a strong technical reason.

Create reusable types and interfaces for shared data models.

Keep Firebase data models typed.

## React

Use functional components and React hooks.

Keep components small and focused on a single responsibility.

Avoid unnecessary prop drilling.

Create reusable components when the same UI pattern appears multiple times.

## Routing

Use React Router for application routing.

Routes should be clean and SEO-friendly.

Service pages should be generated dynamically from the service slug.

## Code Quality

Follow ESLint rules.

Prefer readable and maintainable code over overly clever solutions.

Do not create unnecessary abstractions.

Before introducing a new dependency, consider whether the existing project tools can solve the problem.

Do not modify unrelated parts of the project when implementing a feature.

## Responsive Design

The website must work correctly on:

- mobile
- tablet
- desktop
- large desktop screens

Use Tailwind responsive utilities.

Always consider mobile layouts when creating new components.

## SEO

Each service page should have:

- unique title
- meta description
- semantic headings
- descriptive URLs
- image alt text

## Important Rule

Before creating a new component, hook, utility or dependency, check whether an existing solution already exists in the project.

Prefer extending existing architecture over creating duplicate solutions.

## Dynamic Multilingual Content

All editable website content must be stored in Firebase and must not be hardcoded in React components.

The website supports four languages:

- Ukrainian (ua)
- Russian (ru)
- German (de)
- English (en)

Each editable content field must support all four languages.

Example:

title:
ua: ...
ru: ...
de: ...
en: ...

description:
ua: ...
ru: ...
de: ...
en: ...

Administrators must be able to edit the content for each language independently without modifying the source code.

Static UI labels may use i18next, but business content such as services, descriptions, prices, employees, FAQ, blog posts and general information must be managed through Firebase.