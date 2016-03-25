export interface Score {
    name: string;
    id: string;
    value: number;
    remainder: number;
}

export class ScoreContainer {
    points: number;

    inc(s: Score): void {
        if (this.points > s.value) {
            this.points -= ++s.value;
        } else if (this.points > 0) {
            if (s.remainder++ == s.value) {
                s.remainder = 0;
                s.value++;
            }
        }
    }

    dec(s: Score): void {
        if (s.remainder > 0) {
            s.remainder--;
            this.points++;
        } else if (s.value > 0) {
            this.points += s.value--;
        }
    }
}