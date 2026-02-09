export class Card {
    private correctValue: boolean;

    constructor(correctValue: boolean) {
        this.correctValue = correctValue;
    }

    wasCorrect(): boolean {
        return this.correctValue;
    }
}