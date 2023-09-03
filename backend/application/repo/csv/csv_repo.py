import csv
import ast
import os

file_path = os.path.join(os.path.dirname(
    os.path.abspath(__file__)), "recipe_data_set.csv")


def file_to_list_of_dict(filename=file_path):
    recipe_list = []
    try:
        with open(filename, newline='') as recipe_file:
            recipe_reader = csv.reader(recipe_file)

            for recipe in recipe_reader:
                if recipe[1].lower() == 'title':
                    continue

                dict = {
                    "id": int(recipe[0]),
                    "title": recipe[1],
                    "ingredients": ast.literal_eval(recipe[2]),
                    "instructions": recipe[3].split("\n"),
                    "filename": recipe[4]
                }

                recipe_list.append(dict)
        return recipe_list
    except FileNotFoundError:
        print(f"Error: The file '{filename}' was not found.")
    except csv.Error as e:
        print(f"Error: An error occurred while reading the CSV file: {e}")
    except Exception as e:
        print(f"Error: An unexpected error occurred: {e}")
