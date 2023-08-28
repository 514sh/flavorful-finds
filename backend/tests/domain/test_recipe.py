from recipefinder.domain.recipe import Recipe
import pytest

@pytest.fixture
def recipe():
  recipe_dict = {
    "id": 1,
    "title": "Classic Spaghetti Carbonara",
    "ingredients": [
      "200g spaghetti",
      "100g pancetta",
      "2 large eggs",
      "50g Pecorino cheese",
      "Salt and black pepper",
      "Fresh parsley"
    ],
    "instructions": [
      "Boil the spaghetti until al dente.",
      "In a separate pan, fry pancetta until crispy.",
      "In a bowl, whisk eggs, grated Pecorino cheese, salt, and pepper.",
      "Combine cooked spaghetti with pancetta, then add egg mixture and toss.",
      "Garnish with chopped fresh parsley and additional cheese.",
      "Serve immediately."
    ],
    "filename": "classicSpaghettiCarbonara.jpg"
  }
  return Recipe(recipe_dict)

def test_id(recipe):
  assert recipe.id == 1

def test_title(recipe):
  assert recipe.title == "Classic Spaghetti Carbonara"

def test_ingredients(recipe):
  assert len(recipe.ingredients) == 6
  assert recipe.ingredients[0] == "200g spaghetti"
  assert recipe.ingredients[5] == "Fresh parsley"

def test_instructions(recipe):
  assert len(recipe.instructions) == 6
  assert recipe.instructions[0] == "Boil the spaghetti until al dente."
  assert recipe.instructions[5] == "Serve immediately."
  assert recipe.filename == "classicSpaghettiCarbonara.jpg"