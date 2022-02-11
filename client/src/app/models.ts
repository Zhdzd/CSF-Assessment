export interface  RecipeSummary {

  id: number;
  title: string;
}

export interface Recipe extends RecipeSummary{

  image: string;
  Ingredient: string [];
  Instructions: string;
}

