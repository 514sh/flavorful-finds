from flask import Blueprint, jsonify, request
from application.utils.error_handler import ErrorHandler
from application.repo.csv.recipe.searchsorter import SearchSorter
from application.repo.csv.csv_repo import file_to_list_of_dict
blueprint = Blueprint("recipes", __name__)

error_handler = ErrorHandler(blueprint)
recipe_list = file_to_list_of_dict()


@blueprint.route("/ingredients")
def search_by_ingredients():
    offset = int(request.args.get('offset', 0))
    batch = 20

    keywords = set(request.args.getlist('keywords'))
    search_sorter = SearchSorter(recipe_list=recipe_list)
    result = search_sorter.search_by_ingredients(
        keywords)[offset:offset + batch]
    return jsonify(result)


@blueprint.route("/title")
def search_by_title():
    offset = int(request.args.get('offset', 0))
    batch = 20

    keywords = set(request.args.getlist('keywords'))
    search_sorter = SearchSorter(recipe_list=recipe_list)
    result = search_sorter.search_by_title(
        keywords)[offset:offset + batch]
    return jsonify(result)
