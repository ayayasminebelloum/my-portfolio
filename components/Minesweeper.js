"use client";
import Image from "next/image";

export default function Minesweeper() {
  return (
    <main
      className="min-h-screen pb-16"
      style={{
        backgroundImage: "url('/minesweeper-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        fontFamily: "'Times New Roman', Times, serif",
        color: "#000",
      }}
    >
      {/* Logo at the top */}
      <div className="flex justify-center pt-12">
        <Image
          src="/Minesweeper/logo.png"
          alt="Minesweeper Logo"
          width={320}
          height={320}
          className="rounded-xl shadow-xl"
        />
      </div>
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center py-20 text-center">
        <a
          href="https://github.com/ayayasminebelloum/MineSweeper"
          target="_blank"
          rel="noopener noreferrer"
          className="px-12 py-6 bg-[#38b6ff] text-white font-bold rounded-lg shadow hover:bg-[#38b6ff] transition mb-2 text-2xl"
        >
          Explore the Project’s code
        </a>
      </section>

      {/* Overview */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h3 className="text-[2.5rem] font-bold mb-8" style={{ color: "#38b6ff" }}>
          Overview
        </h3>
        <p className="text-[1.5rem] mb-8">
          This project is a Python implementation of the classic Minesweeper puzzle game using the Tkinter library. The goal is to clear a grid of hidden cells without detonating bombs. Each revealed cell shows either a number (indicating adjacent bombs), an empty space, or a bomb.
          To extend the traditional game, this version includes additional features such as an undo system and a simple CPU player mode.
        </p>
      </section>

      {/* Features */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h3 className="text-[2.2rem] font-bold mb-8" style={{ color: "#38b6ff" }}>
          Features
        </h3>
        <ul className="list-disc pl-8 mb-8 text-[1.5rem]">
          <li>Classic Minesweeper gameplay with a 30x16 grid and 60 bombs</li>
          <li>Dynamic bomb placement with unique random positions each game</li>
          <li>Undo functionality that reverts the last left or right click</li>
          <li>CPU player option to automatically reveal the next available square</li>
          <li>Flood fill algorithm to expand cleared regions when an empty square is uncovered</li>
          <li>Flagging system for marking suspected bombs</li>
          <li>Automatic win/lose detection with clear game-over state display</li>
        </ul>
      </section>

      {/* Technical Implementation */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h3 className="text-[2.2rem] font-bold mb-8" style={{ color: "#38b6ff" }}>
          Technical Implementation
        </h3>
        <ul className="list-disc pl-8 mb-8 text-[1.5rem]">
          <li>Python 3</li>
          <li>Tkinter (for GUI)</li>
        </ul>
        <ul className="list-disc pl-8 mb-8 text-[1.5rem]">
          <li>Grid state: Stored as a 2D list, each cell tracked with state codes (hn, hb, n, b, fn, fb).</li>
          <li>Bomb placement: Randomized, ensuring exactly 60 unique bombs.</li>
          <li>Undo system: A stack that records every left and right click, allowing reversal of moves.</li>
          <li>Flood fill: Recursive search to reveal connected safe areas when empty cells are clicked.</li>
          <li>CPU player: Simple auto-move that reveals the next available hidden cell.</li>
        </ul>
      </section>

      {/* Flood Fill Implementation */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h3 className="text-[2.2rem] font-bold mb-8" style={{ color: "#38b6ff" }}>
          Flood Fill Implementation
        </h3>
        <pre className="bg-[#f5f5f5] text-black rounded p-4 mb-8 overflow-x-auto text-[1.1rem]">
{`def flood_fill(grid, x, y, visited):
    if (x, y) in visited or not is_safe(grid, x, y):
        return
    visited.add((x, y))
    reveal_cell(grid, x, y)
    if grid[x][y] == 0:
        for dx in [-1, 0, 1]:
            for dy in [-1, 0, 1]:
                if dx != 0 or dy != 0:
                    flood_fill(grid, x + dx, y + dy, visited)
`}
        </pre>
      </section>

      {/* CPU Player Implementation */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h3 className="text-[2.2rem] font-bold mb-8" style={{ color: "#38b6ff" }}>
          CPU Player Implementation
        </h3>
        <pre className="bg-[#f5f5f5] text-black rounded p-4 mb-8 overflow-x-auto text-[1.1rem]">
{`def cpu_play(grid):
    for x in range(len(grid)):
        for y in range(len(grid[0])):
            if is_hidden(grid, x, y):
                reveal_cell(grid, x, y)
                return
`}
        </pre>
      </section>

      {/* Left Click Implementation */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h3 className="text-[2.2rem] font-bold mb-8" style={{ color: "#38b6ff" }}>
          Left Click Implementation
        </h3>
        <pre className="bg-[#f5f5f5] text-black rounded p-4 mb-8 overflow-x-auto text-[1.1rem]">
{`def left_click(i, j):
    global points
    if field[i][j] == 'hn':
        count = countMines(i, j)
        if count > 0:
            field[i][j] = 'n'
        elif count == 0:
            floodFill(i, j)
        draw()
        push_move('left-click', i, j)
    elif field[i][j] == 'hb':
        field[i][j] = 'b'
        GameOver()
        print('You lost')
        print('You touched a Bomb.')
        window.destroy()
        return
`}
        </pre>
      </section>

      {/* Right Click Implementation */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h3 className="text-[2.2rem] font-bold mb-8" style={{ color: "#38b6ff" }}>
          Right Click Implementation
        </h3>
        <pre className="bg-[#f5f5f5] text-black rounded p-4 mb-8 overflow-x-auto text-[1.1rem]">
{`def right_click(i, j):
    global points, flags
    if field[i][j] == 'hn':
        flags -= 1
        field[i][j] = 'f'
    elif field[i][j] == 'hb':
        flags -= 1
        points += 1
        field[i][j] = 'fb'
    elif field[i][j] == 'f':
        flags += 1
        field[i][j] = 'hn'
    elif field[i][j] == 'fb':
        flags += 1
        field[i][j] = 'hb'
    draw()
    push_move('right-click', i, j)
`}
        </pre>
      </section>

      {/* Gameplay */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h3 className="text-[2.2rem] font-bold mb-8" style={{ color: "#38b6ff" }}>
          Gameplay
        </h3>
        <ul className="list-disc pl-8 mb-8 text-[1.5rem]">
          <li>Left click reveals a cell. If it is a bomb, the game ends. If it is safe, a number or blank is shown.</li>
          <li>Right click flags or unflags a suspected bomb. Correctly flagged bombs contribute to score.</li>
          <li>The game is won when all bombs are flagged and all safe squares are uncovered.</li>
          <li>The game is lost if a bomb is revealed or if flags are incorrectly used.</li>
        </ul>
      </section>

      {/* Extra Functionality */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h3 className="text-[2.2rem] font-bold mb-8" style={{ color: "#38b6ff" }}>
          Extra Functionality
        </h3>
        <ul className="list-disc pl-8 mb-8 text-[1.5rem]">
          <li>Undo button allows recovery from mistakes by reverting the last move.</li>
          <li>CPU player mode demonstrates automated play by selecting a hidden cell.</li>
          <li>Game over display highlights bombs and flags before closing the window.</li>
        </ul>
      </section>
    </main>
  );
}
