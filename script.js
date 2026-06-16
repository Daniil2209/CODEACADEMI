/* ==========================================================================
   DevAcademy Core SPA Logic & Multi-Language Course Data
   ========================================================================== */

// 1. CHANNELS OF LANGUAGES AND LESSONS (100 lessons per language, 10 modules)
const languagesData = {
    python: {
        name: "Python",
        title: "Python Разработчик",
        iconClass: "fa-brands fa-python",
        description: "Пройдите путь от print() до асинхронности и SOLID архитектуры на Python.",
        modules: [
            {
                id: 1,
                title: "Введение и Базовый синтаксис",
                description: "Функция print(), переменные, числа, строки и форматирование строк.",
                lessons: [
                    {
                        id: 1,
                        title: "1. Первая программа на Python и функция print()",
                        boilerplate: "# Напишите вашу первую программу ниже\nprint(\"Hello, PyAcademy!\")",
                        theory: `<h4>Функция <code>print()</code></h4>
                        <p>Функция <code>print()</code> используется для вывода информации на экран (в консоль). Текст заключается в кавычки.</p>
                        <pre><code>print("Привет, мир!")</code></pre>`,
                        task: `Выведите в консоль фразу <code>"Hello, PyAcademy!"</code> с помощью функции <code>print()</code>.`,
                        validate: (code) => {
                            const clean = code.replace(/\s/g, "");
                            if (clean.includes("print('Hello,PyAcademy!')") || clean.includes('print("Hello,PyAcademy!")')) {
                                return { success: true, message: "Отлично! Код на Python проверен успешно! +100 XP" };
                            }
                            return { success: false, error: "Код должен содержать print('Hello, PyAcademy!')" };
                        },
                        memory: {
                            stack: [{ name: "системный вызов", val: "print()", addr: "0x7fff12" }],
                            heap: [{ name: "строка константа", val: '"Hello, PyAcademy!"', addr: "0x004a2c" }]
                        }
                    },
                    {
                        id: 2,
                        title: "2. Переменные и типы данных",
                        boilerplate: "# Объявите переменные x и name ниже\n",
                        theory: `<h4>Переменные</h4>
                        <p>Переменные в Python создаются оператором <code>=</code>.</p>
                        <pre><code>x = 10\nname = "Алекс"</code></pre>`,
                        task: `Создайте переменную <code>x</code> со значением <code>42</code> и <code>name</code> со значением <code>"Python"</code>.`,
                        validate: (code) => {
                            const hasX = /x\s*=\s*42/.test(code);
                            const hasName = /name\s*=\s*(['"])Python\1/.test(code);
                            if (hasX && hasName) {
                                return { success: true, message: "Переменные созданы успешно! +100 XP" };
                            }
                            return { success: false, error: "Объявите x = 42 и name = 'Python'" };
                        },
                        memory: {
                            stack: [
                                { name: "x", val: "42", addr: "0x7fff14" },
                                { name: "name", val: "указатель на 0x004a50", addr: "0x7fff18" }
                            ],
                            heap: [
                                { name: "str объект", val: '"Python"', addr: "0x004a50" }
                            ]
                        }
                    }
                ]
            }
        ]
    },
    cpp: {
        name: "C++",
        title: "C++ Разработчик",
        iconClass: "lang-icon-text",
        description: "Освойте компиляцию, ручное управление памятью, указатели и шаблоны STL.",
        modules: [
            {
                id: 1,
                title: "Введение и базовый синтаксис C++",
                description: "Функция main(), вывод std::cout, типы данных и ссылки.",
                lessons: [
                    {
                        id: 1,
                        title: "1. Вывод данных и поток std::cout",
                        boilerplate: "#include <iostream>\n\nint main() {\n    // Напишите вывод ниже\n    \n    return 0;\n}",
                        theory: `<h4>Вывод в C++</h4>
                        <p>В C++ для вывода используется объект потока <code>std::cout</code> из библиотеки <code>&lt;iostream&gt;</code> совместно с оператором <code>&lt;&lt;</code>.</p>
                        <pre><code>#include &lt;iostream&gt;\nint main() {\n    std::cout &lt;&lt; "Привет!";\n    return 0;\n}</code></pre>`,
                        task: `Выведите на экран строку <code>"Hello, C++!"</code> с помощью потока <code>std::cout</code> внутри функции <code>main</code>.`,
                        validate: (code) => {
                            if (code.includes("std::cout") && code.includes("<<") && code.includes("Hello, C++!")) {
                                return { success: true, message: "Прекрасно! Код на C++ успешно скомпилирован (симуляция). +100 XP" };
                            }
                            return { success: false, error: "Убедитесь, что вы написали: std::cout << \"Hello, C++!\";" };
                        },
                        memory: {
                            stack: [{ name: "std::cout", val: "поток вывода", addr: "0x7ffe01" }],
                            heap: [{ name: "текст литерал", val: '"Hello, C++!"', addr: "0x0010cc" }]
                        }
                    },
                    {
                        id: 2,
                        title: "2. Переменные и типы данных в C++",
                        boilerplate: "#include <iostream>\n#include <string>\n\nint main() {\n    // Создайте переменные x и name ниже\n    \n    return 0;\n}",
                        theory: `<h4>Объявление переменных в C++</h4>
                        <p>В C++ требуется явно указывать тип переменной при её создании:</p>
                        <pre><code>int age = 20;\nstd::string name = "Иван";</code></pre>`,
                        task: `Объявите целочисленную переменную <code>x</code> со значением <code>42</code> и строковую переменную <code>name</code> со значением <code>"C++"</code>.`,
                        validate: (code) => {
                            const hasX = /int\s+x\s*=\s*42\s*;/.test(code);
                            const hasName = /(std::)?string\s+name\s*=\s*(['"])C\+\+\2\s*;/.test(code);
                            if (hasX && hasName) {
                                return { success: true, message: "Переменные C++ успешно объявлены! +100 XP" };
                            }
                            return { success: false, error: "Напишите: int x = 42; и std::string name = \"C++\";" };
                        },
                        memory: {
                            stack: [
                                { name: "int x", val: "42 (4 байта)", addr: "0x7ffe04" },
                                { name: "string name", val: "указатель на кучу (8 байт)", addr: "0x7ffe08" }
                            ],
                            heap: [
                                { name: "std::string буфер", val: '"C++"', addr: "0x002e10" }
                            ]
                        }
                    }
                ]
            }
        ]
    },
    csharp: {
        name: "C#",
        title: "C# .NET Разработчик",
        iconClass: "lang-icon-text",
        description: "Узнайте платформу .NET, строгую типизацию, ООП на классах и LINQ.",
        modules: [
            {
                id: 1,
                title: "Введение и синтаксис C#",
                description: "Классы, метод Main, Console.WriteLine и типы.",
                lessons: [
                    {
                        id: 1,
                        title: "1. Вывод на консоль Console.WriteLine()",
                        boilerplate: "using System;\n\nclass Program {\n    static void Main() {\n        // Напишите вывод здесь\n    }\n}",
                        theory: `<h4>Вывод в C#</h4>
                        <p>В языке C# для вывода текста в консоль используется статический метод класса Console:</p>
                        <pre><code>Console.WriteLine("Привет, мир!");</code></pre>`,
                        task: `Выведите фразу <code>"Hello, C#!"</code> с помощью метода <code>Console.WriteLine()</code>.`,
                        validate: (code) => {
                            if (code.includes("Console.WriteLine") && code.includes("Hello, C#!")) {
                                return { success: true, message: "C# код выполнен успешно! +100 XP" };
                            }
                            return { success: false, error: "Используйте метод Console.WriteLine(\"Hello, C#!\");" };
                        },
                        memory: {
                            stack: [{ name: "вызов Main()", val: "Frame", addr: "0x7ffd01" }],
                            heap: [{ name: "System.String", val: '"Hello, C#!"', addr: "0x0080aa" }]
                        }
                    },
                    {
                        id: 2,
                        title: "2. Переменные в C#",
                        boilerplate: "using System;\n\nclass Program {\n    static void Main() {\n        // Создайте переменные x и name ниже\n    }\n}",
                        theory: `<h4>Типы данных C#</h4>
                        <p>C# — строго типизированный язык. Переменные объявляются с типом:</p>
                        <pre><code>int number = 100;\nstring text = "C#";</code></pre>`,
                        task: `Создайте переменную типа <code>int</code> с именем <code>x</code> и значением <code>42</code>, и переменную типа <code>string</code> с именем <code>name</code> со значением <code>"C#"</code>.`,
                        validate: (code) => {
                            const hasX = /int\s+x\s*=\s*42\s*;/.test(code);
                            const hasName = /string\s+name\s*=\s*(['"])C#\1\s*;/.test(code);
                            if (hasX && hasName) {
                                return { success: true, message: "Переменные C# созданы! +100 XP" };
                            }
                            return { success: false, error: "Напишите: int x = 42; и string name = \"C#\";" };
                        },
                        memory: {
                            stack: [
                                { name: "int x (Value Type)", val: "42", addr: "0x7ffd04" },
                                { name: "string name (Ref Type)", val: "указатель на 0x0080c8", addr: "0x7ffd08" }
                            ],
                            heap: [
                                { name: "String объект", val: '"C#"', addr: "0x0080c8" }
                            ]
                        }
                    }
                ]
            }
        ]
    },
    c: {
        name: "C",
        title: "Системный программист C",
        iconClass: "lang-icon-text",
        description: "Пишите быстрый системный код, работайте напрямую с указателями и адресами.",
        modules: [
            {
                id: 1,
                title: "Введение и синтаксис C",
                description: "Функция printf, переменные, адреса в памяти и файлы.",
                lessons: [
                    {
                        id: 1,
                        title: "1. Форматированный вывод printf()",
                        boilerplate: "#include <stdio.h>\n\nint main() {\n    // Выведите строку здесь\n    \n    return 0;\n}",
                        theory: `<h4>Вывод в языке C</h4>
                        <p>В языке C стандартный вывод осуществляется через функцию <code>printf()</code> из библиотеки <code>&lt;stdio.h&gt;</code>.</p>
                        <pre><code>printf("Привет, %s!", "Мир");</code></pre>`,
                        task: `Выведите фразу <code>"Hello, C!"</code> с помощью функции <code>printf()</code> в методе <code>main</code>.`,
                        validate: (code) => {
                            if (code.includes("printf") && code.includes("Hello, C!")) {
                                return { success: true, message: "Код на языке C выполнен! +100 XP" };
                            }
                            return { success: false, error: "Используйте printf(\"Hello, C!\");" };
                        },
                        memory: {
                            stack: [{ name: "main()", val: "Frame", addr: "0x7ffc01" }],
                            heap: [{ name: "константный массив char", val: '"Hello, C!"', addr: "0x0033aa" }]
                        }
                    },
                    {
                        id: 2,
                        title: "2. Переменные в языке C",
                        boilerplate: "#include <stdio.h>\n\nint main() {\n    // Объявите x и name здесь\n    \n    return 0;\n}",
                        theory: `<h4>Типы в C</h4>
                        <p>В языке C нет встроенного типа для строк (string). Строки представляют собой массивы символов:</p>
                        <pre><code>int age = 18;\nchar name[] = "Иван";</code></pre>`,
                        task: `Создайте целочисленную переменную <code>x</code> равную <code>42</code> и символьный массив <code>name[]</code> со значением <code>"C"</code>.`,
                        validate: (code) => {
                            const hasX = /int\s+x\s*=\s*42\s*;/.test(code);
                            const hasName = /char\s+name\s*\[\s*\]\s*=\s*(['"])C\1\s*;/.test(code);
                            if (hasX && hasName) {
                                return { success: true, message: "Переменные языка C созданы! +100 XP" };
                            }
                            return { success: false, error: "Напишите: int x = 42; и char name[] = \"C\";" };
                        },
                        memory: {
                            stack: [
                                { name: "int x", val: "42 (4 байта)", addr: "0x7ffc04" },
                                { name: "char name[2]", val: "['C', '\\0']", addr: "0x7ffc08" }
                            ],
                            heap: [
                                { name: "(Куча не используется)", val: "-", addr: "-" }
                            ]
                        }
                    }
                ]
            }
        ]
    },
    java: {
        name: "Java",
        title: "Java Enterprise Developer",
        iconClass: "fa-brands fa-java",
        description: "Изучите JVM, ООП концепции, JVM Memory Model и фреймворк Spring.",
        modules: [
            {
                id: 1,
                title: "Введение и синтаксис Java",
                description: "Классы, System.out.println, типы данных и OOP введение.",
                lessons: [
                    {
                        id: 1,
                        title: "1. Вывод в консоль System.out.println()",
                        boilerplate: "public class Main {\n    public static void main(String[] args) {\n        // Напишите вывод здесь\n    }\n}",
                        theory: `<h4>Вывод в Java</h4>
                        <p>В Java вывод в консоль осуществляется с помощью вызова:</p>
                        <pre><code>System.out.println("Hello, World!");</code></pre>`,
                        task: `Выведите фразу <code>"Hello, Java!"</code> используя метод <code>System.out.println()</code>.`,
                        validate: (code) => {
                            if (code.includes("System.out.println") && code.includes("Hello, Java!")) {
                                return { success: true, message: "Java-программа скомпилирована в байткод! +100 XP" };
                            }
                            return { success: false, error: "Убедитесь, что вы написали: System.out.println(\"Hello, Java!\");" };
                        },
                        memory: {
                            stack: [{ name: "main thread Stack", val: "main() Frame", addr: "0x7ffb01" }],
                            heap: [{ name: "java.lang.String", val: '"Hello, Java!"', addr: "0x0090ff" }]
                        }
                    },
                    {
                        id: 2,
                        title: "2. Примитивы и объекты в Java",
                        boilerplate: "public class Main {\n    public static void main(String[] args) {\n        // Объявите x и name здесь\n    }\n}",
                        theory: `<h4>Переменные в Java</h4>
                        <p>В Java типы делятся на примитивные (хранятся в стеке) и ссылочные (объекты в куче):</p>
                        <pre><code>int number = 10;\nString text = "Java";</code></pre>`,
                        task: `Создайте переменную <code>x</code> типа <code>int</code> со значением <code>42</code> и переменную <code>name</code> типа <code>String</code> со значением <code>"Java"</code>.`,
                        validate: (code) => {
                            const hasX = /int\s+x\s*=\s*42\s*;/.test(code);
                            const hasName = /String\s+name\s*=\s*(['"])Java\1\s*;/.test(code);
                            if (hasX && hasName) {
                                return { success: true, message: "Переменные Java созданы в памяти JVM! +100 XP" };
                            }
                            return { success: false, error: "Напишите: int x = 42; и String name = \"Java\";" };
                        },
                        memory: {
                            stack: [
                                { name: "int x (primitive)", val: "42", addr: "0x7ffb04" },
                                { name: "String name (reference)", val: "ref to 0x0091aa", addr: "0x7ffb08" }
                            ],
                            heap: [
                                { name: "java.lang.String (Pool)", val: '"Java"', addr: "0x0091aa" }
                            ]
                        }
                    }
                ]
            }
        ]
    }
};

// Generates remaining 98 skeletal lessons for each language to populate 10 modules
const modulesSchema = [
    { id: 1, title: "Модуль 1: Введение и базовый синтаксис", lessonsRange: [1, 10] },
    { id: 2, title: "Модуль 2: Управляющие конструкции и ветвления", lessonsRange: [11, 20] },
    { id: 3, title: "Модуль 3: Коллекции и структуры данных", lessonsRange: [21, 30] },
    { id: 4, title: "Модуль 4: Функциональное программирование / Методы", lessonsRange: [31, 40] },
    { id: 5, title: "Модуль 5: Работа с окружением и ошибками", lessonsRange: [41, 50] },
    { id: 6, title: "Модуль 6: Объектно-Ориентированное Программирование", lessonsRange: [51, 60] },
    { id: 7, title: "Модуль 7: Базы данных и SQL-интеграции", lessonsRange: [61, 70] },
    { id: 8, title: "Модуль 8: Продвинутые фишки и метапрограммирование", lessonsRange: [71, 80] },
    { id: 9, title: "Модуль 9: Асинхронность и параллельные вычисления", lessonsRange: [81, 90] },
    { id: 10, title: "Модуль 10: Архитектурные паттерны, Тесты и Docker", lessonsRange: [91, 100] }
];

// Populate schemas dynamically
Object.keys(languagesData).forEach(langKey => {
    const lang = languagesData[langKey];
    const originalMod1 = lang.modules[0];
    const originalLessons = originalMod1.lessons;
    
    // Clear and build modules strictly up to 10 modules, each having 10 lessons
    lang.modules = [];
    
    modulesSchema.forEach(schema => {
        const moduleLessons = [];
        for (let lId = schema.lessonsRange[0]; lId <= schema.lessonsRange[1]; lId++) {
            // Check if we already have the detailed lesson
            if (schema.id === 1 && lId <= originalLessons.length) {
                moduleLessons.push(originalLessons[lId - 1]);
            } else {
                // Generate skeleton lesson
                moduleLessons.push({
                    id: lId,
                    title: `${lId}. Тема урока для ${lang.name} (Урок №${lId})`,
                    boilerplate: `# Шаблон решения для ${lang.name}\n`,
                    theory: `<h4>Теория урока №${lId}</h4>
                    <p>Это заготовка для урока по теме №${lId} на языке ${lang.name}. Вы можете заменить это содержимое в файле <code>script.js</code>.</p>`,
                    task: `Напишите любой код на ${lang.name} длиной более 5 символов для сдачи задания к уроку №${lId}.`,
                    validate: (code) => {
                        if (code.trim().length > 5) {
                            return { success: true, message: `Задание урока №${lId} на ${lang.name} успешно принято! +100 XP` };
                        }
                        return { success: false, error: "Напишите код решения задачи!" };
                    },
                    memory: {
                        stack: [{ name: "регистр данных", val: "malloc()", addr: "0x7fffbc" }],
                        heap: [{ name: "свободная ячейка", val: "0x00", addr: "0x00a0f0" }]
                    }
                });
            }
        }
        
        lang.modules.push({
            id: schema.id,
            title: schema.title,
            description: `Модуль содержит уроки по теме с ${schema.lessonsRange[0]} по ${schema.lessonsRange[1]}`,
            lessons: moduleLessons
        });
    });
});

// 2. SEARCHABLE CHEAT SHEETS DATA PER LANGUAGE (Something of my own!)
const cheatSheets = {
    python: [
        { title: "Вывод print()", desc: "Печать данных на экран.", code: "print('Hello!')" },
        { title: "Списки (Lists)", desc: "Создание и добавление элементов.", code: "items = []\nitems.append('apple')" },
        { title: "Словари (Dicts)", desc: "Ключи и значения.", code: "user = {'name': 'Alex'}" }
    ],
    cpp: [
        { title: "Вывод std::cout", desc: "Поток вывода в консоль.", code: "std::cout << \"Hello!\" << std::endl;" },
        { title: "Указатели (Pointers)", desc: "Хранят адрес памяти объекта.", code: "int x = 10;\nint* ptr = &x;\nstd::cout << *ptr; // 10" },
        { title: "Вектор (std::vector)", desc: "Динамический массив STL.", code: "#include <vector>\nstd::vector<int> vec = {1, 2};\nvec.push_back(3);" }
    ],
    csharp: [
        { title: "Вывод Console.WriteLine", desc: "Выводит строку на экран.", code: "Console.WriteLine(\"Hello!\");" },
        { title: "Классы (Classes)", desc: "Определение структуры класса.", code: "public class Person {\n    public string Name { get; set; }\n}" },
        { title: "Коллекция List", desc: "Динамический список .NET.", code: "List<string> list = new List<string>();\nlist.Add(\"item\");" }
    ],
    c: [
        { title: "Вывод printf()", desc: "Форматированный вывод printf.", code: "printf(\"Число: %d\\n\", 42);" },
        { title: "Указатели в C", desc: "Адресная арифметика.", code: "int x = 5;\nint *p = &x;\n*p = 20; // x теперь 20" },
        { title: "Выделение памяти malloc", desc: "Ручное выделение памяти в куче.", code: "int* arr = (int*)malloc(5 * sizeof(int));\nfree(arr);" }
    ],
    java: [
        { title: "Вывод System.out.println", desc: "Вывод текста с переносом.", code: "System.out.println(\"Hello!\");" },
        { title: "Список ArrayList", desc: "Динамический массив в Java.", code: "ArrayList<String> list = new ArrayList<>();\nlist.add(\"Java\");" },
        { title: "Объявление класса", desc: "Объектная структура Java.", code: "public class Car {\n    private String model;\n    public Car(String model) { this.model = model; }\n}" }
    ]
};

// 3. MULTI-LANGUAGE TRIVIA QUIZ QUESTIONS (Something of my own!)
const quizData = [
    // Python
    { q: "Как называется встроенный менеджер пакетов в Python?", options: ["pip", "npm", "cargo", "maven"], correct: 0, feedback: "Правильно! Pip — стандартный менеджер пакетов для Python." },
    // C++
    { q: "Какой оператор используется для удаления памяти, выделенной через 'new' в C++?", options: ["free()", "delete", "clear", "remove"], correct: 1, feedback: "Верно! delete освобождает динамическую память в C++." },
    // C#
    { q: "Что такое LINQ в C#?", options: ["Библиотека шифрования", "Язык интегрированных запросов", "Инструмент компиляции", "Класс логирования"], correct: 1, feedback: "Правильно! Language Integrated Query используется для фильтрации данных." },
    // C
    { q: "Какая функция в языке C используется для ручного освобождения памяти?", options: ["malloc()", "release()", "free()", "clear()"], correct: 2, feedback: "Верно! free() возвращает память операционной системе." },
    // Java
    { q: "Какое расширение файлов содержит скомпилированный байткод Java?", options: [".java", ".jar", ".class", ".exe"], correct: 2, feedback: "Правильно! Компилятор javac создает файлы с расширением .class." }
];

// 4. MULTI-LANGUAGE STATE ENGINE
let state = {
    activeLanguage: "python",
    languages: {
        python: { completedLessons: [], xp: 0, level: 1, savedCode: {} },
        cpp: { completedLessons: [], xp: 0, level: 1, savedCode: {} },
        csharp: { completedLessons: [], xp: 0, level: 1, savedCode: {} },
        c: { completedLessons: [], xp: 0, level: 1, savedCode: {} },
        java: { completedLessons: [], xp: 0, level: 1, savedCode: {} }
    },
    streak: 1,
    lastActiveDate: null
};

// Load state
function loadState() {
    const saved = localStorage.getItem("devacademy_state");
    if (saved) {
        try {
            const parsed = JSON.parse(saved);
            // Support legacy states
            if (parsed.languages) {
                state = { ...state, ...parsed };
            } else {
                // If old format exists, migrate python data
                state.languages.python.completedLessons = parsed.completedLessons || [];
                state.languages.python.xp = parsed.userXP || 0;
                state.languages.python.level = parsed.userLevel || 1;
                state.languages.python.savedCode = parsed.savedCode || {};
                state.streak = parsed.streak || 1;
                state.lastActiveDate = parsed.lastActiveDate;
            }
        } catch (e) {
            console.error("Ошибка десериализации LocalStorage:", e);
        }
    }
    
    // Streak check
    const today = new Date().toDateString();
    if (state.lastActiveDate) {
        const lastDate = new Date(state.lastActiveDate);
        const diffTime = Math.abs(new Date(today) - lastDate);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        
        if (diffDays === 1) {
            state.streak += 1;
            state.lastActiveDate = today;
        } else if (diffDays > 1) {
            state.streak = 1;
            state.lastActiveDate = today;
        }
    } else {
        state.lastActiveDate = today;
    }
    saveState();
}

function saveState() {
    localStorage.setItem("devacademy_state", JSON.stringify(state));
}

// XP calculations
function getRankName(level, lang) {
    const langName = languagesData[lang].name;
    if (level < 10) return `Начинающий в ${langName}`;
    if (level < 25) return `${langName} Trainee`;
    if (level < 45) return `Junior ${langName} Developer`;
    if (level < 65) return `Strong Junior ${langName}`;
    if (level < 85) return `Middle ${langName} Developer`;
    if (level < 100) return `Lead ${langName} Architect`;
    return `Middle ${langName} Architect 🚀`;
}

// UI State Sync
function syncStateUI() {
    const langKey = state.activeLanguage;
    const langData = state.languages[langKey];
    
    const currentXPText = document.getElementById("current-xp");
    const nextLevelXPText = document.getElementById("next-level-xp");
    const xpProgressBar = document.getElementById("xp-progress-bar");
    const userLevelBadge = document.getElementById("user-level");
    const userRankText = document.getElementById("user-rank");
    const streakCount = document.getElementById("streak-count");
    
    const statsCompleted = document.getElementById("stats-completed-lessons");
    const statsXP = document.getElementById("stats-total-xp");
    const courseProgressFill = document.getElementById("course-progress-fill");
    const courseProgressPercent = document.getElementById("course-progress-percent");

    // XP calculation: 100 XP per level
    const xpNeededForLevel = 100;
    const currentLevel = Math.floor(langData.xp / 100) + 1;
    const xpInCurrentLevel = langData.xp % xpNeededForLevel;
    const progressPercent = (xpInCurrentLevel / xpNeededForLevel) * 100;

    currentXPText.innerText = langData.xp;
    nextLevelXPText.innerText = (currentLevel * xpNeededForLevel);
    xpProgressBar.style.width = `${progressPercent}%`;
    userLevelBadge.innerText = currentLevel;
    userRankText.innerText = getRankName(currentLevel, langKey);
    streakCount.innerText = state.streak;

    // Stats
    statsCompleted.innerText = `${langData.completedLessons.length} / 100`;
    statsXP.innerText = `${langData.xp} XP`;
    const coursePercent = Math.min(100, Math.round((langData.completedLessons.length / 100) * 100));
    courseProgressFill.style.width = `${coursePercent}%`;
    courseProgressPercent.innerText = `${coursePercent}%`;

    // Title headers
    document.getElementById("dashboard-main-title").innerText = `Карта обучения ${languagesData[langKey].name}`;
    document.getElementById("dashboard-sub-title").innerText = `Пройдите 100 интерактивных уроков для освоения языка ${languagesData[langKey].name} на уровне Middle.`;
}

function isLessonUnlocked(lessonId) {
    if (lessonId === 1) return true;
    const langKey = state.activeLanguage;
    const completed = state.languages[langKey].completedLessons;
    return completed.includes(lessonId - 1);
}

// 5. RENDERING CORE DASHBOARD
let currentLesson = null;

function renderDashboard() {
    const container = document.getElementById("modules-list");
    container.innerHTML = "";

    const langKey = state.activeLanguage;
    const langObject = languagesData[langKey];
    const completedList = state.languages[langKey].completedLessons;

    langObject.modules.forEach((module) => {
        const completedInModule = module.lessons.filter(l => completedList.includes(l.id)).length;
        const isModuleUnlocked = isLessonUnlocked(module.lessons[0].id);

        const card = document.createElement("div");
        card.className = `module-card ${isModuleUnlocked ? 'unlocked' : 'locked'}`;
        card.id = `module-card-${module.id}`;

        card.innerHTML = `
            <div class="module-header" onclick="toggleModule(${module.id})">
                <div class="module-header-left">
                    <div class="module-badge">${module.id}</div>
                    <div class="module-info">
                        <h2>${module.title}</h2>
                        <div class="module-meta-info">
                            <span><i class="fa-solid fa-graduation-cap"></i> ${completedInModule} / ${module.lessons.length} Пройдено</span>
                            <span><i class="fa-solid fa-book-open"></i> Уроки ${module.lessons[0].id} - ${module.lessons[module.lessons.length - 1].id}</span>
                        </div>
                    </div>
                </div>
                <div class="module-header-right">
                    ${!isModuleUnlocked ? '<i class="fa-solid fa-lock" style="color: var(--text-muted);"></i>' : ''}
                    <i class="fa-solid fa-chevron-down chevron-icon"></i>
                </div>
            </div>
            <div class="module-lessons-panel" id="lessons-panel-${module.id}">
                <div class="lessons-list"></div>
            </div>
        `;

        const lessonsContainer = card.querySelector(".lessons-list");
        module.lessons.forEach(lesson => {
            const isCompleted = completedList.includes(lesson.id);
            const isUnlocked = isLessonUnlocked(lesson.id);
            let stateClass = "locked";
            let icon = '<i class="fa-solid fa-lock lesson-status-icon"></i>';

            if (isCompleted) {
                stateClass = "completed";
                icon = '<i class="fa-solid fa-circle-check lesson-status-icon"></i>';
            } else if (isUnlocked) {
                stateClass = "unlocked";
                icon = '<i class="fa-solid fa-circle-play lesson-status-icon"></i>';
            }

            const item = document.createElement("div");
            item.className = `lesson-item ${stateClass}`;
            if (isUnlocked) {
                item.onclick = () => openLesson(lesson.id);
            }

            item.innerHTML = `
                <div class="lesson-item-left">
                    <div class="lesson-num">${lesson.id}</div>
                    <span class="lesson-title">${lesson.title.split('. ')[1] || lesson.title}</span>
                </div>
                ${icon}
            `;
            lessonsContainer.appendChild(item);
        });

        container.appendChild(card);
    });
}

function toggleModule(id) {
    const card = document.getElementById(`module-card-${id}`);
    if (card.classList.contains("locked")) return;

    const panel = document.getElementById(`lessons-panel-${id}`);
    const isExpanded = card.classList.contains("expanded");

    document.querySelectorAll(".module-card").forEach(c => {
        if (c.id !== `module-card-${id}`) {
            c.classList.remove("expanded");
            const p = c.querySelector(".module-lessons-panel");
            if (p) p.style.maxHeight = null;
        }
    });

    if (isExpanded) {
        card.classList.remove("expanded");
        panel.style.maxHeight = null;
    } else {
        card.classList.add("expanded");
        panel.style.maxHeight = panel.scrollHeight + "px";
    }
}

// 6. LANGUAGE SWITCHER TRIGGERS
const switcherButtons = document.querySelectorAll("#language-switcher .lang-tab");
switcherButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        switcherButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        
        const lang = btn.getAttribute("data-lang");
        state.activeLanguage = lang;
        saveState();
        
        // Return to Dashboard View on language switch
        currentLesson = null;
        document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
        document.getElementById("dashboard-screen").classList.add("active");
        
        syncStateUI();
        renderDashboard();
    });
});


// 7. LINE NUMBERS EDITOR SYNC
const codeInput = document.getElementById("code-input");
const lineNumbers = document.getElementById("editor-line-numbers");

function updateLineNumbers() {
    const lines = codeInput.value.split('\n');
    lineNumbers.innerHTML = Array(lines.length).fill(0).map((_, i) => `<div>${i + 1}</div>`).join('');
}

codeInput.addEventListener('scroll', () => {
    lineNumbers.scrollTop = codeInput.scrollTop;
});

codeInput.addEventListener('input', () => {
    updateLineNumbers();
    if (currentLesson) {
        const langKey = state.activeLanguage;
        state.languages[langKey].savedCode[currentLesson.id] = codeInput.value;
        saveState();
    }
});

// Mobile tabs switching
const tabButtons = document.querySelectorAll(".tab-button");
const theoryPane = document.getElementById("pane-theory");
const editorPane = document.getElementById("pane-editor");

tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        tabButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        
        const target = btn.getAttribute("data-tab");
        if (target === "theory") {
            theoryPane.classList.add("active");
            editorPane.classList.remove("active");
        } else {
            theoryPane.classList.remove("active");
            editorPane.classList.add("active");
            setTimeout(updateLineNumbers, 50);
        }
    });
});


// 8. INTERACTIVE MEMORY VISUALIZER (Something cool!)
function updateMemoryVisualizer(lesson) {
    const stackCells = document.getElementById("stack-cells");
    const heapCells = document.getElementById("heap-cells");

    stackCells.innerHTML = "";
    heapCells.innerHTML = "";

    if (lesson.memory && lesson.memory.stack && lesson.memory.stack.length > 0) {
        lesson.memory.stack.forEach(cell => {
            const el = document.createElement("div");
            el.className = `memory-cell ${cell.val.includes("ref") || cell.val.includes("указатель") ? 'pointer' : ''}`;
            el.innerHTML = `
                <div>
                    <span class="memory-cell-name">${cell.name}</span>: 
                    <span class="memory-cell-val">${cell.val}</span>
                </div>
                <span class="memory-cell-address">${cell.addr}</span>
            `;
            stackCells.appendChild(el);
        });
    } else {
        stackCells.innerHTML = `<div class="memory-empty-state">Нет локальных переменных в стеке</div>`;
    }

    if (lesson.memory && lesson.memory.heap && lesson.memory.heap.length > 0) {
        lesson.memory.heap.forEach(cell => {
            const el = document.createElement("div");
            el.className = "memory-cell";
            el.innerHTML = `
                <div>
                    <span class="memory-cell-name">${cell.name}</span>: 
                    <span class="memory-cell-val">${cell.val}</span>
                </div>
                <span class="memory-cell-address">${cell.addr}</span>
            `;
            heapCells.appendChild(el);
        });
    } else {
        heapCells.innerHTML = `<div class="memory-empty-state">Куча пуста (Heap is empty)</div>`;
    }
}


// 9. AI CODING TUTOR CHAT SIMULATOR (Something cool!)
const aiChatLogs = document.getElementById("ai-chat-logs");
const aiChatOptions = document.getElementById("ai-chat-options");

const aiTutorReplies = {
    python: {
        1: {
            "Как работает print()?": "Функция print() принимает аргументы и передает их в поток вывода консоли. В конце она автоматически добавляет символ новой строки \\n.",
            "Какая здесь ошибка?": "Частая ошибка — забыть закрыть кавычки или круглые скобки, либо написать Print() с заглавной буквы.",
            "Дай подсказку": "Просто напишите: print(\"Hello, PyAcademy!\")"
        },
        2: {
            "Что такое динамическая типизация?": "В Python вам не нужно писать тип данных. Переводчик автоматически понимает, что x = 42 — это int, а name = 'Python' — это str.",
            "Какая здесь ошибка?": "Убедитесь, что имена переменных написаны ровно как в задании (x и name) в нижнем регистре.",
            "Дай подсказку": "Напишите две строчки:\nx = 42\nname = \"Python\""
        }
    },
    cpp: {
        1: {
            "Как работает std::cout?": "cout означает 'character output'. Это объект класса ostream. Символ << посылает данные строки в поток вывода.",
            "Какая здесь ошибка?": "Убедитесь, что подключен заголовок #include <iostream>, и в конце инструкции стоит точка с запятой (;).",
            "Дай подсказку": "Внутри main напишите: std::cout << \"Hello, C++!\";"
        },
        2: {
            "Почему у name тип std::string?": "В C++ строки не являются базовым типом. Это объект стандартной библиотеки std::string, определенный в заголовке <string>.",
            "Какая здесь ошибка?": "Убедитесь, что вы объявили int x = 42; и std::string name = \"C++\"; с точками с запятой.",
            "Дай подсказку": "Код должен быть:\nint x = 42;\nstd::string name = \"C++\";"
        }
    },
    csharp: {
        1: {
            "В чем разница с Python?": "В C# код обязательно должен находиться внутри класса и метода. Console.WriteLine — это вызов статического метода класса Console из пространства System.",
            "Какая здесь ошибка?": "Убедитесь, что вы написали букву W и L в верхнем регистре (WriteLine). И не забудьте точку с запятой (;).",
            "Дай подсказку": "Напишите внутри Main:\nConsole.WriteLine(\"Hello, C#!\");"
        },
        2: {
            "Что такое ссылочные типы?": "Переменная 'string' в C# — это ссылочный тип. Сам текст хранится в Куче, а в Стек помещается ссылка на ячейку.",
            "Какая здесь ошибка?": "Проверьте типы: int для x и string для name. Строки пишутся в двойных кавычках.",
            "Дай подсказку": "Напишите:\nint x = 42;\nstring name = \"C#\";"
        }
    },
    c: {
        1: {
            "Как устроен printf()?": "printf — это функция форматированного вывода из stdio.h. Она принимает строку формата и аргументы.",
            "Какая здесь ошибка?": "Всегда пишите директиву #include <stdio.h>, чтобы компилятор знал объявление printf.",
            "Дай подсказку": "Напишите:\nprintf(\"Hello, C!\");"
        },
        2: {
            "Как объявить строку в C?": "В языке C нет типа string. Строка создается как массив символов (массив char), заканчивающийся нулевым байтом '\\0'.",
            "Какая здесь ошибка?": "Не забудьте квадратные скобки [] у переменной char name[] = \"C\";",
            "Дай подсказку": "Напишите:\nint x = 42;\nchar name[] = \"C\";"
        }
    },
    java: {
        1: {
            "Что такое System.out?": "System — это класс, out — статический поток вывода типа PrintStream, а println — его метод.",
            "Какая здесь ошибка?": "В Java все чувствительно к регистру. System пишется с заглавной буквы.",
            "Дай подсказку": "Напишите:\nSystem.out.println(\"Hello, Java!\");"
        },
        2: {
            "Что такое String в Java?": "String — это встроенный класс, объекты которого хранятся в специальном String Pool в куче JVM для экономии памяти.",
            "Какая здесь ошибка?": "String пишется с большой буквы. int x пишется с маленькой.",
            "Дай подсказку": "Напишите:\nint x = 42;\nString name = \"Java\";"
        }
    }
};

function setupAITutor(lessonId) {
    const langKey = state.activeLanguage;
    aiChatLogs.innerHTML = `<div class="ai-msg">Привет! Я твой персональный ИИ-ассистент по языку ${languagesData[langKey].name}. Задавай мне вопросы по Уроку №${lessonId}!</div>`;
    aiChatOptions.innerHTML = "";

    const replies = aiTutorReplies[langKey] && aiTutorReplies[langKey][lessonId];
    if (replies) {
        Object.keys(replies).forEach(question => {
            const btn = document.createElement("button");
            btn.className = "ai-opt-btn";
            btn.innerText = question;
            btn.onclick = () => askAITutor(question, replies[question]);
            aiChatOptions.appendChild(btn);
        });
    } else {
        // Default options for skeleton lessons
        const defaults = {
            "Как выполнить задание?": "Напишите любое решение или комментарий длиной больше 5 символов и отправьте его на проверку.",
            "В чем разница в синтаксисе?": `Каждый язык имеет свои особенности: Python лаконичен, C/C++ требуют компиляции, Java/C# — объектно-ориентированные.`,
            "Дай готовую подсказку": "Просто напишите комментарий, например: # Задание выполнено"
        };
        Object.keys(defaults).forEach(question => {
            const btn = document.createElement("button");
            btn.className = "ai-opt-btn";
            btn.innerText = question;
            btn.onclick = () => askAITutor(question, defaults[question]);
            aiChatOptions.appendChild(btn);
        });
    }
}

function askAITutor(question, answer) {
    // Append User message
    const userBubble = document.createElement("div");
    userBubble.className = "user-msg";
    userBubble.innerText = question;
    aiChatLogs.appendChild(userBubble);
    aiChatLogs.scrollTop = aiChatLogs.scrollHeight;

    // Simulated typing delay
    setTimeout(() => {
        const aiBubble = document.createElement("div");
        aiBubble.className = "ai-msg";
        aiBubble.innerText = answer;
        aiChatLogs.appendChild(aiBubble);
        aiChatLogs.scrollTop = aiChatLogs.scrollHeight;
    }, 400);
}


// 10. OPENING A LESSON VIEW
function openLesson(lessonId) {
    const langKey = state.activeLanguage;
    const langObject = languagesData[langKey];
    
    let foundLesson = null;
    let foundModule = null;

    for (const mod of langObject.modules) {
        const les = mod.lessons.find(l => l.id === lessonId);
        if (les) {
            foundLesson = les;
            foundModule = mod;
            break;
        }
    }

    if (!foundLesson) return;
    currentLesson = foundLesson;

    // Toggle screen views
    document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
    document.getElementById("lesson-screen").classList.add("active");

    // Populate metadata
    document.getElementById("lesson-module-tag").innerText = foundModule.title;
    document.getElementById("lesson-header-title").innerText = foundLesson.title;
    document.getElementById("lesson-theory-text").innerHTML = foundLesson.theory;
    document.getElementById("lesson-task-text").innerHTML = foundLesson.task;

    // File name tag formatting
    const fileTabs = {
        python: { name: "solution.py", icon: "fa-brands fa-python", color: "#38bdf8" },
        cpp: { name: "solution.cpp", icon: "fa-solid fa-code", color: "#60a5fa" },
        csharp: { name: "Solution.cs", icon: "fa-solid fa-code", color: "#c084fc" },
        c: { name: "solution.c", icon: "fa-solid fa-code", color: "#94a3b8" },
        java: { name: "Main.java", icon: "fa-brands fa-java", color: "#fb923c" }
    };
    const currentTabDetails = fileTabs[langKey];
    const filenameTab = document.getElementById("editor-filename-tab");
    filenameTab.innerHTML = `<i class="${currentTabDetails.icon}" style="color: ${currentTabDetails.color}"></i> ${currentTabDetails.name}`;

    // Load saved code
    const savedCode = state.languages[langKey].savedCode[foundLesson.id];
    codeInput.value = savedCode !== undefined ? savedCode : foundLesson.boilerplate;

    // Clear console output
    const consoleOutput = document.getElementById("console-output");
    consoleOutput.innerHTML = '<span class="console-placeholder">Ожидание запуска кода... Нажмите "Проверить решение" для тестирования вашего решения.</span>';

    // Update lines layout
    setTimeout(updateLineNumbers, 50);

    // Setup interactive widgets
    setupAITutor(lessonId);
    updateMemoryVisualizer(foundLesson);

    // Update navigation buttons
    updateLessonNavigationButtons(lessonId);

    // If mobile width, reset active tab to theory pane
    if (window.innerWidth < 768) {
        tabButtons[0].click();
    }
}

function updateLessonNavigationButtons(lessonId) {
    const prevBtn = document.getElementById("btn-prev-lesson");
    const nextBtn = document.getElementById("btn-next-lesson");

    if (lessonId === 1) {
        prevBtn.disabled = true;
        prevBtn.style.opacity = 0.5;
    } else {
        prevBtn.disabled = false;
        prevBtn.style.opacity = 1;
        prevBtn.onclick = () => openLesson(lessonId - 1);
    }

    if (lessonId >= 100 || !isLessonUnlocked(lessonId + 1)) {
        nextBtn.disabled = true;
        nextBtn.style.opacity = 0.5;
    } else {
        nextBtn.disabled = false;
        nextBtn.style.opacity = 1;
        nextBtn.onclick = () => openLesson(lessonId + 1);
    }
}


// 11. TESTING & VALIDATION TRIGGER
const btnRunVerify = document.getElementById("btn-run-verify");
const consoleOutput = document.getElementById("console-output");

btnRunVerify.addEventListener("click", () => {
    if (!currentLesson) return;

    const userCode = codeInput.value;
    const langKey = state.activeLanguage;

    consoleOutput.innerHTML = `<div class="console-log info">> Запуск компилятора/интерпретатора ${languagesData[langKey].name}...</div>`;
    consoleOutput.innerHTML += `<div class="console-log info">> Проверка тестов к уроку: ${currentLesson.title}</div>`;

    setTimeout(() => {
        const result = currentLesson.validate(userCode);

        if (result.success) {
            consoleOutput.innerHTML += `<div class="console-log success"><i class="fa-solid fa-check"></i> ${result.message}</div>`;
            
            const langData = state.languages[langKey];
            if (!langData.completedLessons.includes(currentLesson.id)) {
                langData.completedLessons.push(currentLesson.id);
                
                const oldLevel = Math.floor(langData.xp / 100) + 1;
                langData.xp += 100;
                const newLevel = Math.floor(langData.xp / 100) + 1;
                
                saveState();
                syncStateUI();

                if (newLevel > oldLevel) {
                    showLevelUpModal(newLevel);
                    triggerConfetti();
                }
            }
            updateLessonNavigationButtons(currentLesson.id);
        } else {
            consoleOutput.innerHTML += `<div class="console-log error"><i class="fa-solid fa-triangle-exclamation"></i> Тест провален: ${result.error}</div>`;
        }
        consoleOutput.scrollTop = consoleOutput.scrollHeight;
    }, 600);
});

// Reset code
document.getElementById("btn-reset-code").addEventListener("click", () => {
    if (currentLesson && confirm("Сбросить написанный код?")) {
        const langKey = state.activeLanguage;
        codeInput.value = currentLesson.boilerplate;
        state.languages[langKey].savedCode[currentLesson.id] = currentLesson.boilerplate;
        saveState();
        updateLineNumbers();
    }
});

// Clear console
document.getElementById("btn-clear-console").addEventListener("click", () => {
    consoleOutput.innerHTML = '<span class="console-placeholder">Консоль очищена.</span>';
});

// Back to map button
document.getElementById("btn-back-dashboard").addEventListener("click", () => {
    currentLesson = null;
    document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
    document.getElementById("dashboard-screen").classList.add("active");
    renderDashboard();
});

// Logo button
document.getElementById("btn-logo").addEventListener("click", () => {
    currentLesson = null;
    document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
    document.getElementById("dashboard-screen").classList.add("active");
    renderDashboard();
});


// 12. MULTI-LANGUAGE SEARCHABLE CHEAT SHEETS
const cheatSheetDrawer = document.getElementById("cheat-sheet-drawer");
const btnToggleCheat = document.getElementById("btn-toggle-cheat");
const btnCloseCheat = document.getElementById("btn-close-cheat");
const cheatSearch = document.getElementById("cheat-search");
const cheatContentList = document.getElementById("cheat-content-list");

function renderCheatSheet(filter = "") {
    const langKey = state.activeLanguage;
    document.getElementById("cheat-language-name").innerText = languagesData[langKey].name;
    
    cheatContentList.innerHTML = "";
    
    const items = cheatSheets[langKey] || [];
    const filtered = items.filter(item => 
        item.title.toLowerCase().includes(filter.toLowerCase()) || 
        item.desc.toLowerCase().includes(filter.toLowerCase())
    );

    if (filtered.length === 0) {
        cheatContentList.innerHTML = `<p style="color: var(--text-muted); text-align: center; margin-top: 2rem;">Ничего не найдено...</p>`;
        return;
    }

    filtered.forEach(item => {
        const card = document.createElement("div");
        card.className = "cheat-card";
        card.innerHTML = `
            <h4>${item.title}</h4>
            <p>${item.desc}</p>
            <pre><code>${item.code}</code></pre>
        `;
        cheatContentList.appendChild(card);
    });
}

btnToggleCheat.addEventListener("click", () => {
    cheatSheetDrawer.classList.toggle("open");
    renderCheatSheet();
});

btnCloseCheat.addEventListener("click", () => {
    cheatSheetDrawer.classList.remove("open");
});

cheatSearch.addEventListener("input", (e) => {
    renderCheatSheet(e.target.value);
});


// 13. TRIVIA MINI-QUIZ
let activeQuizIndex = 0;

function renderQuiz() {
    const questionEl = document.getElementById("quiz-question");
    const optionsContainer = document.getElementById("quiz-options");
    const feedbackEl = document.getElementById("quiz-feedback");

    feedbackEl.className = "quiz-feedback hidden";
    optionsContainer.innerHTML = "";

    activeQuizIndex = Math.floor(Math.random() * quizData.length);
    const quiz = quizData[activeQuizIndex];

    questionEl.innerText = quiz.q;

    quiz.options.forEach((opt, idx) => {
        const btn = document.createElement("button");
        btn.className = "quiz-option-btn";
        btn.innerText = opt;
        btn.onclick = () => selectQuizOption(idx);
        optionsContainer.appendChild(btn);
    });
}

function selectQuizOption(selectedIdx) {
    const quiz = quizData[activeQuizIndex];
    const buttons = document.querySelectorAll(".quiz-option-btn");
    const feedbackEl = document.getElementById("quiz-feedback");

    buttons.forEach(btn => btn.disabled = true);

    const langKey = state.activeLanguage;
    const langData = state.languages[langKey];

    if (selectedIdx === quiz.correct) {
        buttons[selectedIdx].classList.add("correct");
        feedbackEl.className = "quiz-feedback success";
        feedbackEl.innerHTML = `<i class="fa-solid fa-circle-check"></i> ${quiz.feedback}`;
        
        // Award quiz XP
        langData.xp += 50;
        const currentLevel = Math.floor(langData.xp / 100) + 1;
        
        saveState();
        syncStateUI();

        if (currentLevel > langData.level) {
            langData.level = currentLevel;
            showLevelUpModal(currentLevel);
            triggerConfetti();
        }
    } else {
        buttons[selectedIdx].classList.add("incorrect");
        buttons[quiz.correct].classList.add("correct");
        feedbackEl.className = "quiz-feedback error";
        feedbackEl.innerHTML = `<i class="fa-solid fa-circle-xmark"></i> Неверно. Правильный ответ: ${quiz.options[quiz.correct]}`;
    }

    feedbackEl.classList.remove("hidden");
    setTimeout(renderQuiz, 6000);
}


// 14. LEVEL UP MODALS
const levelUpModal = document.getElementById("levelup-modal");
const btnCloseLevelUp = document.getElementById("btn-close-levelup");

function showLevelUpModal(level) {
    const langKey = state.activeLanguage;
    document.getElementById("modal-level-val").innerText = level;
    document.getElementById("modal-rank-val").innerText = getRankName(level, langKey);
    levelUpModal.classList.add("open");
}

btnCloseLevelUp.addEventListener("click", () => {
    levelUpModal.classList.remove("open");
});


// 15. CONFETTI GENERATOR
const canvas = document.getElementById("confetti-canvas");
const ctx = canvas.getContext("2d");
let confettiParticles = [];
let animationFrameId = null;

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas();

class Confetti {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * -canvas.height - 20;
        this.size = Math.random() * 8 + 6;
        this.speedY = Math.random() * 4 + 4;
        this.speedX = Math.random() * 4 - 2;
        this.rotation = Math.random() * 360;
        this.rotationSpeed = Math.random() * 4 - 2;
        this.color = `hsl(${Math.random() * 360}, 80%, 60%)`;
    }

    update() {
        this.y += this.speedY;
        this.x += this.speedX;
        this.rotation += this.rotationSpeed;
    }

    draw() {
        ctx.save();
        ctx.translate(this.x + this.size / 2, this.y + this.size / 2);
        ctx.rotate((this.rotation * Math.PI) / 180);
        ctx.fillStyle = this.color;
        ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size);
        ctx.restore();
    }
}

function triggerConfetti() {
    confettiParticles = [];
    for (let i = 0; i < 150; i++) {
        confettiParticles.push(new Confetti());
    }
    
    if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
    }
    animateConfetti();
}

function animateConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    let activeParticles = false;
    confettiParticles.forEach(p => {
        p.update();
        p.draw();
        if (p.y < canvas.height) {
            activeParticles = true;
        }
    });

    if (activeParticles) {
        animationFrameId = requestAnimationFrame(animateConfetti);
    } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
}


// 16. INITIALIZATION
window.addEventListener("DOMContentLoaded", () => {
    loadState();
    syncStateUI();
    renderDashboard();
    renderQuiz();
    
    // Set active language tab styling on start
    switcherButtons.forEach(btn => {
        if (btn.getAttribute("data-lang") === state.activeLanguage) {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    });
});
