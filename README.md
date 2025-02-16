# Bridge - Intelligent Talent Management Platform

Bridge is a modern, responsive web application built with Next.js, TypeScript, and Tailwind CSS that helps companies build and manage high-performing remote teams.

## Project Structure

```
bridge/
├── src/
│   ├── app/                    # Next.js app directory
│   │   ├── (marketing)/       # Marketing pages routes
│   │   └── layout.tsx         # Root layout
│   ├── components/            # React components
│   │   ├── global/           # Global components
│   │   ├── marketing/        # Marketing page components
│   │   └── ui/              # Reusable UI components
│   ├── constants/            # Constants and configuration
│   ├── lib/                  # Utility functions and libraries
│   ├── styles/              # Global styles
│   ├── types/               # TypeScript type definitions
│   └── utils/               # Helper functions
├── public/                  # Static assets
│   ├── images/             # Image assets
│   └── icons/              # Icon assets
└── package.json            # Project dependencies
```

## Key Features

- Modern, responsive design with dark mode support
- Component-based architecture using React and TypeScript
- Tailwind CSS for styling with custom theme configuration
- Dynamic page transitions and animations
- SEO optimized with Next.js metadata
- Modular and maintainable code structure

## Component Structure

### Marketing Components
- `Hero`: Main landing section
- `Features`: Key platform features
- `Roles`: Available professional roles
- `HowItWorks`: Process explanation
- `Languages`: Language support features
- `Analysis`: Performance metrics
- `Testimonials`: Client testimonials
- `Companies`: Partner companies
- `Pricing`: Pricing plans
- `CTA`: Call-to-action sections

### UI Components
- `Button`: Custom button component
- `Container`: Animated container wrapper
- `MagicCard`: Gradient card component
- `Particles`: Animated background particles

## Styling

The project uses Tailwind CSS with a custom theme configuration. Key color schemes:
- Primary: `#106861` (Bridge Green)
- Secondary: `#0e8177` (Bridge Teal)
- Background gradients and overlays

## How to Edit

### Adding New Components
1. Create new component file in appropriate directory
2. Import required dependencies
3. Define component interface/types
4. Export component
5. Import and use in desired location

Example:
```typescript
import { FC } from 'react';
import { ComponentProps } from '@/types';

const NewComponent: FC<ComponentProps> = ({ prop1, prop2 }) => {
    return (
        // Component JSX
    );
};

export default NewComponent;
```

### Modifying Styles
1. Use Tailwind classes for styling
2. Custom styles can be added in `src/styles/globals.css`
3. Theme configuration in `tailwind.config.js`

### Adding New Pages
1. Create new page in `src/app` directory
2. Use existing components or create new ones
3. Update navigation if needed

## Development

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

## Best Practices

1. Follow TypeScript conventions
2. Use proper component typing
3. Maintain consistent file structure
4. Comment complex logic
5. Use meaningful variable names
6. Keep components modular and reusable
7. Follow Tailwind CSS class ordering
8. Optimize images and assets
9. Use proper semantic HTML
10. Ensure responsive design

## Performance Optimization

- Use Next.js Image component for images
- Implement proper lazy loading
- Optimize component re-renders
- Minimize bundle size
- Use proper caching strategies

## Deployment

The application can be deployed to any platform that supports Next.js applications:
- Vercel (recommended)
- Netlify
- AWS
- Digital Ocean
- Custom server

## Support

For any questions or support, contact:
- Email: contact@bridgetalent.com
- Website: https://bridge.work

## License

Copyright © 2025 Bridge. All rights reserved.
