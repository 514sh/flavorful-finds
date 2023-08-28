class Recipe:
    def __init__(self, recipe_dict):
        self.__id = recipe_dict["id"]
        self.__title = recipe_dict["title"]
        self.__ingredients = recipe_dict["ingredients"]
        self.__instructions = recipe_dict["instructions"]
        self.__filename = recipe_dict["filename"]

    @property
    def id(self):
        return self.__id
    
    @property
    def title(self):
        return self.__title
    
    @property
    def ingredients(self):
        return self.__ingredients
    
    @property
    def instructions(self):
        return self.__instructions
    
    @property
    def filename(self):
        return self.__filename