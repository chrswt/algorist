# The Algorithm Design Manual (2nd Edition)

----
## 2. Algorithm Analysis

----
### Dominance Relations
Fastest growing functions dominates a slower-growing one. Dominance classes are listed below in *increasing* order of dominance.  
1. Constant `O(1)` - No dependence on the parameter *n*, typically measures the cost of single operations
2. Logarithmic `O(log n)` - Shows up in algorithms such as binary search, grows slowly as *n* gets larger
3. Linear `O(n)` - Measures the cost of looking at each time in an *n*-element array, e.g. to compute the smallest, largest, or average value
4. Superlinear `O(n log n)` - Arises in algorithms such as Quicksort and Mergesort, grows faster than linear
5. Quadratic `O(n^2)` - Measures the cost of looking at most or all *pairs* of items in an *n*-element universe, arises in algorithms such as insertion sort and selection sort
6. Cubic `O(n^3)` - Enumerates through all *triples* of items in an *n*-element universe, arises in certain dynamic programming algorithms
7. Exponential `O(c^n)` for a given constant `c > 1` - Arises when enumerating through all subsets of *n* items
8. Factorial `O(n!)` - Arises when generating all permutations or orderings of *n* items

----
### Working with the Big Oh
The **sum** of two functions is governed by the dominant one  
`O(n^2) + O(n^3) = O(n^3)`  
The **multiplication** of two functions is repeated addition  
`O(n) * O(n^3) = O(n^4)`

----
### Reasoning about efficiency

#### Selection Sort
Algorithm: Repeatedly identify the smallest remaining unsorted element and put it at the end of the sorted portion of the array  
Efficiency: Outer loop is performed `n` times, nested inner loop goes around `n - i - 1` times, the complexity of this is `O(n^2)`

#### Insertion Sort
Algorithm: Start with a single element (that forms a trivially sorted list), then incrementally insert the remaining elements so that the list stays sorted  
Efficiency: The outer `for` loop iterates through the array and is thus performed `n` times, we can assume that the inner `while` loop does not terminate early and always goes around *i* times, where `i < n`, therefore, it's complexity is `O(n^2)`

#### String Pattern Matching
Problem: Substring Pattern Matching  
Input: A text string *t* and a pattern string *p*  
Output: Does *t* contain the pattern *p* as a substring, and if so where?  

Algorithm: Initialize length *m* of substring *p*, and length *n* of text string *t*, we iterate through the text string with length *n*, search through each character at *t*, attempting to match a segment with a growing subset of *p*  
Efficiency: The outer `for` loop repeats `n` times (for each character in the text string), while the inner `while` loop repeats *at most* `m` times, and often less, when the match fails. Thus, the complexity of this algorithm is `O(mn)`

----
### Logarithms and Their Applications
In general, logarithms arise whenever things are repeatedly halved or doubled

#### Logarithms and Trees
A rooted **binary tree** with *n* leaf nodes and height *h* has:
- Maximum number of leaves, *n = 2^h*
- Height, *h = log_2 n*

The number of possible leaves in a tree with *d* leaves per node multiples by *d* every time we increase the height by one, thus the following relationships apply:
- Maximum number of leaves, *n = d^h*
- Height, *h = log_d n*

#### Fast Exponentiation
The naive computation of `a^n` requires `n - 1` multiplications, but if we observe that *n = (n / 2) + n / 2)*, then if *n* is even, *a^n = (a^(n/2))^2*, and if *n* is odd, then *a^n = a(a^(n/2))^2*. This allows us to halve our exponent at the cost of, at most, two multiplications, which allows for the following `O(lg n)` algorithm:
```
function power(a, n)
  if (n = 0) return 1
  x = power(a, n / 2)
  if (n is even) then return (x^2)
    else return (a * x^2)
```

----
### Harmonic Series
Consider the following algorithm to find the minimum element in an array of numbers `A[0, ..., n]`. One extra variable `tmp` is allocated to hold the current minimum value. Start from `A[0]`; `tmp` is compared against `A[1], A[2], ..., A[N]` in order. When `A[i] < tmp`, `tmp = A[i]`. What is the expected number of times that the assignment operation `tmp = A[i]` is performed?  

Assuming the array of numbers is unordered, the expected number of times this operation is performed is equal to 1 + 1/2 + 1/3 + 1/4 + ... + 1/n. The summation of 1/i from 1 to n is the definition of the harmonic series, and this tends to **ln n** as n grows large.

----
### Interview Problems
- 2-43: [Reservoir Sampling](https://github.com/chrswt/algorist/blob/master/src/2-43-reservoirSampling.js)
- 2-50: [Ramanujan Hardy Numbers](https://github.com/chrswt/algorist/blob/master/src/2-50-ramanujanHardy.js)