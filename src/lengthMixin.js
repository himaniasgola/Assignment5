export const lengthMixin = {
    computed: {
        lengthText() {
            return this.secondText + ' (' + this.secondText.length + ')';
        }
    }
};