# lesson-1

Zadanie

1. Stwórz klasę TurboNumber z trzema metodami: subtract(x), divide(x) oraz result(). (klasa powinna przyjmować wartość początkową w konstruktorze, oraz zwracać wynik po operacjach poprzez metodę result).
W osobnym pliku dopisz testy automatyczne do tej klasy, sprawdzające, czy umie odejmować i dzielić :)
2. Obsłuż edge case w metodzie divide (dzielenie przez 0 powinno rzucić wyjątkiem)
3. Po tym obsłuż również chainowanie metod np. `new TurboNumber(17).subtract(5).divide(-3).result()` zwracające wartość -4.
4. W testach użyj `beforeEach`, żeby reużyć instancjonowanie klasy.
5. Obsłuż metody pierwiastek kwadratowy, dodawanie, potęga. 
