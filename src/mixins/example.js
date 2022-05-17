/**
 * Why this is necessary:
 * Basically if you have to use a function that changes a state (variable) in a component, you
 * and that will happen too often, you will have to define a mixin that will be used in all components.
 * So you need to define everything here just once, and import the mixin in all components that need it.
*/

export default {
    data: () => ({
        counter: 0
    }),
    methods: {
        increment() {
            this.counter++;
        }
    }
}