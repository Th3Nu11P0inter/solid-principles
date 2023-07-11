# SOLID Principles

This is a repository for youtube video about Solid Principles:
https://www.youtube.com/watch?v=1LWFk9YrNKQ

Diagrams.drawio contain UML diagrams used in the video.

## Explanation

SOLID is an acronym that stands for five key principles that help us write clean, maintainable, and extensible code. These principles were introduced by Robert C. Martin, also known as Uncle Bob, and have become a cornerstone in modern software development practices.


### Single Responsibility Principle (SRP)
A class should have only one reason to change, meaning it should have a single responsibility. This principle helps us keep our code focused and prevents it from becoming overly complex.

### Open-Closed Principle (OCP)
Software entities should be open for extension but closed for modification. In other words, we should strive to design our code in a way that allows us to add new functionality without modifying existing code.

### Liskov Substitution Principle (LSP)
Subtypes must be substitutable for their base types without affecting the correctness of the program. In simpler terms, this principle ensures that we can use derived classes interchangeably with their base classes.

### Interface Segregation Principle (ISP)
Clients should not be forced to depend on interfaces they do not use. This principle encourages us to create fine-grained interfaces that are tailored to specific client requirements, avoiding bloated interfaces that lead to unnecessary dependencies.

### Dependency Inversion Principle (DIP)
High-level modules should not depend on low-level modules. Both should depend on abstractions. This principle promotes loose coupling and emphasizes the importance of coding to interfaces rather than concrete implementations.