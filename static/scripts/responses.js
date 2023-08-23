function getBotResponse(input) {
    if (input == "hello" || input == "hi") {
        return "Hello there!";
    } else if (input == "bye") {
        return "Bye. I hope i was helpful";
    } else {
        return "Try asking something else!";
    }
}