import {CardOrganizer } from "./cardorganaizer";
import { Card } from "./Card";

export class newRecentMistakesFirstSorter implements CardOrganizer {

    organize(cards: Card[]): Card[] {
        const incorrect: Card[] = [];
        const correct: Card[] = [];

        for (const card of cards) {
            if (!card.wasCorrect()) {
                incorrect.push(card);
            } else {
                correct.push(card);
            }
        }

        return [...incorrect, ...correct];
    }
}
