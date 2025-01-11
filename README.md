# Monty Hall Problem Simulation

This repository contains two implementations of a simulation to demonstrate the counter-intuitive results of the Monty Hall problem. The simulations are written in **JavaScript** and **Python**, allowing users to observe the probability outcomes of switching versus not switching doors in the famous game show scenario.

## Monty Hall Problem Overview

The Monty Hall problem is a probability puzzle based on a game show scenario. The rules are as follows:

1. A contestant is presented with three doors. Behind one door is a prize, and behind the other two doors are goats.
2. The contestant selects one door.
3. The host, Monty Hall, who knows what is behind each door, opens one of the remaining doors to reveal a goat.
4. The contestant is given the option to stick with their original choice or switch to the other unopened door.
5. The goal is to determine whether it is more advantageous to switch or stay.

Counter-intuitively, switching doors increases the chance of winning the prize to 2/3, while staying only offers a 1/3 chance.

## Files

- **`montyHall.js`**: JavaScript implementation of the Monty Hall problem simulation.
- **`monty_hall.py`**: Python implementation of the Monty Hall problem simulation.

## Features

- Simulates the Monty Hall problem for a specified number of iterations.
- Tracks the number of wins and losses for both switching and not switching doors.
- Includes a distribution test to ensure random door selection is unbiased.

## Usage

### JavaScript

1. Install [Node.js](https://nodejs.org/).
2. Run the JavaScript simulation:

   ```bash
   node montyHall.js
   ```

### Python

1. Install [Python 3](https://www.python.org/).
2. Run the Python simulation:

   ```bash
   python monty_hall.py
   ```

## Results

The simulations produce results similar to the following:

- **Wins when changing answer**: ~66.6%
- **Wins when not changing answer**: ~33.3%

These results align with the theoretical probabilities of the Monty Hall problem.

## Contributing

Contributions are welcome! If you have ideas for improving the simulations or adding features, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## References

- [Monty Hall problem - Wikipedia](https://en.wikipedia.org/wiki/Monty_Hall_problem)
