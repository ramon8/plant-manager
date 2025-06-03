# Copilot Instructions for Plant Manager 🌱

<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

This is a comprehensive home plant management application built with React, TypeScript, and Vite. The app helps users track their plant collection, manage care schedules, and become better plant parents.

## Project Context
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Styled-components for CSS-in-JS
- **Purpose**: Home plant management and care tracking application

## Application Features & Domain

### Core Entities
- **Plant**: Individual plants with profiles, photos, care requirements, and history
- **Care Schedule**: Watering, fertilizing, repotting, and other care tasks
- **Location**: Room/area tracking for environmental monitoring
- **Care Log**: Historical record of care activities
- **Reminders**: Notifications for upcoming care tasks

### Key Functionality Areas
1. **Plant Collection Management**: Add/edit plant profiles, photos, categorization
2. **Care Scheduling**: Custom watering schedules, care reminders, calendar views
3. **Location Tracking**: Room mapping, light conditions, environmental factors
4. **Care Intelligence**: Plant-specific tips, seasonal advice, problem diagnosis
5. **Analytics**: Care statistics, health dashboards, progress tracking

## Coding Guidelines

### React & TypeScript Best Practices
- Use functional components with React hooks
- Implement proper TypeScript interfaces for all data models
- Use modern ES6+ syntax and async/await for API calls
- Create custom hooks for plant care logic and data management
- Implement proper error handling and loading states

### Styled Components Guidelines
- Use styled-components for all styling (no CSS files)
- Follow the component structure pattern for organization
- Create theme constants for consistent colors and spacing
- Use TypeScript interfaces for styled component props
- Implement responsive design with styled-components media queries

### Component Structure Pattern
Each component should follow this exact structure:
```
ComponentName/
├── ComponentName.tsx        # Main component logic
├── ComponentName.styles.tsx # Styled components and styling
├── ComponentName.types.tsx  # TypeScript interfaces and types
└── index.ts                # Export barrel file
```

### Styling Best Practices
- Define theme colors, spacing, and breakpoints in a theme file
- Use semantic naming for styled components (e.g., Container, Wrapper, Title)
- Implement responsive design using styled-components media queries
- Create reusable styled components for common UI patterns
- Use TypeScript interfaces for styled component props

### Component Architecture
- **Pages**: Main views (Dashboard, Plant List, Plant Detail, Care Calendar)
- **Components**: Reusable UI components (PlantCard, CareSchedule, ReminderList)
- **Hooks**: Custom hooks for plant data, care scheduling, notifications
- **Utils**: Helper functions for date calculations, care frequency logic
- **Types**: TypeScript interfaces for Plant, CareTask, Location, etc.

### Data Management
- Use React Context or state management for plant data
- Implement local storage for offline functionality
- Structure data models for plants, care schedules, and user preferences
- Handle date/time calculations for care scheduling

### UI/UX Considerations
- Design with plant enthusiasts in mind - use green/natural color schemes
- Implement responsive design for mobile plant care on-the-go
- Use intuitive icons for different plant types and care actions
- Create accessible interfaces with proper ARIA labels
- Implement smooth transitions and micro-interactions

### Plant Care Domain Knowledge
- Support various plant types: houseplants, succulents, herbs, vegetables
- Implement different watering frequencies (daily, weekly, bi-weekly, monthly)
- Account for seasonal care variations
- Include common plant problems and solutions
- Support both common and scientific plant names

## File Organization
- `src/components/` - Reusable UI components (each in its own folder)
- `src/pages/` - Main application views (each in its own folder)
- `src/hooks/` - Custom React hooks for plant logic
- `src/types/` - Global TypeScript interfaces and types
- `src/utils/` - Helper functions and utilities
- `src/data/` - Static data (plant care tips, common plants database)
- `src/assets/` - Images, icons, and other static assets
- `src/theme/` - Styled-components theme configuration
- `src/styles/` - Global styles and styled-components utilities

## Component Naming Conventions
- Use descriptive names that reflect plant care concepts
- Examples: `PlantProfile`, `WateringSchedule`, `CareReminder`, `PlantGallery`
- Prefix utility components with descriptive prefixes: `PlantCard`, `CareButton`
