package ibf2021.assessment.csf.server.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ibf2021.assessment.csf.server.models.Recipe;
import ibf2021.assessment.csf.server.services.RecipeService;
import jakarta.json.Json;
import jakarta.json.JsonObject;
import jakarta.json.JsonObjectBuilder;

import java.util.Collection;
import java.util.Collections;
import java.util.LinkedList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;

/* Write your request hander in this file */
@RestController
@RequestMapping(path="/api", produces = MediaType.APPLICATION_JSON_VALUE)
public class RecipesRestController {
   
    @Autowired
    private RecipeService recipeSvc;

    @GetMapping(path="/recipes")
    public ResponseEntity<String> getRecipes(){
            List<String> strRecipe = new LinkedList<String>();
            List<Recipe> recipes = recipeSvc.getAllRecipes();

        for(Recipe r: recipes){
            JsonObject jsonObject = Json.createObjectBuilder().add("id", r.getId())
                                    .add("title", r.getTitle()).build();

            strRecipe.add(jsonObject.toString());
        }

        return ResponseEntity.ok(strRecipe.toString());
     
    }
}
