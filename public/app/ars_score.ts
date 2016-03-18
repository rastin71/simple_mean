export interface ScoreContainer {
    dec(val: number): boolean;
    dec_point(): boolean;
    inc(val: number): void;
    inc_point(): void;
}

export class Score {
    pref: ScoreContainer;
    name: string;
    id: string;
    value: number;
    remainder: number;

    constructor(name: string, id: string, val: number, pref: ScoreContainer) {
        this.name = name;
        this.id = id;
        this.value = val;
        this.remainder = 0;
        this.pref = pref;
    }

    inc(): void {
        if (this.pref.dec(this.value + 1)) this.value++;
        else if (this.pref.dec_point()) this.remainder++;
    }
    dec(): void {
        if (this.remainder > 0) {
            this.pref.inc_point();
            this.remainder--;
        }
        else if (this.value > 0) {
            this.pref.inc(this.value--);
        }
    }
}

export class Skill extends Score {
    constructor(name: string, id: string, val: number, pref: ScoreContainer) {
        super(name, id, val, pref);
    }
    delete() {
        this.pref.delete(this);
    }
}