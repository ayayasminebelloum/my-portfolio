"use client";
import Image from "next/image";

export default function CookWise() {
  return (
    <main
      className="min-h-screen pb-16"
      style={{
        backgroundImage: "url('/cwbg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        fontFamily: "'Times New Roman', Times, serif",
        color: "#000",
      }}
    >
      {/* Logo at the top */}
      <div className="flex justify-center pt-12">
        <Image
          src="/CookWise/logo.png"
          alt="CookWise Logo"
          width={640}
          height={640}
          className="rounded-xl shadow-xl"
        />
      </div>
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center py-20 text-center">
        <a
          href="https://github.com/ayayasminebelloum/CookWise"
          target="_blank"
          rel="noopener noreferrer"
          className="px-12 py-6 bg-[#cc007e] text-white font-bold rounded-lg shadow hover:bg-[#cc007e] transition mb-2 text-2xl"
        >
          Explore the Project’s code
        </a>
      </section>

      {/* Overview */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h3 className="text-[2.5rem] font-bold mb-8" style={{ color: "#cc007e" }}>
          Overview
        </h3>
        <p className="text-[1.5rem] mb-8">
          The Recipe Manager is a modular C++ application designed to manage ingredients, generate grocery lists, and match available items with recipes. This improved version focuses on portability, scalability, and robustness, leveraging CMake, SQLite, and modern C++ practices to build a more professional and maintainable system.
        </p>
      </section>

      {/* Key Improvements */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h3 className="text-[2.2rem] font-bold mb-8" style={{ color: "#cc007e" }}>
          Key Improvements
        </h3>
        <ul className="list-disc pl-8 mb-8 text-[1.5rem]">
          <li>CMake Integration: Simplified, standardized build process across platforms and compilers.</li>
          <li>Modularization: Classes separated into headers (.h) and implementations (.cpp), organized into src/, include/, and data/.</li>
          <li>Database Upgrade: Replaced static JSON with SQLite for persistent, relational data storage.</li>
          <li>Error Handling: Stronger input validation and reporting of missing/duplicate ingredients.</li>
          <li>Testing: Integration and modular testing with Google Test.</li>
        </ul>
      </section>

      {/* Database Integration (SQLite) */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h3 className="text-[2.2rem] font-bold mb-8" style={{ color: "#cc007e" }}>
          Database Integration (SQLite)
        </h3>
        <ul className="list-disc pl-8 mb-8 text-[1.5rem]">
          <li>Ingredients (storage of items)</li>
          <li>Recipes (full recipes with steps)</li>
          <li>GroceryList (dynamically generated from missing items)</li>
          <li>History (log of previously generated recipes)</li>
        </ul>
        <p className="text-[1.5rem] mb-8">
          Key interactions include:
        </p>
        <ul className="list-disc pl-8 mb-8 text-[1.5rem]">
          <li>Storage::addIngredient() → Add/update ingredients.</li>
          <li>RecipeManager::matchRecipes() → Fetch recipes based on availability.</li>
          <li>RecipeManager::generateGroceryList() → Suggest missing items.</li>
          <li>RecipeManager::saveHistory() → Store recipe usage history.</li>
        </ul>
        <p className="text-[1.5rem] mb-8">
          Recipes have a one-to-many relationship with the history table, preserving traceability.
        </p>
        <h4 className="text-xl font-bold mb-2" style={{ color: "#cc007e" }}>
          SQLite Database Schema
        </h4>
        <Image
          src="/CookWise/sqlite-schema.png"
          alt="SQLite Database Schema"
          width={900}
          height={540}
          className="rounded shadow mb-8 mx-auto"
        />
        <div className="mb-8 flex flex-col items-center gap-8">
          <h4 className="text-xl font-bold mb-2" style={{ color: "#cc007e" }}>
            History Table Screenshot
          </h4>
          <Image
            src="/CookWise/history-screenshot.png"
            alt="History Table Screenshot"
            width={900}
            height={540}
            className="rounded shadow mb-4"
          />
          <h4 className="text-xl font-bold mb-2" style={{ color: "#cc007e" }}>
            Recipes Table Screenshot
          </h4>
          <Image
            src="/CookWise/recipes-screenshot.png"
            alt="Recipes Table Screenshot"
            width={900}
            height={540}
            className="rounded shadow mb-4"
          />
        </div>
      </section>

      {/* Memory Management & OOP */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h3 className="text-[2.2rem] font-bold mb-8" style={{ color: "#cc007e" }}>
          Memory Management & OOP
        </h3>
        <ul className="list-disc pl-8 mb-8 text-[1.5rem]">
          <li>RAII & Smart Pointers: Prevent memory leaks in RecipeManager.h.</li>
          <li>STL Vectors: Dynamically store ingredients and steps.</li>
          <li>Polymorphism: Storage acts as a base class; Fridge and Pantry override methods like addIngredient(), ensuring correct runtime behavior.</li>
        </ul>
        <p className="text-[1.5rem] mb-8">
          This design maximizes code reuse, extensibility, and safety.
        </p>
      </section>

      {/* Smarter Memory Management Code */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h3 className="text-[2.2rem] font-bold mb-8" style={{ color: "#cc007e" }}>
          Smarter Memory Management Example
        </h3>
        <pre className="bg-[#f5f5f5] text-black rounded p-4 mb-8 overflow-x-auto text-[1.1rem]">
{`// RecipeManager.h
#include <memory>
#include <vector>
#include "Recipe.h"

class RecipeManager {
public:
    RecipeManager();
    void addRecipe(std::unique_ptr<Recipe> recipe);
    // ...other methods...
private:
    std::vector<std::unique_ptr<Recipe>> recipes;
};
`}
        </pre>
      </section>

      {/* Error Handling & Validation */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h3 className="text-[2.2rem] font-bold mb-8" style={{ color: "#cc007e" }}>
          Error Handling & Validation
        </h3>
        <ul className="list-disc pl-8 mb-8 text-[1.5rem]">
          <li>File Access Errors: Detect invalid file handling early.</li>
          <li>User Input Validation: Enforces correct ingredient quantities and storage locations.</li>
          <li>Data Integrity: Prevents duplicates by updating quantities instead of adding redundant entries.</li>
        </ul>
      </section>

      {/* Testing & Integration */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h3 className="text-[2.2rem] font-bold mb-8" style={{ color: "#cc007e" }}>
          Testing & Integration
        </h3>
        <ul className="list-disc pl-8 mb-8 text-[1.5rem]">
          <li>Integration Testing validates database and API communication.</li>
          <li>Google Test ensures correctness of modules.</li>
          <li>Modular class structure (.h and .cpp) improves testability.</li>
          <li>RecipeManager tests verify correct storage, updating, and retrieval of ingredients and recipes.</li>
        </ul>
      </section>

      {/* UML Diagrams */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h3 className="text-[2.2rem] font-bold mb-8" style={{ color: "#cc007e" }}>
          UML Diagrams
        </h3>
        <div className="mb-8 flex flex-col items-center gap-8">
          <h4 className="text-xl font-bold mb-2" style={{ color: "#cc007e" }}>
            Activity Diagram
          </h4>
          <Image
            src="/CookWise/activity-diagram.png"
            alt="Activity Diagram"
            width={900}
            height={540}
            className="rounded shadow mb-4"
          />
          <h4 className="text-xl font-bold mb-2" style={{ color: "#cc007e" }}>
            UML Class Diagram
          </h4>
          <Image
            src="/CookWise/class-diagram.png"
            alt="UML Class Diagram"
            width={900}
            height={540}
            className="rounded shadow mb-4"
          />
        </div>
      </section>
    </main>
  );
}
