# The Algorithm Design Manual (2nd Edition)

----
## 1. Introduction to Practical Algorithm Design

----
### Travelling Salesman
Problem: Robot Tour Optimization  
Input: A set S of n points in the plane  
Output: What is the shortest cycle tour that visits each point in the set S?
```
OptimalTSP(P)
  d = infinity
  For each of the n! permutations P_i of point set P
    If (cost(P_i) <= d) then d = cost(P_i) and P_min = P_i
  Return P_min
```

----
### Optimal Scheduling
Problem: Movie Scheduling Problem  
Input: A set I of n intervals on the line  
Output: What is the largest subset of mutually non-overlapping intervals which can be selected from I?
```
OptimalScheduling(I)
  While (I != 0) do
    Accept the job j from I with the earliest completion date
    Delete j, and any interval which intersects j from I
```

----
### Recursion and Mathematical Induction
Recursion is mathematical induction. In both, there are general and boundary conditions, with the general condition breaking the problem into smaller and smaller pieces. The initial or boundary condition terminates the recursion.

----
### Summations
The heart of all summative proofs such as arithmetic or geometric progression is the general trick of separating out the largest term from the summation to reveal an instance of the inductive assumption.

----
### Modeling the Problem
1. Permutations - arrangements or orderings of items
  - e.g. `{1, 4, 3, 2}` and `{4, 3, 2, 1}` are two distinct permutations from the same set of integers
  - Applications: arrangement, tour, ordering, sequence
  - Recursion: delete the first element of a permutation of `{1, ..., n}` things and you get a permutation of the remaining `n - 1` things
2. Subsets - selections from a set of items
  - e.g. `{1, 3, 4}` and `{2}` are two distinct subsets of the first four integers
  - Applications: cluster, collection, committee, group, packaging, selection
  - Recursion: every subset of the elements `{1, ..., n}` contains a setset of `{1, ..., n - 1}` made visible by deleting element `n` if it is present
3. Trees - represent hierarchical relationships between items
  - Applications: hierarchy, dominance relationship, ancestor/descendant relationship, taxonomy
  - Recursion: deleting the root of a tree returns a collection of smaller trees
4. Graphs - represent relationships between arbitrary pairs of objects using *vertices* and *edges*
  - Applications: network, circuit, web, relationship
  - Recursion: delete any vertex from a graph to get a smaller graph
5. Points - locations in some geometric space
  - Applications: sites, positions, data records, locations
  - Recursion: draw a line between a cloud of points to get two smaller clouds of points
6. Polygons - regions in some geometric spaces
  - Applications: shapes, regions, configurations, boundaries
  - Recursion: insert an internal chord 
7. Strings - sequences of characters or patterns
  - e.g. `'Hello, World!'`
  - Applications: text, characters, patterns, labels
  - Recursion: delete the first character from a string to get a shorter string
  
----
### Interview Problems
- 1-28: [Integer Division](https://github.com/chrswt/algorist/blob/master/src/1-28-integerDivision.js)
- 1-29: [25 Horses](https://github.com/chrswt/algorist/blob/master/src/1-29-25horses.js)