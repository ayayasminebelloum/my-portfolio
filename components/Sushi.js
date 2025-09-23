"use client";
import Image from "next/image";

export default function Sushi() {
  return (
    <main
      className="min-h-screen pb-16"
      style={{
        backgroundImage: "url('/logo.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        fontFamily: "'Times New Roman', Times, serif",
        color: "#000",
      }}
    >
      {/* Logo at the top */}
      <div className="flex justify-center pt-12">
        <Image
          src="/Sushi/logo.png"
          alt="Sushi Girls Logo"
          width={320}
          height={320}
          className="rounded-xl shadow-xl"
        />
      </div>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center py-20 text-center">
        <h2
          className="mb-10 font-normal max-w-4xl mx-auto"
          style={{
            fontSize: "1.5rem",
            fontFamily: "'Times New Roman', Times, serif",
            color: "#000",
          }}
        >
          A full-stack Django application for managing a sushi restaurant system with smart data integration.
        </h2>
        <a
          href="https://github.com/ayayasminebelloum/Sushi_Girls"
          target="_blank"
          rel="noopener noreferrer"
          className="px-12 py-6 bg-[#2d14f4] text-[#ffd9d9] font-bold rounded-lg shadow hover:bg-[#2d14f4] transition mb-2 text-2xl"
        >
          Explore the Project's code
        </a>
      </section>

      {/* Overview */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h3 className="text-[2.5rem] font-bold mb-8" style={{ color: "#2d14f4" }}>
          Overview
        </h3>
        <p className="text-[1.5rem] mb-8">
          Sushi Girls is a feature-rich Django web application designed to simulate and manage the operations of a sushi restaurant. The project combines web scraping, API integration, and Django models with dual-database support using MySQL and MongoDB.
          The main objective was to build a functional restaurant system that not only stores menu data efficiently but also leverages external APIs to automatically fetch and populate ingredient details.
        </p>
      </section>

      {/* Features */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h3 className="text-[2.2rem] font-bold mb-8" style={{ color: "#2d14f4" }}>
          Features
        </h3>
        <ul className="list-disc pl-8 mb-8 text-[1.5rem]">
          <li>Ingredient Scraping – Fetches ingredient details from the Edamam API for every sushi menu item.</li>
          <li>Dual Database Integration – Uses MySQL for structured data and MongoDB for unstructured data like allergens.</li>
          <li>Dynamic Data Models – Robust Django models for ingredients, menu items, orders, and payments.</li>
          <li>Restaurant Management – Tracks customer orders and payments seamlessly.</li>
          <li>UI Flexibility – Supports both Django views and a Streamlit demo interface.</li>
        </ul>
      </section>

      {/* Technical Implementation */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h3 className="text-[2.2rem] font-bold mb-8" style={{ color: "#2d14f4" }}>
          Technical Implementation
        </h3>
        
        {/* Ingredient Scraping Code */}
        <h4 className="text-xl font-bold mb-4" style={{ color: "#2d14f4" }}>
          Ingredient Scraping
        </h4>
        <pre className="bg-[#f5f5f5] text-black rounded p-4 mb-8 overflow-x-auto text-[1.1rem]">
{`def get_ingredients(food_name):
    """Get ingredients from API call based on food name.
    Args:
        food_name ([str]): [name of food]
    Returns:
        [list]: [list of ingredients]"""
    try:
        url = "https://api.edamam.com/api/recipes/v2"
        params = {
            "type": "public",
            "q": food_name,
            "app_id": "d1e22f44",
            "app_key": "902a6b2132553d094e6aaa17e6e47a57",
        }
        response = requests.get(url, params=params)
        if response.status_code == 200:
            data = response.json()
            hits = data.get("hits", [])
            if hits:
                first_recipe = hits[0]["recipe"]
                return first_recipe.get("ingredientLines", [])
        return []`}
        </pre>

        {/* Data Generation and Population Code */}
        <h4 className="text-xl font-bold mb-4" style={{ color: "#2d14f4" }}>
          Data Generation and Population
        </h4>
        <pre className="bg-[#f5f5f5] text-black rounded p-4 mb-8 overflow-x-auto text-[1.1rem]">
{`def get_menu():
    """Get menu items from json file. Saves to DB.
    Returns:
        [list]: [list of menu items]"""
    try:
        with open('../menu_items.json') as json_file:
            data = json.load(json_file)
            return data
    except Exception as e:
        print("Error getting menu items. Make sure that the file exists and is in the correct location.")
        print(e)
        traceback.print_exc()
        return []`}
        </pre>

        {/* IngredientType Model Code */}
        <h4 className="text-xl font-bold mb-4" style={{ color: "#2d14f4" }}>
          IngredientType Model
        </h4>
        <pre className="bg-[#f5f5f5] text-black rounded p-4 mb-8 overflow-x-auto text-[1.1rem]">
{`class IngredientType(models.Model):
    """IngredientType model for the restaurant app."""
    name = models.CharField(max_length=100)
    ingredient_id = models.CharField(primary_key=True, max_length=100, default=generate_uuid(), editable=False)`}
        </pre>

        {/* MenuItem Model Code */}
        <h4 className="text-xl font-bold mb-4" style={{ color: "#2d14f4" }}>
          MenuItem Model
        </h4>
        <pre className="bg-[#f5f5f5] text-black rounded p-4 mb-8 overflow-x-auto text-[1.1rem]">
{`class MenuItem(models.Model):
    """MenuItem model for the restaurant app."""
    item_id = models.CharField(primary_key=True, max_length=100, default=generate_uuid(), editable=False)
    name = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=6, decimal_places=2)
    # allergies is a list of strings
    allergies = models.JSONField()`}
        </pre>

        {/* Order and Payment Models Code */}
        <h4 className="text-xl font-bold mb-4" style={{ color: "#2d14f4" }}>
          Order and Payment Models
        </h4>
        <pre className="bg-[#f5f5f5] text-black rounded p-4 mb-8 overflow-x-auto text-[1.1rem]">
{`class Order(models.Model):
    """Order model for the restaurant app."""
    order_id = models.CharField(primary_key=True, max_length=100, default=generate_uuid(), editable=False)
    item = models.CharField(max_length=100, default=generate_uuid(), editable=False)
    quantity = models.IntegerField(default=1)
    status = models.CharField(max_length=50)

class Payment(models.Model):
    """Payment model for the restaurant app."""
    payment_id = models.CharField(primary_key=True, max_length=100, default=generate_uuid(), editable=False)
    order = models.CharField(max_length=100, default=generate_uuid(), editable=False)
    method = models.CharField(max_length=100)
    amount = models.DecimalField(max_digits=6, decimal_places=2)
    status = models.CharField(max_length=100)`}
        </pre>
      </section>

      {/* How It Works */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h3 className="text-[2.2rem] font-bold mb-8" style={{ color: "#2d14f4" }}>
          How It Works
        </h3>
        <ul className="list-disc pl-8 mb-8 text-[1.5rem]">
          <li>
            <strong>Ingredient Scraping:</strong>
            <ul className="list-disc pl-8 mt-2">
              <li>Menu items stored in JSON are passed through the Edamam API.</li>
              <li>The API returns relevant recipes, from which only ingredient details are extracted and stored.</li>
            </ul>
          </li>
          <li>
            <strong>Data Population:</strong>
            <ul className="list-disc pl-8 mt-2">
              <li>Menu items are read from JSON and saved into the databases.</li>
            </ul>
          </li>
          <li>
            <strong>Order & Payment Flow:</strong>
            <ul className="list-disc pl-8 mt-2">
              <li>Customers create orders containing one or more menu items.</li>
              <li>Payments are processed and tracked, ensuring smooth restaurant operations.</li>
            </ul>
          </li>
          <li>
            <strong>User Interfaces:</strong>
            <ul className="list-disc pl-8 mt-2">
              <li>Django Views: Demonstrates how the backend integrates with standard web pages.</li>
              <li>Streamlit Demo: Quick prototype interface for showcasing functionality.</li>
            </ul>
          </li>
        </ul>
      </section>

      {/* Demo Video */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h3 className="text-[2.2rem] font-bold mb-8" style={{ color: "#2d14f4" }}>
          Demo Video
        </h3>
        <div className="relative" style={{ paddingBottom: "56.25%" }}>
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
            src="/Sushi/video.mp4"  
            title="Demo Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </section>
    </main>
  );
}
