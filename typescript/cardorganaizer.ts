import { Card } from "./Card";

export interface CardOrganizer {
    organize(cards: Card[]): Card[];
}