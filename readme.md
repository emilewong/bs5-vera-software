# Vera Website

A modern, responsive business website built with Bootstrap 5 for software solutions companies. Features a dark-themed design with interactive elements, modals, and a professional layout that can be easily customized for any business niche.

![Vera Website Screenshot](./images/screen.png)

## Project Overview

Vera Website is a Bootstrap 5 template designed specifically for software solution providers. It includes pre-built sections for showcasing services, projects, pricing, and company expertise, along with interactive elements like modals and scroll animations.

## Key Features

- Dark theme with high-contrast UI elements for better readability
- Fully responsive design (mobile-first approach)
- Dynamic text replacement animation in header
- Scroll-triggered navbar styling
- Video modal with custom play button
- Interactive project portfolio with modals
- Pricing grid with call-to-action buttons
- Newsletter subscription form
- Social media integration
- Font Awesome icons throughout
- Sass architecture for easy customization

## Prerequisites

Before you begin, ensure you have met the following requirements:
- [Node.js](https://nodejs.org/en/) (v14.0.0 or later) installed
- npm (v6.0.0 or later) installed
- Basic knowledge of HTML, CSS, and JavaScript
- Familiarity with Sass preprocessor

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/vera-website.git
   cd vera-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Build CSS from Sass:
   ```bash
   npm run sass:build
   ```

4. Start the development server:
   ```bash
   npm start
   ```

The website will be available at [http://localhost:8080](http://localhost:8080).

## Available Scripts

In the project directory, you can run:

- `npm run sass:build` - Compiles Sass files to CSS
- `npm run sass:watch` - Watches Sass files for changes and recompiles automatically
- `npm start` - Starts a local development server using http-server

## Customization

### Changing Colors

1. Modify Bootstrap variables in `scss/bootstrap.scss`
2. Add custom color variables in `scss/styles.scss`
3. Recompile Sass with `npm run sass:build`

### Adding Content

- Update text content in `index.html` and `privacy.html`
- Replace images in the `images/` directory
- Modify navigation links in the navbar section
- Update project details in the projects section

### Custom Styles

Add your custom CSS/Sass in `scss/styles.scss` for any modifications beyond Bootstrap variables.

## Project Structure

```
vera-website/
├── images/            # All image assets
├── js/                # JavaScript files
│   ├── script.js      # Custom JavaScript
│   └── vendor files   # Bootstrap and other libraries
├── scss/              # Sass source files
│   ├── bootstrap.scss # Bootstrap variables
│   └── styles.scss    # Custom styles
├── css/               # Compiled CSS (auto-generated)
├── index.html         # Main website file
├── privacy.html       # Privacy policy page
└── package.json       # Project dependencies and scripts
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Acknowledgements

- [Bootstrap](https://getbootstrap.com/)
- [Sass](https://sass-lang.com/)
- [Font Awesome](https://fontawesome.com/)
- [ReplaceMe.js](https://github.com/fooplugins/replaceme)
