export interface Instrument {
    issuer: string;
    price: number;
    currency: string;
    type: "Bond" | "Equity";
}

export interface Bond extends Instrument {
    yield: number;
    tenor: string;
}

export interface Equity extends Instrument {
    shares: number;
    exchange: string;
}

export const isBond = (instrument: Instrument): instrument is Bond => instrument.type === "Bond";
export const isEquity = (instrument: Instrument): instrument is Equity => instrument.type === "Equity";
