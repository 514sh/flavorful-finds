from tests.recipes_data import recipes_data
from application.repo.csv.recipe.searchsorter import SearchSorter
import pytest


@pytest.fixture
def searchsorter():
    return SearchSorter(recipe_list=recipes_data)


def test_recipes_list(searchsorter):
    recipe_list = searchsorter.recipe_list
    assert len(recipe_list) == 20
    for recipe in recipe_list:
        assert "title" in recipe
        assert "id" in recipe
        assert "ingredients" in recipe
        assert "instructions" in recipe
        assert "filename" in recipe


def test_search_by_ingredients(searchsorter):
    keywords = {"soysauce",
                "sesameoil",
                "mincedgarlic",
                "ginger",
                "cookingoil"}
    result = searchsorter.search_by_ingredients(keywords)
    assert len(result) == 3
    assert result[0]["id"] == 6
    assert result[1]["id"] == 17
    assert result[2]["id"] == 15


def test_search_by_title(searchsorter):
    keywords = {
        "lemon",
        "beef",
        "potato"
    }

    result = searchsorter.search_by_title(keywords)
    assert len(result) == 4
    assert result[0]["id"] == 8
