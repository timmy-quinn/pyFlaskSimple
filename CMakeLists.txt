cmake_minimum_required(VERSION 3.12)
project(MyPybind11Project)

set(CMAKE_CXX_STANDARD 11)

# Find Python and Pybind11
find_package(pybind11 REQUIRED)

# Define the Pybind11 module
pybind11_add_module(sudoku src/sudoku.cpp src/dlx.cpp src/random_int.cpp)

# Optionally, you can set additional compiler flags or include directories here

# Example: Set compiler flags for optimization
# target_compile_options(my_module PRIVATE -O3)

# Example: Include additional directories
# target_include_directories(my_module PRIVATE /path/to/extra/includes)

# You can add more dependencies, flags, or configuration as needed

# Install the Pybind11 module (optional)
install(TARGETS sudoku LIBRARY DESTINATION sudoku)

# Additional CMake configuration can be added as necessary