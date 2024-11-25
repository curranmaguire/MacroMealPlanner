namespace backend.Models;

public class RecipeModel
{
    public string name { get; set; }
    public string description { get; set; }

    public string img { get; set; }

    public List<string> ingredients { get; set; }

    public List<string> steps { get; set; }
}