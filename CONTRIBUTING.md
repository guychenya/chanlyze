# Contributing to Chanlyze

## Quick Start

1. Fork the repository on GitHub
2. Make changes via GitHub web interface or locally
3. Submit a pull request

## Local Development (Optional)

If you want to test locally before pushing:

```bash
# Clone your fork
git clone https://github.com/YOUR_USERNAME/chanlyze.git
cd chanlyze

# Install dependencies
npm install

# Create .env file
cp .env.example .env
# Add your YouTube API key

# Start dev server
npm run dev
```

## Making Changes via GitHub

### Web Interface (No Local Setup)

1. Navigate to file on GitHub
2. Click pencil icon (Edit)
3. Make changes
4. Commit directly or create branch
5. Create pull request

### Local Development

1. Create feature branch: `git checkout -b feature/description`
2. Make changes
3. Test locally: `npm run dev`
4. Run linter: `npm run lint`
5. Commit: `git commit -m "feat: description"`
6. Push: `git push origin feature/description`
7. Create pull request on GitHub

## Code Standards

### Linting

```bash
# Run linter
npm run lint

# Fix auto-fixable issues
npm run lint -- --fix
```

All code must pass ESLint checks before committing.

### Code Style

- Use functional React components
- Use React Hooks for state management
- Follow existing file structure
- Keep components small and focused
- Add comments for complex logic

## Making Changes

### Branch Naming

- `feature/description` - New features
- `fix/description` - Bug fixes
- `docs/description` - Documentation updates
- `refactor/description` - Code refactoring

### Commit Messages

Use clear, descriptive commit messages:

```
feat: add channel comparison feature
fix: resolve API quota calculation bug
docs: update setup instructions
refactor: simplify video analysis logic
```

## Testing Changes

1. Test locally with `npm run dev`
2. Verify all features work with real YouTube channels
3. Check API quota usage is reasonable
4. Test on different screen sizes
5. Run linter: `npm run lint`
6. Build successfully: `npm run build`

## Pull Request Process

1. Update documentation if needed
2. Ensure all tests pass
3. Update README.md with any new features
4. Submit PR with clear description of changes
5. Link any related issues

## API Usage Guidelines

- Minimize API calls where possible
- Use caching for repeated requests
- Respect YouTube API quota limits
- Handle errors gracefully
- Show loading states for API calls

## Questions?

Open an issue for discussion before starting major changes.

## Deployment

All changes pushed to main branch auto-deploy to Netlify. Preview deployments are created for pull requests.
