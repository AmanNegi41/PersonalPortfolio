# Aman Negi Portfolio - ASP.NET Core

A modern portfolio website built with ASP.NET Core 8 and Razor Pages.

## Project Structure

```
PortfolioWeb/
├── Pages/
│   ├── _Layout.cshtml       # Master layout template
│   ├── Index.cshtml         # Home page view
│   └── Index.cshtml.cs      # Page model with data
├── Models/
│   ├── Project.cs           # Project data model
│   └── Skill.cs             # Skill data model
├── wwwroot/
│   ├── css/
│   │   └── styles.css       # Optimized stylesheet
│   ├── js/
│   │   └── script.js        # Client-side interactivity
│   └── images/              # Project images
├── Program.cs               # ASP.NET Core entry point
├── appsettings.json         # Configuration
└── PortfolioWeb.csproj      # Project file

```

## Features

- ✅ **Responsive Design** - Works on mobile, tablet, and desktop
- ✅ **Optimized Styling** - CSS custom properties and efficient selectors
- ✅ **Lazy Loading** - Images load on demand for better performance
- ✅ **Data-Driven** - Projects and skills managed from C# backend
- ✅ **Modern Stack** - ASP.NET Core 8 with Razor Pages
- ✅ **SEO Friendly** - Meta tags and semantic HTML

## Getting Started

### Prerequisites
- .NET 8 SDK or later installed
- Visual Studio, VS Code, or any text editor

### Installation

1. Navigate to the project directory:
   ```bash
   cd PortfolioWeb
   ```

2. Restore dependencies:
   ```bash
   dotnet restore
   ```

3. Run the application:
   ```bash
   dotnet run
   ```

4. Open in browser: `https://localhost:5001`

## Development

To make changes to projects or skills, edit:
- **Projects**: `Pages/Index.cshtml.cs` - `OnGet()` method
- **Skills**: `Pages/Index.cshtml.cs` - `OnGet()` method
- **Styling**: `wwwroot/css/styles.css`
- **Scripts**: `wwwroot/js/script.js`
- **Layout**: `Pages/_Layout.cshtml`
- **Content**: `Pages/Index.cshtml`

## Building for Production

```bash
dotnet publish -c Release -o ./publish
```

The optimized files will be in the `publish/` folder.

## Technologies

- ASP.NET Core 8
- Razor Pages
- HTML5 / CSS3
- JavaScript (Vanilla)

## License

© 2026 Aman Negi. All rights reserved.
