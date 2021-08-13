const COLOR_KEY = 'COLOR_KEY'
export const localstored = {
    get() {
        return JSON.parse(localStorage.getItem(COLOR_KEY));
    },
    set(color) {
        localStorage.setItem(COLOR_KEY, JSON.stringify(color));
    }
}