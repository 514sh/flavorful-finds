class SearchSorter:
    def __init__(self, recipe_list: list):
        self.__recipe_list = recipe_list
        self.__ingredients_set = self.__ingredients_set()
        self.__title_set = self.__title_set()

    @property
    def recipe_list(self):
        return self.__recipe_list

    @property
    def ingredients_set(self):
        return self.__ingredients_set

    @property
    def title_set(self):
        return self.__title_set

    def search_by_title(self, keywords):
        ids = dict()
        for keyword in keywords:
            for key in self.title_set:
                if keyword in key:
                    parts = key.split("@@")
                    id = parts[1]
                    if id not in ids:
                        ids[id] = 1
                    else:
                        ids[id] += 1
        return [int(i[0]) for i in sorted(ids.items(), reverse=True)]

    def search_by_ingredients(self, keywords):
        ids = dict()
        for keyword in keywords:
            for key in self.ingredients_set:
                if keyword in key:
                    parts = key.split("@@")
                    id = parts[1]
                    if id not in ids:
                        ids[id] = 1
                    else:
                        ids[id] += 1
        return [int(i[0]) for i in sorted(ids.items(), reverse=True)]

    def __ingredients_set(self):
        init_ingredients_set = set()
        for recipe in self.recipe_list:
            for ingredient in recipe["ingredients"]:
                ingredient_key = ingredient.lower().replace(
                    " ", "").strip() + "@@" + f"{recipe['id']}"
                init_ingredients_set.add(ingredient_key)
        return init_ingredients_set

    def __title_set(self):
        init_title_set = set()
        for recipe in self.recipe_list:
            title_key = recipe["title"].lower().replace(
                " ", "").strip() + "@@" + f"{recipe['id']}"
            init_title_set.add(title_key)
        return init_title_set
