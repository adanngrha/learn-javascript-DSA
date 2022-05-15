function countdown(n) {
    const arr = countdown(n - 1);
    return n <= 0 ? [] : arr.unshift(n) ;
}