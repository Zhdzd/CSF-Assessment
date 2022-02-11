package ibf2021.assessment.csf.server.controllers;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ibf2021.assessment.csf.server.models.Recipe;
import ibf2021.assessment.csf.server.services.RecipeService;
import jakarta.json.Json;
import jakarta.json.JsonArray;
import jakarta.json.JsonArrayBuilder;
import jakarta.json.JsonObject;

/* Write your request hander in this file */

@RestController
@RequestMapping(path="api/recipe", produces = MediaType.APPLICATION_JSON_VALUE)
public class RecipeRestController{

    @Autowired
    private RecipeService recipeSvc;
    
    @GetMapping(path="{recipeId}")
    public ResponseEntity<String> getRecipeById(@PathVariable String recipeId){
        Optional<Recipe> recipeOptional = recipeSvc.getRecipeById(recipeId);

        if(!(recipeOptional.isPresent())){
            System.out.println("Recipe does not exist");
            JsonObject jsonObject = Json.createObjectBuilder()
                .add("message", "Recipe does not exist").build();
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(jsonObject.toString());
        } else{
            Recipe rpe = recipeOptional.get();
            JsonArrayBuilder arrayBuilder = Json.createArrayBuilder();
            
            for(String ing: rpe.getIngredients()){
                arrayBuilder.add(ing);
            }
            JsonArray ingredientsJsonArray = arrayBuilder.build();
            
            JsonObject jsonObject = Json.createObjectBuilder()
                .add("title", rpe.getTitle())
                .add("image", rpe.getImage())
                .add("ingredients", ingredientsJsonArray.toString())
                .add("instruction", rpe.getInstruction())
                .build();

            return ResponseEntity.status(HttpStatus.CREATED).body(jsonObject.toString());
        }

    }
}


