using Microsoft.AspNetCore.Mvc.RazorPages;
using PortfolioWeb.Models;

namespace PortfolioWeb.Pages
{
    public class IndexModel : PageModel
    {
        public List<Skill> Skills { get; set; } = new();
        public List<Project> Projects { get; set; } = new();

        public void OnGet()
        {
            // Initialize Skills
            Skills = new List<Skill>
            {
                new() { Name = "C#" },
                new() { Name = "ASP.NET" },
                new() { Name = "SQL" },
                new() { Name = "JavaScript" },
                new() { Name = "HTML5" },
                new() { Name = "CSS3" }
            };

            // Initialize Projects
            Projects = new List<Project>
            {
                new()
                {
                    Id = 1,
                    Title = "Student Image Manager",
                    Description = "A web app for managing student images with login/signup functionality.",
                    ImagePath = "/images/age.png",
                    ProjectUrl = "#"
                },
                new()
                {
                    Id = 2,
                    Title = "SQL Challenge Toolkit",
                    Description = "Interactive SQL practice platform inspired by HackerRank challenges.",
                    ImagePath = "/images/calc.png",
                    ProjectUrl = "#"
                },
                new()
                {
                    Id = 3,
                    Title = "Portfolio Website",
                    Description = "Responsive portfolio showcasing skills, projects, and achievements.",
                    ImagePath = "/images/crud.png",
                    ProjectUrl = "#"
                },
                new()
                {
                    Id = 4,
                    Title = "Green Project",
                    Description = "Eco-friendly web app design.",
                    ImagePath = "/images/green.jpg",
                    ProjectUrl = "#"
                },
                new()
                {
                    Id = 5,
                    Title = "Snake Game",
                    Description = "Classic snake game built with JavaScript.",
                    ImagePath = "/images/snake.png",
                    ProjectUrl = "#"
                },
                new()
                {
                    Id = 6,
                    Title = "Todo App",
                    Description = "Simple task manager with CRUD functionality.",
                    ImagePath = "/images/todo.png",
                    ProjectUrl = "#"
                }
            };
        }
    }
}
