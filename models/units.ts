/**
 * Units of measure.
*/
export interface Units { units: string; value: number };

// Volume

export class microLiters implements Units { units: "µl"; value: number };
export class milliLiters implements Units { units: "ml"; value: number };
export class deciLiters implements Units { units: "dl"; value: number };
export class Liters implements Units { units: "l"; value: number };
export class kiloLiters implements Units { units: "kl"; value: number };

export type VolumeType = milliLiters | Liters;
export function Volume(expression : string) : VolumeType { 
    const unitsToVol = {
        µL: microliters,
        ml: milliLiters,
        dL: deciliters,
        L : liters,
        kL: kiloliters
    }
    const [value, units] = expression.split(" ").map(field => field.trim());
    const selectedVolType = unitsToVol[units];
    if( selectedVolType ) selectedVolType.value = value;
    return selectedVolType;
}

// Temperature
export class DegreesC implements Units { units: "C"; value: number };
export class DegreesK implements Units { units: "K"; value: number };
export class DegreesF implements Units { units: "F"; value: number };
export type Temperature = DegreesC | DegreesK | DegressF

/**
 * Expressions for use of units
 */
//Volume
export type VolumeExpression = `${number}${'µL' | 'mL' | 'dL' | 'L' | 'kL'}`;
export type VolumeExpression_ul = `${number}ul`;
export type VolumeExpression_ml = `${number}ml`;
export type VolumeExpression_dl = `${number}dl`;
export type VolumeExpression_l = `${number}l`;
export type VolumeExpression_kl = `${number}kl`;

// Density
export type CellDensityExpression = number;

// Temperature
export type TemperatureExpression = `${number}${'C' | 'K' | 'F'}`;

// pH
export type pHExpression = number;

// Percent
export type pctExpression = number | `${number}%`;
