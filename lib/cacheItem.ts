import { QueryCache } from './cacheController';

export class CacheItem {
    private controller: QueryCache;
    private _endOfLife: number;

    constructor(controller: QueryCache, lifespan: number) {
        this.controller = controller;
        // inherit the date now from the create hash function to avoid Date.now call twice
        this._endOfLife = lifespan + Date.now();
    }

    public hasExpired(comparisonDate: number): Boolean {
        if(this._endOfLife <= comparisonDate) {
            return true;
        } else {
            return false;
        }
    }

    public get endOfLife(): number {
        return this._endOfLife;
    }
}